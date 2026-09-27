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
    "Graduado em Ciência da Computação (Média 8.74, 3º lugar na Maratona de Programação) e certificado CS50x por Harvard. Experiência no desenvolvimento de software de ponta a ponta: de aplicações desktop e baixo nível integradas a hardware (C#, C++, .NET) a monólitos modulares de alta concorrência (NestJS, Bun, TypeScript, Python) e engenharia de dados & BI (Next.js, PostgreSQL, Star Schema, ETL).",
  location: "Curitiba - PR",
  email: "luizdasilvaoliveira7@gmail.com",
  phone: "+55 (41) 99895-7337",
  whatsappUrl: "https://wa.me/5541998957337?text=Ol%C3%A1%20Luiz,%20acessei%20seu%20portf%C3%B3lio%20de%20desenvolvedor%20e%20gostaria%20de%20conversar!",
  github: "https://github.com/Luiz-Henrique03",
  linkedin: "https://www.linkedin.com/in/luiz-henrique-s-b05363226/",
  cvPath: "/cv.pdf",
};

export const CORE_METRICS = [
  {
    label: "Experiência Profissional",
    value: "4+ Anos",
    detail: "Atuação contínua em engenharia de software de ponta a ponta (Desktop, Backend e Dados).",
  },
  {
    label: "Formação Superior",
    value: "Bacharel",
    detail: "Formado em Ciência da Computação pela Universidade Positivo.",
  },
  {
    label: "Certificação Internacional",
    value: "CS50x",
    detail: "Harvard University — Ciência da Computação, algoritmos, C, Python e SQL.",
  },
  {
    label: "Proficiência em Inglês",
    value: "C1 Advanced",
    detail: "Certificado EF SET — Comunicação corporativa e técnica fluente em nível avançado.",
  },
];

export const BI_DASHBOARDS = [
  {
    id: "bi-fiscalizacao",
    title: "Plataforma Analítica & Data Warehouse (Star Schema)",
    objective: "Consolidação analítica de indicadores de auditoria técnica, conformidade operacional e métricas contratuais de fornecedores parceiros em tempo real.",
    architecture: "Modelagem dimensional em Star Schema (dimensões e fatos) com pipeline de ETL em Next.js e PostgreSQL, desacoplando totalmente a carga analítica do banco operacional transacional.",
    impact: "Consultas analíticas instantâneas, eliminação de concorrência com o sistema operacional e relatórios executivos com rastreabilidade contratual fidedigna.",
    stack: ["Next.js (App Router)", "PostgreSQL", "Drizzle ORM", "Vitest", "Star Schema"],
    highlights: [
      "Isolamento entre banco analítico e operacional, garantindo consultas complexas sem impacto nas transações do sistema principal.",
      "Pipeline de ETL com controle de concorrência via advisory locks nativos do PostgreSQL.",
      "Modelagem dimensional com granularidade fina para atribuição contratual precisa por pessoa jurídica.",
    ],
  },
  {
    id: "bi-impedimentos",
    title: "Torre de Controle Operacional em Tempo Real",
    objective: "Painel de controle em tempo real para registro, triagem e resolução de incidentes críticos, paralisações e gargalos de execução operacional.",
    architecture: "Aplicação Next.js App Router orientada a eventos com Server Actions, validação de regras no banco de dados, motor de controle de SLA e exibição contínua em modo mural (TV).",
    impact: "Redução no tempo de resposta a incidentes críticos, transparência operacional entre setores e histórico auditável de decisões e tratativas.",
    stack: ["Next.js (App Router)", "React Server Actions", "PostgreSQL", "Zod", "Vitest"],
    highlights: [
      "Fluxo de tratativas em tempo real com controle de SLA e faixas visuais de envelhecimento de demandas.",
      "Server Actions com autorização direta na cláusula WHERE do banco de dados para segurança em operações críticas.",
      "Modo mural (TV) com transição cíclica de painéis controlada via estado de URL sem recarregamento de página.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "positivo-vision",
    title: "Vision R15M: Minitela Embarcada",
    category: "Software Embarcado & Desktop Windows",
    context: "Hardware OEM / Desktop Windows",
    period: "2023 - 2024",
    role: "Desenvolvedor de Sistemas / Baixo Nível",
    summary:
      "Desenvolvimento completo da camada de software e integração com a mini tela física integrada no chassi do notebook OEM Vision R15M. Implementação de protocolos seriais, drivers, telemetria de hardware e aplicativo Windows UWP certificado na Microsoft Store.",
    problem:
      "Controlar uma tela secundária LCD com restrições extremas de consumo de bateria, latência reduzida e integração contínua com hardware através do Windows.",
    solution:
      "Construção de uma ponte em C# e C++ utilizando Win32 APIs nativas (P/Invoke) para comunicação serial com o microcontrolador, telemetria de hardware (temperatura, clock, bateria), aplicativo em Windows UWP e certificação OEM para a Microsoft Store.",
    metrics: [
      { label: "Plataforma", value: "Windows UWP", detail: "Publicado na Microsoft Store" },
      { label: "Linguagens", value: "C# / C++", detail: "Interoperabilidade Win32 e serial" },
      { label: "Hardware", value: "Notebook OEM", detail: "Linha de fábrica OEM Vision R15M" },
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
    id: "caixa-wol",
    title: "Gerenciamento Remoto de Máquinas (Wake-On-LAN)",
    category: "Sistemas Distribuídos & Redes",
    context: "Redes Corporativas / Linux",
    period: "2023 - 2024",
    role: "Desenvolvedor Full-Stack Júnior",
    summary:
      "Desenvolvimento de backend em Python com sockets UDP para acionamento remoto de computadores via pacotes mágicos Wake-On-LAN (WOL), listagem remota de pacotes e controle de energia (desligamento/reboot) em ambiente Linux, com frontend dinâmico em JavaScript para gerenciamento de rede corporativa bancária.",
    problem:
      "Necessidade de ligar, desligar, reiniciar, consultar pacotes disponíveis para download e aplicar rotinas em centenas de computadores corporativos de rede bancária remotamente e sem deslocamento físico.",
    solution:
      "Backend em Python capaz de emitir pacotes mágicos Wake-On-LAN via sockets UDP em rede, consultar pacotes remotamente e controlar o ciclo de energia das máquinas Linux, integrado a interface dinâmica em JavaScript para gerenciamento intuitivo.",
    metrics: [
      { label: "Protocolo", value: "UDP / WOL", detail: "Magic packets transmitidos em rede corporativa" },
      { label: "Ambiente", value: "Linux Server", detail: "Daemons seguros de gerenciamento remoto" },
      { label: "Stack", value: "Python / JS", detail: "Backend em Python e interface dinâmica em JS" },
    ],
    technicalHighlights: [
      "Montagem de pacotes binários mágicos (payload com 6 bytes 0xFF e 16 repetições do MAC address).",
      "Transmissão via sockets UDP com controle de portas de broadcast em sub-redes.",
      "Listagem remota de pacotes disponíveis para download e execução de comandos de energia.",
      "Frontend dinâmico e responsivo em JavaScript com operações em tempo real.",
    ],
    tags: ["Python", "Linux", "Wake-On-LAN", "Sockets UDP", "Redes", "JavaScript"],
  },
  {
    id: "agenda-fiscais",
    title: "Agenda Fiscais: Motor Autônomo de Vistorias",
    category: "Engenharia de Backend & Algoritmos de Alocação",
    context: "NestJS / Graph API",
    period: "2026",
    role: "Arquiteto & Engenheiro de Software Backend",
    summary:
      "Motor autônomo de alocação de vistorias técnicas e controle de qualidade em canteiros de obras. Implementa escalonamento algorítmico em 4 passes com integrações corporativas transacionais via Microsoft Graph API e Evolution API (WhatsApp).",
    problem:
      "Sempre que uma etapa de obra era finalizada (montagem de formas, concretagem, ramais hidráulicos, prumadas de esgoto), uma Ficha de Verificação de Serviço (FVS) era liberada com meta regulatória rígida: a vistoria técnica precisava ocorrer em até 48 horas úteis. Manualmente ou com automações frágeis, o processo gerava: fiscais cruzando a cidade várias vezes ao dia; mesma obra sendo sempre avaliada pelo mesmo fiscal (falta de imparcialidade); e eventos duplicados e horários colidindo no calendário corporativo do Microsoft Teams.",
    solution:
      "Construção de um motor determinístico em NestJS, Bun e TypeScript com escalonamento em 4 passes e integrações transacionais de produção: Worker Cron a cada 30 minutos com claim atômico via PostgreSQL para evitar race conditions em deploys com múltiplos containers; sincronização oficial com a Microsoft Graph API (Teams/Outlook Calendar) e disparo instantâneo de notificações no WhatsApp via Evolution API com dados da FVS, bloco e pavimento.",
    metrics: [
      { label: "Janela Regulatória", value: "48h Úteis", detail: "Cálculo automático de dias úteis e feriados (BrasilAPI)" },
      { label: "Execução Concorrente", value: "30 Minutos", detail: "Worker Cron com claim atômico e idempotência no PostgreSQL" },
      { label: "Escalonador", value: "4 Passes", detail: "Algoritmo de fallback progressivo sem sobrecarga" },
      { label: "Auditoria Forense", value: "562 Eventos", detail: "Erradicação de eventos órfãos/zumbis no Microsoft Teams" },
    ],
    technicalHighlights: [
      "Item 1 (Problema de Negócio): Garantia estrita da janela de 48h úteis para FVS liberadas, eliminando conflitos de agenda no Teams, rotas ineficientes e repetição viciada de fiscais.",
      "Item 4 (Arquitetura e Integrações): Core em NestJS, Bun, TypeScript e Drizzle ORM sobre PostgreSQL, executando Worker Cron com claim atômico contra concorrência.",
      "Integração Microsoft Graph API: Criação, atualização e cancelamento transacional de eventos oficiais no calendário Outlook/Teams dos fiscais.",
      "Evolution API (WhatsApp) & BrasilAPI: Disparo de mensagens automáticas no WhatsApp com dados de bloco/pavimento e consulta dinâmica de feriados nacionais/municipais.",
      "Motor Algorítmico de Regras: Priorização do Dono do Dia, anti-repetição recente (<=3 dias), balanceamento de carga semanal e teto de no máximo 2 canteiros por fiscal.",
      "Escalonador em 4 Passes: Fallback em cascata (ideal 48h -> relaxa repetição -> paralelismo até 2 fiscais -> overflow) sem degradação do sistema.",
    ],
    tags: ["NestJS", "Bun", "TypeScript", "PostgreSQL", "Drizzle ORM", "Microsoft Graph", "Teams Calendar", "Evolution API", "BrasilAPI", "Axiom APL"],
  },
  {
    id: "bi-dashboards",
    title: "Engenharia de Dados & Dashboards de BI",
    category: "Engenharia de Dados & Business Intelligence",
    context: "Data Warehouse & Next.js",
    period: "2026",
    role: "Desenvolvedor Full-Stack & Dados",
    summary:
      "Criação de dashboards operacionais e gerenciais em Next.js App Router alimentados por banco analítico PostgreSQL dedicado com modelagem Star Schema (dimensões e fatos) e pipelines de ETL.",
    problem:
      "Consultas analíticas pesadas executadas diretamente no banco transacional degradavam a performance do sistema principal. Relatórios continham inconsistências de regras de negócio e concorrência desordenada.",
    solution:
      "Separação estrita entre banco operacional e banco analítico. Modelagem dimensional Star Schema, pipeline de ETL com full reload em 1-2s com advisory lock do Postgres, e módulo operacional com Server Actions e Modo Mural para telas corporativas.",
    metrics: [
      { label: "Modelagem", value: "Star Schema", detail: "Dimensões e tabelas fato isoladas" },
      { label: "Tempo de ETL", value: "1 a 2s", detail: "Full reload com advisory lock" },
      { label: "Arquitetura", value: "Next.js 14", detail: "App Router & Server Actions desacopladas" },
      { label: "Qualidade", value: "Vitest", detail: "Testes automatizados cobrindo regras e transações" },
    ],
    technicalHighlights: [
      "Isolamento arquitetural entre banco operacional e banco do BI.",
      "ETL com transação BEGIN...COMMIT e TRUNCATE sem cascade, serializado por pg_try_advisory_lock.",
      "Server Actions com autorização no WHERE (exigirAutorUserId) para mitigação de vulnerabilidades.",
      "Modo Mural que gerencia transições automáticas de slides via URL state em telas de monitoramento.",
    ],
    codeSnippet: {
      filename: "analytics-etl.service.ts",
      code: `// Full reload com advisory lock para evitar concorrência no ETL
export async function executarEtlAnalitico(db: DrizzleClient) {
  const lockAdquirido = await db.execute(sql\`SELECT pg_try_advisory_lock(427914)\`);
  if (!lockAdquirido.rows[0].pg_try_advisory_lock) {
    throw new EtlConcorrenteError("Execução em andamento");
  }

  await db.transaction(async (tx) => {
    // Truncate em todas as dimensões e fatos
    await tx.execute(sql\`TRUNCATE bi.fact_auditorias, bi.fact_ocorrencias RESTART IDENTITY\`);
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
    title: "Monólito Modular & Backend de Alta Concorrência",
    category: "Engenharia de Backend & Monólitos Modulares",
    context: "NestJS, Bun & PostgreSQL",
    period: "2026",
    role: "Desenvolvedor Backend Core",
    summary:
      "Arquitetura e desenvolvimento de módulos centrais no monólito modular de backend em NestJS, Bun, PostgreSQL (Drizzle) e Better Auth: motor algorítmico de agendamento autônomo, espelho de ERP corporativo com conciliação orçamentária e parser binário de alta performance.",
    problem:
      "APIs externas legadas com tempos de resposta instáveis (superiores a 120 segundos), concorrência descontrolada em calendários compartilhados e necessidade de regras de negócio complexas sem perda de integridade transacional.",
    solution:
      "Construção de arquitetura modular resiliente, implementação de clientes HTTP com circuit breakers e retentativas exponenciais, conciliação orçamentária automatizada com 96% de assertividade e sincronização de dados protegida por advisory locks no PostgreSQL.",
    metrics: [
      { label: "Conciliação Orçamentária", value: "96% Assertividade", detail: "Automação algorítmica de insumos corporativos" },
      { label: "Otimização API", value: "120s → 2s", detail: "Redução de latência no espelho do ERP corporativo" },
      { label: "Parsing Binário", value: "250ms", detail: "Processamento de estruturas complexas em TypeScript nativo" },
      { label: "Arquitetura", value: "Modular", detail: "Isolamento de domínios e zero dependências circulares" },
    ],
    technicalHighlights: [
      "Motor autônomo de alocação de recursos com regras modeladas como dados e escalonador algorítmico de 4 passes.",
      "Parser de arquivos binários e cronogramas em TypeScript nativo rodando em 250ms sem necessidade de JVM legada.",
      "Conciliação orçamentária de insumos corporativos com 96% de assertividade automatizada.",
      "Auditoria forense em observabilidade (Axiom APL) que identificou e erradicou 562 eventos órfãos de concorrência.",
    ],
    codeSnippet: {
      filename: "resource-scheduler.service.ts",
      code: `// Algoritmo de 4 passes para alocação balanceada de recursos
export async function alocarRecurso(demanda: Demanda, pool: Recurso[]): Promise<ResultadoAlocacao> {
  // Retorno tri-estado contra consistência eventual: livre | ocupado | erro
  const disponibilidade = await verificarSlotsTriEstado(pool);
  if (disponibilidade.possuiErro) {
    throw new CircuitError("Falha na consulta de disponibilidade; abortando com segurança");
  }

  // Passe 1: Balanceamento estrito de carga horária
  // Passe 2: Relaxamento com limite de alocações simultâneas
  // Passe 3: Compartilhamento seguro de slot
  // Passe 4: Extensão de horizonte de agendamento
  return despacharPlano(demanda, disponibilidade.slots);
}`,
      explanation: "Escalonamento com blindagem contra falhas silenciosas de rede em APIs externas.",
    },
    tags: ["NestJS", "Bun", "PostgreSQL", "Drizzle ORM", "Circuit Breakers", "TypeScript", "Axiom"],
  },
  {
    id: "timecontrol",
    title: "TimeControl: Gestão Corporativa de Equipes e Projetos",
    category: "Aplicações Web Corporativas",
    context: "Sistemas Web Corporativos",
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
    title: "Full Reload com Advisory Lock no ETL de BI",
    area: "Engenharia de Dados",
    context: "Engenharia de Dados (PostgreSQL / Drizzle)",
    problemFound:
      "Cargas concorrentes ou parciais de ETL deixavam o dashboard em estado inconsistente enquanto as queries de inserção eram executadas.",
    engineeringSolution:
      "Estruturação de pipeline de ETL que executa dentro de uma única transação BEGIN...COMMIT com TRUNCATE e reinserção dos fatos, protegido por advisory lock do Postgres (pg_try_advisory_lock 427914) que responde 409 locked para tentativas simultâneas.",
    takeaway: "Para volumes de milhares de registros com carga rápida (1 a 2s), o full reload elimina complexidade e garante consistência imediata.",
  },
  {
    id: 3,
    title: "Modelagem Dimensional para Rastreabilidade Jurídica",
    area: "Modelagem de Negócio",
    context: "Data Warehouse (Star Schema)",
    problemFound:
      "O dashboard analítico atribuía ocorrências ao operador que cadastrou o registro no sistema em vez do fornecedor terceirizado contratado, inviabilizando cobranças e conciliações contratuais.",
    engineeringSolution:
      "Reestruturação da dimensão para capturar a razão social em caixa alta e o regime contratual diretamente na linha do fato analítico, separando contratos de gestão interna sem recorrer a joins textuais imprecisos.",
    takeaway: "Dados analíticos usados para cobrança financeira e auditoria jurídica exigem que a chave estrangeira reflita a entidade real, e não o usuário do sistema.",
  },
  {
    id: 4,
    title: "Autorização no WHERE de Server Actions Públicas",
    area: "Segurança de Software",
    context: "Segurança Web (Next.js & SQL)",
    problemFound:
      "Server Actions em Next.js são endpoints POST públicos. Validar autoria apenas com um 'if' no código da action permite que requisições HTTP forjadas alterem demandas de terceiros.",
    engineeringSolution:
      "Inclusão obrigatória do ID do usuário autenticado diretamente na cláusula WHERE do UPDATE SQL (exigirAutorUserId), garantindo que o banco de dados barre mutações indevidas a nível atômico.",
    takeaway: "Em arquiteturas modernas com Server Actions, a autorização final pertence à consulta do banco de dados.",
  },
  {
    id: 5,
    title: "Parser de Cronogramas e Arquivos Binários em TypeScript Puro",
    area: "Engenharia de Software",
    context: "Engenharia de Software (TypeScript / Node)",
    problemFound:
      "A leitura de arquivos complexos de cronograma (.mpp) usualmente dependia de bibliotecas legadas em Java ou serviços externos caros e com alto consumo de memória.",
    engineeringSolution:
      "Implementação de parser nativo em TypeScript puro sobre arquivos binários estruturados, processando arquivos com milhares de tarefas e hierarquias profundas em apenas 250ms dentro do próprio processo da aplicação.",
    takeaway: "Eliminar pontes entre diferentes linguagens e runtimes reduz drasticamente o consumo de memória e a superfície de falha em produção.",
  },
  {
    id: 6,
    title: "Diagnóstico Forense de Concorrência Fantasma via Logs Estruturados",
    area: "Observabilidade & Produção",
    context: "Observabilidade & Produção (Axiom APL)",
    problemFound:
      "Eventos duplicados e órfãos apareciam em calendários corporativos bloqueando a disponibilidade de recursos compartilhados sem acusar erros explícitos no código.",
    engineeringSolution:
      "Execução de query analítica APL no Axiom correlacionando hostname, payload e assinaturas temporais, descobrindo uma versão legada do serviço rodando paralelamente em container órfão. Remoção cirúrgica com rotina de backoff eliminou 562 órfãos com zero novas falhas.",
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
      { name: "Star Schema (Data Warehouse)", level: "Avançado", desc: "Modelagem de dimensões, fatos, grãos e pipelines de ETL" },
      { name: "Resiliência & Concorrência", level: "Avançado", desc: "Circuit breakers, advisory locks e mitigação de race conditions" },
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
      "Atuação no desenvolvimento de sistemas backend (NestJS, Bun, PostgreSQL/Drizzle) e engenharia de dados & BI (Next.js App Router, Star Schema). Responsável pela entrega de módulos corporativos de missão crítica, pipelines de ETL resilientes com advisory locks, conciliação orçamentária automatizada com 96% de assertividade e circuit breakers contra falhas de rede.",
    tags: ["Next.js", "NestJS", "Bun", "PostgreSQL", "Star Schema", "ETL", "Drizzle ORM", "Axiom"],
  },
  {
    role: "Desenvolvedor Full-Stack Pleno",
    company: "Policorp Tecnologia",
    period: "2024 — Atual",
    type: "Tempo Integral",
    description:
      "Responsável pelo desenvolvimento da camada de software da minitela embarcada para notebook OEM (C#, C++, Win32, UWP homologada na Microsoft Store), manutenção de pipelines no Jenkins, desenvolvimento de sistemas corporativos em .NET, PHP e MariaDB.",
    tags: [".NET", "C#", "C++", "Windows UWP", "Jenkins CI/CD", "Win32", "MariaDB"],
  },
  {
    role: "Desenvolvedor Full-Stack Júnior",
    company: "Policorp Tecnologia",
    period: "2023 — 2024",
    type: "Tempo Integral",
    description:
      "Desenvolvimento de aplicações corporativas (TimeControl), APIs RESTful, modelagem de banco de dados relacional e criação de rotinas de automação interna. Atuação direta no projeto da Caixa (edital de governo): desenvolvimento de backend em Python com sockets UDP para gerenciamento e acionamento remoto de computadores via Wake-On-LAN (WOL), listagem de pacotes e comandos de energia em Linux, com interface web dinâmica em JavaScript.",
    tags: ["Python", "Linux", "Wake-On-LAN", "Sockets UDP", "JavaScript", "PHP", "MariaDB", "APIs REST"],
  },
  {
    role: "Jovem Aprendiz de Pesquisa & Desenvolvimento (P&D)",
    company: "FiscalTech",
    period: "2022 — 2023",
    type: "P&D",
    description:
      "Atuação no setor de Pesquisa e Desenvolvimento (P&D) focado em soluções tecnológicas e monitoramento inteligente: criação de rotinas automatizadas, scripts em Python para processamento de dados e apoio técnico na homologação de sistemas corporativos.",
    tags: ["Python", "P&D", "Automação", "Linux", "Testes de Software"],
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
