import { useState, useEffect, useRef } from 'react';
import { sound } from '../../lib/sound';
import { Bot, X, Send, Sparkles, Terminal, Minimize2, Maximize2, ExternalLink, ArrowRight, User } from 'lucide-react';
import chatbotAvatar from '../../assets/chatbot-avatar.png';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  jumpTarget?: string;
  jumpLabel?: string;
}

const KNOWLEDGE_RESPONSES: {
  keywords: string[];
  response: string;
  jumpTarget?: string;
  jumpLabel?: string;
}[] = [
  {
    keywords: ['who', 'atlee', 'atul', 'character', 'about', 'kon', 'kaun', 'identity', 'profile', 'intro', 'introduction', 'kumaar', 'shukla'],
    response: "Atlee Kumaar (Atul Shukla), codename **CHARACTER-07**, is an **AI Systems Architect** and Computer Science Engineering student specializing in Artificial Intelligence. His mission is to build intelligent systems capable of perceiving, reasoning, learning, and acting in the physical and digital world.",
    jumpTarget: '#character-file',
    jumpLabel: 'VIEW CHARACTER FILE'
  },
  {
    keywords: ['bharat', 'bharat-x', 'indic', 'manuscript', 'heritage', 'sanskrit', 'ocr', 'msn-002', 'cultural'],
    response: "**BHĀRAT-X** (MSN-002) is an Advanced AI Foundation for Historical Indic Manuscripts & Cultural Heritage. Key verified metrics include:\n• **94.80% OCR Accuracy** on degraded historical folios\n• **4 / 4 Execution Phases** (Ingestion to Knowledge Graph)\n• **38.2 ms/page** high-throughput neural inference\n• Supports Devanagari, Grantha, Brahmi, and historical Indic scripts.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE BHĀRAT-X'
  },
  {
    keywords: ['tumor', 'mri', 'brain', 'medical', 'cancer', 'glioma', 'meningioma', 'pituitary', 'msn-003', 'clinical', 'radiology'],
    response: "**BRAIN TUMOR MRI NEURAL CLASSIFIER** (MSN-003) is a clinical-grade medical AI diagnostics system:\n• **98.20% Diagnostic Accuracy** across 4 pathology classes\n• **18.40 ms** inference latency\n• **96.50% Grad-CAM Heatmap Localization** agreement with certified radiologists.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE BRAIN TUMOR CLASSIFIER'
  },
  {
    keywords: ['rag', 'retrieval', 'personalized', 'chatbot', 'vector', 'embeddings', 'hnsw', 'msn-004', 'context'],
    response: "**PERSONALIZED CONTEXT-AWARE RAG SYSTEM** (MSN-004) fuses dense vector retrieval with dynamic user persona state machines:\n• **<12 ms Vector Retrieval** across 100k+ embedded documents\n• **96.40% Top-3 Precision** with cross-encoder re-ranking\n• **88.50% Hallucination Reduction** compared to vanilla LLMs.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE RAG SYSTEM'
  },
  {
    keywords: ['vyapar', 'vyaparmitra', 'retail', 'merchant', 'dukaan', 'invoice', 'ledger', 'voice', 'msn-005', 'business'],
    response: "**VYAPARMITRA** (MSN-005) is an AI Business Assistant for Indian Retail Merchants:\n• **95.20% Vernacular Intent Accuracy** (Hindi, Hinglish)\n• **1.15s** automated receipt OCR to ledger calculation\n• **100% Deterministic** double-entry bookkeeping validation.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE VYAPARMITRA'
  },
  {
    keywords: ['slm', 'small language model', 'jax', 'keras', 'scratch', '3.5m', 'transformer', 'msn-006', 'pretrain'],
    response: "**NEURAL SLM (3.5M PARAMETERS)** (MSN-006) is a lightweight causal Transformer built completely from scratch:\n• **3.5M Parameters** with RoPE + SwiGLU + RMSNorm\n• **JAX / Keras 3** JIT-compiled high-throughput pre-training\n• Full custom autoregressive tokenizer & sampling runtime.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE NEURAL SLM'
  },
  {
    keywords: ['kimi', 'k3', 'kda', 'gated mla', 'mla', 'moe', 'latent moe', 'attnres', 'msn-007'],
    response: "**KIMI K3 ARCHITECTURE RESEARCH** (MSN-007) is a PyTorch reproduction of frontier reasoning attention mechanisms:\n• **4x KV Cache Compression** via Gated Multi-Head Latent Attention (MLA)\n• **Kernel Dense Attention (KDA)** for sub-quadratic context scaling\n• **99.70% Expert Load Balancing** in Stable Latent MoE.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE KIMI K3 REPRODUCTION'
  },
  {
    keywords: ['netra', 'surveillance', 'vision', 'tracking', 'camera', 'yolo', 'mot', 'msn-008'],
    response: "**NETRA** (MSN-008) is an Edge Multimodal Perception Engine:\n• **60+ FPS Real-Time Video Throughput** on edge GPUs\n• **15.8 ms** detection and spatial anomaly classification\n• **98.60% Identity Tracking Retention** across occlusions.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE NETRA'
  },
  {
    keywords: ['agentvault', 'agent vault', 'sandbox', 'control plane', 'msn-009', 'agent infra'],
    response: "**AGENTVAULT** (MSN-009) is an Autonomous Agent Control Plane & Sandbox Runtime:\n• Containerized Docker/WASM sandboxed tool execution\n• Graph-based state machine orchestrators with automated checkpoint rollbacks\n• Two-tier episodic vector memory core.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE AGENTVAULT'
  },
  {
    keywords: ['lidar', 'mission', 'project', '52.05', 'benchmark', 'fps', 'msn-001', 'perception', 'foveated', 'point cloud', 'spvcnn', 'kaam', 'projects'],
    response: "Mission 001 is **FOVEATED 2.5D LiDAR MAPPING** for autonomous navigation. Key verified hardware benchmarks include:\n• **52.05% mIoU** on semantic point cloud segmentation\n• **23.37 ms** latency\n• **42.79 FPS** real-time throughput\n• **99.93%** prediction agreement\n• **0 / 100** dropped frames in stress testing\nBuilt with PyTorch, CUDA, Open3D, OpenCV, SPVCNN, and PointNet++.",
    jumpTarget: '#missions',
    jumpLabel: 'EXPLORE MISSION 001'
  },
  {
    keywords: ['skills', 'abilities', 'tech', 'stack', 'technologies', 'python', 'tools', 'languages', 'kya aata hai', 'capabilities', 'talent'],
    response: "CHARACTER-07's core abilities span 6 engineering dimensions:\n1. **PERCEPTION**: Computer Vision, LiDAR, Point Clouds, Open3D, OpenCV\n2. **REASONING**: Deep Learning, Transformers, LLMs, PyTorch, CUDA\n3. **MEMORY**: RAG, Vector Databases (HNSW), Dense Embeddings\n4. **ACTION**: AI Agents, Tool Calling, Agentic State Machines\n5. **CONSTRUCTION**: Python, C++, JavaScript/TypeScript, React, FastAPI, PostgreSQL\n6. **DEPLOYMENT**: Docker, Cloud (AWS), MLOps, CI/CD.",
    jumpTarget: '#abilities',
    jumpLabel: 'INSPECT ABILITIES'
  },
  {
    keywords: ['mind', 'philosophy', 'loop', 'cognitive', 'perceive', 'reason', 'think', 'thought', 'logic'],
    response: "Atlee's core engineering philosophy is:\n> *“I don't predict the future. I build systems that make it possible.”*\n\nHis living cognitive architecture follows the 6-step loop: **PERCEIVE → UNDERSTAND → REASON → DECIDE → ACT → LEARN**, with the signature development cycle: **RESEARCH → BUILD → BREAK → LEARN → SHIP → REPEAT**.",
    jumpTarget: '#the-mind',
    jumpLabel: 'VIEW COGNITIVE FLOW'
  },
  {
    keywords: ['contact', 'hire', 'linkedin', 'github', 'email', 'connect', 'reach', 'message', 'baat', 'sampark', 'social'],
    response: "You can connect directly with Atlee Kumaar through his authenticated official channels:\n• **GitHub**: [github.com/atleekumaar](https://github.com/atleekumaar)\n• **LinkedIn**: [linkedin.com/in/atul-shukla-105341383](https://www.linkedin.com/in/atul-shukla-105341383)\n\nHe is open for high-impact AI systems architecture, point cloud perception research, and autonomous agent engineering opportunities.",
    jumpTarget: '#contact',
    jumpLabel: 'OPEN MISSION CONTROL'
  },
  {
    keywords: ['lab', 'experiments', 'research', 'hypothesis', 'exp-014', 'exp-021', 'ongoing'],
    response: "In **THE LAB**, active experiments include:\n• **EXP-014**: Agent Memory & Context Persistence (Running)\n• **EXP-021**: Foveated Voxel Density Adaptation (Verified: 64.2% memory reduction)\n• **EXP-009**: Latent Embedding Quantization (Verified: 98.4% precision retained)\n• **EXP-033**: Stochastic Multi-modal Tool Dispatch (In Progress).",
    jumpTarget: '#laboratory',
    jumpLabel: 'ENTER THE LAB'
  },
  {
    keywords: ['future', '2042', 'objective', 'next', 'roadmap', 'autonomous', 'vision'],
    response: "The next horizon of CHARACTER-07 (ERA 2042) is moving from models → systems → agents → **AUTONOMOUS INTELLIGENCE**. Key objectives include:\n1. **Intelligent Agents**: Autonomous state machines with zero hallucination.\n2. **Autonomous Systems**: Real-world world modeling & 3D perception-to-action.\n3. **AI Infrastructure**: Distributed edge runtimes with sub-30ms inference guarantees.",
    jumpTarget: '#future',
    jumpLabel: 'VIEW FUTURE OBJECTIVES'
  }
];

export const DossierChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: "Greetings. I am the **C-07 AI DOSSIER AGENT**. Ask me anything about Atlee Kumaar (Atul Shukla) — his AI architecture, verified LiDAR benchmarks, tech stack, lab experiments, or how to connect.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    "Who is Atlee Kumaar?",
    "Tell me about Mission 001 LiDAR",
    "What are his Core Abilities?",
    "How to contact him?",
    "What is his AI philosophy?"
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    sound.playTelemetry();

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // AI Knowledge Retrieval Logic
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedResponse = KNOWLEDGE_RESPONSES.find((item) =>
        item.keywords.some((kw) => lowerQuery.includes(kw))
      );

      let replyText = "I received your query. Atlee Kumaar is an AI Systems Architect specializing in 3D perception, multi-agent reasoning, and scalable AI infrastructure. You can explore his verified missions, abilities, and GitHub repositories in the dossier navigation.";
      let jumpTarget: string | undefined;
      let jumpLabel: string | undefined;

      if (matchedResponse) {
        replyText = matchedResponse.response;
        jumpTarget = matchedResponse.jumpTarget;
        jumpLabel = matchedResponse.jumpLabel;
      } else if (lowerQuery.includes('hi') || lowerQuery.includes('hello') || lowerQuery.includes('hey') || lowerQuery.includes('namaste')) {
        replyText = "Hello! I am ready to brief you on Atlee's technical journey, verified project metrics, research lab, or future autonomous intelligence roadmap. What would you like to inspect?";
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        jumpTarget,
        jumpLabel
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      sound.playClick(600);
    }, 700);
  };

  const handleJump = (target?: string) => {
    if (!target) return;
    sound.playClick();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Launcher Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
          <button
            onClick={() => {
              sound.playTelemetry();
              setIsOpen(true);
              setIsMinimized(false);
            }}
            onMouseEnter={() => sound.playHover()}
            className="group relative flex items-center gap-3 px-4 py-3 bg-[#080c14] border border-cyan-500/60 hover:border-cyan-400 rounded-full shadow-2xl shadow-cyan-950/80 text-white font-mono text-xs cursor-pointer transition-all hover:scale-105"
            data-cursor="AI BOT"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-cyan-950/80 border border-cyan-400/80 flex items-center justify-center overflow-hidden p-0.5 shadow-[0_0_12px_rgba(6,182,212,0.45)]">
                <img src={chatbotAvatar} alt="AI Assistant" className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(6,182,212,0.7)] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 border-2 border-[#080c14] animate-pulse" />
            </div>

            <div className="text-left hidden sm:block">
              <div className="text-[11px] font-bold text-cyan-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                <span>C-07 AI ASSISTANT</span>
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="text-[9px] text-slate-400">Ask anything about Atlee</div>
            </div>
          </button>
        </div>
      )}

      {/* Main Chatbot Interface Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] bg-[#070a12] border border-cyan-500/50 rounded-2xl shadow-2xl shadow-cyan-950/80 font-mono flex flex-col overflow-hidden transition-all duration-300 ${
            isMinimized ? 'h-[64px]' : 'h-[560px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan-950/80 border border-cyan-400/80 flex items-center justify-center overflow-hidden p-0.5 shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                <img src={chatbotAvatar} alt="AI Assistant" className="w-full h-full object-contain drop-shadow-[0_0_4px_rgba(6,182,212,0.6)]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>C-07 DOSSIER AGENT</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    ONLINE
                  </span>
                </div>
                <div className="text-[9px] text-slate-400">CHARACTER-07 KNOWLEDGE CORE</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-[#070a12] to-[#04060a] text-xs font-sans">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono mb-1">
                      {msg.sender === 'user' ? (
                        <>
                          <span>VISITOR</span>
                          <span>•</span>
                          <span>{msg.timestamp}</span>
                        </>
                      ) : (
                        <>
                          <img src={chatbotAvatar} alt="C-07" className="w-3.5 h-3.5 object-contain inline-block drop-shadow-[0_0_4px_rgba(6,182,212,0.6)]" />
                          <span className="text-cyan-400 font-bold">C-07 AGENT</span>
                          <span>•</span>
                          <span>{msg.timestamp}</span>
                        </>
                      )}
                    </div>

                    <div
                      className={`p-3.5 rounded-2xl max-w-[90%] leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-cyan-950/40 text-slate-100 border border-cyan-500/40 rounded-tr-none'
                          : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none font-sans whitespace-pre-line shadow-md'
                      }`}
                    >
                      {msg.text}

                      {/* Optional Interactive Section Jump Link */}
                      {msg.jumpTarget && (
                        <div className="mt-3 pt-2 border-t border-slate-800 flex justify-end">
                          <button
                            onClick={() => handleJump(msg.jumpTarget)}
                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/50 px-2.5 py-1 rounded cursor-pointer transition-all"
                          >
                            <span>[{msg.jumpLabel || 'JUMP TO SECTION'}]</span>
                            <ArrowRight className="w-3 h-3 text-cyan-400" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-slate-500 text-[10px] ml-1">RETRIEVING DOSSIER EMBEDDINGS...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="p-2 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto flex gap-1.5 no-scrollbar">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-[10px] font-mono text-slate-400 hover:text-cyan-300 transition-all shrink-0 cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 font-mono"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Atlee, LiDAR, abilities, contact..."
                  className="flex-1 bg-slate-900/80 border border-slate-800 focus:border-cyan-500/60 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-30 border border-cyan-500/50 text-cyan-300 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};
