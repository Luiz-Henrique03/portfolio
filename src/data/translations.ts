export type Language = "pt" | "en";

export interface Translations {
  nav: {
    vision: string;
    bi: string;
    cases: string;
    discoveries: string;
    skills: string;
    journey: string;
    downloadCv: string;
    whatsapp: string;
    role: string;
    menu: string;
    close: string;
  };
  hero: {
    tag: string;
    skipTyping: string;
    promptSuccess: string;
    viewCases: string;
    chatWhatsapp: string;
    linkedin: string;
    github: string;
    cvPdf: string;
    bio: string;
    metrics: {
      expLabel: string;
      expValue: string;
      certLabel: string;
      certValue: string;
      statusLabel: string;
      statusValue: string;
    };
  };
  vision: {
    tag: string;
    title: string;
    subtitle: string;
    specsTitle: string;
    screenType: string;
    resolution: string;
    interfaceType: string;
    archTitle: string;
    viewProduct: string;
  };
  bi: {
    tag: string;
    title: string;
    subtitle: string;
    exploreTitle: string;
    objectiveLabel: string;
    archLabel: string;
    impactLabel: string;
    stackLabel: string;
  };
  cases: {
    tag: string;
    title: string;
    subtitle: string;
    actingLabel: string;
    challengeTitle: string;
    solutionTitle: string;
    highlightsTitle: string;
    stacksLabel: string;
    metricsLabel: string;
  };
  discoveries: {
    tag: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    expand: string;
    collapse: string;
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
    radarTitle: string;
    radarSub: string;
    matrixTitle: string;
    matrixSub: string;
    coreBadge: string;
    frameworksBadge: string;
    databasesBadge: string;
    devopsBadge: string;
  };
  career: {
    tag: string;
    title: string;
    present: string;
    fullTime: string;
    contract: string;
    educationTitle: string;
    experienceTitle: string;
    certificationsTitle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    whatsappButton: string;
    emailButton: string;
    linkedinButton: string;
    githubButton: string;
    locationLabel: string;
    locationValue: string;
    availableBadge: string;
    cardTitle: string;
  };
  footer: {
    status: string;
    rights: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  pt: {
    nav: {
      vision: "Positivo Vision R15M",
      bi: "BI & Engenharia de Dados",
      cases: "Projetos de Software",
      discoveries: "Casos Técnicos",
      skills: "Skills",
      journey: "Trajetória",
      downloadCv: "[BAIXAR CV]",
      whatsapp: "[WHATSAPP]",
      role: "Software Developer",
      menu: "[MENU]",
      close: "[FECHAR]",
    },
    hero: {
      tag: "[ARQUITETURA DE SOFTWARE & ENGENHARIA DE DADOS]",
      skipTyping: "[PULAR DIGITAÇÃO ⚡]",
      promptSuccess: "[PROMPT COMPILADO COM SUCESSO]",
      viewCases: "VER CASOS DE ENGENHARIA",
      chatWhatsapp: "CONVERSAR NO WHATSAPP",
      linkedin: "LINKEDIN",
      github: "GITHUB",
      cvPdf: "CV PDF",
      bio: [
        "Bacharel em Ciência da Computação pela Universidade Positivo e certificado CS50x pela Harvard University, com proficiência em inglês C1 Advanced.",
        "",
        "Atuação sólida na engenharia de software de ponta a ponta, unindo baixo nível, desenvolvimento web, resiliência de backend e arquitetura de dados:",
        "",
        "• HARDWARE OEM & BAIXO NÍVEL: Desenvolvimento em C#, C++ e chamadas Win32 nativas (P/Invoke) para controle de barramento serial e drivers da minitela embutida em notebook OEM com tela secundária (Vision R15M), com aplicação UWP homologada na Microsoft Store.",
        "",
        "• DESENVOLVIMENTO WEB & APLICAÇÕES MODERNAS: Construção de aplicações e interfaces modernas em Next.js, React e TypeScript, incluindo a página oficial de download de distribuição Linux corporativa e o desenvolvimento de portais operacionais, formulários dinâmicos e módulos web para sistemas corporativos de grande porte.",
        "",
        "• BACKEND & MONÓLITOS MODULARES: Arquitetura de monólitos modulares de alta concorrência em NestJS, Bun e TypeScript para plataformas corporativas de missão crítica, com circuit breakers contra falhas externas, conciliação orçamentária automatizada com 96% de assertividade, parsers binários de alta performance e sincronização resiliente via PostgreSQL advisory locks.",
        "",
        "• ENGENHARIA DE DADOS & BI: Modelagem dimensional Star Schema (dimensões e fatos), pipelines de ETL serializados por advisory locks no PostgreSQL e dashboards operacionais em tempo real com Next.js App Router e Server Actions."
      ].join("\n"),
      metrics: {
        expLabel: "Experiência",
        expValue: "4+ Anos",
        certLabel: "Certificação",
        certValue: "CS50x Harvard",
        statusLabel: "Disponibilidade",
        statusValue: "Disponível para Projetos",
      },
    },
    vision: {
      tag: "[ENGENHARIA DE HARDWARE EMBARCADO] // CASE DE IMPACTO OEM",
      title: "POSITIVO VISION R15M: MINITELA EMBARCADA",
      subtitle:
        "Desenvolvimento completo da camada de software e integração de baixo nível para a mini tela física integrada no chassi do notebook Positivo Vision R15M. Do barramento serial à publicação na Microsoft Store.",
      specsTitle: "TELEMETRIA DE HARDWARE & INTEGRAÇÃO",
      screenType: "Tela Secundária Embutida",
      resolution: "Minitela OLED Colorida",
      interfaceType: "Barramento Serial / Win32 / UWP",
      archTitle: "ARQUITETURA DE SOFTWARE EMBARCADO",
      viewProduct: "VER PRODUTO COMERCIAL",
    },
    bi: {
      tag: "[ENGENHARIA DE DADOS & BI] // ESCALA ANALÍTICA",
      title: "DASHBOARDS ANALÍTICOS & MODELAGEM STAR SCHEMA",
      subtitle:
        "Pipelines de ETL com isolamento transacional, modelagem dimensional e painéis executivos de alta performance em Next.js App Router e PostgreSQL.",
      exploreTitle: "MÓDULOS DE BUSINESS INTELLIGENCE",
      objectiveLabel: "OBJETIVO DO MÓDULO",
      archLabel: "ARQUITETURA TÉCNICA",
      impactLabel: "IMPACTO EM PRODUÇÃO",
      stackLabel: "STACK TECNOLÓGICA",
    },
    cases: {
      tag: "[PORTFÓLIO DE SISTEMAS] // ENGENHARIA REAL EM PRODUÇÃO",
      title: "ARQUITETURA DE SISTEMAS & PROJETOS ENTREGUES",
      subtitle:
        "Sistemas distribuídos, infraestrutura bancária com Wake-On-LAN, monólitos modulares em NestJS e soluções corporativas escaláveis.",
      actingLabel: "ATUAÇÃO:",
      challengeTitle: "[DESAFIO TÉCNICO]",
      solutionTitle: "[SOLUÇÃO DE ENGENHARIA]",
      highlightsTitle: "// DESTAQUES DE ARQUITETURA & CÓDIGO",
      stacksLabel: "STACKS:",
      metricsLabel: "MÉTRICAS:",
    },
    discoveries: {
      tag: "[ENGENHARIA NA PRÁTICA] // RELATÓRIOS FORENSES DE PRODUÇÃO",
      title: "CASOS DE DIAGNÓSTICO E SOLUÇÃO TÉCNICA",
      subtitle:
        "Exemplos concretos de gargalos e inconsistências técnicas identificados e solucionados em sistemas de hardware, dados e monólitos modulares.",
      problemLabel: "// Gargalo / Problema Diagnosticado:",
      solutionLabel: "// Solução de Engenharia Aplicada:",
      expand: "[+ DETALHAR INVESTIGAÇÃO]",
      collapse: "[- RECOLHER]",
    },
    skills: {
      tag: "[ARSENAL TECNOLÓGICO] // CAPACIDADES DE ENGENHARIA",
      title: "MATRIZ DE HABILIDADES TÉCNICAS",
      subtitle:
        "Domínio prático comprovado em produção: de linguagens de baixo nível e hardware até ecossistemas modernos de backend e computação em nuvem.",
      radarTitle: "RADAR DE DOMÍNIO TÉCNICO",
      radarSub: "Distribuição percentual de competências por área de engenharia.",
      matrixTitle: "MATRIZ DETALHADA POR TECNOLOGIA",
      matrixSub: "Níveis de maturidade e tempo de aplicação em cenários reais.",
      coreBadge: "Linguagens & Core",
      frameworksBadge: "Frameworks & Web",
      databasesBadge: "Bancos de Dados",
      devopsBadge: "DevOps & Ferramentas",
    },
    career: {
      tag: "[TRAJETÓRIA]",
      title: "HISTÓRICO ACADÊMICO E PROFISSIONAL",
      present: "Atual",
      fullTime: "Tempo Integral",
      contract: "Contrato / Projeto Estratégico",
      educationTitle: "FORMAÇÃO ACADÊMICA & HONRAS",
      experienceTitle: "EXPERIÊNCIA PROFISSIONAL",
      certificationsTitle: "CERTIFICAÇÕES",
    },
    contact: {
      tag: "[CONEXÃO DIRETA] // VAMOS TRABALHAR JUNTOS",
      title: "DISPONÍVEL PARA NOVOS DESAFIOS",
      subtitle:
        "Seja para desenvolvimento web full-stack, arquitetura de APIs, sistemas embarcados em C#/.NET ou consultoria técnica — entre em contato diretamente:",
      whatsappButton: "CHAMAR NO WHATSAPP",
      emailButton: "ENVIAR E-MAIL",
      linkedinButton: "CONECTAR NO LINKEDIN",
      githubButton: "VER CÓDIGO NO GITHUB",
      locationLabel: "LOCALIZAÇÃO",
      locationValue: "Curitiba - PR, Brasil (Disponível Remoto)",
      availableBadge: "STATUS: DISPONÍVEL PARA PROJETOS",
      cardTitle: "INFORMAÇÕES DE CONTATO",
    },
    footer: {
      status: "SISTEMA OPERACIONAL: PRODUÇÃO // STATUS: ONLINE",
      rights: "TODOS OS DIREITOS RESERVADOS.",
      backToTop: "[VOLTAR AO TOPO ↑]",
    },
  },
  en: {
    nav: {
      vision: "Positivo Vision R15M",
      bi: "BI & Data Engineering",
      cases: "Software Projects",
      discoveries: "Case Studies",
      skills: "Skills",
      journey: "Career Journey",
      downloadCv: "[DOWNLOAD CV]",
      whatsapp: "[WHATSAPP]",
      role: "Full-Stack Software Engineer",
      menu: "[MENU]",
      close: "[CLOSE]",
    },
    hero: {
      tag: "[SOFTWARE ARCHITECTURE & DATA ENGINEERING]",
      skipTyping: "[SKIP TYPING ⚡]",
      promptSuccess: "[PROMPT COMPILED SUCCESSFULLY]",
      viewCases: "EXPLORE ENGINEERING CASES",
      chatWhatsapp: "CHAT ON WHATSAPP",
      linkedin: "LINKEDIN",
      github: "GITHUB",
      cvPdf: "CV PDF",
      bio: [
        "Bachelor of Science in Computer Science from Universidade Positivo and CS50x certified by Harvard University, with C1 Advanced English proficiency.",
        "",
        "Solid end-to-end software engineering background spanning low-level hardware drivers, modern web platforms, resilient distributed backends, and data architecture:",
        "",
        "• OEM HARDWARE & LOW-LEVEL: C#, C++ and native Win32 (P/Invoke) development for serial bus communication and embedded display drivers in OEM laptops with secondary screens (Vision R15M), certified on the Microsoft Store.",
        "",
        "• WEB DEVELOPMENT & MODERN APPS: Architecting responsive web applications in Next.js, React, and TypeScript, including official enterprise Linux distribution download portals, operational dashboards, and dynamic enterprise modules.",
        "",
        "• BACKEND & MODULAR MONOLITHS: Engineering high-concurrency modular monoliths with NestJS, Bun, and TypeScript for mission-critical enterprise systems, featuring circuit breakers against external failures, automated budget reconciliation with 96% accuracy, high-performance binary parsers, and resilient synchronization via PostgreSQL advisory locks.",
        "",
        "• DATA ENGINEERING & BI: Star Schema dimensional modeling (dimensions and facts), resilient ETL pipelines with PostgreSQL advisory locks, and real-time operational executive dashboards using Next.js App Router and Server Actions."
      ].join("\n"),
      metrics: {
        expLabel: "Experience",
        expValue: "4+ Years",
        certLabel: "Certification",
        certValue: "CS50x Harvard",
        statusLabel: "Availability",
        statusValue: "Available for Projects",
      },
    },
    vision: {
      tag: "[EMBEDDED HARDWARE ENGINEERING] // OEM IMPACT CASE",
      title: "POSITIVO VISION R15M: EMBEDDED SUB-DISPLAY",
      subtitle:
        "Full end-to-end software layer and low-level hardware integration for the physical secondary mini-screen built into the Positivo Vision R15M chassis. From serial bus protocols to Microsoft Store certification.",
      specsTitle: "HARDWARE TELEMETRY & INTEGRATION",
      screenType: "Embedded Secondary Display",
      resolution: "Color OLED Sub-screen",
      interfaceType: "Serial Bus / Win32 / UWP",
      archTitle: "EMBEDDED SOFTWARE ARCHITECTURE",
      viewProduct: "VIEW COMMERCIAL PRODUCT",
    },
    bi: {
      tag: "[DATA ENGINEERING & BI] // ANALYTICAL SCALE",
      title: "ANALYTICAL DASHBOARDS & STAR SCHEMA MODELING",
      subtitle:
        "ETL pipelines with transactional isolation, dimensional modeling, and high-performance executive dashboards built with Next.js App Router and PostgreSQL.",
      exploreTitle: "BUSINESS INTELLIGENCE MODULES",
      objectiveLabel: "MODULE OBJECTIVE",
      archLabel: "TECHNICAL ARCHITECTURE",
      impactLabel: "PRODUCTION IMPACT",
      stackLabel: "TECH STACK",
    },
    cases: {
      tag: "[SYSTEMS PORTFOLIO] // REAL PRODUCTION ENGINEERING",
      title: "SYSTEMS ARCHITECTURE & DELIVERED PROJECTS",
      subtitle:
        "Distributed systems, banking network infrastructure with Wake-On-LAN, modular monoliths in NestJS, and scalable enterprise applications.",
      actingLabel: "ROLE:",
      challengeTitle: "[TECHNICAL CHALLENGE]",
      solutionTitle: "[ENGINEERING SOLUTION]",
      highlightsTitle: "// ARCHITECTURE & CODE HIGHLIGHTS",
      stacksLabel: "STACKS:",
      metricsLabel: "METRICS:",
    },
    discoveries: {
      tag: "[ENGINEERING IN PRACTICE] // FORENSIC PRODUCTION REPORTS",
      title: "TECHNICAL DIAGNOSTIC & CASE STUDIES",
      subtitle:
        "Concrete examples of bottlenecks and technical inconsistencies diagnosed and resolved across hardware, data pipelines, and modular monoliths.",
      problemLabel: "// Diagnosed Problem / Bottleneck:",
      solutionLabel: "// Applied Engineering Solution:",
      expand: "[+ EXPAND INVESTIGATION]",
      collapse: "[- COLLAPSE]",
    },
    skills: {
      tag: "[TECHNOLOGICAL ARSENAL] // ENGINEERING CAPABILITIES",
      title: "TECHNICAL SKILLS MATRIX",
      subtitle:
        "Hands-on production mastery: from low-level systems and embedded hardware to modern backend ecosystems and cloud platforms.",
      radarTitle: "TECHNICAL MASTERY RADAR",
      radarSub: "Percentage distribution of competencies by engineering domain.",
      matrixTitle: "DETAILED TECHNOLOGY MATRIX",
      matrixSub: "Maturity levels and application time across real-world production systems.",
      coreBadge: "Languages & Core",
      frameworksBadge: "Frameworks & Web",
      databasesBadge: "Databases",
      devopsBadge: "DevOps & Tools",
    },
    career: {
      tag: "[TIMELINE]",
      title: "ACADEMIC & PROFESSIONAL BACKGROUND",
      present: "Present",
      fullTime: "Full-Time",
      contract: "Contract / Strategic Project",
      educationTitle: "ACADEMIC EDUCATION & HONORS",
      experienceTitle: "PROFESSIONAL EXPERIENCE",
      certificationsTitle: "CERTIFICATIONS",
    },
    contact: {
      tag: "[DIRECT CONNECTION] // LET'S WORK TOGETHER",
      title: "AVAILABLE FOR NEW CHALLENGES",
      subtitle:
        "Whether for full-stack web development, API architecture, C#/.NET embedded systems, or technical consulting — reach out directly:",
      whatsappButton: "CHAT ON WHATSAPP",
      emailButton: "SEND AN EMAIL",
      linkedinButton: "CONNECT ON LINKEDIN",
      githubButton: "VIEW CODE ON GITHUB",
      locationLabel: "LOCATION",
      locationValue: "Curitiba - PR, Brazil (Available Worldwide)",
      availableBadge: "STATUS: AVAILABLE FOR CONTRACTS",
      cardTitle: "CONTACT DETAILS",
    },
    footer: {
      status: "OPERATING SYSTEM: PRODUCTION // STATUS: ONLINE",
      rights: "ALL RIGHTS RESERVED.",
      backToTop: "[BACK TO TOP ↑]",
    },
  },
};
