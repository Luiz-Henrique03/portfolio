export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  context: string;
  period: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string; detail?: string }[];
  technicalHighlights: string[];
  codeSnippet?: {
    filename: string;
    code: string;
    explanation: string;
  };
  tags: string[];
}

export interface TechnicalDiscovery {
  id: number;
  title: string;
  area: string;
  context: string;
  problemFound: string;
  engineeringSolution: string;
  takeaway: string;
}

export const PERSONAL_INFO = {
  name: "Luiz Henrique da Silva de Oliveira",
  shortName: "Luiz Henrique",
  callsign: "LUIZ HENRIQUE",
  role: "Desenvolvedor de Software Full-Stack",
  headline:
    "Graduado em Ciência da Computação (Média 8.74, 3º lugar na Maratona de Programação) e certificado CS50x por Harvard. Experiência no desenvolvimento de software de ponta a ponta: de aplicações desktop e baixo nível integradas a hardware (C#, C++, .NET) a arquiteturas web, microsserviços (NestJS, Bun, TypeScript, Python) e engenharia de dados & BI (Next.js, PostgreSQL, Star Schema, ETL).",
  location: "Curitiba - PR",
  email: "luizdasilvaoliveira7@gmail.com",
  phone: "+55 (41) 99895-7337",
  whatsappUrl: "https://wa.me/5541998957337?text=Ol%C3%A1%20Luiz,%20acessei%20seu%20portf%C3%B3lio%20de%20desenvolvedor%20e%20gostaria%20de%20conversar!",
  github: "https://github.com/Luiz-Henrique03",
  linkedin: "https://www.linkedin.com/in/luiz-henrique-s-b05363226/",
  cvPath: "/cv.pdf",
};

export const CORE_METRICS = [
  { label: "Média Graduação", value: "8.74", detail: "Bacharel em Ciência da Computação (Universidade Positivo)" },
  { label: "Maratona de Programação", value: "3º Lugar", detail: "Pódio universitário em algoritmos e resolução sob pressão" },
  { label: "Hardware OEM", value: "Vision R15M", detail: "Minitela embarcada C#/C++ publicada na Microsoft Store" },
  { label: "Dashboards de BI", value: "2 Módulos", detail: "Fiscalização e Impedimentos (Star Schema, ETL atômico em Next.js)" },
  { label: "Sistemas em Produção", value: "4 Módulos", detail: "Agenda Fiscais, Almoxarifado, Medições e Admissão" },
  { label: "Testes de Integração", value: "714+", detail: "Testes automatizados reais com Postgres WASM (PGlite)" },
  { label: "Tempo de Parsing .MPP", value: "250ms", detail: "2.490 tarefas do MS Project em TypeScript nativo sem Java" },
  { label: "Certificação Internacional", value: "CS50x", detail: "Harvard University (C, Python, SQL, Algoritmos)" },
];

export const BI_DASHBOARDS = [
  {
    id: "bi-fiscalizacao",
    title: "BI de Fiscalização de Obras",
    objective: "Consolidação analítica do ciclo de vistorias de qualidade, liberação de serviços e não conformidades em canteiros de obras.",
    architecture: "Modelagem dimensional (Star Schema) com pipeline de ETL automatizado em Next.js e PostgreSQL, desacoplando o banco analítico do operacional.",
    impact: "Visibilidade executiva em tempo real de indicadores de qualidade, conformidade técnica e métricas contratuais de empreiteiras parceiras.",
    stack: ["Next.js (App Router)", "PostgreSQL", "Drizzle ORM", "Vitest", "Star Schema"],
    highlights: [
      "Isolamento entre banco analítico e operacional, garantindo consultas rápidas sem impacto nas aplicações de canteiro.",
      "Pipeline de ETL com atualização atômica e controle de concorrência no PostgreSQL.",
      "Ajuste em regras de negócio para atribuição precisa de ocorrências por razão social de empresas contratadas.",
    ],
  },
  {
    id: "bi-impedimentos",
    title: "Torre de Controle de Impedimentos de Obra",
    objective: "Painel operacional em tempo real para registro, triagem e resolução de paralisações em canteiros de obras.",
    architecture: "Aplicação em Next.js App Router com Server Actions para tratativas ágeis, controle automatizado de SLA (48h) e modo mural para TVs corporativas.",
    impact: "Agilidade na resolução de gargalos operacionais (Projetos, Suprimentos e Execução), redução no tempo de obras paradas e histórico centralizado de decisões.",
    stack: ["Next.js (App Router)", "React Server Actions", "PostgreSQL", "Zod", "Vitest"],
    highlights: [
      "Fluxo de tratativas em tempo real com controle de SLA e faixas visuais de envelhecimento de demandas.",
      "Server Actions com autorização direta no banco de dados para segurança em operações críticas.",
      "Modo TV automatizado para exibição contínua em telas de monitoramento nas centrais de engenharia.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "positivo-vision",
    title: "Positivo Vision R15M: Minitela Embarcada",
    category: "Software Embarcado & Desktop Windows",
    context: "Positivo Tecnologia / Policorp",
    period: "2023 - 2024",
    role: "Desenvolvedor de Sistemas / Baixo Nível",
    summary:
      "Desenvolvimento completo da camada de software e integração com a mini tela física integrada no chassi do notebook Positivo Vision R15M. Implementação de protocolos seriais, drivers, telemetria de hardware e aplicativo Windows UWP certificado na Microsoft Store.",
    problem:
      "Controlar uma tela secundária LCD com restrições extremas de consumo de bateria, latência reduzida e integração contínua com hardware através do Windows.",
    solution:
      "Construção de uma ponte em C# e C++ utilizando Win32 APIs nativas (P/Invoke) para comunicação serial com o microcontrolador, telemetria de hardware (temperatura, clock, bateria), aplicativo em Windows UWP e certificação OEM para a Microsoft Store.",
    metrics: [
      { label: "Plataforma", value: "Windows UWP", detail: "Publicado na Microsoft Store" },
      { label: "Linguagens", value: "C# / C++", detail: "Interoperabilidade Win32 e serial" },
      { label: "Hardware", value: "Notebook OEM", detail: "Linha de fábrica Positivo Vision R15M" },
      { label: "Controle de Versão", value: "GitLab", detail: "Gerenciamento de releases de fábrica" },
    ],
    technicalHighlights: [
      "Comunicação serial direta com o microcontrolador proprietário da minitela.",
      "Interoperabilidade P/Invoke com Win32 API (kernel32.dll) para leitura de telemetria sem onerar a CPU.",
      "Manipulação de buffers binários de caracteres e renderização gráfica para display LCD.",
      "Empacotamento MSIX/Appx e assinatura de código homologada na Microsoft Store.",
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
      explanation: "Envio de frames binários de pixels e telemetria diretamente para o microcontrolador da minitela.",
    },
    tags: ["C#", "C++", ".NET", "Windows UWP", "Win32 P/Invoke", "Serial UART", "Microsoft Store"],
  },
  {
    id: "bi-dashboards",
    title: "Engenharia de Dados & Dashboards de BI",
    category: "Engenharia de Dados & Business Intelligence",
    context: "LYX Engenharia",
    period: "2026",
    role: "Desenvolvedor Full-Stack & Dados",
    summary:
      "Criação de dashboards operacionais e gerenciais em Next.js App Router alimentados por banco analítico PostgreSQL dedicado com modelagem Star Schema (4 dimensões e 5 fatos) e pipelines de ETL atômicos.",
    problem:
      "Consultas pesadas diretamente no banco operacional causavam lentidão em telas de usuários. Relatórios continham inconsistências de regras de negócio (como atribuição incorreta de não conformidades) e atrasos de sincronização.",
    solution:
      "Separação estrita entre banco operacional e banco analítico. Modelagem dimensional Star Schema, pipeline de ETL com full reload atômico em 1-2s com advisory lock do Postgres, e módulo de impedimentos com Server Actions e Modo TV para murais de canteiro.",
    metrics: [
      { label: "Modelagem", value: "Star Schema", detail: "4 dimensões e 5 tabelas fato" },
      { label: "Tempo de ETL", value: "1 a 2s", detail: "Full reload atômico com advisory lock" },
      { label: "Módulos", value: "2 Dashboards", detail: "Fiscalização e Impedimentos de Obra" },
      { label: "Testes", value: "26 Arquivos", detail: "3.896 linhas de testes em Vitest" },
    ],
    technicalHighlights: [
      "Isolamento arquitetural entre banco operacional e banco do BI.",
      "ETL com transação atômica BEGIN...COMMIT e TRUNCATE sem cascade, serializado por pg_try_advisory_lock.",
      "Server Actions com autorização no WHERE (exigirAutorUserId) para mitigação de vulnerabilidades.",
      "Modo TV que gerencia transições automáticas de slides via URL state em murais de obras.",
    ],
    codeSnippet: {
      filename: "fiscalizacao-etl.service.ts",
      code: `// Full reload atômico com advisory lock para evitar concorrência no ETL
export async function executarEtlFiscalizacao(db: DrizzleClient) {
  const lockAdquirido = await db.execute(sql\`SELECT pg_try_advisory_lock(427914)\`);
  if (!lockAdquirido.rows[0].pg_try_advisory_lock) {
    throw new EtlConcorrenteError("Execução em andamento");
  }

  await db.transaction(async (tx) => {
    // Truncate atômico em todas as dimensões e fatos
    await tx.execute(sql\`TRUNCATE bi.fact_fiscalizacao, bi.fact_nc RESTART IDENTITY\`);
    // Carga idempotente dos dados do banco operacional
    await carregarDimensoesEFatos(tx);
  });
}`,
      explanation: "Pipeline de ETL com garantia transacional que impede visualização de dados parciais.",
    },
    tags: ["Next.js", "PostgreSQL", "Star Schema", "ETL", "Drizzle ORM", "Vitest", "Server Actions"],
  },
  {
    id: "backend-monolito",
    title: "Backend & Monolito Modular Resiliente",
    category: "Engenharia de Backend & Microsserviços",
    context: "LYX Engenharia",
    period: "2026",
    role: "Desenvolvedor Backend Core",
    summary:
      "Arquitetura e desenvolvimento de módulos centrais no lyx-monolith em NestJS, Bun, PostgreSQL (Drizzle) e Better Auth: motor de agendamento autônomo de vistorias, espelho de ERP com conciliação orçamentária e leitura de notas fiscais.",
    problem:
      "Processos manuais lentos em canteiros, timeouts severos em APIs de ERPs legados (acima de 120 segundos) e necessidade de regras de negócio complexas sem quebra de integridade transacional.",
    solution:
      "Construção de 4 módulos de missão crítica, implementação de clientes HTTP resilientes com circuit breaker, migração de dados com advisory locks no boot e 714 testes automatizados em Postgres WASM real (PGlite).",
    metrics: [
      { label: "Módulos Zero-to-One", value: "4", detail: "Agenda, Almoxarifado, Medições, Admissão" },
      { label: "Testes Reais", value: "714", detail: "Postgres WASM real (PGlite), zero mocks" },
      { label: "Otimização API", value: "120s → 2s", detail: "Redução de latência no espelho do ERP SAP" },
      { label: "Parsing .MPP", value: "250ms", detail: "2.490 tarefas em TypeScript puro sem Java" },
    ],
    technicalHighlights: [
      "Motor autônomo de fiscalização com 27 regras de FVS modeladas como dados e escalonador de 4 passes.",
      "Parser de cronogramas do MS Project (.mpp) em TypeScript nativo (@tensor-estate/tsmpp) rodando em 250ms.",
      "Conciliação orçamentária do ERP SAP por famílias de insumos espécie S com 96% de assertividade.",
      "Auditoria forense no Axiom via queries APL que erradicou 562 agendamentos órfãos no Microsoft Teams.",
    ],
    codeSnippet: {
      filename: "agenda-fiscais.agendador.ts",
      code: `// Algoritmo de 4 passes para alocação balanceada de fiscais
export async function alocarFiscal(demanda: Demanda, pool: Fiscal[]): Promise<ResultadoAlocacao> {
  // Retorno tri-estado contra consistência eventual do Graph: livre | ocupado | erro
  const disponibilidade = await verificarSlotsTriEstado(pool);
  if (disponibilidade.possuiErro) {
    throw new CircuitError("Falha na consulta do calendário; abortando com segurança");
  }

  // Passe 1: Balanceamento semanal estrito sem repetir fiscal
  // Passe 2: Relaxamento de anti-repetição mantendo teto de 2 fiscais por obra
  // Passe 3: Aceitação de compartilhamento de slot
  // Passe 4: Extensão de horizonte de agendamento
  return despacharPlano(demanda, disponibilidade.slots);
}`,
      explanation: "Escalonamento com blindagem contra falhas silenciosas de rede em APIs externas.",
    },
    tags: ["NestJS", "Bun", "PostgreSQL", "Drizzle ORM", "PGlite WASM", "TypeScript", "Axiom"],
  },
  {
    id: "caixa-wol",
    title: "Gerenciamento Remoto de Máquinas (Wake-On-LAN)",
    category: "Sistemas Distribuídos & Redes",
    context: "FiscalTech / Caixa Econômica Federal",
    period: "2022 - 2023",
    role: "Desenvolvedor de Software (P&D)",
    summary:
      "Desenvolvimento de daemons Linux e serviços de backend em Python para gerenciamento e acionamento remoto de computadores através de pacotes mágicos Wake-On-LAN (WOL), além de painel web em JavaScript para controle de parques corporativos.",
    problem:
      "Necessidade de ligar, desligar, reiniciar e aplicar atualizações em centenas de computadores bancários distribuídos geograficamente sem deslocamento físico de equipes de TI.",
    solution:
      "Backend em Python com sockets UDP para emissão de pacotes Wake-On-LAN através de sub-redes, API REST de gerenciamento e frontend dinâmico para controle em tempo real.",
    metrics: [
      { label: "Protocolo", value: "UDP / WOL", detail: "Magic packets transmitidos em rede corporativa" },
      { label: "Ambiente", value: "Linux Server", detail: "Daemons seguros de gerenciamento" },
      { label: "Stack", value: "Python / JS", detail: "Backend em Python e interface dinâmica" },
    ],
    technicalHighlights: [
      "Montagem de pacotes binários mágicos (payload com 6 bytes 0xFF e 16 repetições do MAC address).",
      "Transmissão via sockets UDP em portas de broadcast configuráveis.",
      "Controle de estado de hosts remotos com detecção de disponibilidade e comandos de energia.",
    ],
    tags: ["Python", "Linux", "Wake-On-LAN", "Sockets UDP", "Redes", "JavaScript"],
  },
  {
    id: "timecontrol",
    title: "TimeControl: Gestão Corporativa de Equipes e Projetos",
    category: "Aplicações Web Corporativas",
    context: "Policorp Tecnologia",
    period: "2023 - 2024",
    role: "Desenvolvedor Full-Stack",
    summary:
      "Aplicação web corporativa voltada para gerenciamento de equipes, projetos e apontamento de horas em tempo real. Desenvolvida em PHP no backend, JavaScript no frontend e MariaDB como banco relacional, integrada a pipelines no Jenkins.",
    problem:
      "Falta de visibilidade centralizada sobre a alocação de horas de desenvolvedores em múltiplos projetos simultâneos e geração manual e demorada de relatórios de produtividade.",
    solution:
      "Plataforma completa com autenticação, controle de acesso baseado em papéis, registro de horas por tarefa, relatórios gerenciais automáticos e pipelines de entrega contínua no Jenkins.",
    metrics: [
      { label: "Backend", value: "PHP / REST", detail: "APIs RESTful e regras de negócio" },
      { label: "Banco de Dados", value: "MariaDB", detail: "Modelagem relacional e queries otimizadas" },
      { label: "DevOps", value: "Jenkins", detail: "Pipelines de CI/CD para build e testes" },
    ],
    technicalHighlights: [
      "Modelagem relacional de projetos, desenvolvedores, alocações e horas trabalhadas.",
      "Implementação de APIs RESTful com autenticação e validação estrita de requisições.",
      "Configuração de jobs e pipelines no Jenkins para automação de builds e testes.",
    ],
    tags: ["PHP", "JavaScript", "MariaDB", "SQL", "Jenkins CI/CD", "RESTful APIs"],
  },
];

export const TECHNICAL_DISCOVERIES: TechnicalDiscovery[] = [
  {
    id: 1,
    title: "P/Invoke Win32 e Barramento Serial no Positivo Vision R15M",
    area: "Hardware & Baixo Nível",
    context: "Positivo Tecnologia",
    problemFound:
      "Atualizar a minitela embarcada no notebook consumindo APIs comuns do Windows causava picos de uso de CPU e impacto na autonomia da bateria.",
    engineeringSolution:
      "Utilização de chamadas diretas P/Invoke da Win32 API (kernel32.dll) e comunicação serial assíncrona compactada com o microcontrolador do display, garantindo consumo mínimo de energia e operação em segundo plano no Windows UWP.",
    takeaway: "Em sistemas embarcados, a eficiência mora na proximidade com as chamadas nativas do sistema operacional.",
  },
  {
    id: 2,
    title: "Full Reload Atômico com Advisory Lock no ETL de BI",
    area: "Engenharia de Dados",
    context: "LYX Engenharia (BI Fiscalização)",
    problemFound:
      "Cargas concorrentes ou parciais de ETL deixavam o dashboard em estado inconsistente enquanto as queries de inserção eram executadas.",
    engineeringSolution:
      "Estruturação de pipeline de ETL que executa dentro de uma única transação BEGIN...COMMIT com TRUNCATE e reinserção dos fatos, protegido por advisory lock do Postgres (pg_try_advisory_lock 427914) que responde 409 locked para tentativas simultâneas.",
    takeaway: "Para volumes de milhares de registros com carga rápida (1 a 2s), o full reload atômico elimina complexidade e garante consistência imediata.",
  },
  {
    id: 3,
    title: "Correção de Atribuição de Não Conformidades por Razão Social",
    area: "Modelagem de Negócio",
    context: "LYX Engenharia (BI Fiscalização)",
    problemFound:
      "O dashboard atribuía não conformidades a quem cadastrou a vistoria (161 de 165 apontamentos vinculavam à mesma pessoa física), inviabilizando a cobrança contratual de empreiteiras.",
    engineeringSolution:
      "Reestruturação da dimensão para capturar a razão social em caixa alta e o regime de contratação (Terceirizado vs Mão de Obra Própria) diretamente na linha do fato, separando contratos de gestão interna sem recorrer a joins textuais imprecisos.",
    takeaway: "Dados analíticos usados para cobrança financeira exigem que a chave estrangeira reflita a entidade jurídica real, não o usuário do sistema.",
  },
  {
    id: 4,
    title: "Autorização no WHERE de Server Actions Públicas",
    area: "Segurança de Software",
    context: "LYX Engenharia (BI Impedimentos)",
    problemFound:
      "Server Actions em Next.js são endpoints POST públicos. Validar autoria apenas com um 'if' no código da action permite que requisições HTTP forjadas alterem demandas de terceiros.",
    engineeringSolution:
      "Inclusão obrigatória do ID do usuário autenticado diretamente na cláusula WHERE do UPDATE SQL (exigirAutorUserId), garantindo que o banco de dados barre mutações indevidas a nível atômico.",
    takeaway: "Em arquiteturas modernas com Server Actions, a autorização final pertence à consulta do banco de dados.",
  },
  {
    id: 5,
    title: "Parser de Cronogramas MS Project (.MPP) em TypeScript Puro",
    area: "Engenharia de Software",
    context: "LYX Engenharia (Almoxarifado)",
    problemFound:
      "A leitura de cronogramas .mpp do MS Project usualmente dependia de bibliotecas lentas em Java ou microsserviços externos caros.",
    engineeringSolution:
      "Implementação de parser nativo em TypeScript puro (@tensor-estate/tsmpp) sobre cfb, processando arquivos de 8MB com 2.490 tarefas e hierarquia de 7 níveis em apenas 250ms dentro do próprio processo da aplicação.",
    takeaway: "Eliminar dependências de outros runtimes reduz drasticamente o consumo de memória e a superfície de falha em produção.",
  },
  {
    id: 6,
    title: "Investigação Forense no Axiom via Query APL",
    area: "Observabilidade & Produção",
    context: "LYX Engenharia (Agenda Fiscais)",
    problemFound:
      "Eventos órfãos apareciam no calendário do Microsoft Teams travando a disponibilidade dos fiscais de obras sem acusar erros explícitos de código.",
    engineeringSolution:
      "Execução de query analítica APL no Axiom agrupando por hostname e evento, descobrindo que duas instâncias rodavam paralelamente, sendo uma build legada com slots de 30min contra o banco antigo. Remoção cirúrgica com script sequencial de backoff de 180ms eliminou 562 órfãos sem falhas.",
    takeaway: "Em problemas fantasmas de produção, logs estruturados com hostname e assinaturas temporais são mais eficazes que qualquer suposição estática.",
  },
];

export const SKILL_GROUPS = [
  {
    group: "Linguagens & Baixo Nível",
    items: [
      { name: "C# / .NET", level: "Avançado", desc: "Aplicações Windows UWP, ASP.NET MVC, serviços de background e P/Invoke" },
      { name: "C++", level: "Avançado", desc: "Integração direta com hardware, Win32 API e comunicação serial" },
      { name: "TypeScript / JavaScript", level: "Avançado", desc: "Next.js App Router, NestJS, Node.js, Bun e parsers binários" },
      { name: "Python", level: "Avançado", desc: "Daemons Linux, automação, sockets UDP para Wake-On-LAN e APIs" },
      { name: "PHP", level: "Intermediário/Avançado", desc: "Desenvolvimento de APIs RESTful corporativas e padrão MVC" },
      { name: "SQL (ANSI)", level: "Avançado", desc: "Consultas analíticas, índices, modelagem dimensional e transações ACID" },
    ],
  },
  {
    group: "Frameworks & Ambientes",
    items: [
      { name: "Next.js (App Router)", level: "Avançado", desc: "Server Actions, SSR, rotas analíticas e dashboards operacionais" },
      { name: "NestJS / Bun / Node.js", level: "Avançado", desc: "Arquiteturas modulares, injeção de dependência e circuit breakers" },
      { name: "Windows UWP", level: "Avançado", desc: "Desenvolvimento desktop OEM, ciclo de vida e homologação Microsoft Store" },
      { name: "Tailwind CSS", level: "Avançado", desc: "Interfaces responsivas, design systems e micro-interações" },
      { name: "WebGL / Three.js", level: "Intermediário", desc: "Cenas 3D interativas, controle de câmeras e renderização de malhas" },
    ],
  },
  {
    group: "Bancos de Dados & Engenharia de Dados",
    items: [
      { name: "PostgreSQL & Drizzle ORM", level: "Avançado", desc: "Modelagem relacional, migrations com advisory locks e schemas" },
      { name: "Star Schema (Data Warehouse)", level: "Avançado", desc: "Modelagem de dimensões, fatos, grãos e pipelines de ETL atômico" },
      { name: "PGlite (Postgres WASM)", level: "Avançado", desc: "Testes de integração reais sem mocks de banco de dados" },
      { name: "MariaDB / MySQL / SQL Server", level: "Avançado", desc: "Otimização de consultas, normalização e integridade referencial" },
    ],
  },
  {
    group: "DevOps, Qualidade & Ferramentas",
    items: [
      { name: "Jenkins", level: "Avançado", desc: "Criação e manutenção de pipelines de CI/CD, automação de builds e testes" },
      { name: "Axiom APL & Pino", level: "Avançado", desc: "Observabilidade, logs estruturados e consultas analíticas de telemetria" },
      { name: "Docker & Linux", level: "Intermediário/Avançado", desc: "Ambientes containerizados, servidores Linux e serviços de rede" },
      { name: "Git / GitLab / GitHub", level: "Avançado", desc: "Trunk-based development, resolução de conflitos e governança de PRs" },
    ],
  },
];

export const CAREER_JOURNEY = [
  {
    role: "Desenvolvedor de Software / Engenharia",
    company: "LYX Engenharia",
    period: "2026",
    type: "Contrato / Projeto Estratégico",
    description:
      "Atuação no desenvolvimento de sistemas backend (NestJS, Bun, PostgreSQL/Drizzle) e dashboards de BI e engenharia de dados (Next.js App Router, Star Schema, Vitest). Responsável pela entrega de 4 módulos de missão crítica, pipelines de ETL atômicos e 714 testes automatizados em Postgres WASM real.",
    tags: ["Next.js", "NestJS", "Bun", "PostgreSQL", "Star Schema", "ETL", "Drizzle ORM", "Axiom"],
  },
  {
    role: "Desenvolvedor Full-Stack Pleno",
    company: "Policorp Tecnologia",
    period: "2024 — Atual",
    type: "Tempo Integral",
    description:
      "Responsável pelo desenvolvimento da minitela embarcada para notebooks Positivo Vision R15M (C#, C++, Win32, UWP homologada na Microsoft Store), manutenção de pipelines no Jenkins, desenvolvimento de sistemas corporativos em .NET, PHP e MariaDB.",
    tags: [".NET", "C#", "C++", "Windows UWP", "Jenkins CI/CD", "Win32", "MariaDB"],
  },
  {
    role: "Desenvolvedor Full-Stack Júnior",
    company: "Policorp Tecnologia",
    period: "2023 — 2024",
    type: "Tempo Integral",
    description:
      "Desenvolvimento de aplicações corporativas (TimeControl), APIs RESTful, modelagem de banco de dados relacional e criação de rotinas de automação interna.",
    tags: ["JavaScript", "PHP", "MariaDB", "APIs REST", "HTML/CSS"],
  },
  {
    role: "Jovem Aprendiz de Pesquisa & Desenvolvimento (P&D)",
    company: "FiscalTech",
    period: "2022 — 2023",
    type: "P&D",
    description:
      "Desenvolvimento de daemons Linux em Python com sockets UDP para acionamento remoto de computadores via Wake-On-LAN (WOL) para edital de governo da Caixa Econômica Federal.",
    tags: ["Python", "Linux", "Wake-On-LAN", "Sockets UDP", "Redes"],
  },
  {
    role: "Jovem Aprendiz de Eletroeletrônica",
    company: "Volkswagen",
    period: "2019 — 2021",
    type: "Formação Técnica",
    description:
      "Atuação prática com sensores industriais, circuitos eletroeletrônicos e rotinas de automação em linha de montagem automotiva.",
    tags: ["Automação Industrial", "Sensores", "Eletrônica"],
  },
];

export const EDUCATION_HONORS = [
  {
    title: "Bacharel em Ciência da Computação",
    institution: "Universidade Positivo",
    period: "2021 — 2024",
    badge: "GRADUAÇÃO CONCLUÍDA",
    highlight: "Média Global: 8.74",
    description:
      "Formação sólida em algoritmos fundamentais, complexidade computacional, arquitetura de computadores, compiladores, sistemas operacionais e engenharia de software.",
  },
  {
    title: "3º Lugar na Maratona de Programação",
    institution: "Universidade Positivo",
    period: "Competição Universitária",
    badge: "PREMIAÇÃO / ALGORITMOS",
    highlight: "Pódio de Algoritmos",
    description:
      "Resolução prática de desafios de estruturas de dados e otimização algorítmica sob severas restrições de tempo e recursos computacionais.",
  },
  {
    title: "CS50x — Introduction to Computer Science",
    institution: "Harvard University",
    period: "Certificação Internacional",
    badge: "CERTIFICADO INTERNACIONAL",
    highlight: "C, Python, SQL, Estruturas de Dados",
    description:
      "Aprofundamento em gestão manual de memória, ponteiros, estruturas de dados clássicas e algoritmos de busca e ordenação.",
  },
  {
    title: "English Certificate C1 Advanced",
    institution: "EF SET",
    period: "Proficiência de Idioma",
    badge: "PROFICIÊNCIA C1",
    highlight: "Nível C1 Advanced (CEFR)",
    description:
      "Fluência para comunicação técnica e profissional internacional, leitura de especificações e redação de documentações de software.",
  },
];
