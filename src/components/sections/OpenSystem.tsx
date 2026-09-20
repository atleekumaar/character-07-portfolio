import React, { useState } from 'react';
import { sound } from '../../lib/sound';
import { GithubIcon } from '../ui/Icons';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export const OpenSystem: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([
    '> connect --github atleekumaar',
    'STATUS: Handshake 200 OK',
    'AUTHENTICATION: PUBLIC REPOSITORY STREAM',
    'TARGET: github.com/atleekumaar',
    'ACCESS GRANTED // REPOSITORY REPOSITORIES LOADED'
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    sound.playTelemetry();
    const cmd = terminalInput.trim().toLowerCase();
    let response = `Unknown command: ${cmd}. Type 'help' for available directives.`;

    if (cmd === 'help') {
      response = 'DIRECTIVES: connect, status, missions, clear, exit';
    } else if (cmd === 'status') {
      response = 'SYSTEM: ACTIVE | ROLE: AI ARCHITECT | REPO: atleekumaar';
    } else if (cmd === 'missions') {
      response = 'MSN-001: FOVEATED LiDAR (52.05% mIoU) | MSN-002: AGENTS';
    } else if (cmd === 'clear') {
      setCommandHistory([]);
      setTerminalInput('');
      return;
    }

    setCommandHistory((prev) => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput('');
  };

  return (
    <section id="open-system" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>08 // OPEN SYSTEM</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
            PUBLIC CODE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              REPOSITORY.
            </span>
          </h2>
          <p className="text-base sm:text-lg font-mono text-cyan-300 mt-4 max-w-xl font-medium">
            “Some of the character's memory is public.”
          </p>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1 max-w-lg">
            Direct access to verified open-source experiments, algorithms, and engineering repositories on GitHub.
          </p>
        </div>

        {/* Primary CTA */}
        <a
          href="https://github.com/atleekumaar"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="px-6 py-4 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-950/50 cursor-pointer"
          data-cursor="GITHUB"
        >
          <GithubIcon className="w-5 h-5 text-cyan-400" />
          <span className="font-bold">[ ACCESS GITHUB // @ATLEEKUMAAR ]</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Terminal UI Panel */}
      <div className="rounded-2xl bg-[#080c14] border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono text-xs">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] text-slate-400 ml-2">bash - session://character-07/github</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-slate-500">
            <span>PORT: 443 (TLS)</span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="p-6 space-y-2 max-h-72 overflow-y-auto bg-[#07090e]">
          {commandHistory.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.startsWith('>')
                  ? 'text-cyan-400 font-bold'
                  : line.startsWith('STATUS') || line.startsWith('ACCESS')
                  ? 'text-emerald-400'
                  : 'text-slate-400'
              }`}
            >
              {line}
            </div>
          ))}

          {/* Active input prompt */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help', 'status', 'missions', or 'clear'..."
              className="w-full bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 font-mono text-xs"
            />
          </form>
        </div>

        {/* Footer info banner */}
        <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>OFFICIAL GITHUB ID: <strong className="text-white">atleekumaar</strong></span>
          </div>
          <span className="text-slate-500">NO SYNTHETIC METRICS OR FABRICATED STARS</span>
        </div>
      </div>
    </section>
  );
};
