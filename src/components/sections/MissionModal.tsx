import React, { useEffect } from 'react';
import type { Mission } from '../../data/missions';
import { sound } from '../../lib/sound';
import { X, ExternalLink, GitBranch, Cpu, Activity, CheckCircle } from 'lucide-react';

interface MissionModalProps {
  mission: Mission | null;
  onClose: () => void;
}

export const MissionModal: React.FC<MissionModalProps> = ({ mission, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!mission) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#080c14] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden font-mono text-slate-200 my-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold text-xs">
              {mission.code.split('-')[1]}
            </div>
            <div>
              <div className="text-xs text-cyan-400 font-semibold tracking-wider">
                MISSION DOSSIER // {mission.code}
              </div>
              <div className="text-[10px] text-slate-500">
                DOMAIN: {mission.domain}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider ${
              mission.status === 'COMPLETED'
                ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300'
                : mission.status === 'IN DEVELOPMENT'
                ? 'bg-amber-950/40 border border-amber-500/40 text-amber-300'
                : 'bg-cyan-950/40 border border-cyan-500/40 text-cyan-300'
            }`}>
              {mission.status}
            </span>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors cursor-pointer"
              data-cursor="CLOSE"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8 font-sans">
          {/* Mission Title & Summary */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-3">
              {mission.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {mission.summary}
            </p>
          </div>

          {/* Key Verified Metrics HUD (if available) */}
          {mission.metrics && mission.metrics.length > 0 && (
            <div className="p-5 rounded-xl bg-slate-950/80 border border-cyan-500/30">
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  VERIFIED EMPIRICAL BENCHMARKS
                </span>
                <span className="text-[10px] text-slate-500">HARDWARE VALIDATED</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {mission.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded bg-[#0b0f19] border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase truncate mb-1">
                      {m.label}
                    </div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-white flex items-baseline gap-1">
                      <span className="text-cyan-300">{m.value}</span>
                      {m.unit && <span className="text-xs text-slate-400">{m.unit}</span>}
                    </div>
                    {m.description && (
                      <div className="text-[10px] text-slate-500 mt-1 leading-tight">
                        {m.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl glass-panel border border-slate-800">
              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                THE PROBLEM
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {mission.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl glass-panel border border-cyan-500/30">
              <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                THE APPROACH
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {mission.approach}
              </p>
            </div>
          </div>

          {/* Engineering Pipeline Architecture */}
          {mission.pipeline && mission.pipeline.length > 0 && (
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-cyan-400" />
                ENGINEERING EXECUTION PIPELINE
              </div>
              <div className="space-y-2 font-mono text-xs">
                {mission.pipeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded bg-slate-950/70 border border-slate-800/80"
                  >
                    <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] text-cyan-300 font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-slate-200 font-semibold">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              SYSTEM TECHNOLOGIES
            </div>
            <div className="flex flex-wrap gap-2">
              {mission.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Lessons */}
          {mission.results && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  KEY OUTCOMES
                </div>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  {mission.results.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>

              {mission.lessons && (
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    ARCHITECTURAL LESSONS
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                    {mission.lessons.map((les, i) => (
                      <li key={i}>{les}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Actions & Official Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 font-mono text-xs">
            <div className="text-slate-500">
              MISSION STATUS VERIFICATION: ACCREDITED
            </div>

            {mission.githubUrl && (
              <a
                href={mission.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-5 py-2.5 rounded bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>[ VIEW REPOSITORY ON GITHUB ]</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
