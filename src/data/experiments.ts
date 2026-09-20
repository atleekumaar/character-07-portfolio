export interface LabExperiment {
  id: string;
  code: string;
  title: string;
  status: 'RUNNING' | 'COMPLETED' | 'IN PROGRESS' | 'QUEUED';
  domain: string;
  hypothesis: string;
  methodology: string;
  result: string;
  findings: string[];
  tags: string[];
}

export const EXPERIMENTS: LabExperiment[] = [
  {
    id: "exp-014",
    code: "EXP-014",
    title: "AGENT MEMORY & RECURRENT CONTEXT PERSISTENCE",
    status: "RUNNING",
    domain: "Agentic Cognition",
    hypothesis: "Can long-term episodic vector retrieval combined with state checkpointing eliminate catastrophic context drift across 100+ autonomous agent turns?",
    methodology: "Testing dual-tier memory (working RAM buffer + compressed long-term vector embeddings) with self-reflection pruning at periodic loop intervals.",
    result: "ONGOING",
    findings: [
      "Working memory decay is significantly mitigated with structured summary tokens.",
      "Vector search latency must remain <15ms to avoid stalling tool dispatch loops."
    ],
    tags: ["LLM Agents", "Vector Memory", "Context Preservation"]
  },
  {
    id: "exp-021",
    code: "EXP-021",
    title: "FOVEATED VOXEL DENSITY ADAPTATION",
    status: "COMPLETED",
    domain: "3D Perception",
    hypothesis: "Will dynamic distance-weighted voxel partitioning preserve critical obstacle boundary detection while slashing memory footprint by over 60%?",
    methodology: "Implemented radial geometric attenuation on raw point clouds prior to sparse 3D convolution passes.",
    result: "VERIFIED",
    findings: [
      "Achieved 64.2% reduction in peak GPU memory usage during dense cloud parsing.",
      "Critical obstacle recall remained at 99.8% across benchmark scenarios."
    ],
    tags: ["LiDAR", "Sparse Voxelization", "Edge Inference"]
  },
  {
    id: "exp-009",
    code: "EXP-009",
    title: "LATENT EMBEDDING QUANTIZATION FIDELITY",
    status: "COMPLETED",
    domain: "Vector Retrieval & Compression",
    hypothesis: "Can scalar and vector quantization techniques compress embedding indexes by 4x while maintaining >98% semantic retrieval accuracy?",
    methodology: "Benchmarked FP32 vs FP16 vs INT8 quantization on 1536-dimensional latent vectors using HNSW indexing.",
    result: "VERIFIED",
    findings: [
      "INT8 scalar quantization preserved 98.4% of top-k ranking precision.",
      "Index memory footprint reduced from 1.2 GB to 310 MB on target datasets."
    ],
    tags: ["Embeddings", "HNSW", "Vector DB"]
  },
  {
    id: "exp-033",
    code: "EXP-033",
    title: "STOCHASTIC MULTI-MODAL TOOL DISPATCH",
    status: "IN PROGRESS",
    domain: "Autonomous Execution",
    hypothesis: "Can an autonomous planner accurately synthesize multi-modal sensor inputs to select the correct external API under simulated sensor packet loss?",
    methodology: "Injecting simulated 10-30% packet corruption and measuring fallback recovery time and execution success rates.",
    result: "IN PROGRESS",
    findings: [
      "Deterministic schema guards successfully trapped 100% of malformed payloads.",
      "Adaptive retry backoff reduced cascading loop failures."
    ],
    tags: ["Tool Calling", "Fault Tolerance", "Autonomous Systems"]
  }
];
