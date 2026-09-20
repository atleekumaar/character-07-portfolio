import React, { useState, useEffect } from 'react';
import { sound } from '../../lib/sound';
import { ArrowRight, Zap } from 'lucide-react';

interface CharacterIntroProps {
  onEnter: () => void;
}

export const CharacterIntro: React.FC<CharacterIntroProps> = ({ onEnter }) => {
  const [step, setStep] = useState<number>(0);
  const [diagnosticLogs, setDiagnosticLogs] = useState<string[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    // Step 0: Cursor blink
    const t0 = setTimeout(() => {
      setStep(1);
      sound.playClick(400);
    }, 600);

    // Step 1: Type CHARACTER-07
    const t1 = setTimeout(() => {
      setStep(2);
      sound.playBootSweep();
    }, 1400);

    // Step 2: Diagnostic checks
    const t2 = setTimeout(() => {
      setDiagnosticLogs([
        'IDENTITY ........ VERIFIED',
        'MEMORY .......... ONLINE',
        'SYSTEMS ......... ONLINE',
        'MISSIONS ........ LOADED',
        'RESEARCH ........ ACTIVE'
      ]);
      sound.playTelemetry();
      setStep(3);
    }, 2500);

    // Step 3: Status Active & Ready
    const t3 = setTimeout(() => {
      setIsReady(true);
      setStep(4);
      sound.playTelemetry();
    }, 3600);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleEnterClick = () => {
    sound.playBootSweep();
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#05070a] flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      {/* Background Subtle Grid & Scanline */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
      <div className="absolute inset-0 vignette pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="absolute top-6 left-8 right-8 flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-400 font-semibold tracking-wider">NEURAL LINK // ESTABLISHED</span>
        </div>
        <div className="flex items-center gap-6">
          <span>ERA: 2042</span>
          <span>SYSTEM PROTOCOL: SECURE-07</span>
          <button
            onClick={handleEnterClick}
            className="text-slate-400 hover:text-cyan-400 underline transition-colors cursor-pointer"
          >
            [ FAST BYPASS ]
          </button>
        </div>
      </div>

      {/* Main Terminal Dossier Container */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-start font-mono">
        {/* Step 0: Blinking Cursor */}
        {step >= 0 && (
          <div className="text-cyan-400 text-lg mb-4 flex items-center gap-2">
            <span className="text-slate-600">&gt;</span>
            <span className="text-slate-400 text-sm">INITIALIZING DOSSIER QUERY:</span>
            <span className="animate-pulse text-cyan-400 font-bold">_</span>
          </div>
        )}

        {/* Step 1 & 2: Reveal Codename & Title */}
        {step >= 1 && (
          <div className="space-y-2 border-l-2 border-cyan-500/50 pl-5 my-3 animate-fade-in">
            <div className="text-xs text-cyan-400 tracking-widest uppercase font-semibold flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> DESIGNATION IDENTIFIER
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
              CHARACTER-07
            </h1>
            <div className="text-xl sm:text-2xl text-slate-300 font-mono tracking-wide">
              ATLEE KUMAAR
            </div>
            <div className="text-xs sm:text-sm text-cyan-400/90 font-mono tracking-widest uppercase flex items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              AI SYSTEMS ARCHITECT
            </div>
          </div>
        )}

        {/* Step 3: Diagnostic Telemetry Logs */}
        {step >= 3 && (
          <div className="w-full bg-slate-950/60 border border-slate-800/80 rounded p-4 my-5 space-y-1.5 text-xs text-slate-300 font-mono shadow-xl backdrop-blur-md">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1 flex justify-between">
              <span>SYSTEM SUBSYSTEMS INTEGRITY CHECK</span>
              <span className="text-cyan-400">100% OK</span>
            </div>
            {diagnosticLogs.map((log, idx) => (
              <div key={idx} className="flex justify-between items-center text-slate-400">
                <span>{log.split(' ')[0]}</span>
                <span className="text-slate-600">........................</span>
                <span className="text-cyan-400 font-bold tracking-wider">{log.split(' ').pop()}</span>
              </div>
            ))}
          </div>
        )}

        {/* Step 4: Status Active & Enter Button */}
        {isReady && (
          <div className="w-full space-y-6 animate-fade-in pt-2">
            <div className="flex items-center justify-between p-3 rounded bg-cyan-950/20 border border-cyan-500/30 text-xs">
              <span className="text-slate-400">CHARACTER STATUS:</span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </span>
            </div>

            <button
              onClick={handleEnterClick}
              onMouseEnter={() => sound.playHover()}
              className="group relative w-full py-4 px-6 bg-gradient-to-r from-cyan-950/40 via-cyan-900/30 to-slate-900/40 hover:from-cyan-500/20 hover:to-cyan-400/20 border border-cyan-500/50 hover:border-cyan-400 rounded-lg text-white font-mono text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span className="relative z-10 font-bold text-cyan-300 group-hover:text-white transition-colors">
                [ ENTER THE CHARACTER ]
              </span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Footer Telemetry */}
      <div className="absolute bottom-6 text-[10px] font-mono text-slate-600 tracking-wider">
        DISCOVERING DIGITAL IDENTITY ARCHIVE // DOSSIER 07-AK
      </div>
    </div>
  );
};
