import React, { useState } from 'react';
import { MEMORY_TIMELINE } from '../../data/timeline';
import { sound } from '../../lib/sound';
import { GitBranch, CheckCircle2 } from 'lucide-react';

export const MemoryTimeline: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>(MEMORY_TIMELINE[MEMORY_TIMELINE.length - 1].id);

  const selectedNode = MEMORY_TIMELINE.find((n) => n.id === activeNodeId) || MEMORY_TIMELINE[0];

  return (
    <section id="memory" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>07 // CHARACTER MEMORY</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
            EVOLUTIONARY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              MEMORY TREE.
            </span>
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-4 max-w-xl">
            Every acquired engineering discipline becomes a permanent cognitive layer of memory in CHARACTER-07.
          </p>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-cyan-500/30 text-xs font-mono">
          <span className="text-slate-500 text-[10px] uppercase block">TOTAL RECOLLECTION NODES</span>
          <span className="text-cyan-300 font-bold text-base">09 PHASES LOADED</span>
        </div>
      </div>

      {/* Horizontal / Scrollable Memory Milestones Track */}
      <div className="relative mb-12">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 relative z-10">
          {MEMORY_TIMELINE.map((node, idx) => {
            const isActive = node.id === activeNodeId;

            return (
              <div
                key={node.id}
                onClick={() => {
                  sound.playClick();
                  setActiveNodeId(node.id);
                }}
                onMouseEnter={() => {
                  sound.playHover();
                  setActiveNodeId(node.id);
                }}
                className={`p-3 rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${
                  isActive
                    ? 'bg-cyan-950/60 border border-cyan-400 shadow-lg shadow-cyan-500/20 -translate-y-1'
                    : 'glass-panel border-slate-800/80 hover:border-slate-600'
                }`}
                data-cursor="MEMORY"
              >
                <span className="text-[10px] font-mono text-slate-500 font-bold mb-1">
                  0{idx + 1}
                </span>

                <div
                  className={`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center ${
                    isActive
                      ? 'bg-cyan-400 border-white shadow-sm shadow-cyan-400'
                      : 'bg-slate-900 border-slate-700 group-hover:border-cyan-400'
                  }`}
                />

                <div className={`text-[11px] font-heading font-bold uppercase tracking-tight line-clamp-2 ${
                  isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  {node.title}
                </div>

                <div className="text-[9px] font-mono text-slate-500 mt-1">
                  {node.era}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Memory Inspection Card */}
      <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-[#080c14]/90 font-mono">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-cyan-300 font-bold">
            <GitBranch className="w-4 h-4 text-cyan-400" />
            <span>MEMORY NODE ARCHIVE // {selectedNode.step}</span>
          </div>

          <span className={`text-[10px] px-2.5 py-0.5 rounded font-bold uppercase ${
            selectedNode.status === 'INTEGRATED'
              ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/40'
              : 'bg-cyan-950/40 text-cyan-300 border border-cyan-500/40'
          }`}>
            {selectedNode.status}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs text-cyan-400 tracking-wider">
              {selectedNode.era} // {selectedNode.tagline}
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {selectedNode.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {selectedNode.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest block mb-1 font-bold">
                CORE COGNITIVE BREAKTHROUGH:
              </span>
              <p className="text-xs text-slate-200 font-sans italic">
                “{selectedNode.breakthrough}”
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">
              ACQUIRED CAPABILITIES
            </div>

            <div className="space-y-2 text-xs">
              {selectedNode.acquiredCapabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
