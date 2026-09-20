import React, { useState, useEffect } from 'react';
import { sound } from '../../lib/sound';
import { Search, Terminal, Cpu, BookOpen, Layers, GitBranch, Shield, Zap, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sound.playTelemetry();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigationCommands = [
    { label: '00 // HERO HUD', href: '#hero', icon: Shield, desc: 'Telemetry & core philosophy' },
    { label: '01 // ORIGIN DOSSIER', href: '#origin', icon: BookOpen, desc: 'The Question, Obsession, Transformation' },
    { label: '02 // CHARACTER ABILITIES', href: '#abilities', icon: Zap, desc: 'Perception, Reasoning, Memory, Action' },
    { label: '03 // THE MIND (INTELLIGENCE FLOW)', href: '#the-mind', icon: Cpu, desc: 'Interactive living cognitive architecture' },
    { label: '04 // MISSION LOG', href: '#missions', icon: Terminal, desc: 'Verified LiDAR benchmarks & projects' },
    { label: '05 // THE LAB (EXPERIMENTS)', href: '#laboratory', icon: Layers, desc: 'Active research logs & ongoing hypotheses' },
    { label: '06 // SYSTEM STACK', href: '#stack', icon: Layers, desc: 'Layered 5-tier engineering architecture' },
    { label: '07 // MEMORY TIMELINE', href: '#memory', icon: GitBranch, desc: 'Cognitive evolution timeline' },
    { label: '08 // OPEN SYSTEM (GITHUB)', href: '#open-system', icon: Terminal, desc: 'Public terminal connection to atleekumaar' },
    { label: '09 // FUTURE OBJECTIVES', href: '#future', icon: Zap, desc: 'Autonomous Intelligence roadmap' },
    { label: '10 // CHARACTER FILE', href: '#character-file', icon: Shield, desc: 'Biometric dossier and directives' },
    { label: '11 // MISSION CONTROL (CONTACT)', href: '#contact', icon: Terminal, desc: 'Direct communication channels' },
  ];

  const filteredCommands = navigationCommands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.desc.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = (href: string) => {
    sound.playClick();
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 p-4 animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0a0d14] border border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-950/50 overflow-hidden font-mono text-slate-200">
        {/* Header Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            type="text"
            placeholder="Search dossier directives, abilities, missions, telemetry..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-sm text-slate-100 placeholder:text-slate-500 font-mono"
          />
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-200 p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest px-3 py-1 font-semibold">
            SYSTEM DIRECTIVES & JUMP TARGETS
          </div>

          {filteredCommands.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500 font-mono">
              NO MATCHING TELEMETRY ENTRY FOUND.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleAction(cmd.href)}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-cyan-950/30 hover:border-cyan-500/30 border border-transparent text-left transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                        {cmd.label}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {cmd.desc}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-600 group-hover:text-cyan-400 font-mono">
                    [ JUMP ]
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-slate-800/80 bg-slate-950/80 text-[10px] text-slate-500">
          <span>NAVIGATION HUD // CHARACTER-07</span>
          <div className="flex items-center gap-3">
            <span>ESC to close</span>
            <span>ENTER to jump</span>
          </div>
        </div>
      </div>
    </div>
  );
};
