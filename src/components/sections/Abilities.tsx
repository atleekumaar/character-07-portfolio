import React, { useState } from 'react';
import { ABILITIES } from '../../data/abilities';
import { sound } from '../../lib/sound';
import { Eye, Brain, Database, Cpu, Hammer, Cloud, ChevronRight, Activity, Terminal } from 'lucide-react';

export const Abilities: React.FC = () => {
  const [activeAbility, setActiveAbility] = useState<string>(ABILITIES[0].id);

  const getAbilityIcon = (id: string) => {
    switch (id) {
      case 'perception': return Eye;
      case 'reasoning': return Brain;
      case 'memory': return Database;
      case 'action': return Cpu;
      case 'construction': return Hammer;
      case 'deployment': return Cloud;
      default: return Activity;
    }
  };

  const selectedAbility = ABILITIES.find((a) => a.id === activeAbility) || ABILITIES[0];

  return (
    <section id="abilities" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>02 // CHARACTER ABILITIES</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
            ENGINEERED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              CAPABILITIES.
            </span>
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-4 max-w-xl">
            Modular intelligence competencies structured for perception, neural representation, vector memory, agency, and production deployment.
          </p>
        </div>

        {/* Selected Ability Quick HUD */}
        <div className="glass-panel p-4 rounded-xl border border-cyan-500/30 text-xs font-mono min-w-[280px]">
          <div className="text-slate-500 text-[10px] uppercase mb-1">CURRENT ACTIVE INSPECTION</div>
          <div className="text-cyan-300 font-bold text-sm tracking-wider">
            {selectedAbility.code} // {selectedAbility.name}
          </div>
          <div className="text-slate-400 text-[11px] mt-1 truncate">
            {selectedAbility.tagline}
          </div>
        </div>
      </div>

      {/* Grid of 6 Ability Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {ABILITIES.map((ability) => {
          const Icon = getAbilityIcon(ability.id);
          const isActive = ability.id === activeAbility;

          return (
            <div
              key={ability.id}
              onClick={() => {
                sound.playClick();
                setActiveAbility(ability.id);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setActiveAbility(ability.id);
              }}
              className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group ${
                isActive
                  ? 'bg-slate-900/90 border border-cyan-500/60 shadow-xl shadow-cyan-950/40 -translate-y-1'
                  : 'glass-panel hover:bg-slate-900/50 hover:border-slate-700'
              }`}
              data-cursor="ABILITY"
            >
              {/* Active Glow Accent */}
              {isActive && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              )}

              {/* Top Row: Index and Code */}
              <div className="flex items-center justify-between font-mono text-xs mb-4">
                <span className="text-slate-500 font-bold group-hover:text-cyan-400 transition-colors">
                  ABILITY {ability.index}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                  {ability.code}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`p-2.5 rounded-lg border transition-colors ${
                    isActive
                      ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {ability.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {ability.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs font-sans text-slate-400 leading-relaxed mb-4">
                {ability.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                {ability.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Metadata Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>TELEMETRY: SYNCHRONIZED</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  VIEW SPECS <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Technical Specification Inspection Console */}
      <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-[#080c14]/90 font-mono">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2 text-xs text-cyan-300 font-bold">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>MODULE DEEP-TELEMETRY // {selectedAbility.code}</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span>STATUS: ACTIVE CALIBRATION</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">OPTIMAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {selectedAbility.telemetry.map((t, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
              <span className="text-[10px] text-slate-500 uppercase block mb-1">
                {t.label}
              </span>
              <span className="text-xs text-slate-100 font-bold tracking-wide">
                {t.value}
              </span>
            </div>
          ))}
        </div>

        <div>
          <div className="text-[11px] text-slate-400 uppercase tracking-widest mb-3">
            VERIFIED SPECIFICATIONS & ARCHITECTURAL PATTERNS:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {selectedAbility.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded bg-slate-950/50 border border-slate-800/60 text-slate-300"
              >
                <span className="text-cyan-400 font-bold mt-0.5">&gt;</span>
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
