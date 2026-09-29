import React from 'react';
import { sound } from '../../lib/sound';
import { NeuralCore } from '../3d/NeuralCore';
import { GlitchText } from '../ui/GlitchText';
import { GithubIcon } from '../ui/Icons';
import { ArrowRight, ExternalLink, Cpu, Activity, Crosshair, ShieldCheck } from 'lucide-react';
import biometricPhoto from '../../assets/avatar-biometric.jpg';

interface HeroProps {
  onExploreMissions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMissions }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background 3D Canvas Visualizer */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
        <NeuralCore className="w-full h-full" />
      </div>

      {/* Subtle scanline & gradient mask for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/80 pointer-events-none z-10" />

      {/* Top Telemetry Header Tag */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-300 font-semibold tracking-widest">
            DIGITAL DOSSIER // ARCHIVE CLASSIFICATION: ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-6 text-[11px] text-slate-500">
          <span>CODENAME: CHARACTER-07</span>
          <span className="hidden sm:inline">REAL: ATLEE KUMAAR</span>
          <span>CHRONO: 2042</span>
        </div>
      </div>

      {/* Main Editorial Hero Content Grid */}
      <div className="relative z-20 my-auto py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headline & Statements */}
        <div className="lg:col-span-7 max-w-2xl">
          {/* Codename Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <GlitchText text="CHARACTER-07" />
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">DESIGNATION 07-AK</span>
          </div>

          {/* Big Editorial Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white uppercase leading-[0.95] mb-4">
            THE AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
              ARCHITECT.
            </span>
          </h1>

          {/* Character Core Philosophy */}
          <blockquote className="my-6 border-l-2 border-cyan-500/80 pl-5 text-xl sm:text-2xl text-slate-200 font-sans font-light italic leading-relaxed max-w-xl">
            “I don't predict the future. <br />
            <span className="text-cyan-300 font-normal not-italic">
              I build systems that make it possible.
            </span>”
          </blockquote>

          {/* Supporting Identity Definition */}
          <p className="text-sm sm:text-base font-mono text-slate-400 max-w-xl mb-8 leading-relaxed">
            Computer Science Engineering <span className="text-cyan-400">×</span> Artificial Intelligence
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                sound.playClick();
                onExploreMissions();
              }}
              onMouseEnter={() => sound.playHover()}
              className="group relative px-6 py-3.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/60 hover:border-cyan-400 rounded-lg text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 cursor-pointer"
              data-cursor="EXPLORE"
            >
              <span className="text-cyan-300 font-bold group-hover:text-white transition-colors">
                [ EXPLORE MISSIONS ]
              </span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://github.com/atleekumaar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3.5 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-slate-500 rounded-lg text-slate-300 hover:text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm cursor-pointer"
              data-cursor="GITHUB"
            >
              <GithubIcon className="w-4 h-4 text-slate-400" />
              <span>[ OPEN GITHUB ]</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Biometric Portrait Badge */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-sm rounded-2xl glass-panel border border-cyan-500/40 p-4 bg-gradient-to-b from-[#090d16]/90 via-[#070a12]/90 to-[#05070a]/90 shadow-2xl shadow-cyan-950/60 font-mono">
            {/* Top Tag */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-3 border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <Crosshair className="w-3 h-3 text-cyan-400 animate-spin" />
                SUBJECT: ATLEE KUMAAR
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AUTHENTICATED
              </span>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-cyan-500/50 bg-slate-950 group">
              <img
                src={biometricPhoto}
                alt="Atlee Kumaar (Atul Shukla) - Biometric Identity"
                className="w-full h-full object-cover object-[15%_25%] filter contrast-110 group-hover:contrast-125 transition-all duration-700"
              />

              {/* HUD Reticle */}
              <div className="absolute top-2 right-2 text-[9px] text-cyan-300 font-mono bg-black/70 border border-cyan-500/40 px-2 py-0.5 rounded backdrop-blur-md">
                #07-BUILDER
              </div>

              {/* Laser Scanline */}
              <div className="absolute inset-x-0 h-0.5 bg-cyan-400 shadow-[0_0_12px_#00f0ff] animate-scanline pointer-events-none opacity-75" />

              {/* HUD Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-cyan-400" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-cyan-400" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-cyan-400" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-cyan-400" />
            </div>

            {/* Metadata Badges */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] text-slate-400">
              <div className="p-2 rounded bg-slate-950/80 border border-slate-900">
                <span className="text-slate-500 block text-[9px]">DESIGNATION</span>
                <span className="text-cyan-300 font-bold">CHARACTER-07</span>
              </div>
              <div className="p-2 rounded bg-slate-950/80 border border-slate-900">
                <span className="text-slate-500 block text-[9px]">SPECIALTY</span>
                <span className="text-white font-semibold">AI ARCHITECT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status Telemetry Panel at Bottom */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl glass-panel border border-white/5 font-mono text-xs">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">STATUS</span>
          <span className="text-cyan-300 font-bold flex items-center gap-1.5 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            ACTIVE
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">LOCATION</span>
          <span className="text-slate-200 font-semibold mt-0.5">LUCKNOW, INDIA</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">SPECIALIZATION</span>
          <span className="text-cyan-400 font-semibold mt-0.5">ARTIFICIAL INTELLIGENCE</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">CURRENT OBJECTIVE</span>
          <span className="text-slate-100 font-bold tracking-wider mt-0.5 flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-cyan-400" /> BUILD
          </span>
        </div>
      </div>
    </section>
  );
};
