import React, { useState, useEffect } from 'react';
import { sound } from '../../lib/sound';
import { Eye, Layers, Brain, CheckCircle2, Play, RefreshCw, Cpu, Activity } from 'lucide-react';

interface MindNode {
  id: string;
  step: string;
  name: string;
  tagline: string;
  concept: string;
  mechanics: string;
  icon: typeof Eye;
}

export const TheMind: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const nodes: MindNode[] = [
    {
      id: 'perceive',
      step: '01',
      name: 'PERCEIVE',
      tagline: 'Sensory Ingestion & Signal Conversion',
      concept: '“Transform raw signals into structured information.”',
      mechanics: 'Extract spatial geometries, LiDAR point clouds, optical frames, and multimodal streams into canonical feature tensors.',
      icon: Eye
    },
    {
      id: 'understand',
      step: '02',
      name: 'UNDERSTAND',
      tagline: 'Contextual & Relational Grounding',
      concept: '“Formulate spatial, temporal, and semantic context graphs.”',
      mechanics: 'Bind perceptual tokens into structured knowledge representations and dense vector embeddings anchored in physical reality.',
      icon: Layers
    },
    {
      id: 'reason',
      step: '03',
      name: 'REASON',
      tagline: 'Latent Inference & Uncertainty Evaluation',
      concept: '“Evaluate context, uncertainty, and possible actions.”',
      mechanics: 'Simulate potential future states, weigh probabilistic risks, and evaluate multi-step causal dependencies.',
      icon: Brain
    },
    {
      id: 'decide',
      step: '04',
      name: 'DECIDE',
      tagline: 'Trajectory Selection & Policy Filtering',
      concept: '“Select the optimal trajectory under safety invariants.”',
      mechanics: 'Optimize policy outcomes against formal constraints, ensuring deterministic validation and goal alignment.',
      icon: CheckCircle2
    },
    {
      id: 'act',
      step: '05',
      name: 'ACT',
      tagline: 'Tool Calling & Measurable Agency',
      concept: '“Turn decisions into measurable outcomes.”',
      mechanics: 'Dispatch validated tool calls, API payloads, robotic motor commands, or programmatic artifacts into the environment.',
      icon: Play
    },
    {
      id: 'learn',
      step: '06',
      name: 'LEARN',
      tagline: 'Feedback Assimilation & Continual Adaptation',
      concept: '“Use environmental feedback to improve the system.”',
      mechanics: 'Capture telemetry deltas, prediction errors, and execution traces to optimize memory retrieval and system weights.',
      icon: RefreshCw
    }
  ];

  // Auto cycling pulse through nodes
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % nodes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nodes.length]);

  const currentNode = nodes[activeStep];

  return (
    <section id="the-mind" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>03 // THE MIND (INTELLIGENCE FLOW)</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
            LIVING COGNITIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              ARCHITECTURE.
            </span>
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-4 max-w-xl">
            The fundamental cognitive loop of CHARACTER-07: How intelligent systems perceive unstructured environments, formulate decisions, execute agency, and assimilate experience.
          </p>
        </div>

        {/* Play / Pause Cycle Controls */}
        <button
          onClick={() => {
            sound.playClick();
            setIsAutoPlaying(!isAutoPlaying);
          }}
          className="glass-panel px-4 py-2 rounded-lg border border-slate-700 hover:border-cyan-500/50 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center gap-2 transition-all cursor-pointer"
        >
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>{isAutoPlaying ? '[ PAUSE SIGNAL PROPAGATION ]' : '[ RESUME SIGNAL FLOW ]'}</span>
        </button>
      </div>

      {/* Interactive Node Flowchart Bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isActive = idx === activeStep;

          return (
            <div
              key={node.id}
              onClick={() => {
                sound.playClick();
                setIsAutoPlaying(false);
                setActiveStep(idx);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setIsAutoPlaying(false);
                setActiveStep(idx);
              }}
              className={`relative p-4 rounded-xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between min-h-[140px] group ${
                isActive
                  ? 'bg-cyan-950/40 border border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'glass-panel border-slate-800/80 hover:border-slate-600'
              }`}
              data-cursor="NODE"
            >
              {/* Top Step Number & Active Dot */}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500 font-bold group-hover:text-cyan-400">
                  {node.step}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                )}
              </div>

              {/* Icon & Title */}
              <div className="my-2">
                <Icon
                  className={`w-6 h-6 mb-2 transition-colors ${
                    isActive ? 'text-cyan-300' : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                />
                <div className={`font-heading font-extrabold text-sm tracking-wide ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}>
                  {node.name}
                </div>
              </div>

              {/* Progress indicator line */}
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    isActive ? 'w-full bg-cyan-400 shadow-sm shadow-cyan-400' : 'w-0'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Active Node Showcase Card */}
      <div className="relative p-8 rounded-2xl glass-panel border border-cyan-500/40 bg-gradient-to-br from-[#080c14] to-[#0d1322] overflow-hidden">
        {/* Background circuit grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono">
          {/* Left Column: Big Statement & Quote */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>COGNITIVE STAGE {currentNode.step} OF 06</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              {currentNode.name}
            </h3>

            <p className="text-xl sm:text-2xl text-cyan-300 font-sans font-light italic leading-snug">
              {currentNode.concept}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2">
              {currentNode.mechanics}
            </p>
          </div>

          {/* Right Column: Architectural Telemetry */}
          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-3.5 text-xs text-slate-400">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2 flex justify-between">
              <span>SYSTEM INVARIANT</span>
              <span className="text-cyan-400">ENFORCED</span>
            </div>

            <div className="flex justify-between items-center">
              <span>TARGET INPUT:</span>
              <span className="text-slate-200">Raw Sensor & Multimodal Embeddings</span>
            </div>

            <div className="flex justify-between items-center">
              <span>INTERMEDIATE STATE:</span>
              <span className="text-cyan-300 font-semibold">{currentNode.name}_PASS_01</span>
            </div>

            <div className="flex justify-between items-center">
              <span>LATENCY TOLERANCE:</span>
              <span className="text-emerald-400 font-mono">&lt; 30 ms</span>
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              “Every intelligent action is grounded in continuous perceptual calibration.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
