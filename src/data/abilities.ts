export interface Ability {
  id: string;
  index: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  technologies: string[];
  telemetry: {
    label: string;
    value: string;
  }[];
  specifications: string[];
}

export const ABILITIES: Ability[] = [
  {
    id: "perception",
    index: "01",
    name: "PERCEPTION",
    code: "ABL-PERC-01",
    tagline: "Sensory Extraction & Spatial Modeling",
    description: "Transforming raw physical and optical signals into structured 3D spatial representations and semantic scene graphs.",
    technologies: [
      "Computer Vision",
      "LiDAR Point Clouds",
      "Open3D",
      "OpenCV",
      "Voxelization",
      "SPVCNN"
    ],
    telemetry: [
      { label: "SENSOR DOMAIN", value: "3D LiDAR / RGB-D" },
      { label: "SPATIAL RESOLUTION", value: "Foveated / Sub-voxel" },
      { label: "PROCESSING RATE", value: "Real-Time / 40+ FPS" }
    ],
    specifications: [
      "Real-time 2.5D and 3D point cloud segmentation",
      "Dynamic ROI voxelization & ground plane extraction",
      "Stereo depth estimation and spatial registration"
    ]
  },
  {
    id: "reasoning",
    index: "02",
    name: "REASONING",
    code: "ABL-RSNG-02",
    tagline: "Neural Architectures & Latent Computation",
    description: "Formulating deep representations, attention mechanics, and probabilistic inference structures.",
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Transformers",
      "LLMs & SLMs",
      "Mathematical Foundations",
      "PyTorch / CUDA"
    ],
    telemetry: [
      { label: "CORE PARADIGM", value: "Attention / Self-Supervised" },
      { label: "COMPUTE PLATFORM", value: "CUDA Acceleration" },
      { label: "INFERENCE MODE", value: "Latent Reasoning / FP16" }
    ],
    specifications: [
      "Custom transformer architectures & fine-tuning",
      "Mathematical optimization (gradient dynamics, loss landscapes)",
      "Structured latent space manipulation & reasoning chains"
    ]
  },
  {
    id: "memory",
    index: "03",
    name: "MEMORY",
    code: "ABL-MEM-03",
    tagline: "Dense Retrieval & Knowledge Graphs",
    description: "Engineering long-term persistence, high-dimensional vector search, and dynamic context synthesis.",
    technologies: [
      "RAG Systems",
      "Vector Databases",
      "Dense Embeddings",
      "Knowledge Retrieval",
      "Cosine Similarity / HNSW",
      "Semantic Chunking"
    ],
    telemetry: [
      { label: "RETRIEVAL METHOD", value: "Hybrid Dense + Sparse" },
      { label: "INDEX STRUCTURE", value: "HNSW / IVF-PQ" },
      { label: "CONTEXT WINDOW", value: "Dynamic / Sliding RAG" }
    ],
    specifications: [
      "High-recall semantic document indexing and chunking",
      "Vector database orchestration & cluster indexing",
      "Reranking algorithms and hallucination mitigation"
    ]
  },
  {
    id: "action",
    index: "04",
    name: "ACTION",
    code: "ABL-ACTN-04",
    tagline: "Autonomous Agency & Execution Loops",
    description: "Bridging cognition to measurable external execution via tool invocation, state validation, and error recovery.",
    technologies: [
      "AI Agents",
      "Tool Calling Protocols",
      "Agentic State Machines",
      "Task Orchestration",
      "Self-Correction Loops",
      "Automation"
    ],
    telemetry: [
      { label: "AGENCY MODE", value: "Goal-Oriented Autonomous" },
      { label: "SAFETY PROTOCOL", value: "Deterministic Validation" },
      { label: "DISPATCH LATENCY", value: "Sub-second Execution" }
    ],
    specifications: [
      "Multi-agent collaborative workflows with deterministic routing",
      "Structured function calling with JSON schema guarantees",
      "Autonomous error diagnosis and execution rollback mechanisms"
    ]
  },
  {
    id: "construction",
    index: "05",
    name: "CONSTRUCTION",
    code: "ABL-CNST-05",
    tagline: "Full-Spectrum Software Engineering",
    description: "Writing performant, maintainable, and type-safe systems from foundational low-level algorithms to reactive interfaces.",
    technologies: [
      "Python",
      "C++",
      "JavaScript / TypeScript",
      "React",
      "FastAPI",
      "PostgreSQL / SQL"
    ],
    telemetry: [
      { label: "SYSTEM LANGUAGE", value: "Python / C++ / TypeScript" },
      { label: "BACKEND STACK", value: "FastAPI / Asynchronous I/O" },
      { label: "DATABASE ARCH", value: "Relational + Vector Store" }
    ],
    specifications: [
      "High-performance numerical algorithms and C++ integration",
      "Asynchronous REST & WebSocket server architectures",
      "Modern reactive web interfaces with strict type systems"
    ]
  },
  {
    id: "deployment",
    index: "06",
    name: "DEPLOYMENT",
    code: "ABL-DPLY-06",
    tagline: "Infrastructure, MLOps & Production Pipelines",
    description: "Packaging, orchestrating, and monitoring intelligent workloads across cloud, edge, and continuous delivery systems.",
    technologies: [
      "Docker",
      "Cloud Infrastructure",
      "AWS",
      "MLOps Pipelines",
      "GitHub Workflows",
      "CI / CD Automation"
    ],
    telemetry: [
      { label: "CONTAINERIZATION", value: "Docker / Multi-stage" },
      { label: "CLOUD TARGET", value: "AWS / Distributed" },
      { label: "DELIVERY PIPELINE", value: "Automated CI/CD" }
    ],
    specifications: [
      "Containerized model inference runtimes with GPU pass-through",
      "Continuous integration, automated testing, and artifact deployment",
      "Model tracking, versioning, and latency telemetry monitoring"
    ]
  }
];
