import React, { useState } from 'react';
import { EXPERIMENTS } from '../../data/experiments';
import { sound } from '../../lib/sound';
import { FlaskConical, Activity, ChevronRight } from 'lucide-react';

export const Laboratory: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIMENTS[0].id);

  const selectedExp = EXPERIMENTS.find((e) => e.id === activeExpId) || EXPERIMENTS[0];

  return (
    <section id="laboratory" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>05 // THE LAB</span>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
          EXPERIMENTAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
            LABORATORY.
          </span>
        </h2>
        <p className="text-base sm:text-lg font-mono text-cyan-300 mt-4 max-w-2xl font-semibold">
          NOT EVERYTHING IS A PRODUCT. SOME THINGS ARE EXPERIMENTS.
        </p>
        <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 max-w-xl">
          Active empirical hypotheses exploring long-term vector memory, foveated point-cloud compression, quantization fidelity, and multi-modal tool calling.
        </p>
      </div>

      {/* Grid of Experiments & Live Telemetry Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List of Experiment Logs */}
        <div className="lg:col-span-5 space-y-4">
          {EXPERIMENTS.map((exp) => {
            const isActive = exp.id === activeExpId;
            const isRunning = exp.status === 'RUNNING' || exp.status === 'IN PROGRESS';

            return (
              <div
                key={exp.id}
                onClick={() => {
                  sound.playClick();
                  setActiveExpId(exp.id);
                }}
                onMouseEnter={() => {
                  sound.playHover();
                  setActiveExpId(exp.id);
                }}
                className={`p-5 rounded-xl transition-all duration-300 cursor-pointer text-left group ${
                  isActive
                    ? 'bg-slate-900 border border-cyan-500/60 shadow-lg shadow-cyan-950/40'
                    : 'glass-panel border-slate-800/80 hover:border-slate-700'
                }`}
                data-cursor="EXP"
              >
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="text-cyan-400 font-bold">
                    {exp.code}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase flex items-center gap-1.5 ${
                      isRunning
                        ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                        : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                    }`}
                  >
                    {isRunning && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                    {exp.status}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {exp.title}
                </div>

                <div className="text-xs font-mono text-slate-400 line-clamp-2 mb-3">
                  <span className="text-slate-500">HYPOTHESIS: </span>
                  {exp.hypothesis}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
                  <span>DOMAIN: {exp.domain}</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    INSPECT <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Laboratory Inspection Terminal */}
        <div className="lg:col-span-7 rounded-2xl glass-panel border border-cyan-500/30 p-6 sm:p-8 font-mono bg-[#080c14]/90 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-bold">
              <FlaskConical className="w-4 h-4" />
              <span>LABORATORY LOG // {selectedExp.code}</span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span>STATUS:</span>
              <span className="text-cyan-300 font-bold uppercase">{selectedExp.status}</span>
            </div>
          </div>

          {/* Experiment Title */}
          <div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
              EXPERIMENT TITLE
            </div>
            <div className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              {selectedExp.title}
            </div>
          </div>

          {/* Hypothesis */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="text-[10px] text-cyan-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              CORE HYPOTHESIS
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              {selectedExp.hypothesis}
            </p>
          </div>

          {/* Methodology */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-bold">
              EMPIRICAL METHODOLOGY
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {selectedExp.methodology}
            </p>
          </div>

          {/* Key Findings */}
          <div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">
              EXPERIMENTAL FINDINGS & LOG TELEMETRY
            </div>
            <div className="space-y-2">
              {selectedExp.findings.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 font-sans"
                >
                  <span className="text-cyan-400 font-mono font-bold mt-0.5">&gt;</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
            {selectedExp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
