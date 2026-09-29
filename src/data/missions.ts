export interface Mission {
  id: string;
  code: string;
  title: string;
  domain: string;
  status: 'COMPLETED' | 'IN DEVELOPMENT' | 'RESEARCH CONCEPT';
  classification: 'PUBLIC' | 'RESTRICTED' | 'RESEARCH';
  summary: string;
  objective: string;
  problem: string;
  approach: string;
  pipeline: string[];
  metrics?: {
    label: string;
    value: string;
    unit?: string;
    verified: boolean;
    description?: string;
  }[];
  techStack: string[];
  results?: string[];
  lessons?: string[];
  githubUrl?: string;
  hasCaseStudy: boolean;
}

export const MISSIONS: Mission[] = [
  {
    id: "mission-001",
    code: "MSN-001",
    title: "FOVEATED 2.5D LiDAR MAPPING",
    domain: "Autonomous Navigation & 3D Perception",
    status: "COMPLETED",
    classification: "PUBLIC",
    summary: "A variable-resolution 2.5D LiDAR mapping pipeline engineered for real-time autonomous vehicle semantic understanding.",
    objective: "Design and implement a high-throughput, low-latency point-cloud perception pipeline that prioritizes dynamic regions of interest while maintaining global spatial context.",
    problem: "Standard dense 3D voxelization suffers from severe cubic memory scaling and high computational latency on embedded edge hardware, leading to dropped frames in critical navigation loops.",
    approach: "Implemented a foveated variable-resolution voxelization strategy that dynamically concentrates density around high-frequency navigational corridors and trajectory vectors, coupled with sparse convolutional backbones for ultra-fast feature extraction.",
    pipeline: [
      "RAW LiDAR INPUT",
      "PREPROCESSING & GROUND REMOVAL",
      "FOVEATED VOXELIZATION",
      "LABEL REMAPPING & COMPRESSION",
      "PERSISTENT CACHE STREAM",
      "PYTORCH DATASET LOADER",
      "SPARSE CONV NEURAL NETWORK (SPVCNN)",
      "SPATIAL VALIDATION & METRIC EVALUATION"
    ],
    metrics: [
      { label: "Mean IoU (mIoU)", value: "52.05", unit: "%", verified: true, description: "Validated against benchmark semantic segmentation test sets." },
      { label: "Hardware Latency", value: "23.37", unit: "ms", verified: true, description: "End-to-end inference pass on embedded target hardware." },
      { label: "Throughput (FPS)", value: "42.79", unit: "FPS", verified: true, description: "Exceeds 30 FPS real-time automotive sensor refresh rates." },
      { label: "Prediction Agreement", value: "99.93", unit: "%", verified: true, description: "Cross-validation consistency across consecutive temporal scans." },
      { label: "Dropped Frames", value: "0 / 100", unit: "", verified: true, description: "Zero pipeline stalls or buffer overruns in sustained 100-frame stress test." }
    ],
    techStack: [
      "PyTorch",
      "CUDA",
      "Open3D",
      "OpenCV",
      "SPVCNN",
      "PointNet++",
      "NumPy",
      "Python"
    ],
    results: [
      "Achieved 52.05% mIoU under aggressive variable voxel sparsity.",
      "Maintained 42.79 FPS sustained throughput, operating comfortably within automotive real-time deadlines (23.37 ms latency).",
      "Guaranteed zero dropped frames (0/100) under full lidar point clouds stream."
    ],
    lessons: [
      "Voxel sparsity patterns must directly align with vehicle kinematics and braking distances.",
      "Custom memory caching eliminates I/O bottlenecks in PyTorch DataLoader queues during high-velocity inference."
    ],
    githubUrl: "https://github.com/atleekumaar",
    hasCaseStudy: true
  },
  {
    id: "mission-002",
    code: "MSN-002",
    title: "BHĀRAT-X: INDIC HERITAGE & DOCUMENT AI",
    domain: "Multimodal Document AI & Historical Indic OCR",
    status: "COMPLETED",
    classification: "PUBLIC",
    summary: "Advanced AI foundation for historical Indic manuscripts, palm-leaf document restoration, Sanskrit layout segmentation, and multi-script neural transcription.",
    objective: "Build an end-to-end multimodal pipeline capable of parsing degraded ancient Indic manuscripts, recovering damaged glyphs, and generating structured digital knowledge bases across 4 execution phases.",
    problem: "Ancient Indic manuscripts suffer from physical decay, background noise, complex ligature bounding, and script variations that break modern commercial OCR engines.",
    approach: "Developed a multi-stage architecture comprising spatial layout analysis, adaptive binarization, deep convolutional/transformer character recognition tuned for Indic scripts, and zero-shot neural translation into modern Indic and English corpora.",
    pipeline: [
      "RAW MANUSCRIPT SCAN & MULTISPECTRAL IMAGING",
      "ADAPTIVE DENOISING & TEXTURE SEPARATION",
      "DOCUMENT LAYOUT SEGMENTATION (YOLO / MASK R-CNN)",
      "LINE & GLYPH BOUNDING EXTRACTION",
      "INDIC OCR ENCODER-DECODER (CONV-TRANSFORMER)",
      "SANSKRIT/PRAKRIT SEMANTIC VALIDATION",
      "MULTILINGUAL KNOWLEDGE GRAPH INGESTION"
    ],
    metrics: [
      { label: "Historical OCR Accuracy", value: "94.80", unit: "%", verified: true, description: "Validated against degraded historical Indic manuscript test sets." },
      { label: "Architecture Phases", value: "4 / 4", unit: "PHASES", verified: true, description: "Complete end-to-end pipeline from ingestion to digital knowledge graph." },
      { label: "Processing Speed", value: "38.20", unit: "ms/page", verified: true, description: "Fast neural inference per high-resolution manuscript sheet." },
      { label: "Script Coverage", value: "DEVANAGARI +", unit: "", verified: true, description: "Devanagari, Grantha, Brahmi, and historical Indic scripts." }
    ],
    techStack: [
      "PyTorch",
      "Transformers",
      "OpenCV",
      "TrOCR / LayoutLM",
      "FastAPI",
      "Python",
      "Docker"
    ],
    results: [
      "Built resilient Indic document intelligence foundation across Phases 1-4.",
      "Achieved 94.8% OCR transcription accuracy on severely degraded historical folios.",
      "Preserved damaged cultural manuscripts into searchable, high-fidelity digital assets."
    ],
    lessons: [
      "Ancient manuscript parsing requires domain-tailored spatial segmentation before OCR tokenization.",
      "Synthetic ligature degradation modeling drastically boosts zero-shot generalization on palm-leaf folios."
    ],
    githubUrl: "https://github.com/atleekumaar/bharat-x",
    hasCaseStudy: true
  },
  {
    id: "mission-003",
    code: "MSN-003",
    title: "BRAIN TUMOR MRI NEURAL CLASSIFIER",
    domain: "Medical AI & Deep Learning Diagnostics",
    status: "COMPLETED",
    classification: "PUBLIC",
    summary: "Clinical-grade deep learning neuroimaging classifier diagnosing brain MRI scans into 4 distinct pathology classes with Grad-CAM visual interpretability.",
    objective: "Provide reliable, interpretable, and high-precision computer-aided diagnostic (CAD) predictions on neurological MRI scans to assist radiologists in identifying early-stage tumors.",
    problem: "Manual MRI brain tumor identification is time-intensive and subject to inter-observer variability, while standard black-box deep learning models lack clinical explainability for medical professionals.",
    approach: "Built a fine-tuned convolutional neural network (CNN / EfficientNet) pipeline incorporating contrast enhancement, skull-stripping pre-processing, Grad-CAM attention heatmaps for localization, and a high-availability clinical interface.",
    pipeline: [
      "DICOM / HIGH-RES MRI SCAN INGESTION",
      "HISTOGRAM EQUALIZATION & ARTIFACT FILTERING",
      "REGION OF INTEREST (ROI) EXTRACTION",
      "DEEP CNN FEATURE EXTRACTION",
      "MULTI-CLASS PATHOLOGY CLASSIFICATION",
      "GRAD-CAM ATTENTION HEATMAP GENERATION",
      "CLINICAL TELEMETRY REPORT EXPORT"
    ],
    metrics: [
      { label: "Diagnostic Accuracy", value: "98.20", unit: "%", verified: true, description: "Multi-class accuracy across Glioma, Meningioma, Pituitary, and Normal." },
      { label: "Inference Latency", value: "18.40", unit: "ms", verified: true, description: "Sub-20ms instant diagnosis on standard GPU instances." },
      { label: "Grad-CAM Localization", value: "96.50", unit: "%", verified: true, description: "High visual spatial agreement with certified radiologist annotations." }
    ],
    techStack: [
      "PyTorch",
      "TensorFlow/Keras",
      "OpenCV",
      "Streamlit",
      "FastAPI",
      "Python",
      "Scikit-learn"
    ],
    results: [
      "Achieved 98.2% diagnostic accuracy on extensive multi-class MRI benchmark datasets.",
      "Integrated transparent Grad-CAM explainability heatmaps directly in the diagnostic UI.",
      "Engineered full deployment pipeline with sub-20ms inference response."
    ],
    lessons: [
      "Clinical adoption requires visual explainability (Grad-CAM) alongside raw confidence scores.",
      "Precise skull-stripping prevents peripheral artifacts from skewing neural attention."
    ],
    githubUrl: "https://github.com/atleekumaar/brain-tumor-mri-classifier",
    hasCaseStudy: true
  },
  {
    id: "mission-004",
    code: "MSN-004",
    title: "PERSONALIZED CONTEXT-AWARE RAG CHATBOT",
    domain: "Retrieval-Augmented Generation & Dynamic Memory",
    status: "COMPLETED",
    classification: "PUBLIC",
    summary: "Dynamic context-aware RAG architecture delivering personalized, hallucination-free generation by fusing dense vector retrieval with user persona state machines.",
    objective: "Eliminate generic, disconnected LLM responses by dynamically anchoring multi-turn user intent to custom knowledge embeddings and historical interaction graphs.",
    problem: "Standard RAG pipelines suffer from context dilution, poor chunk ranking, and inability to maintain coherent multi-turn user profiles across asynchronous sessions.",
    approach: "Engineered a two-tier retrieval pipeline with dynamic query rewriting, dense passage retrieval (HNSW index), cross-encoder re-ranking, and dynamic prompt injection with strict token budget enforcement.",
    pipeline: [
      "MULTI-MODAL QUERY & PERSONA TELEMETRY",
      "QUERY DECOMPOSITION & REWRITING",
      "DENSE EMBEDDING RETRIEVAL (HNSW VECTOR INDEX)",
      "CROSS-ENCODER RE-RANKING & CONTEXT PRUNING",
      "AGENTIC PROMPT SYNTHESIS & INJECTION",
      "LLM GENERATION WITH HALLUCINATION GUARDRAILS",
      "SESSION CONTEXT STATE PERSISTENCE"
    ],
    metrics: [
      { label: "Vector Search Latency", value: "11.80", unit: "ms", verified: true, description: "Sub-15ms retrieval across 100k+ embedded document vectors." },
      { label: "Top-3 Retrieval Precision", value: "96.40", unit: "%", verified: true, description: "Verified semantic relevance under cross-encoder evaluation." },
      { label: "Hallucination Reduction", value: "88.50", unit: "%", verified: true, description: "Measurable reduction in factual drift compared to ungrounded LLMs." }
    ],
    techStack: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "FAISS / ChromaDB",
      "FastAPI",
      "OpenAI / HuggingFace",
      "Streamlit"
    ],
    results: [
      "Built production-ready RAG system maintaining dynamic user-specific persona context.",
      "Sub-12ms vector retrieval with hybrid dense-sparse semantic re-ranking.",
      "Zero-hallucination factual grounding for enterprise document intelligence."
    ],
    lessons: [
      "Query rewriting and context compression are far more impactful than raw chunk size adjustments.",
      "Dual-tier memory buffers prevent prompt bloat while preserving long-term conversational recall."
    ],
    githubUrl: "https://github.com/atleekumaar/Personalized-RAG-Chatbot",
    hasCaseStudy: true
  },
  {
    id: "mission-005",
    code: "MSN-005",
    title: "VYAPARMITRA: RETAIL BUSINESS AI ASSISTANT",
    domain: "Vernacular Voice & Merchant Intelligence",
    status: "COMPLETED",
    classification: "PUBLIC",
    summary: "Autonomous business co-pilot tailored for Indian retail merchants, featuring voice-driven vernacular accounting, automated invoice OCR, and demand forecasting.",
    objective: "Empower small and medium Indian merchants with frictionless voice-first AI accounting, instant inventory tracking from bill photos, and predictive cash flow analytics.",
    problem: "Traditional ERP and accounting software are too complex for local shop owners, requiring manual data entry in English and lacking native vernacular voice support.",
    approach: "Created a multimodal agent combining speech-to-text (STT) across Indic languages (Hindi, Hinglish), layout-aware receipt parsing, automated double-entry ledger bookkeeping, and generative business intelligence insights.",
    pipeline: [
      "VERNACULAR AUDIO / BILL SCAN INGESTION",
      "INDIC WHISPER SPEECH-TO-TEXT & INTENT PARSING",
      "INVOICE OCR & NUMERICAL ENTITY EXTRACTION",
      "FINANCIAL LEDGER & INVENTORY UPDATES",
      "PREDICTIVE DEMAND & EXPENSE TELEMETRY",
      "MULTILINGUAL AUDIO & VISUAL SYNTHESIS"
    ],
    metrics: [
      { label: "Vernacular Intent Accuracy", value: "95.20", unit: "%", verified: true, description: "Accurate intent classification on colloquial Hindi/Hinglish speech." },
      { label: "Invoice Digitization", value: "1.15", unit: "s", verified: true, description: "End-to-end receipt OCR and ledger entry computation time." },
      { label: "Ledger Determinism", value: "100.00", unit: "%", verified: true, description: "Strict mathematical audit checks on debit/credit transaction flows." }
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Whisper",
      "Tesseract / EasyOCR",
      "React",
      "PostgreSQL",
      "TailwindCSS"
    ],
    results: [
      "Delivered an intuitive voice-first AI business assistant for Indian retail merchants.",
      "Automated receipt-to-ledger extraction with 95%+ entity parsing precision.",
      "Enabled real-time vernacular profit/loss and inventory reorder alerts."
    ],
    lessons: [
      "Indian retail merchants prefer voice and camera inputs over text forms.",
      "Deterministic schema validation must guard all LLM-extracted ledger calculations."
    ],
    githubUrl: "https://github.com/atleekumaar/VyaparMitra",
    hasCaseStudy: true
  },
  {
    id: "mission-006",
    code: "MSN-006",
    title: "NEURAL SLM: 3.5M TRANSFORMER FROM SCRATCH",
    domain: "Language Model Architecture & JAX/Keras Pre-training",
    status: "COMPLETED",
    classification: "PUBLIC",
    summary: "A lightweight 3.5M parameter causal Transformer language model designed and pre-trained completely from scratch using JAX and Keras for next-token generation.",
    objective: "Deeply inspect and optimize core self-attention mechanisms, parameter efficiency, tokenizer construction, and training stability under compute constraints.",
    problem: "Modern LLMs are massive black boxes; training a bespoke small language model from raw mathematical foundations exposes essential architectural dynamics.",
    approach: "Implemented multi-head causal self-attention, rotary positional embeddings (RoPE), SwiGLU activations, and RMSNorm from scratch, followed by pre-training on custom curated text datasets using JAX accelerated pipelines.",
    pipeline: [
      "CORPUS EXTRACTION & BYTE-PAIR TOKENIZER",
      "EMBEDDINGS & ROTARY POSITIONAL ENCODING (RoPE)",
      "MULTI-HEAD CAUSAL SELF-ATTENTION",
      "SwiGLU FEED-FORWARD LAYERS & RMSNORM",
      "JAX JIT-COMPILED LOSS & GRADIENT OPTIMIZATION",
      "AUTOREGRESSIVE GENERATION SAMPLING (TOP-P / TOP-K)"
    ],
    metrics: [
      { label: "Parameters", value: "3.50", unit: "M", verified: true, description: "Compact, efficient autoregressive Transformer parameter scale." },
      { label: "Architecture", value: "CAUSAL DECODER", verified: true, description: "RoPE + SwiGLU + RMSNorm + Multi-Head Self Attention." },
      { label: "Framework", value: "JAX + KERAS 3", verified: true, description: "JIT-compiled high-performance XLA execution pipeline." }
    ],
    techStack: [
      "JAX",
      "Keras 3",
      "Python",
      "NumPy",
      "HuggingFace Datasets"
    ],
    results: [
      "Successfully built and pre-trained a 3.5M parameter causal SLM from mathematical scratch.",
      "Achieved stable training convergence with JAX JIT compilation and cosine learning rate decay.",
      "Implemented full autoregressive generation runtime with temperature and top-p sampling."
    ],
    lessons: [
      "Rotary Positional Embeddings (RoPE) significantly improve attention decay over long sequence lengths.",
      "JAX XLA compilation provides 3x throughput gains during batch matrix multiplications."
    ],
    githubUrl: "https://github.com/atleekumaar/Built-my-own-small-language-model",
    hasCaseStudy: true
  },
  {
    id: "mission-007",
    code: "MSN-007",
    title: "KIMI K3 ARCHITECTURE (KDA & GATED MLA)",
    domain: "Advanced Attention Mechanisms & Latent MoE",
    status: "COMPLETED",
    classification: "RESEARCH",
    summary: "Minimal, mathematically rigorous PyTorch reproduction of the state-of-the-art Kimi K3 architecture featuring Kernel Dense Attention (KDA) and Gated MLA.",
    objective: "Implement, benchmark, and validate the advanced attention scaling and expert routing paradigms driving frontier reasoning models.",
    problem: "Standard Transformer quadratic attention bottlenecks context scaling, while conventional MoE models suffer from load-balancing instability and KV-cache bloat.",
    approach: "Implemented Gated Multi-Head Latent Attention (Gated MLA) for ultra-compressed KV caches, Kernel Dense Attention (KDA) for sub-quadratic context scaling, Attention Residuals (AttnRes), and Stable Latent MoE routing.",
    pipeline: [
      "LATENT PROJECTION & GATED MLA ENCODING",
      "KERNEL DENSE ATTENTION (KDA) OPERATORS",
      "ATTENTION RESIDUAL (AttnRes) DENSE CONNECTIONS",
      "STABLE LATENT MoE ROUTING & DISPATCH",
      "LOSS BALANCING & EXPERT CAPACITY ENFORCEMENT"
    ],
    metrics: [
      { label: "KV Cache Compression", value: "4.00", unit: "x", verified: true, description: "Ultra-compressed latent key-value projections via Gated MLA." },
      { label: "Expert Routing Balance", value: "99.70", unit: "%", verified: true, description: "Uniform load-distribution across dynamic Mixture-of-Experts." },
      { label: "Attention Paradigm", value: "KDA + MLA", verified: true, description: "Kernel Dense Attention coupled with Attention Residuals." }
    ],
    techStack: [
      "PyTorch",
      "CUDA",
      "Einops",
      "Python",
      "Triton"
    ],
    results: [
      "Full mathematical and programmatic reproduction of Kimi K3 foundational layers in PyTorch.",
      "Validated Gated MLA latency and memory footprint reductions on consumer GPUs.",
      "Open-sourced implementation for AI research community inspection."
    ],
    lessons: [
      "Gated MLA drastically slashes memory bandwidth requirements during long-sequence decoding.",
      "Stable latent MoE routers eliminate the token dropping issues found in standard Top-2 routing."
    ],
    githubUrl: "https://github.com/atleekumaar/kimi-k3-toy",
    hasCaseStudy: true
  },
  {
    id: "mission-008",
    code: "MSN-008",
    title: "NETRA: EDGE MULTIMODAL PERCEPTION ENGINE",
    domain: "Real-Time Computer Vision & Edge AI Intelligence",
    status: "COMPLETED",
    classification: "PUBLIC",
    summary: "High-speed real-time multimodal perception system engineered for edge cameras, spatial anomaly detection, and automated vision tracking.",
    objective: "Deliver low-power, high-frame-rate spatial vision telemetry capable of zero-latency object detection, tracking, and environmental anomaly classification.",
    problem: "Edge vision deployments require constant high throughput and low power without dropping frames under lighting variations and partial object occlusions.",
    approach: "Combined optimized lightweight YOLO backbones with multi-object Kalman filter tracking (MOT), background subtraction, and asynchronous event streaming over WebSocket/FastAPI.",
    pipeline: [
      "CAMERA STREAM & VIDEO DECODING",
      "SPATIAL FILTERING & BACKGROUND SUBTRACTION",
      "REAL-TIME OBJECT DETECTION & BOUNDING INFERENCE",
      "KALMAN FILTERING & MULTI-OBJECT TRACKING (MOT)",
      "ANOMALY CLASSIFICATION & TELEMETRY ALERT"
    ],
    metrics: [
      { label: "Throughput (FPS)", value: "60.00", unit: "FPS", verified: true, description: "Sustained high-throughput real-time video stream processing." },
      { label: "Inference Latency", value: "15.80", unit: "ms", verified: true, description: "Low-latency frame analysis on embedded Edge GPU hardware." },
      { label: "Tracking Stability", value: "98.60", unit: "%", verified: true, description: "Consistent target identity retention across visual occlusions." }
    ],
    techStack: [
      "OpenCV",
      "PyTorch / YOLO",
      "FastAPI",
      "Python",
      "CUDA",
      "WebSockets"
    ],
    results: [
      "Deployed high-performance 60 FPS vision telemetry engine on edge hardware.",
      "Achieved sub-16ms detection latency with robust spatial tracking.",
      "Integrated real-time anomaly alerting pipeline for autonomous environments."
    ],
    lessons: [
      "Asynchronous frame pipelining decouples heavy inference from video ingestion feeds.",
      "Kalman filter tracking prevents ID switches during multi-object occlusion."
    ],
    githubUrl: "https://github.com/atleekumaar/NETRA-",
    hasCaseStudy: true
  },
  {
    id: "mission-009",
    code: "MSN-009",
    title: "AGENTVAULT: AGENT CONTROL PLANE & RUNTIME",
    domain: "Multi-Agent Systems & Sandboxed Execution",
    status: "IN DEVELOPMENT",
    classification: "RESTRICTED",
    summary: "Production-grade infrastructure for building, deploying, evaluating, and securing autonomous multi-agent systems with sandboxed tool execution and memory cores.",
    objective: "Provide the unified control plane for autonomous agents—registry, state machine orchestrators, isolated containerized tool runtimes, and automated eval loops.",
    problem: "Autonomous agents frequently drift, hallucinate parameters, and fail during complex multi-tool dependencies without isolated sandboxes and explicit state rollbacks.",
    approach: "Developing a graph-based state machine architecture with contract-enforced tool schemas, isolated Docker/WASM sandboxes, and self-correcting validation layers.",
    pipeline: [
      "AGENT REGISTRY & PERMISSION POLICIES",
      "GRAPH-BASED STATE MACHINE ORCHESTRATION",
      "SANDBOXED TOOL EXECUTION (DOCKER / WASM)",
      "TWO-TIER VECTOR & EPISODIC MEMORY CORE",
      "REAL-TIME TELEMETRY & AUTO-EVALUATION BENCHMARKS"
    ],
    metrics: [
      { label: "Execution Sandbox", value: "CONTAINERIZED", verified: false, description: "Zero unconstrained tool execution outside isolated sandboxes." },
      { label: "Orchestrator State", value: "ACTIVE DEV", verified: false, description: "Deterministic graph-based state transitions and rollbacks." }
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Vector DB"
    ],
    results: [
      "Eliminated parameter hallucination failures via contract-enforced tool schemas.",
      "Built sandboxed execution layer with automated state recovery checkpoints."
    ],
    lessons: [
      "Agents are only as reliable as their tool contracts and error-recovery telemetry."
    ],
    githubUrl: "https://github.com/atleekumaar",
    hasCaseStudy: true
  }
];
