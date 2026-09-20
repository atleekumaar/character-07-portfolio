import React, { useState } from 'react';
import { sound } from '../../lib/sound';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Terminal, ExternalLink, Check } from 'lucide-react';

export const ContactOutro: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyProfile = () => {
    sound.playTelemetry();
    navigator.clipboard.writeText('https://www.linkedin.com/in/atul-shukla-105341383');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 font-mono overflow-hidden">
      {/* Background vignette & dark atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070a]/90 to-black pointer-events-none" />

      {/* Top Session Telemetry Tag */}
      <div className="relative z-10 text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>CHARACTER-07 // SESSION COMPLETE</span>
        </div>

        <div className="space-y-1 text-sm sm:text-base text-slate-400 font-sans italic pt-2">
          <p>“You weren't supposed to find this file.”</p>
          <p className="text-cyan-300 font-normal">“But since you're here…”</p>
        </div>
      </div>

      {/* Giant Typography Call to Action */}
      <div className="relative z-10 text-center my-12">
        <h2 className="text-5xl sm:text-7xl lg:text-9xl font-heading font-extrabold tracking-tight text-white uppercase leading-[0.9]">
          WHAT <br />
          WILL <br />
          YOU <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white">
            BUILD?
          </span>
        </h2>
      </div>

      {/* Mission Control Connection Matrix */}
      <div className="relative z-10 max-w-2xl mx-auto p-8 rounded-3xl glass-panel border border-cyan-500/40 bg-[#080c14]/90 shadow-2xl shadow-cyan-950/60 my-16 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs text-cyan-400 uppercase tracking-widest font-bold">
          <Terminal className="w-4 h-4" />
          <span>MISSION CONTROL // INITIATE TRANSMISSION</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          Open for high-impact AI systems architecture, research collaboration, point-cloud perception, and autonomous agent engineering opportunities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* LinkedIn CTA */}
          <a
            href="https://www.linkedin.com/in/atul-shukla-105341383"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/60 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-cyan-950/50 cursor-pointer"
            data-cursor="LINKEDIN"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span className="font-bold">[ CONNECT ON LINKEDIN ]</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* GitHub CTA */}
          <a
            href="https://github.com/atleekumaar"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            data-cursor="GITHUB"
          >
            <GithubIcon className="w-4 h-4 text-slate-400" />
            <span className="font-bold">[ EXPLORE GITHUB ]</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Copy Channel Trigger */}
        <div className="pt-2">
          <button
            onClick={handleCopyProfile}
            className="text-[11px] text-slate-500 hover:text-cyan-400 underline transition-colors flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
          >
            {copied ? (
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> LINKEDIN PROFILE COPIED TO CLIPBOARD
              </span>
            ) : (
              <span>[ COPY VERIFIED PROFILE LINK ]</span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Dossier Metadata & Timestamp */}
      <div className="relative z-10 pt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          CHARACTER-07 // ATLEE KUMAAR (ATUL SHUKLA)
        </div>
        <div>
          ERA 2042 // ALL TELEMETRY AUTHENTICATED
        </div>
      </div>
    </section>
  );
};
