import React from 'react';
import { sound } from '../../lib/sound';
import { HelpCircle, Flame, Repeat, Target } from 'lucide-react';

export const Origin: React.FC = () => {
  const loopSteps = [
    { name: 'RESEARCH', desc: 'Dissect foundations & papers' },
    { name: 'BUILD', desc: 'Construct working architectures' },
    { name: 'BREAK', desc: 'Stress-test edge limits & failures' },
    { name: 'LEARN', desc: 'Synthesize telemetry feedback' },
    { name: 'SHIP', desc: 'Deploy verified production code' },
    { name: 'REPEAT', desc: 'Compound systemic cognition' },
  ];

  return (
    <section id="origin" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
        <span className="w-6 h-[1px] bg-cyan-400" />
        <span>01 // ORIGIN DOSSIER</span>
      </div>

      {/* Large Statement */}
      <div className="mb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white uppercase leading-none max-w-4xl">
          EVERY SYSTEM <br />
          <span className="text-slate-500">STARTS WITH</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
            A QUESTION.
          </span>
        </h2>
      </div>

      {/* Character Origin Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Column: Origin Story Cards */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: The Question */}
          <div className="p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              THE QUESTION
            </div>
            <p className="text-lg sm:text-xl font-heading font-bold text-white mb-2">
              “How do we make machines understand the world?”
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Not through shallow imitation or synthetic facades, but through mathematically grounded representations of physical environments, high-dimensional manifolds, and cognitive causality.
            </p>
          </div>

          {/* Card 2: The Obsession */}
          <div className="p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold">
              <Flame className="w-4 h-4 text-cyan-400" />
              THE OBSESSION
            </div>
            <p className="text-lg sm:text-xl font-heading font-bold text-white mb-2">
              Computational Intelligence as an Engineering Reality
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Atlee is a Computer Science Engineering student specializing in Artificial Intelligence. His work spans the full spectrum of modern machine intelligence: deep learning, transformer architectures, large language models, autonomous AI agents, computer vision, robotics simulation, cloud infrastructure, and 3D point cloud perception.
            </p>
          </div>

          {/* Card 3: The Transformation */}
          <div className="p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold">
              <Repeat className="w-4 h-4 text-cyan-400" />
              THE TRANSFORMATION
            </div>
            <div className="space-y-3 font-mono text-xs pt-1">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>01. Writing deterministic code</span>
              </div>
              <div className="text-slate-600 pl-4">&darr;</div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>02. Training and fine-tuning neural models</span>
              </div>
              <div className="text-slate-600 pl-4">&darr;</div>
              <div className="flex items-center gap-3 text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>03. Constructing production-grade intelligent systems</span>
              </div>
              <div className="text-slate-600 pl-4">&darr;</div>
              <div className="flex items-center gap-3 text-white font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>04. Designing closed-loop autonomous agents & perception pipelines</span>
              </div>
            </div>
          </div>

          {/* Card 4: Current Objective */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-950/30 to-slate-900/40 border border-cyan-500/40">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-2 font-semibold">
              <Target className="w-4 h-4 text-cyan-400" />
              THE CURRENT OBJECTIVE
            </div>
            <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
              Build AI systems that move beyond passive prediction and into <strong className="text-cyan-300">perception</strong>, <strong className="text-cyan-300">reasoning</strong>, and verifiable <strong className="text-cyan-300">action</strong> in the real world.
            </p>
          </div>
        </div>

        {/* Right Column: Character Archetype & Signature Loop */}
        <div className="lg:col-span-5 space-y-6">
          {/* Archetype Dossier Panel */}
          <div className="p-6 rounded-xl glass-panel border border-slate-800">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center justify-between border-b border-slate-800 pb-2">
              <span>CHARACTER ARCHETYPE</span>
              <span className="text-cyan-400 font-bold">#07-BUILDER</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-slate-500 block text-[10px]">CORE TRAIT:</span>
                <span className="text-slate-200 font-semibold">
                  Curiosity &rarr; Experimentation &rarr; Engineering &rarr; Deployment
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px]">ENGINEERING PARADIGM:</span>
                <span className="text-slate-300">
                  Empirical verification over speculative assumption. Systems over single-turn prompts.
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px]">OPERATIONAL STATUS:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE RESEARCH & DEVELOPMENT
                </span>
              </div>
            </div>
          </div>

          {/* The Signature Loop */}
          <div className="p-6 rounded-xl glass-panel border border-cyan-500/20">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4 flex items-center gap-2">
              <Repeat className="w-4 h-4 text-cyan-400" />
              THE SIGNATURE LOOP
            </div>

            <div className="space-y-2">
              {loopSteps.map((step, idx) => (
                <div
                  key={step.name}
                  onMouseEnter={() => sound.playHover()}
                  className="p-2.5 rounded bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-300">
                      {step.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-400">
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
