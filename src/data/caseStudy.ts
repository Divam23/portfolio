export const caseStudies = {
  "food-delivery": {
    title: "Food Delivery Backend System",

    tagline:
      "Scalable backend system enabling real-time order tracking and geo-based restaurant discovery",

    focus: [
      "Real-time systems",
      "Geospatial queries",
      "API scalability",
    ],

    problem:
      "Traditional food delivery systems lack real-time order visibility and efficient location-based discovery. Users cannot track orders live, and restaurant filtering becomes inefficient without proximity-based querying.",

    solution:
      "Built a backend system using WebSockets for real-time updates and MongoDB geospatial queries for location-based filtering. Designed modular APIs to handle concurrent users efficiently.",

    architecture:
      "Client → REST API → MongoDB → WebSocket Server → Client",

    systemFlow: [
      "User places order via REST API",
      "Order is validated and stored in database",
      "WebSocket event is emitted",
      "Client receives real-time order updates",
      "Restaurant updates propagate instantly",
    ],

    apiDesign: [
      "POST /orders → Create order",
      "GET /restaurants → Fetch nearby restaurants",
      "GET /orders/:id → Fetch order details",
      "PATCH /orders/:id → Update order status",
    ],

    dataModeling: [
      "Used geospatial indexing for restaurant location",
      "Designed order schema with status transitions",
      "Indexed frequently queried fields for performance",
    ],

    highlights: [
      "Real-time order tracking using WebSockets",
      "Geo-based restaurant discovery",
      "Scalable REST API design",
      "Role-based system architecture",
    ],

    decisions: [
      "Used WebSockets instead of polling to reduce latency",
      "Used MongoDB geospatial queries for efficient filtering",
      "Structured backend using modular architecture",
      "Applied indexing to optimize query performance",
    ],

    scalability: [
      "WebSockets reduce repeated API calls",
      "Database indexing improves read performance",
      "Modular architecture supports horizontal scaling",
    ],

    challenges: [
      "Managing multiple WebSocket connections",
      "Ensuring consistency between real-time updates and database",
      "Optimizing geospatial queries for performance",
    ],

    tradeoffs: [
      "WebSockets increase system complexity",
      "Geospatial indexing adds overhead",
      "Real-time systems require connection management",
    ],

    outcome:
      "Improved user experience with live tracking, reduced latency, and built a scalable backend foundation for future expansion.",

    learnings: [
      "Designing real-time systems using WebSockets",
      "Working with geospatial data and indexing",
      "Handling concurrency in event-driven systems",
    ],
  },

  "job-queue": {
    title: "Background Worker & Job Queue System",

    tagline:
      "Asynchronous job processing system for handling background tasks with scalable worker architecture",

    focus: [
      "Distributed systems",
      "Asynchronous processing",
      "Fault tolerance",
    ],

    problem:
      "Synchronous execution of heavy tasks increases API latency and reduces system throughput. The system required a way to offload background tasks and process them reliably.",

    solution:
      "Implemented a queue-based system where APIs act as producers and workers process jobs asynchronously. This decouples request handling and enables scalable background processing.",

    architecture:
      "Client → API → Redis Queue → Worker Processes → Database / Services",

    systemFlow: [
      "Client triggers an action via API",
      "API pushes job to queue",
      "Worker picks job asynchronously",
      "Worker processes task and updates database",
    ],

    apiDesign: [
      "POST /jobs → Enqueue job",
      "GET /jobs/:id → Check job status",
    ],

    dataModeling: [
      "Stored job metadata and status",
      "Tracked retries and failure states",
    ],

    highlights: [
      "Queue-based asynchronous processing",
      "Retry and failure handling",
      "Concurrent worker execution",
      "Docker-based service isolation",
    ],

    decisions: [
      "Used Redis for fast in-memory queue management",
      "Separated workers for horizontal scalability",
      "Implemented retry mechanisms for fault tolerance",
      "Containerized services using Docker",
    ],

    scalability: [
      "Workers can scale independently",
      "Queue handles high job throughput",
      "Decoupled architecture improves system resilience",
    ],

    challenges: [
      "Handling retries without duplication",
      "Managing concurrency across workers",
      "Ensuring idempotent job execution",
    ],

    tradeoffs: [
      "Increased system complexity",
      "Need for monitoring and logging",
      "Eventual consistency instead of immediate results",
    ],

    outcome:
      "Reduced API response time and improved scalability by offloading heavy tasks into background workers.",

    learnings: [
      "Designing distributed systems using queues",
      "Handling asynchronous workflows and failures",
      "Using Docker for scalable deployments",
    ],
  },

  "notex": {
    title: "NoteX — Scalable Content Distribution System",

    tagline:
      "Hybrid backend system for managing, ranking, and distributing academic notes with real-time engagement",

    focus: [
      "Hybrid architecture",
      "Real-time systems",
      "Data-intensive systems",
    ],

    problem:
      "Students lack a centralized platform for discovering high-quality academic notes with engagement and personalization features.",

    solution:
      "Designed a hybrid system using Firebase for real-time interactions and MongoDB for complex querying and analytics.",

    architecture:
      "Flutter App → Firebase → MongoDB → ML Services",

    systemFlow: [
      "User uploads or interacts with notes",
      "Firebase handles real-time updates",
      "MongoDB processes analytics and queries",
      "Data prepared for ML recommendations",
    ],

    apiDesign: [
      "POST /notes → Upload note",
      "GET /notes → Fetch notes",
      "POST /interactions → Like/Bookmark",
    ],

    dataModeling: [
      "Designed schema for engagement metrics",
      "Stored metadata for ranking and recommendations",
    ],

    highlights: [
      "Real-time engagement system",
      "Hybrid database architecture",
      "ML-ready data pipeline",
    ],

    decisions: [
      "Used Firebase for real-time features",
      "Used MongoDB for complex queries",
      "Prepared system for ML integration",
    ],

    scalability: [
      "Separated real-time and analytical workloads",
      "Designed for future ML scaling",
    ],

    challenges: [
      "Syncing data across Firebase and MongoDB",
      "Designing scalable metadata structures",
    ],

    tradeoffs: [
      "Increased complexity due to hybrid system",
      "Data consistency challenges",
    ],

    outcome:
      "Built a scalable foundation for a content-sharing platform with real-time and ML capabilities.",

    learnings: [
      "Designing hybrid architectures",
      "Handling real-time + analytical systems",
      "Preparing data pipelines for ML",
    ],
  },

  "youtube-backend": {
    title: "YouTube Backend Architecture",

    tagline:
      "Scalable backend system design inspired by YouTube focusing on media processing and content delivery",

    focus: [
      "System design",
      "Media processing",
      "Distributed systems",
    ],

    problem:
      "Handling large-scale video uploads and streaming requires efficient storage, processing, and delivery systems.",

    solution:
      "Designed a backend architecture simulating video upload pipelines, processing workflows, and content delivery mechanisms.",

    architecture:
      "Client → API → Storage → Processing Pipeline → CDN",

    systemFlow: [
      "User uploads video",
      "Video stored in cloud storage",
      "Processing pipeline encodes video",
      "Content delivered via CDN",
    ],

    apiDesign: [
      "POST /upload → Upload video",
      "GET /videos → Fetch videos",
    ],

    dataModeling: [
      "Metadata storage for videos",
      "Tracking processing states",
    ],

    highlights: [
      "Video processing pipeline design",
      "Distributed storage planning",
      "High-level system design",
    ],

    decisions: [
      "Separated storage and processing layers",
      "Used pipeline approach for scalability",
    ],

    scalability: [
      "Designed for high concurrency",
      "CDN-based content delivery",
    ],

    challenges: [
      "Handling large file uploads",
      "Designing scalable pipelines",
    ],

    tradeoffs: [
      "High infrastructure complexity",
      "Cost vs performance trade-offs",
    ],

    outcome:
      "Developed understanding of large-scale system design principles.",

    learnings: [
      "Designing media pipelines",
      "Understanding distributed storage systems",
    ],
  },
};