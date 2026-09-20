import React, { useState } from 'react';
import { MISSIONS } from '../../data/missions';
import type { Mission } from '../../data/missions';
import { MissionCard } from './MissionCard';
import { MissionModal } from './MissionModal';
import { sound } from '../../lib/sound';

export const MissionLog: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'COMPLETED' | 'IN DEVELOPMENT' | 'RESEARCH CONCEPT'>('ALL');

  const filteredMissions = MISSIONS.filter((m) => {
    if (activeFilter === 'ALL') return true;
    return m.status === activeFilter;
  });

  return (
    <section id="missions" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>04 // MISSION LOG</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              MISSIONS.
            </span>
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-4 max-w-xl">
            Not standard projects. Completed engineering missions, verified hardware benchmarks, active architectural developments, and research concepts.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl glass-panel border border-slate-800 font-mono text-xs">
          {(['ALL', 'COMPLETED', 'IN DEVELOPMENT', 'RESEARCH CONCEPT'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => {
                sound.playClick();
                setActiveFilter(filter);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Mission Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredMissions.map((mission) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            onOpenCaseStudy={(m) => setSelectedMission(m)}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <MissionModal
        mission={selectedMission}
        onClose={() => setSelectedMission(null)}
      />
    </section>
  );
};
