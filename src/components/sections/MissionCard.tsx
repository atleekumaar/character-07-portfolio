import React from 'react';
import type { Mission } from '../../data/missions';
import { sound } from '../../lib/sound';
import { Activity, ArrowRight, ExternalLink, Cpu, Lock } from 'lucide-react';

interface MissionCardProps {
  mission: Mission;
  onOpenCaseStudy: (mission: Mission) => void;
}

export const MissionCard: React.FC<MissionCardProps> = ({ mission, onOpenCaseStudy }) => {
  const isCompleted = mission.status === 'COMPLETED';
  const isInDevelopment = mission.status === 'IN DEVELOPMENT';
  const isConcept = mission.status === 'RESEARCH CONCEPT';

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
        isCompleted
          ? 'bg-gradient-to-b from-[#0a0e18] to-[#070a12] border border-cyan-500/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/40'
          : isInDevelopment
          ? 'bg-[#080b12] border border-amber-500/20 hover:border-amber-500/40'
          : 'bg-[#080b12] border border-slate-800 hover:border-slate-700'
      }`}
    >
      {/* Top Row: Mission Code & Status */}
      <div>
        <div className="flex items-center justify-between font-mono text-xs mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300 font-bold">
              {mission.code}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              // {mission.domain}
            </span>
          </div>

          <span
            className={`text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider ${
              isCompleted
                ? 'bg-emerald-950/50 border border-emerald-500/40 text-emerald-300'
                : isInDevelopment
                ? 'bg-amber-950/50 border border-amber-500/40 text-amber-300'
                : 'bg-cyan-950/50 border border-cyan-500/40 text-cyan-300'
            }`}
          >
            {mission.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-tight">
          {mission.title}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm font-sans text-slate-400 leading-relaxed mb-6">
          {mission.summary}
        </p>

        {/* Verified Benchmarks Grid for Completed Mission */}
        {mission.metrics && mission.metrics.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6 font-mono">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                VERIFIED HARDWARE BENCHMARKS
              </span>
              <span className="text-emerald-400">AUTHENTICATED</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {mission.metrics.slice(0, 3).map((m, idx) => (
                <div key={idx} className="p-2 rounded bg-[#070a10] border border-slate-900">
                  <div className="text-[9px] text-slate-500 uppercase truncate">
                    {m.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1 mt-0.5">
                    <span className="text-cyan-300">{m.value}</span>
                    {m.unit && <span className="text-[10px] text-slate-400">{m.unit}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Classified state preview for Mission 002 */}
        {isInDevelopment && (
          <div className="p-4 rounded-xl bg-amber-950/10 border border-amber-500/20 mb-6 font-mono text-xs text-amber-200/80 flex items-center gap-3">
            <Lock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-amber-300">ARCHITECTURE IN ACTIVE DEVELOPMENT</div>
              <div className="text-[11px] text-slate-400">Strict schema validation & multi-agent execution loops.</div>
            </div>
          </div>
        )}

        {/* Research concept preview for Mission 003 */}
        {isConcept && (
          <div className="p-4 rounded-xl bg-cyan-950/10 border border-cyan-500/20 mb-6 font-mono text-xs text-cyan-200/80 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-bold text-cyan-300">HORIZON 2042 RESEARCH INITIATIVE</div>
              <div className="text-[11px] text-slate-400">Perception-to-action world model grounding.</div>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {mission.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 font-mono text-xs">
        <button
          onClick={() => {
            sound.playClick();
            onOpenCaseStudy(mission);
          }}
          onMouseEnter={() => sound.playHover()}
          className="px-4 py-2.5 rounded-lg bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
          data-cursor="CASE STUDY"
        >
          <span>[ VIEW CASE STUDY ]</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        {mission.githubUrl && (
          <a
            href={mission.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="px-4 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            data-cursor="GITHUB"
          >
            <span>[ VIEW GITHUB ]</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
