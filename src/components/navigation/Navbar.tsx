import React, { useState, useEffect } from 'react';
import { sound } from '../../lib/sound';
import { Volume2, VolumeX, Menu, X, Command } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      sound.playTelemetry();
    }
  };

  const navLinks = [
    { label: 'ORIGIN', href: '#origin' },
    { label: 'ABILITIES', href: '#abilities' },
    { label: 'MISSIONS', href: '#missions' },
    { label: 'LAB', href: '#laboratory' },
    { label: 'MEMORY', href: '#memory' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070a]/90 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Top Left: Designation & Status */}
        <a
          href="#hero"
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 group"
          data-cursor="CHARACTER"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all">
            07
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-widest text-sm text-white group-hover:text-cyan-300 transition-colors">
              CHARACTER-07
            </span>
            <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ACTIVE // 2042
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              onMouseEnter={() => sound.playHover()}
              className="text-xs font-mono tracking-widest text-slate-400 hover:text-cyan-300 transition-colors py-1 relative group"
              data-cursor="GOTO"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Side: Command & Sound Controls */}
        <div className="flex items-center gap-3">
          {/* Quick HUD command trigger */}
          <button
            onClick={() => {
              sound.playTelemetry();
              onOpenCommandPalette();
            }}
            onMouseEnter={() => sound.playHover()}
            title="Open Command Palette (Ctrl+K)"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-all cursor-pointer"
            data-cursor="SEARCH"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300">HUD</span>
            <kbd className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">
              Ctrl+K
            </kbd>
          </button>

          {/* Sound Mute/Unmute */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => sound.playHover()}
            className="p-2 rounded bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer"
            title={isMuted ? 'Unmute telemetry audio' : 'Mute telemetry audio'}
            data-cursor={isMuted ? 'UNMUTE' : 'MUTE'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            )}
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#05070a]/95 backdrop-blur-xl border-b border-slate-800 p-6 font-mono space-y-4 shadow-2xl animate-fade-in">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">
            DOSSIER NAVIGATION DIRECTORY
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-mono tracking-wider text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-900 flex justify-between items-center"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-600">&gt;&gt;</span>
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCommandPalette();
            }}
            className="w-full py-2.5 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs flex items-center justify-center gap-2"
          >
            <Command className="w-4 h-4" /> OPEN COMMAND HUD
          </button>
        </div>
      )}
    </header>
  );
};
