export const projectDetails = [
  {
    title: "Food Delivery Backend System",

    tagline:
      "Scalable backend system enabling real-time order tracking and geo-based restaurant discovery",

    category: "Real-time System",

    focus: ["Real-time systems", "Geospatial queries", "API scalability"],

    keyHighlights: [
      "Implemented WebSocket-based real-time order tracking",
      "Designed geospatial queries for location-based restaurant filtering",
      "Built scalable REST APIs with optimized database queries and indexing",
      "Structured role-based system for customers, restaurant owners, and admins",
    ],

    architecture: "REST APIs + WebSockets + MongoDB",

    technologies: ["Node.js", "Express", "MongoDB", "WebSockets"],

    links: {
      github: "",
      live: "",
      caseStudy: "/projects/food-delivery",
    },

    learned: [
      "Designed real-time systems using WebSockets",
      "Optimized database queries for performance and scalability",
      "Handled concurrency in event-driven architectures",
    ],
  },

  {
    title: "Background Worker & Job Queue System",

    tagline:
      "Asynchronous job processing system for handling background tasks with scalable worker architecture",

    category: "Distributed System",

    focus: [
      "Asynchronous processing",
      "Distributed systems",
      "Fault tolerance",
    ],

    keyHighlights: [
      "Designed queue-based architecture for background job processing",
      "Implemented retry and failure handling mechanisms for reliability",
      "Enabled concurrent job execution using scalable worker processes",
      "Containerized workers and services using Docker for consistent deployment",
    ],

    architecture:
      "Producer (API) → Queue → Worker Processes → Database / External Services",

    technologies: ["Node.js", "BullMQ/Queue", "Redis", "Docker"],

    links: {
      github: "",
      live: "",
      caseStudy: "/projects/job-queue",
    },

    learned: [
      "Designed asynchronous and event-driven systems",
      "Handled job retries, failures, and idempotency",
      "Used Docker for containerized and scalable deployments",
    ],
  },

  {
    title: "NoteX — Scalable Content Distribution System",

    tagline:
      "Hybrid backend system for managing, ranking, and distributing academic notes with real-time engagement",

    category: "Data-Intensive System (In Progress)",

    focus: [
      "Hybrid architecture",
      "Real-time systems",
      "ML-ready data pipelines",
    ],

    keyHighlights: [
      "Designed hybrid architecture using Firebase (real-time) and MongoDB (analytics)",
      "Built engagement system with likes, bookmarks, and interaction tracking",
      "Structured data model for ranking and recommendation systems",
      "Integrated mobile frontend using Flutter with backend services",
    ],

    architecture:
      "Flutter App → Firebase (Auth + Firestore) → MongoDB → ML Services",

    technologies: [
      "Flutter",
      "Firebase",
      "Firestore",
      "MongoDB",
      "Node.js",
    ],

    links: {
      github: "",
      live: "",
      caseStudy: "/projects/notex",
    },

    learned: [
      "Designed hybrid database architectures for different workloads",
      "Structured systems for ML integration and analytics",
      "Handled real-time data synchronization across services",
    ],
  },

  {
    title: "YouTube Backend Architecture",

    tagline:
      "Scalable backend system design inspired by YouTube, focusing on video processing and content delivery",

    category: "System Design (In Progress)",

    focus: [
      "Scalable architecture",
      "Media processing",
      "Distributed systems",
    ],

    keyHighlights: [
      "Designed video upload and processing pipeline",
      "Planned distributed storage and content delivery mechanisms",
      "Structured backend for handling high concurrency and large media files",
      "Explored system design patterns for large-scale applications",
    ],

    architecture:
      "Client → API → Storage (Video) → Processing Pipeline → CDN Delivery",

    technologies: [
      "Node.js",
      "Cloud Storage",
      "Streaming concepts",
      "System Design",
    ],

    links: {
      github: "",
      live: "",
      caseStudy: "/projects/youtube-backend",
    },

    learned: [
      "Understood large-scale system design principles",
      "Designed media processing workflows",
      "Explored trade-offs in scalability and storage systems",
    ],
  },
];
