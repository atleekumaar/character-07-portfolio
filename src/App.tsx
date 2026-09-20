import { useState } from 'react';
import { CharacterIntro } from './components/intro/CharacterIntro';
import { CustomCursor } from './components/navigation/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { CommandPalette } from './components/navigation/CommandPalette';
import { DossierChatbot } from './components/chat/DossierChatbot';
import { Hero } from './components/sections/Hero';
import { Origin } from './components/sections/Origin';
import { Abilities } from './components/sections/Abilities';
import { TheMind } from './components/sections/TheMind';
import { MissionLog } from './components/sections/MissionLog';
import { Laboratory } from './components/sections/Laboratory';
import { SystemStack } from './components/sections/SystemStack';
import { MemoryTimeline } from './components/sections/MemoryTimeline';
import { OpenSystem } from './components/sections/OpenSystem';
import { FutureObjectives } from './components/sections/FutureObjectives';
import { CharacterFile } from './components/sections/CharacterFile';
import { ContactOutro } from './components/sections/ContactOutro';

export function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const scrollToMissions = () => {
    const el = document.getElementById('missions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      {/* Cinematic Intro Boot Sequence */}
      {!hasEntered && (
        <CharacterIntro onEnter={() => setHasEntered(true)} />
      )}

      {/* Main Experience Dossier */}
      <CustomCursor />
      
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Floating AI Dossier Chatbot */}
      <DossierChatbot />

      <main className="relative z-10">
        <Hero onExploreMissions={scrollToMissions} />
        <Origin />
        <Abilities />
        <TheMind />
        <MissionLog />
        <Laboratory />
        <SystemStack />
        <MemoryTimeline />
        <OpenSystem />
        <FutureObjectives />
        <CharacterFile />
        <ContactOutro />
      </main>
    </div>
  );
}

export default App;
