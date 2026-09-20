import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface NeuralCoreProps {
  className?: string;
  activeMode?: 'brain' | 'network' | 'lattice';
}

export const NeuralCore: React.FC<NeuralCoreProps> = ({ className = '', activeMode = 'brain' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMode, setCurrentMode] = useState<'brain' | 'network' | 'lattice'>(activeMode);
  const [fps, setFps] = useState<number>(60);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    if (activeMode) {
      setCurrentMode(activeMode);
    }
  }, [activeMode]);

  useEffect(() => {
    // Check user reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    const container = containerRef.current;
    if (!container) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070a, 0.025);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Count (adaptive based on screen width)
    const particleCount = window.innerWidth < 768 ? 900 : 2200;
    
    // Arrays for geometries & positions
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Color definitions (Electric cyan, Ice blue, Muted slate)
    const cyanColor = new THREE.Color(0x00f0ff);
    const blueColor = new THREE.Color(0x38bdf8);
    const slateColor = new THREE.Color(0x64748b);
    const whiteColor = new THREE.Color(0xffffff);

    // Generate Shape 1: Brain-like Dual Hemisphere Geometry
    const generateBrainPositions = () => {
      const pos = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        
        // Hemisphere separation
        const hemisphere = Math.random() > 0.5 ? 1 : -1;
        const r = 7.5 + Math.sin(theta * 3) * 1.2 + Math.cos(phi * 4) * 0.8;

        const x = r * Math.sin(phi) * Math.cos(theta) * 0.9 + (hemisphere * 1.2);
        const y = r * Math.sin(phi) * Math.sin(theta) * 0.85;
        const z = r * Math.cos(phi) * 1.1;

        pos[i3] = x;
        pos[i3 + 1] = y;
        pos[i3 + 2] = z;
      }
      return pos;
    };

    // Generate Shape 2: Multi-layer Neural Network (Input, Latent, Output manifolds)
    const generateNetworkPositions = () => {
      const pos = new Float32Array(particleCount * 3);
      const layers = 5;
      const layerSpacing = 5.0;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const layerIdx = Math.floor((i / particleCount) * layers);
        const layerX = (layerIdx - (layers - 1) / 2) * layerSpacing;
        
        // Nodes spread in Y and Z
        const radius = 6.5 + Math.sin(layerIdx * 1.5) * 1.5;
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.sqrt(Math.random()) * radius;

        pos[i3] = layerX + (Math.random() - 0.5) * 0.8;
        pos[i3 + 1] = Math.cos(angle) * dist;
        pos[i3 + 2] = Math.sin(angle) * dist;
      }
      return pos;
    };

    // Generate Shape 3: Abstract Computational Hyper-Lattice / Manifold
    const generateLatticePositions = () => {
      const pos = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const u = (Math.random() - 0.5) * 16;
        const v = (Math.random() - 0.5) * 16;
        const w = Math.sin(u * 0.4) * Math.cos(v * 0.4) * 4.5;

        pos[i3] = u;
        pos[i3 + 1] = v * 0.8;
        pos[i3 + 2] = w;
      }
      return pos;
    };

    const brainCoords = generateBrainPositions();
    const networkCoords = generateNetworkPositions();
    const latticeCoords = generateLatticePositions();

    // Initial position assignment
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = brainCoords[i];
      targetPositions[i] = brainCoords[i];
    }

    // Color & Size assignment
    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let pColor = slateColor;
      if (rand > 0.85) pColor = whiteColor;
      else if (rand > 0.5) pColor = cyanColor;
      else if (rand > 0.25) pColor = blueColor;

      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;

      sizes[i] = Math.random() * 2.2 + 0.8;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom Particle Shader Material for soft high-tech glow
    const particleTexture = (() => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(0,240,255,0.8)');
      grad.addColorStop(0.7, 'rgba(56,189,248,0.2)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    })();

    const material = new THREE.PointsMaterial({
      size: 0.65,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.85
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Synaptic Connection Lines
    const maxConnections = 140;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });

    const synapticLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(synapticLines);

    // Mouse interaction tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 1.5;
      mouse.targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // FPS tracking
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Select target based on mode
      let activeCoords = brainCoords;
      if (currentMode === 'network') activeCoords = networkCoords;
      else if (currentMode === 'lattice') activeCoords = latticeCoords;

      // Morphing positions towards target
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const currentPos = posAttr.array as Float32Array;

      const morphSpeed = 0.04;
      for (let i = 0; i < particleCount * 3; i += 3) {
        // Apply subtle organic breathing movement
        const wave = Math.sin(elapsedTime * 1.5 + currentPos[i] * 0.2) * 0.08;
        
        currentPos[i] += (activeCoords[i] - currentPos[i]) * morphSpeed + (isReducedMotion ? 0 : wave);
        currentPos[i + 1] += (activeCoords[i + 1] - currentPos[i + 1]) * morphSpeed;
        currentPos[i + 2] += (activeCoords[i + 2] - currentPos[i + 2]) * morphSpeed;
      }
      posAttr.needsUpdate = true;

      // Rotate neural particle group
      if (!isReducedMotion) {
        particles.rotation.y = elapsedTime * 0.12 + mouse.x * 0.4;
        particles.rotation.x = Math.sin(elapsedTime * 0.08) * 0.1 - mouse.y * 0.3;
        synapticLines.rotation.copy(particles.rotation);
      }

      // Update Synaptic Line connections for nearest neighbors
      let lineIdx = 0;
      const step = Math.floor(particleCount / maxConnections);
      for (let i = 0; i < maxConnections; i++) {
        const p1 = i * step * 3;
        const p2 = ((i * step + 7) % particleCount) * 3;

        const dx = currentPos[p1] - currentPos[p2];
        const dy = currentPos[p1 + 1] - currentPos[p2 + 1];
        const dz = currentPos[p1 + 2] - currentPos[p2 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < 28) {
          linePositions[lineIdx] = currentPos[p1];
          linePositions[lineIdx + 1] = currentPos[p1 + 1];
          linePositions[lineIdx + 2] = currentPos[p1 + 2];

          linePositions[lineIdx + 3] = currentPos[p2];
          linePositions[lineIdx + 4] = currentPos[p2 + 1];
          linePositions[lineIdx + 5] = currentPos[p2 + 2];

          const alpha = 1.0 - Math.sqrt(distSq) / 5.3;
          lineColors[lineIdx] = 0.0;
          lineColors[lineIdx + 1] = 0.94 * alpha;
          lineColors[lineIdx + 2] = 1.0 * alpha;

          lineColors[lineIdx + 3] = 0.22 * alpha;
          lineColors[lineIdx + 4] = 0.74 * alpha;
          lineColors[lineIdx + 5] = 0.97 * alpha;

          lineIdx += 6;
        }
      }
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [currentMode, isReducedMotion]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Mode Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-lg glass-panel border border-cyan-500/20 z-20">
        <button
          onClick={() => setCurrentMode('brain')}
          className={`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${
            currentMode === 'brain'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          [ 01: BIOLOGICAL CORTEX ]
        </button>
        <button
          onClick={() => setCurrentMode('network')}
          className={`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${
            currentMode === 'network'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          [ 02: NEURAL NETWORK ]
        </button>
        <button
          onClick={() => setCurrentMode('lattice')}
          className={`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${
            currentMode === 'lattice'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          [ 03: COMPUTATIONAL GRAPH ]
        </button>
      </div>

      {/* Telemetry HUD Badge */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-400 glass-panel px-3 py-1.5 rounded border border-white/5 flex items-center gap-3 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300">GPU CORE:</span>
          <span>{fps} FPS</span>
        </div>
        <span className="text-slate-600">|</span>
        <div>
          <span className="text-slate-400">PARTICLES:</span> 2,200
        </div>
        <span className="text-slate-600">|</span>
        <div className="text-cyan-400 font-semibold uppercase">
          MODE: {currentMode}
        </div>
      </div>
    </div>
  );
};
