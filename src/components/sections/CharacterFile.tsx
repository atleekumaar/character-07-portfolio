import { useState } from 'react';
import { ShieldCheck, Zap, User, Crosshair, Award, Cpu, Activity } from 'lucide-react';
import { sound } from '../../lib/sound';

export const CharacterFile = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'directives' | 'specs'>('profile');

  return (
    <section id="character-file" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 text-xs font-mono text-cyan-400 mb-6 text-center">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>10 // OFFICIAL CHARACTER FILE</span>
        <span className="w-6 h-[1px] bg-cyan-400" />
      </div>

      <div className="mb-14 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none">
          DOSSIER RECORD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white">
            #07-BUILDER.
          </span>
        </h2>
        <p className="text-sm font-mono text-slate-400 mt-4">
          Authenticated personnel file & biometric identity of Atlee Kumaar (Atul Shukla) — AI Systems Architect.
        </p>
      </div>

      {/* Main Centered Dossier Panel */}
      <div className="max-w-4xl mx-auto rounded-3xl glass-panel border border-cyan-500/40 p-6 sm:p-10 bg-gradient-to-b from-[#090d16] via-[#070a12] to-[#05070a] shadow-2xl shadow-cyan-950/40 font-mono">
        
        {/* CENTERED BIOMETRIC PHOTO CONTAINER - FULL FACE VISIBLE */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="relative w-full max-w-2xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/60 group bg-slate-950">
            {/* The Authentic Photo positioned so face and laptop are 100% visible */}
            <img
              src="/avatar-biometric.jpg"
              alt="Atlee Kumaar (Atul Shukla) - CHARACTER-07 Biometric Archive"
              className="w-full h-full object-cover object-[15%_25%] filter contrast-110 group-hover:contrast-125 transition-all duration-700"
            />

            {/* Sci-Fi Laser Scanline */}
            <div className="absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_20px_#00f0ff] animate-scanline pointer-events-none opacity-85" />

            {/* Subtle Vignette Gradient on edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Top Left Tag */}
            <div className="absolute top-3 left-3 text-[10px] text-cyan-300 font-mono bg-black/70 border border-cyan-500/40 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5">
              <Crosshair className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>BIOMETRIC SCAN // VERIFIED</span>
            </div>

            {/* Top Right Tag */}
            <div className="absolute top-3 right-3 text-[10px] text-emerald-300 font-mono bg-black/70 border border-emerald-500/40 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>MATCH 99.8% // HACK 404</span>
            </div>

            {/* Target Reticle over the engineer's face (top-left quadrant) */}
            <div className="absolute top-[12%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 border border-dashed border-cyan-400/70 rounded-full pointer-events-none flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <div className="absolute -top-4 text-[9px] text-cyan-300 font-bold bg-black/60 px-1 rounded">
                TARGET: ATLEE
              </div>
            </div>

            {/* HUD Corner Brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

            {/* Bottom Photo Caption */}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/60 border border-white/10 px-3 py-1.5 rounded backdrop-blur-md">
              <span className="text-cyan-300 font-bold">IDENTITY: ATLEE KUMAAR (ATUL SHUKLA)</span>
              <span className="text-slate-400">HACK 404 LAB ENVIRONMENT</span>
            </div>
          </div>
          
          <div className="mt-3 text-xs text-slate-500 font-mono text-center">
            PHOTO ARCHIVE: LAB SESSION & SYSTEM TELEMETRY VERIFIED
          </div>
        </div>

        {/* Identity Details Grid */}
        <div className="space-y-6">
          {/* Main Title & Codename Header */}
          <div className="text-center border-b border-slate-800 pb-6">
            <div className="text-xs text-cyan-400 tracking-widest uppercase font-semibold mb-1">
              DESIGNATION CODENAME
            </div>
            <h3 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              CHARACTER-07
            </h3>
            <div className="text-xl sm:text-2xl text-slate-300 font-mono tracking-wide mt-1">
              ATLEE KUMAAR <span className="text-slate-500 text-sm font-normal">(ATUL SHUKLA)</span>
            </div>
            <div className="text-xs sm:text-sm text-cyan-400 font-mono mt-1 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AI SYSTEMS ARCHITECT // COMPUTER SCIENCE & AI</span>
            </div>
          </div>

          {/* Quick Tab Selector */}
          <div className="flex justify-center gap-2 border-b border-slate-800/80 pb-4">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('profile');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              [ 01: SYSTEM SPECS ]
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('directives');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'directives'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              [ 02: CORE DIRECTIVES ]
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('specs');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              [ 03: SIGNATURE LOOP ]
            </button>
          </div>

          {/* TAB 1: Profile Specs */}
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs animate-fade-in">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">ROLE</span>
                <span className="text-white font-bold text-sm">AI SYSTEMS ARCHITECT</span>
                <span className="text-[10px] text-slate-400 block mt-1">Perception & Agents</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">DOMAIN</span>
                <span className="text-cyan-400 font-bold text-sm">ARTIFICIAL INTELLIGENCE</span>
                <span className="text-[10px] text-slate-400 block mt-1">Deep Learning & Vision</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">STATUS</span>
                <span className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  BUILDING ACTIVE
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Continuous Development</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">TIMELINE</span>
                <span className="text-slate-200 font-bold text-sm">ERA 2042</span>
                <span className="text-[10px] text-slate-400 block mt-1">Sector: Earth</span>
              </div>
            </div>
          )}

          {/* TAB 2: Directives */}
          {activeTab === 'directives' && (
            <div className="space-y-3 animate-fade-in">
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-cyan-400 uppercase tracking-widest block font-bold mb-1">
                    PRIMARY DIRECTIVE:
                  </span>
                  <div className="text-white font-heading font-extrabold text-lg sm:text-xl">
                    BUILD INTELLIGENCE.
                  </div>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    Construct computational systems capable of perceiving, reasoning, learning, and acting in the physical world.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-4">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-amber-400 uppercase tracking-widest block font-bold mb-1">
                    SECONDARY DIRECTIVE:
                  </span>
                  <div className="text-slate-200 font-heading font-bold text-lg sm:text-xl">
                    KEEP LEARNING.
                  </div>
                  <p className="text-xs text-slate-400 font-sans mt-1">
                    Never stop breaking assumptions, questioning paradigms, and synthesizing real-world feedback.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Signature Loop */}
          {activeTab === 'specs' && (
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 animate-fade-in">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-4 text-center">
                THE CONTINUOUS ENGINEERING LOOP
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
                {[
                  { step: '01', name: 'RESEARCH', desc: 'Dissect papers & fundamentals' },
                  { step: '02', name: 'BUILD', desc: 'Write robust architectures' },
                  { step: '03', name: 'BREAK', desc: 'Test failure edge cases' },
                  { step: '04', name: 'LEARN', desc: 'Assimilate error metrics' },
                  { step: '05', name: 'SHIP', desc: 'Deploy to production' },
                  { step: '06', name: 'REPEAT', desc: 'Compound intelligence' },
                ].map((item) => (
                  <div key={item.step} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] text-cyan-400 block font-bold">{item.step}</span>
                    <span className="text-xs font-heading font-extrabold text-white block mt-1">{item.name}</span>
                    <span className="text-[9px] text-slate-500 block mt-1">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
