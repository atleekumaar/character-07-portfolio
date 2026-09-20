import React, { useState } from 'react';
import { SYSTEM_STACK } from '../../data/systemStack';
import { sound } from '../../lib/sound';

export const SystemStack: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>(SYSTEM_STACK[0].level);

  return (
    <section id="stack" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>06 // SYSTEM STACK</span>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
          LAYERED SYSTEM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
            ARCHITECTURE.
          </span>
        </h2>
        <p className="text-sm font-mono text-slate-400 mt-4 max-w-xl">
          Engineered as a cohesive multi-tier stack: from foundational low-level efficiency to frontier cognitive agents and distributed cloud infrastructure.
        </p>
      </div>

      {/* Stack Visualizer */}
      <div className="space-y-4">
        {SYSTEM_STACK.map((layer) => {
          const isActive = layer.level === activeLayer;

          return (
            <div
              key={layer.level}
              onClick={() => {
                sound.playClick();
                setActiveLayer(layer.level);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setActiveLayer(layer.level);
              }}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-slate-900/90 border border-cyan-500/60 shadow-xl shadow-cyan-950/40'
                  : 'glass-panel border-slate-800/80 hover:border-slate-700'
              }`}
              data-cursor="STACK"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Left Side: Level, Name & Category */}
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg border font-mono font-bold text-sm ${
                      isActive
                        ? 'bg-cyan-950 border-cyan-500/60 text-cyan-300'
                        : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}
                  >
                    L{layer.level}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                        {layer.number} // {layer.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {layer.name}
                    </h3>
                  </div>
                </div>

                {/* Right Side: Technologies */}
                <div className="flex flex-wrap items-center gap-2">
                  {layer.technologies.map((t) => (
                    <div
                      key={t.name}
                      className={`px-3 py-1.5 rounded-lg border font-mono text-xs flex items-center gap-2 transition-all ${
                        isActive
                          ? 'bg-cyan-950/40 border-cyan-500/40 text-white'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="font-semibold">{t.name}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700">
                        {t.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Reveal when Active */}
              {isActive && (
                <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-xs font-mono animate-fade-in">
                  <div className="md:col-span-8 text-slate-300 font-sans leading-relaxed">
                    {layer.description}
                  </div>
                  <div className="md:col-span-4 flex justify-end gap-2 text-[11px] text-cyan-400">
                    <span>STATE: PRODUCTION VERIFIED</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
