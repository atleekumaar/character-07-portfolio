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
      { label: "Mean Intersection over Union (mIoU)", value: "52.05", unit: "%", verified: true, description: "Validated against benchmark semantic segmentation test sets." },
      { label: "Production-Equivalent Latency", value: "23.37", unit: "ms", verified: true, description: "End-to-end inference pass on embedded target hardware." },
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
    title: "DYNAMIC AGENTIC TOOL ORCHESTRATION",
    domain: "Agentic Systems & Deterministic Execution",
    status: "IN DEVELOPMENT",
    classification: "RESTRICTED",
    summary: "A resilient multi-agent coordination architecture combining LLM planning loops with strict schema validation and execution checkpoints.",
    objective: "Eliminate hallucinations and cyclic failures in autonomous multi-step software tasks by enforcing deterministic state transitions.",
    problem: "Unconstrained LLM agent loops frequently drift, hallucinate parameters, and fail during complex multi-tool dependencies without explicit state rollbacks.",
    approach: "Developing a graph-based state machine architecture with contract-enforced tool schemas, isolated sandbox runtimes, and self-correcting validation layers.",
    pipeline: [
      "USER TELEMETRY INTENT",
      "CONTEXT RETRIEVAL & VECTOR ANCHORS",
      "PLANNING & SUB-TASK DECOMPOSITION",
      "AGENT DISPATCH & TOOL SELECTION",
      "SANDBOX EXECUTION RUNTIME",
      "STATE VERIFICATION & SELF-CORRECTION",
      "RESULT SYNTHESIS & USER DISPATCH"
    ],
    metrics: [
      { label: "System State", value: "ACTIVE DEV", verified: false, description: "Under active architectural refinement." },
      { label: "Target Architecture", value: "GRAPH-BASED", verified: false, description: "Deterministic state transitions and fallback checkpoints." }
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph / Custom Agent Loop",
      "Vector DB / Embeddings",
      "Docker Sandbox",
      "PostgreSQL"
    ],
    results: [
      "Preliminary benchmarks show reduced agent drift on multi-step workflows.",
      "Schema-based validation prevents invalid parameter execution at runtime."
    ],
    lessons: [
      "Agents are only as reliable as their tool contracts and error-recovery telemetry."
    ],
    githubUrl: "https://github.com/atleekumaar",
    hasCaseStudy: true
  },
  {
    id: "mission-003",
    code: "MSN-003",
    title: "AUTONOMOUS INTELLIGENCE (EMBODIED COGNITION)",
    domain: "Perception-Reasoning-Action Systems",
    status: "RESEARCH CONCEPT",
    classification: "RESEARCH",
    summary: "Conceptual research into unified cognitive architectures that seamlessly bind real-world sensory inputs to goal-directed motor and computational actions.",
    objective: "Formulate architectures that move beyond passive next-token prediction towards grounded world modeling, uncertainty-aware reasoning, and physical actuation.",
    problem: "Current frontier models operate primarily on static text or disconnected multimodal tokens without continuous causal feedback loops from physical environments.",
    approach: "Investigating hybrid frameworks merging real-time 3D spatial representations (LiDAR/NeRF/Gaussian Splatting) with hierarchical reasoning modules and policy executors.",
    pipeline: [
      "MULTIMODAL SENSORY STREAM",
      "WORLD MODEL LATENT ENCODING",
      "PROBABILISTIC GOAL EVALUATION",
      "POLICY OPTIMIZATION & ACTION SAMPLING",
      "REAL-WORLD ACTUATION / API DISPATCH",
      "CONTINUAL REWARD & MODEL ADAPTATION"
    ],
    metrics: [
      { label: "Status", value: "THEORETICAL", verified: false, description: "Active exploration & architectural research papers." },
      { label: "Era Horizon", value: "2026 - 2042", verified: false, description: "Long-term engineering objective of CHARACTER-07." }
    ],
    techStack: [
      "World Models",
      "Diffusion Policies",
      "Reinforcement Learning",
      "Spatial Computing",
      "ROS2 / Robotics Simulators"
    ],
    results: [
      "Mathematical formulation of hierarchical perception-to-action graph.",
      "Initial simulation setups for spatial grounding and dynamic obstacle navigation."
    ],
    lessons: [
      "True intelligence emerges at the intersection of perception, memory, and physical/digital agency."
    ],
    githubUrl: "https://github.com/atleekumaar",
    hasCaseStudy: true
  }
];
