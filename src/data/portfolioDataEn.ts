import { ProjectItem, TechnicalDiscovery } from "./portfolioData";

export const PERSONAL_INFO_EN = {
  name: "Luiz Henrique da Silva de Oliveira",
  shortName: "Luiz Henrique",
  callsign: "LUIZ HENRIQUE",
  role: "Full-Stack Software Engineer",
  headline:
    "Bachelor of Science in Computer Science (GPA 8.74, 3rd place in Programming Marathon) and CS50x certified by Harvard University. End-to-end software engineering experience: from low-level desktop applications integrated with hardware (C#, C++, .NET) to high-concurrency modular monoliths (NestJS, Bun, TypeScript, Python) and data engineering & BI (Next.js, PostgreSQL, Star Schema, ETL).",
  location: "Curitiba - PR, Brazil",
  email: "luizdasilvaoliveira7@gmail.com",
  phone: "+55 (41) 99895-7337",
  whatsappUrl: "https://wa.me/5541998957337?text=Hello%20Luiz,%20I%20viewed%20your%20developer%20portfolio%20and%20would%20like%20to%20connect!",
  github: "https://github.com/Luiz-Henrique03",
  linkedin: "https://www.linkedin.com/in/luiz-henrique-s-b05363226/",
  cvPath: "/docs/Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf",
};

export const CORE_METRICS_EN = [
  {
    label: "Professional Experience",
    value: "4+ Years",
    detail: "Continuous end-to-end software engineering across Desktop, Backend, and Data.",
  },
  {
    label: "Higher Education",
    value: "B.S. Degree",
    detail: "Bachelor of Science in Computer Science from Universidade Positivo.",
  },
  {
    label: "International Certification",
    value: "CS50x",
    detail: "Harvard University — Computer Science, algorithms, C, Python, and SQL.",
  },
  {
    label: "English Proficiency",
    value: "C1 Advanced",
    detail: "EF SET Certificate — Fluent corporate and technical communication at an advanced level.",
  },
];

export const BI_DASHBOARDS_EN = [
  {
    id: "bi-fiscalizacao",
    title: "Analytics Platform & Data Warehouse (Star Schema)",
    objective: "Real-time analytical consolidation of technical auditing indicators, operational compliance, and contractual metrics for partner contractors.",
    architecture: "Dimensional Star Schema modeling (dimensions and facts) with ETL pipelines in Next.js and PostgreSQL, completely decoupling analytical workloads from the operational transactional database.",
    impact: "Instant analytical queries, elimination of database lock contention with production systems, and executive auditability with granular legal-entity attribution.",
    stack: ["Next.js (App Router)", "PostgreSQL", "Drizzle ORM", "Vitest", "Star Schema"],
    highlights: [
      "Strict architectural isolation between analytical and operational databases, ensuring heavy reporting never impacts primary system transactions.",
      "ETL pipeline with concurrency control enforced via native PostgreSQL advisory locks.",
      "Fine-grained dimensional modeling ensuring accurate legal-entity contractual tracking.",
    ],
  },
  {
    id: "bi-impedimentos",
    title: "Real-Time Operational Control Tower",
    objective: "Real-time operational command center for logging, triaging, and resolving critical field blockers, work stoppages, and execution bottlenecks.",
    architecture: "Event-driven Next.js App Router application with React Server Actions, database-enforced authorization, SLA management engine, and automated TV Mural Mode.",
    impact: "Dramatically reduced resolution latency for critical blockers, enhanced cross-departmental transparency, and fully auditable historical records.",
    stack: ["Next.js (App Router)", "React Server Actions", "PostgreSQL", "Zod", "Vitest"],
    highlights: [
      "Real-time ticket lifecycle with dynamic SLA tracking and visual aging heatmaps.",
      "Server Actions with database-level WHERE clause authorization for high security in critical operations.",
      "Mural Display Mode with automatic cyclic panel transitions managed through URL state without full page reloads.",
    ],
  },
];

export const PROJECTS_EN: ProjectItem[] = [
  {
    id: "positivo-vision",
    title: "Vision R15M: Embedded Secondary Display",
    category: "Embedded Software & Windows Desktop",
    context: "OEM Hardware / Windows Desktop",
    period: "2023 - 2024",
    role: "Systems Developer / Low-Level Engineer",
    summary:
      "End-to-end software development and low-level hardware integration for the secondary physical mini-screen built into the OEM Vision R15M notebook chassis. Implementation of serial UART protocols, drivers, hardware telemetry, and Windows UWP application certified for the Microsoft Store.",
    problem:
      "Controlling an auxiliary physical sub-display under severe battery consumption constraints, near-zero latency, and continuous Windows hardware integration.",
    solution:
      "Engineered a high-performance C# and C++ bridge utilizing native Win32 APIs (P/Invoke) for serial communication with the microcontroller, real-time hardware telemetry (temperature, clocks, battery), and a certified Windows UWP application published on the Microsoft Store.",
    metrics: [
      { label: "Platform", value: "Windows UWP", detail: "Published on the Microsoft Store" },
      { label: "Languages", value: "C# / C++", detail: "Win32 P/Invoke & serial UART interoperability" },
      { label: "Hardware", value: "OEM Laptop", detail: "Factory commercial line Vision R15M" },
      { label: "Version Control", value: "GitLab", detail: "Factory release lifecycle management" },
    ],
    technicalHighlights: [
      "Direct serial UART communication with the proprietary sub-display microcontroller.",
      "P/Invoke interoperability with Win32 API (kernel32.dll) to stream telemetry without CPU overhead.",
      "Low-level binary frame buffering and graphical rendering for the secondary display.",
      "MSIX/Appx packaging and code-signing certified on the Microsoft Store.",
    ],
    codeSnippet: {
      filename: "MinitelaSerialDriver.cs",
      code: `[DllImport("kernel32.dll", SetLastError = true)]
public static extern bool GetSystemPowerStatus(out SYSTEM_POWER_STATUS sps);

public async Task DespacharFrameAsync(byte[] buffer) {
    if (_serialPort != null && _serialPort.IsOpen) {
        await _serialPort.BaseStream.WriteAsync(buffer, 0, buffer.Length);
        await _serialPort.BaseStream.FlushAsync();
    }
}`,
      explanation: "Direct transmission of binary pixel frames and hardware telemetry to the secondary screen microcontroller.",
    },
    tags: ["C#", "C++", ".NET", "Windows UWP", "Win32 P/Invoke", "Serial UART", "Microsoft Store"],
  },
  {
    id: "caixa-wol",
    title: "Remote Machine Management (Wake-On-LAN)",
    category: "Distributed Systems & Networking",
    context: "Caixa Econômica Federal / Linux",
    period: "2023 - 2024",
    role: "Junior Full-Stack Developer",
    summary:
      "Python backend development with UDP sockets for remote computer powering via Wake-On-LAN (WOL) magic packets, remote package repository listing, and system power state control (shutdown/reboot) in Linux, paired with a dynamic JavaScript frontend developed for Caixa Econômica Federal.",
    problem:
      "Need to remotely turn on, shut down, reboot, inspect downloadable package repositories, and apply routines across hundreds of enterprise machines in federal banking networks without requiring physical IT dispatch.",
    solution:
      "Python backend developed for federal public tender by Caixa Econômica Federal, emitting Wake-On-LAN magic packets over UDP sockets, querying packages remotely, and managing Linux power cycles, integrated with a responsive JavaScript frontend.",
    metrics: [
      { label: "Protocol", value: "UDP / WOL", detail: "Magic packets transmitted across banking subnets" },
      { label: "Environment", value: "Linux Server", detail: "Secure remote management daemons" },
      { label: "Stack", value: "Python / JS", detail: "Python backend with dynamic JavaScript UI" },
    ],
    technicalHighlights: [
      "Assembly of binary magic packets (payload with 6x 0xFF bytes followed by 16 MAC address repetitions).",
      "Transmission via UDP broadcast sockets targeting corporate network subnets.",
      "Remote inspection of available download packages and execution of power management commands.",
      "Responsive, real-time JavaScript frontend with immediate visual feedback.",
    ],
    tags: ["Python", "Linux", "Wake-On-LAN", "UDP Sockets", "Networking", "JavaScript", "Caixa Econômica"],
  },
  {
    id: "agenda-fiscais",
    title: "Agenda Fiscais: Autonomous Quality Inspection Engine",
    category: "Backend Engineering & Scheduling Algorithms",
    context: "NestJS / Graph API",
    period: "2026",
    role: "Software Architect & Backend Engineer",
    summary:
      "Autonomous engine for quality inspection allocation across active construction job sites. Implements a 4-pass algorithmic scheduler with enterprise transactional integrations via Microsoft Graph API and Evolution API (WhatsApp).",
    problem:
      "Each completed construction milestone generated a strict regulatory inspection sheet (FVS) requiring technical validation within 48 business hours. Manual scheduling caused cross-city travel bottlenecks, surveyor bias from repeated assignments, and calendar collision conflicts on Microsoft Teams.",
    solution:
      "Deterministic engine built in NestJS, Bun, and TypeScript featuring a 4-pass scheduler: Cron worker executing every 30 minutes with PostgreSQL atomic claims to eliminate race conditions across container replicas, bi-directional sync with Microsoft Graph API (Teams/Outlook Calendar), and instant WhatsApp notifications via Evolution API.",
    metrics: [
      { label: "Regulatory Window", value: "48h Business", detail: "Automatic calculation of business days & national holidays" },
      { label: "Concurrent Execution", value: "30 Minutes", detail: "Cron Worker with atomic PostgreSQL claims" },
      { label: "Scheduler", value: "4 Passes", detail: "Progressive cascade fallback without system degradation" },
      { label: "Foresic Audit", value: "562 Events", detail: "Eradication of zombie/orphan events in Microsoft Teams" },
    ],
    technicalHighlights: [
      "Enforced strict 48-business-hour compliance for FVS releases, eliminating calendar conflicts and repetitive surveyor bias.",
      "Core architecture built with NestJS, Bun, TypeScript, and Drizzle ORM on PostgreSQL with atomic claim workers.",
      "Microsoft Graph API integration: transactional creation, rescheduling, and deletion of official calendar events.",
      "Evolution API (WhatsApp) & BrasilAPI: automated delivery of job-site notifications and dynamic holiday inspection.",
      "Algorithmic rule engine: Day-Owner prioritization, recent anti-repetition rules, weekly workload balancing, and site caps.",
      "4-Pass Cascade Scheduler: progressive fallback handling edge cases gracefully without service degradation.",
    ],
    tags: ["NestJS", "Bun", "TypeScript", "PostgreSQL", "Drizzle ORM", "Microsoft Graph", "Teams Calendar", "Evolution API", "BrasilAPI", "Axiom APL"],
  },
  {
    id: "bi-dashboards",
    title: "Data Engineering & BI Dashboards",
    category: "Data Engineering & Business Intelligence",
    context: "Data Warehouse & Next.js",
    period: "2026",
    role: "Full-Stack & Data Engineer",
    summary:
      "Architected executive and operational dashboards in Next.js App Router powered by a dedicated PostgreSQL analytical database with Star Schema dimensional modeling and atomic ETL pipelines.",
    problem:
      "Heavy analytical aggregations executed on the transactional database caused severe performance degradation on production systems. Reports suffered from business logic inconsistencies and lock contention.",
    solution:
      "Strict separation between transactional and analytical databases. Dimensional Star Schema modeling, atomic ETL pipelines completing full reloads in 1-2 seconds with PostgreSQL advisory locks, and operational modules with Server Actions and TV Mural Mode.",
    metrics: [
      { label: "Modeling", value: "Star Schema", detail: "Isolated dimensional & fact tables" },
      { label: "ETL Latency", value: "1 to 2s", detail: "Full reload with advisory lock" },
      { label: "Architecture", value: "Next.js 14", detail: "App Router & decoupled Server Actions" },
      { label: "Quality", value: "Vitest", detail: "Automated test coverage for business logic and transactions" },
    ],
    technicalHighlights: [
      "Architectural isolation between transactional production DB and analytical BI data warehouse.",
      "ETL pipeline wrapped in BEGIN...COMMIT with cascade-free TRUNCATE, serialized via pg_try_advisory_lock.",
      "Server Actions with database-level WHERE authorization to eliminate unauthorized cross-tenant data access.",
      "Mural TV Mode managing automatic cyclic slide transitions through URL state without full page reloads.",
    ],
    codeSnippet: {
      filename: "analytics-etl.service.ts",
      code: `// Full reload with advisory locks to prevent ETL race conditions
export async function executarEtlAnalitico(db: DrizzleClient) {
  const lockAcquired = await db.execute(sql\`SELECT pg_try_advisory_lock(427914)\`);
  if (!lockAcquired.rows[0].pg_try_advisory_lock) {
    throw new ConcurrentEtlError("Execution already in progress");
  }

  await db.transaction(async (tx) => {
    // Truncate all dimension and fact tables
    await tx.execute(sql\`TRUNCATE bi.fact_auditorias, bi.fact_ocorrencias RESTART IDENTITY\`);
    // Idempotent data ingestion from operational database
    await carregarDimensoesEFatos(tx);
  });
}`,
      explanation: "ETL pipeline with strict transactional guarantees preventing partial or dirty data reads.",
    },
    tags: ["Next.js", "PostgreSQL", "Star Schema", "ETL", "Drizzle ORM", "Vitest", "Server Actions"],
  },
  {
    id: "backend-monolito",
    title: "Modular Monolith & High-Concurrency Backend",
    category: "Backend Engineering & Modular Architecture",
    context: "NestJS, Bun & PostgreSQL",
    period: "2026",
    role: "Core Backend Developer",
    summary:
      "Architecture and implementation of core modules within a high-concurrency modular monolith using NestJS, Bun, PostgreSQL (Drizzle), and Better Auth: autonomous scheduler engine, enterprise ERP budget reconciliation mirror, and high-performance binary parsers.",
    problem:
      "Legacy external APIs with erratic response times exceeding 120 seconds, uncontrolled race conditions in shared schedules, and complex business logic requiring zero transactional integrity loss.",
    solution:
      "Decoupled modular architecture using dependency injection, circuit breakers with exponential backoff and timeouts, PostgreSQL advisory locks for distributed concurrency control, and structured observability with Pino and Axiom APL.",
    metrics: [
      { label: "Performance", value: "Bun + NestJS", detail: "Near-instant startup and high I/O throughput" },
      { label: "Resilience", value: "Circuit Breaker", detail: "Total protection against external API outages" },
      { label: "Concurrency", value: "Advisory Locks", detail: "Lock contention completely eradicated" },
      { label: "Observability", value: "Axiom APL", detail: "Structured logging with distributed trace IDs" },
    ],
    technicalHighlights: [
      "Modular monolith architecture with strict domain boundaries and private service exports.",
      "Custom circuit breaker wrapper shielding background tasks from slow or unresponsive upstream APIs.",
      "PostgreSQL advisory locks preventing concurrent cron executions across auto-scaling replicas.",
      "High-accuracy budget reconciliation mirror parsing thousands of ERP entries with 96% confidence.",
    ],
    codeSnippet: {
      filename: "circuit-breaker.interceptor.ts",
      code: `export async function executeWithCircuitBreaker<T>(
  action: () => Promise<T>,
  fallback: () => T,
  timeoutMs = 5000
): Promise<T> {
  try {
    return await Promise.race([
      action(),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new TimeoutError()), timeoutMs)
      )
    ]);
  } catch (err) {
    logger.warn({ err }, "Circuit breaker tripped. Executing fallback.");
    return fallback();
  }
}`,
      explanation: "Circuit breaker pattern preventing thread exhaustion and cascading failures from external services.",
    },
    tags: ["NestJS", "Bun", "PostgreSQL", "Drizzle ORM", "Circuit Breakers", "TypeScript", "Axiom"],
  },
  {
    id: "timecontrol",
    title: "TimeControl: Enterprise Team & Project Management",
    category: "Enterprise Web Applications",
    context: "Enterprise Web Systems",
    period: "2023 - 2024",
    role: "Full-Stack Developer",
    summary:
      "Enterprise web platform for team allocation, project oversight, and real-time task time-tracking. Built with PHP on the backend, JavaScript on the frontend, and MariaDB relational storage, integrated into automated Jenkins CI/CD pipelines.",
    problem:
      "Lack of centralized visibility across multi-project developer allocations and slow, manual generation of operational productivity reports.",
    solution:
      "End-to-end management platform with role-based access control, task-level time logging, automated executive reporting, and continuous deployment workflows configured in Jenkins.",
    metrics: [
      { label: "Backend", value: "PHP / REST", detail: "RESTful APIs and business domain logic" },
      { label: "Database", value: "MariaDB", detail: "Relational data modeling and optimized queries" },
      { label: "DevOps", value: "Jenkins", detail: "Automated CI/CD pipelines for testing and builds" },
    ],
    technicalHighlights: [
      "Relational schema modeling for projects, developers, hour logs, and task allocations.",
      "Implementation of RESTful APIs with strict authentication and request validation.",
      "Configuration of automated build and test validation jobs in Jenkins CI/CD.",
    ],
    tags: ["PHP", "JavaScript", "MariaDB", "SQL", "Jenkins CI/CD", "RESTful APIs"],
  },
];

export const TECHNICAL_DISCOVERIES_EN: TechnicalDiscovery[] = [
  {
    id: 1,
    title: "Resumable ERP Sweep with Heartbeat & Binary Partitioning",
    area: "Resilience & ERP Synchronization",
    context: "SAP ERP Sync (PostgreSQL / NestJS)",
    problemFound:
      "Nightly supply order synchronization from SAP ERP suffered from frequent network timeouts, false-empty HTTP 200 responses during off-peak hours, and total loss of progress upon deployments, restarting from scratch and causing database overload.",
    engineeringSolution:
      "Implemented a distributed state machine with checkpoint persistence and heartbeat-based lease ownership (auto-recovery after 10 min). Introduced a defensive recursive binary partitioning mechanism for large batch windows (split up to 5 times) and exponential backoff retry policies.",
    takeaway: "",
  },
  {
    id: 2,
    title: "BOLA/IDOR Shielding with Mandatory DB-Injected Scope",
    area: "Software Security & OWASP",
    context: "Multi-Tenant Authorization & RBAC (NestJS / Drizzle)",
    problemFound:
      "Permission checks for invoices and receipts were evaluated at the organization level, while individual document queries only checked record IDs. This created a critical BOLA (Broken Object Level Authorization) flaw: users could access sensitive invoices, digital signatures, and GPS coordinates from other construction sites simply by altering route IDs.",
    engineeringSolution:
      "Architected a centralized object-level authorization service (ObraAccessService) with mandatory site scope injection directly into SQL queries prior to client filter execution. Out-of-scope requests deliberately return HTTP 404 (Not Found) instead of 403 (Forbidden) to prevent identifier enumeration and information leakage.",
    takeaway: "",
  },
  {
    id: 3,
    title: "N+1 Bottleneck Eradication in Scheduler Cron via In-Memory Resolution",
    area: "Performance & Database Concurrency",
    context: "Database Optimization (PostgreSQL / Drizzle)",
    problemFound:
      "The cron worker performed sequential table scans for every housing unit to check hidden cards, generating hundreds of repetitive queries, massive lock contention on PostgreSQL, and operational slowdowns.",
    engineeringSolution:
      "Resolved hidden card states directly in memory using composite-key indexed Maps and Sets. The worker now employs a selective caching strategy that writes exclusively net diffs to the database, slashing processing time from minutes to seconds with zero lock contention.",
    takeaway: "",
  },
  {
    id: 4,
    title: "CRM Webhook Decoupling Outside the HTTP Request Path",
    area: "Asynchronous Architecture & Webhooks",
    context: "Microservices & APIs (NestJS / Kommo CRM)",
    problemFound:
      "Synchronous integration with external CRM systems during user onboarding held the HTTP request thread open, creating response latencies exceeding 8 seconds and triggering frequent HTTP 504 gateway timeouts on the frontend.",
    engineeringSolution:
      "Decoupled webhooks from the synchronous request lifecycle, dispatching events to background worker queues with independent retry backoffs and dead-letter queues, dropping HTTP endpoint latency to under 50ms.",
    takeaway: "",
  },
  {
    id: 5,
    title: "Streaming Export of 100K Supply Rows Without Out-Of-Memory Crashes",
    area: "High-Scale Systems & Memory Management",
    context: "Enterprise Reporting (Node.js / ExcelJS)",
    problemFound:
      "Generating comprehensive spreadsheets with supply histories and order balances caused Out-Of-Memory (OOM) fatal crashes when loading tens of thousands of rows simultaneously into V8 heap memory.",
    engineeringSolution:
      "Engineered continuous streaming exports using WorkbookWriter piped to paginated PostgreSQL cursors, generating styled spreadsheets with up to 100,000 rows in real time with near-flat memory consumption.",
    takeaway: "",
  },
  {
    id: 6,
    title: "Anti-Fraud Geofencing with Device Sensor Validation in Inspections",
    area: "Data Integrity & Field Auditing",
    context: "Material Inspection & Mobile Web",
    problemFound:
      "Material inspection sheets (FVM) on job sites were vulnerable to fraudulent submissions using generic photos taken off-site or recycled from prior delivery batches.",
    engineeringSolution:
      "Implemented strict geofencing validation extracting high-precision GPS coordinates from device hardware at submission time, asserting proximity against site boundary radius thresholds before approving material sign-offs.",
    takeaway: "",
  },
  {
    id: 7,
    title: "Win32 P/Invoke & Serial Bus Communication in Integrated OEM Hardware",
    area: "Hardware & Low-Level Engineering",
    context: "OEM Laptop (C# / C++ / Win32)",
    problemFound:
      "Updating the auxiliary physical display embedded into the laptop chassis through conventional APIs consumed excessive GPU and CPU cycles, rapidly draining battery life.",
    engineeringSolution:
      "Engineered a lightweight C# driver with native Win32 P/Invoke bindings (kernel32.dll) and compressed asynchronous serial UART communication with the display microcontroller, ensuring negligible background power consumption in Windows UWP.",
    takeaway: "",
  },
  {
    id: 8,
    title: "Full Reload with Single Transaction & Advisory Lock in BI ETL",
    area: "Data Engineering & Concurrency",
    context: "Data Warehouse & BI (PostgreSQL / Drizzle)",
    problemFound:
      "Concurrent executions or partial failures in ETL pipelines left Business Intelligence dashboards in corrupted or incomplete states during parallel database insertions.",
    engineeringSolution:
      "Built an atomic transactional pipeline protected by exclusive pg_try_advisory_lock in PostgreSQL. Competing executions return 409 Locked deterministically, guaranteeing total isolation between data ingestion and analytical queries.",
    takeaway: "",
  },
];

export const SKILL_GROUPS_EN = [
  {
    group: "Languages & Low-Level",
    items: [
      { name: "C# / .NET", level: "Advanced", desc: "Windows UWP apps, ASP.NET MVC, background services, and P/Invoke" },
      { name: "C++", level: "Advanced", desc: "Hardware integration, Win32 API, and serial bus protocols" },
      { name: "TypeScript / JavaScript", level: "Advanced", desc: "Next.js App Router, NestJS, Node.js, Bun, and binary parsers" },
      { name: "Python", level: "Advanced", desc: "Linux daemons, automation scripts, UDP sockets for Wake-On-LAN, and APIs" },
      { name: "PHP", level: "Intermediate/Advanced", desc: "Enterprise RESTful APIs and MVC architecture" },
      { name: "SQL (ANSI)", level: "Advanced", desc: "Analytical queries, indexes, dimensional modeling, and ACID transactions" },
    ],
  },
  {
    group: "Frameworks & Environments",
    items: [
      { name: "Next.js (App Router)", level: "Advanced", desc: "Server Actions, SSR, analytical routes, and operational dashboards" },
      { name: "NestJS / Bun / Node.js", level: "Advanced", desc: "Modular architectures, dependency injection, and circuit breakers" },
      { name: "Windows UWP", level: "Advanced", desc: "OEM desktop software, app lifecycles, and Microsoft Store certification" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Responsive interfaces, design systems, and micro-interactions" },
      { name: "WebGL / Three.js", level: "Intermediate", desc: "Interactive 3D scenes, camera controllers, and mesh rendering" },
    ],
  },
  {
    group: "Databases & Data Engineering",
    items: [
      { name: "PostgreSQL & Drizzle ORM", level: "Advanced", desc: "Relational modeling, migrations with advisory locks, and schemas" },
      { name: "Star Schema (Data Warehouse)", level: "Advanced", desc: "Dimension & fact modeling, grain definitions, and ETL pipelines" },
      { name: "Resilience & Concurrency", level: "Advanced", desc: "Circuit breakers, advisory locks, and race condition mitigations" },
      { name: "MariaDB / MySQL / SQL Server", level: "Advanced", desc: "Query optimization, normalization, and referential integrity" },
    ],
  },
  {
    group: "DevOps, Quality & Tools",
    items: [
      { name: "Jenkins", level: "Advanced", desc: "CI/CD pipeline creation and maintenance, automated builds, and test suites" },
      { name: "Axiom APL & Pino", level: "Advanced", desc: "Observability, structured logging, and analytical telemetry queries" },
      { name: "Docker & Linux", level: "Intermediate/Advanced", desc: "Containerized environments, Linux servers, and networking daemons" },
      { name: "Git / GitLab / GitHub", level: "Advanced", desc: "Trunk-based development, conflict resolution, and PR governance" },
    ],
  },
];

export const CAREER_JOURNEY_EN = [
  {
    role: "Software / Engineering Developer",
    company: "LYX Engenharia",
    period: "2026",
    type: "Contract / Strategic Project",
    description:
      "Engineering core backend microservices (NestJS, Bun, PostgreSQL/Drizzle) and Data Engineering & BI (Next.js App Router, Star Schema). Delivered mission-critical modules, resilient ETL pipelines with advisory locks, automated budget reconciliation with 96% accuracy, and circuit breakers against external network outages.",
    tags: ["Next.js", "NestJS", "Bun", "PostgreSQL", "Star Schema", "ETL", "Drizzle ORM", "Axiom"],
  },
  {
    role: "Mid-Level Full-Stack Developer",
    company: "Policorp Tecnologia",
    period: "2024 — Present",
    type: "Full-Time",
    description:
      "Responsible for the complete software layer of the embedded secondary display for commercial OEM notebooks (C#, C++, Win32, UWP certified on the Microsoft Store), CI/CD pipeline maintenance in Jenkins, and enterprise systems development in .NET, PHP, and MariaDB.",
    tags: [".NET", "C#", "C++", "Windows UWP", "Jenkins CI/CD", "Win32", "MariaDB"],
  },
  {
    role: "Junior Full-Stack Developer",
    company: "Policorp Tecnologia",
    period: "2023 — 2024",
    type: "Full-Time",
    description:
      "Development of enterprise applications (TimeControl), RESTful APIs, relational database modeling, and internal automation routines. Direct development on the Caixa Econômica Federal project: engineered a Python backend with UDP sockets for remote computer management via Wake-On-LAN (WOL), package listing, and power controls on Linux, paired with a responsive JavaScript web UI.",
    tags: ["Python", "Linux", "Wake-On-LAN", "UDP Sockets", "JavaScript", "PHP", "MariaDB", "REST APIs"],
  },
  {
    role: "Research & Development Apprentice (R&D)",
    company: "FiscalTech",
    period: "2022 — 2023",
    type: "R&D",
    description:
      "Technical role in the Research & Development (R&D) sector focused on intelligent traffic monitoring solutions: developed automation scripts in Python for data processing and technical validation of enterprise systems.",
    tags: ["Python", "R&D", "Automation", "Linux", "Software Testing"],
  },
  {
    role: "Electro-Electronics Apprentice",
    company: "Volkswagen",
    period: "2019 — 2021",
    type: "Technical Training",
    description:
      "Hands-on technical work with industrial sensors, electronic circuitry, and assembly-line automation routines in an automotive manufacturing plant.",
    tags: ["Industrial Automation", "Sensors", "Electronics"],
  },
];

export const EDUCATION_HONORS_EN = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Universidade Positivo",
    period: "2021 — 2024",
    badge: "GRADUATION COMPLETED",
    highlight: "Cumulative GPA: 8.74 / 10.0",
    description:
      "Rigorous academic training in fundamental algorithms, computational complexity, computer architecture, compilers, operating systems, and software engineering.",
  },
  {
    title: "3rd Place in Programming Marathon",
    institution: "Universidade Positivo",
    period: "University Competition",
    badge: "ALGORITHMS PODIUM",
    highlight: "Competitive Programming",
    description:
      "Hands-on resolution of complex data structures and algorithmic optimization challenges under severe time and computational resource constraints.",
  },
  {
    title: "CS50x — Introduction to Computer Science",
    institution: "Harvard University",
    period: "International Certification",
    badge: "Specialized Course",
    highlight: "C, Python, SQL, Data Structures",
    description:
      "In-depth mastery of manual memory management, pointers, classical data structures, graph theory, and algorithmic search and sorting.",
  },
  {
    title: "English Certificate C1 Advanced",
    institution: "EF SET",
    period: "Language Proficiency",
    badge: "C1 ADVANCED PROFICIENCY",
    highlight: "C1 Advanced Level (CEFR)",
    description:
      "Fluency for international technical and executive communication, reading complex specifications, and authoring software documentation.",
  },
];
