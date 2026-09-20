export interface StackLayer {
  level: string;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: {
    name: string;
    role: string;
    badge: string;
  }[];
}

export const SYSTEM_STACK: StackLayer[] = [
  {
    level: "05",
    number: "LAYER 05",
    name: "INFRASTRUCTURE & ORCHESTRATION",
    category: "CLOUD & DEPLOYMENT",
    description: "Distributed cloud infrastructure, GPU cluster orchestration, continuous deployment, and telemetry monitoring pipelines.",
    technologies: [
      { name: "AWS", role: "Cloud compute & storage primitives", badge: "Cloud" },
      { name: "Cloud Compute", role: "Scalable elastic compute instances", badge: "Infra" },
      { name: "MLOps", role: "Model registry, experiment tracking & telemetry", badge: "Ops" },
      { name: "CI / CD Workflows", role: "Automated testing, linting & deployment", badge: "Pipeline" }
    ]
  },
  {
    level: "04",
    number: "LAYER 04",
    name: "INTELLIGENT APPLICATIONS",
    category: "COGNITIVE ARCHITECTURES",
    description: "Orchestration of frontier reasoning engines, dense semantic retrieval pipelines, vector indexers, and autonomous agent loops.",
    technologies: [
      { name: "RAG Pipelines", role: "Context grounding & non-parametric retrieval", badge: "Retrieval" },
      { name: "LLMs / SLMs", role: "Generative reasoning & structured output parsing", badge: "Cognition" },
      { name: "AI Agents", role: "Deterministic tool calling & state machines", badge: "Agency" },
      { name: "Vector Databases", role: "High-dimensional similarity indexing (HNSW)", badge: "Indexing" }
    ]
  },
  {
    level: "03",
    number: "LAYER 03",
    name: "SYSTEMS & PERSISTENCE",
    category: "BACKEND RUNTIMES",
    description: "High-throughput asynchronous web APIs, relational data stores, high-speed memory caches, and container isolation.",
    technologies: [
      { name: "FastAPI", role: "High-performance asynchronous Python API framework", badge: "API" },
      { name: "PostgreSQL", role: "ACID-compliant relational database & SQL store", badge: "Database" },
      { name: "Redis", role: "In-memory caching & session state store", badge: "Cache" },
      { name: "Docker", role: "Containerized reproducible execution environments", badge: "Runtime" }
    ]
  },
  {
    level: "02",
    number: "LAYER 02",
    name: "INTELLIGENCE ENGINE",
    category: "DEEP LEARNING RUNTIMES",
    description: "Numerical tensor manipulation, automatic differentiation, neural network layer abstractions, and GPU-accelerated computing.",
    technologies: [
      { name: "NumPy", role: "N-dimensional array computation & linear algebra", badge: "Math" },
      { name: "Pandas", role: "High-performance data manipulation & tabular analysis", badge: "Data" },
      { name: "PyTorch", role: "Dynamic computation graph & deep learning framework", badge: "Deep Learning" },
      { name: "TensorFlow", role: "Production machine learning models & pipelines", badge: "Framework" },
      { name: "Transformers", role: "State-of-the-art attention & sequence modeling", badge: "NLP" }
    ]
  },
  {
    level: "01",
    number: "LAYER 01",
    name: "COMPUTATIONAL FOUNDATION",
    category: "CORE LANGUAGES",
    description: "Low-level system efficiency, high-velocity algorithmic scripting, and modern reactive interface architecture.",
    technologies: [
      { name: "Python", role: "Primary language for AI, data pipelines & agent loops", badge: "Primary" },
      { name: "C++", role: "High-performance systems, CUDA kernels & Open3D", badge: "Performance" },
      { name: "JavaScript / TypeScript", role: "Modern type-safe reactive interfaces & WebGL", badge: "Interface" }
    ]
  }
];
