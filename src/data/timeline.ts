export interface MemoryNode {
  id: string;
  step: string;
  title: string;
  era: string;
  tagline: string;
  description: string;
  breakthrough: string;
  acquiredCapabilities: string[];
  status: 'INTEGRATED' | 'OPTIMIZED' | 'ACTIVE EVOLUTION';
}

export const MEMORY_TIMELINE: MemoryNode[] = [
  {
    id: "mem-01",
    step: "01",
    title: "FOUNDATIONAL CODE",
    era: "PHASE I",
    tagline: "Deterministic Computation & Logic Structures",
    description: "Mastery of algorithmic thinking, data structures, and computational complexity in Python, C++, and modern languages.",
    breakthrough: "Understanding computers as deterministic state transformation machines.",
    acquiredCapabilities: ["Algorithms & Data Structures", "Object-Oriented Design", "Memory Management", "Clean Architecture"],
    status: "INTEGRATED"
  },
  {
    id: "mem-02",
    step: "02",
    title: "MACHINE LEARNING",
    era: "PHASE II",
    tagline: "Statistical Learning & Feature Spaces",
    description: "Transition from handcrafted rules to statistical inference, regression, classification, and mathematical loss formulation.",
    breakthrough: "Replacing rigid if-else logic with parameter optimization over empirical data distributions.",
    acquiredCapabilities: ["Gradient Descent", "Feature Engineering", "Statistical Validation", "Loss Landscapes"],
    status: "INTEGRATED"
  },
  {
    id: "mem-03",
    step: "03",
    title: "DEEP LEARNING",
    era: "PHASE III",
    tagline: "Hierarchical Neural Representations",
    description: "Deep multi-layer perceptrons, convolutional networks, backpropagation dynamics, and GPU-accelerated tensor computation.",
    breakthrough: "Hierarchical feature abstraction directly from raw high-dimensional tensors.",
    acquiredCapabilities: ["PyTorch Tensor Workflows", "CUDA Acceleration", "Backpropagation", "Regularization"],
    status: "INTEGRATED"
  },
  {
    id: "mem-04",
    step: "04",
    title: "COMPUTER VISION & 3D",
    era: "PHASE IV",
    tagline: "Spatial Understanding & Point Clouds",
    description: "Processing 2D optical frames and raw 3D LiDAR point clouds into semantic segmentations and spatial geometry.",
    breakthrough: "Building real-time Foveated 2.5D LiDAR pipelines achieving 52.05% mIoU at 42.79 FPS.",
    acquiredCapabilities: ["LiDAR Point Clouds", "Voxelization", "Open3D / OpenCV", "Spatial Segmentation"],
    status: "INTEGRATED"
  },
  {
    id: "mem-05",
    step: "05",
    title: "TRANSFORMERS & ATTENTION",
    era: "PHASE V",
    tagline: "Self-Attention & Sequence Modeling",
    description: "Investigating quadratic self-attention mechanics, query-key-value projections, and multi-head representation spaces.",
    breakthrough: "Global relational modeling without fixed convolutional receptive field constraints.",
    acquiredCapabilities: ["Attention Mechanisms", "Positional Encodings", "Transformer Backbones", "Latent Routing"],
    status: "INTEGRATED"
  },
  {
    id: "mem-06",
    step: "06",
    title: "LARGE LANGUAGE MODELS",
    era: "PHASE VI",
    tagline: "Generative Pretraining & Few-Shot Reasoning",
    description: "Exploring autoregressive next-token prediction, instruction fine-tuning, prompt decomposition, and emergent capabilities.",
    breakthrough: "Natural language as a universal interface for semantic computation.",
    acquiredCapabilities: ["Prompt Engineering", "Fine-Tuning", "Sampling Strategies", "Structured Output Parsing"],
    status: "INTEGRATED"
  },
  {
    id: "mem-07",
    step: "07",
    title: "RETRIEVAL-AUGMENTED GENERATION",
    era: "PHASE VII",
    tagline: "External Episodic Memory & Vector Indexing",
    description: "Augmenting parametric neural weights with non-parametric dense vector stores, knowledge graphs, and hybrid retrieval.",
    breakthrough: "Grounding generative models with deterministic, verifiable knowledge retrieval.",
    acquiredCapabilities: ["Vector Embeddings", "HNSW Indexing", "Semantic Chunking", "Reranking"],
    status: "OPTIMIZED"
  },
  {
    id: "mem-08",
    step: "08",
    title: "AI AGENTS & TOOL CALLING",
    era: "PHASE VIII",
    tagline: "Agency, Decision Graphs & Tool Dispatch",
    description: "Constructing multi-step autonomous execution loops with structured schema enforcement and self-correcting validation.",
    breakthrough: "Transforming passive models into active problem-solvers that execute tools in external environments.",
    acquiredCapabilities: ["Agentic State Machines", "Deterministic Tool Calling", "Error Recovery", "Multi-Agent Routing"],
    status: "ACTIVE EVOLUTION"
  },
  {
    id: "mem-09",
    step: "09",
    title: "AUTONOMOUS INTELLIGENCE",
    era: "PHASE IX (ERA 2042)",
    tagline: "Perception, Reasoning & Physical Action",
    description: "The ultimate frontier: fully embodied, closed-loop autonomous intelligence that continuously perceives, reasons, and acts in the physical world.",
    breakthrough: "Unified world models and self-adapting policy execution.",
    acquiredCapabilities: ["Closed-Loop Systems", "World Modeling", "Embodied Agency", "Continual Learning"],
    status: "ACTIVE EVOLUTION"
  }
];
