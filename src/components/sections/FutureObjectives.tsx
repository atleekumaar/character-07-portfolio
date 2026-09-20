import React from 'react';
import { sound } from '../../lib/sound';

export const FutureObjectives: React.FC = () => {
  const objectives = [
    {
      code: 'OBJ-01',
      title: 'INTELLIGENT AGENTS',
      tagline: 'Deterministic Agency & Complex Multi-Step Reasoning',
      description: 'Designing agentic state machines capable of continuous autonomous reasoning, strict schema validation, and self-correcting execution loops without human intervention.',
      focus: ['Graph-based State Machines', 'Schema Contract Enforcement', 'Episodic Memory Retention']
    },
    {
      code: 'OBJ-02',
      title: 'AUTONOMOUS SYSTEMS',
      tagline: 'Perception-to-Action World Models',
      description: 'Bridging high-frequency 3D sensor streams (LiDAR, point clouds, spatial vision) with real-time world models for embodied decision-making and spatial navigation.',
      focus: ['Embodied Intelligence', 'Spatial Grounding', 'Closed-Loop Actuation']
    },
    {
      code: 'OBJ-03',
      title: 'AI INFRASTRUCTURE',
      tagline: 'Scalable MLOps & Distributed Edge Runtimes',
      description: 'Building robust, low-latency deployment pipelines for edge devices and distributed cloud environments, ensuring sub-30ms inference guarantees in high-stress production.',
      focus: ['Distributed GPU Runtimes', 'Edge Quantization (FP8/INT8)', 'Zero-Downtime Telemetry']
    }
  ];

  return (
    <section id="future" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>09 // NEXT OBJECTIVES (ERA 2042)</span>
      </div>

      {/* Large Typography Statement */}
      <div className="mb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white uppercase leading-none max-w-4xl">
          THE MACHINE <br />
          <span className="text-slate-500">MUST LEARN</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
            TO ACT.
          </span>
        </h2>

        {/* Narrative transition */}
        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
          <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">MODELS</span>
          <span className="text-cyan-400">&rarr;</span>
          <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">SYSTEMS</span>
          <span className="text-cyan-400">&rarr;</span>
          <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold">AGENTS</span>
          <span className="text-cyan-400">&rarr;</span>
          <span className="px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 font-bold">
            AUTONOMOUS INTELLIGENCE
          </span>
        </div>
      </div>

      {/* 3 Future Objectives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {objectives.map((obj) => (
          <div
            key={obj.code}
            onMouseEnter={() => sound.playHover()}
            className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            data-cursor="OBJECTIVE"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-4">
                <span className="text-cyan-400 font-bold">{obj.code}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 uppercase tracking-widest font-semibold">
                  FUTURE OBJECTIVE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {obj.title}
              </h3>

              <div className="text-xs font-mono text-slate-400 mb-4">
                {obj.tagline}
              </div>

              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mb-6">
                {obj.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                TARGET RESEARCH FOCUS:
              </div>
              <div className="space-y-1.5 font-mono text-xs text-slate-300">
                {obj.focus.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-cyan-400">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
