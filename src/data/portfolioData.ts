export interface ProjectCase {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  role: string;
  highlightBadge: string;
  overview: string;
  metrics: { label: string; value: string; detail?: string }[];
  problem: string;
  solution: string;
  technicalHighlights: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
    explanation: string;
  };
  tags: string[];
}

export interface ForensicRule {
  id: number;
  title: string;
  subtitle: string;
  category: "Observabilidade" | "Integração" | "Modelagem" | "Banco & Cache" | "Forense";
  insight: string;
  impact: string;
  quote: string;
}

export const PERSONAL_INFO = {
  name: "Luiz Henrique da Silva de Oliveira",
  shortName: "Luiz Henrique",
  callsign: "LUIZ HENRIQUE",
  role: "Software Engineer & Systems Architect",
  headline: "Engenharia de verdade não vive de hype. Constrói monolitos modulares resilientes, caça containers zumbis em telemetria e resolve o que quebra em produção.",
  location: "Curitiba, PR — Brasil (Disponível Remoto / Híbrido)",
  email: "luizdasilvaoliveira7@gmail.com",
  phone: "+55 (41) 99895-7337",
  whatsappUrl: "https://wa.me/5541998957337?text=Ol%C3%A1%20Luiz,%20vi%20seu%20portf%C3%B3lio%20de%20engenharia%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade!",
  github: "https://github.com/Luiz-Henrique03",
  linkedin: "https://www.linkedin.com/in/luiz-henrique-s-b05363226/",
  cvPath: "/cv.pdf",
  bio: "Bacharel em Ciência da Computação com média 8.74, certificado CS50x por Harvard e inglês C1 Advanced. Especialista em resolver problemas de alta complexidade técnica: de drivers e barramentos de baixo nível com hardware C++/C# a monolitos modulares de alta concorrência em NestJS, Bun, PostgreSQL e TypeScript, com 410+ commits e 86 PRs em produção.",
};

export const TELEMETRY_METRICS = [
  { label: "COMMITS EM PRODUÇÃO", value: "410+", detail: "lyx-monolith (mai-set 2026)" },
  { label: "PULL REQUESTS MERGED", value: "86", detail: "Sem branch release, direto na main" },
  { label: "TESTES DE INTEGRAÇÃO", value: "714", detail: "Postgres WASM (PGlite) real, 0 mocks" },
  { label: "MÓDULOS ZERO-TO-ONE", value: "4+", detail: "Agenda, Almoxarifado, Medições, Admissão" },
  { label: "EVENTOS ZUMBIS ERRADICADOS", value: "562", detail: "Triagem forense por duração de slot no Axiom" },
  { label: "RECONCILIAÇÃO FINANCEIRA", value: "96%", detail: "R$ 1.03M+ conciliados contra ERP SAP" },
  { label: "PARSER DE CRONOGRAMA", value: "250ms", detail: "2.490 tarefas em TS puro sem runtime Java" },
  { label: "MÉDIA GRADUAÇÃO", value: "8.74", detail: "3º Lugar na Maratona de Programação" },
];

export const CASE_STUDIES: ProjectCase[] = [
  {
    id: "agenda-fiscais",
    title: "Agenda Fiscais",
    subtitle: "Motor Autônomo de Fiscalização e Alocação Preditiva",
    company: "LYX Engenharia",
    period: "2026",
    role: "Lead Module Engineer",
    highlightBadge: "4.815 LoC de Regras • 1.723 LoC Testes Reais",
    overview:
      "O sistema lê o software de qualidade das obras (Mentor), decide autonomamente o que precisa de visita técnica, escolhe o fiscal por balanceamento heurstico, agenda na grade do Microsoft Teams/Graph e notifica engenheiros em cron 100% autônomo.",
    metrics: [
      { label: "Regras de FVS", value: "27", detail: "Modeladas como dado, sem ifs aninhados" },
      { label: "Cenários de Teste", value: "1.723", detail: "Linhas de teste reproduzindo produção real" },
      { label: "Resolução Forense", value: "562", detail: "Eventos órfãos apagados com backoff de 180ms" },
      { label: "Slots por Dia", value: "28", detail: "Grade de 20 min com anti-repetição entre dias" },
    ],
    problem:
      "Agendamentos manuais geravam conflitos de agenda, fiscais sobrecarregados e atrasos críticos em auditorias de qualidade. O calendário do Teams apresentava 'containers zumbis' que zeravam a disponibilidade dos fiscais sem nenhum log explícito.",
    solution:
      "Construção de um motor declarativo de 27 regras de FVS, com algoritmo de 4 passes de escalonamento (balanceamento regional, anti-repetição e teto por obra). Diagnóstico forense no Axiom via query APL 'summarize count() by hostname' que identificou build antiga concorrente por assinatura de duração de evento (30min vs 20min).",
    technicalHighlights: [
      "Retorno tri-estado fail-closed (livre | ocupado | erro) evitando escritas cegas em leituras ruins",
      "Auditoria autoritativa via GET /events/{id} contornando eventual consistency do calendarView do Graph",
      "Varredura e erradicação de 562 eventos órfãos de containers concorrentes com script de backoff seguro",
      "Pool de fiscais isolado por regional (POA e CWB) com teto diário de 2 fiscais por canteiro",
    ],
    codeSnippet: {
      filename: "agenda-fiscais.agendador.ts",
      language: "typescript",
      code: `// Algoritmo de 4 passes com blindagem tri-estado contra Graph eventual consistency
export async function alocarSlotFiscal(
  demanda: DemandaFiscalizacao,
  fiscaisPool: Fiscal[],
  grade: GradeSlots20Min
): Promise<AlocacaoResultado> {
  // Retorno tri-estado autoritativo: livre | ocupado | erro
  const disponibilidade = await verificarDisponibilidadeTriEstado(fiscaisPool, grade);
  if (disponibilidade.possuiErro) {
    // Fail-closed seguro: aborta plano inteiro em vez de supor disponibilidade
    throw new GraphAvailabilityCircuitError("Leitura degradada no Microsoft Graph");
  }

  // 4 Passes de escalonamento:
  // 1. Balanceado estrito sem repetir fiscal na semana
  // 2. Relaxamento de anti-repetição mantendo teto de 2 fiscais/obra
  // 3. Compartilhamento de slot duplo para vistorias combinadas
  // 4. Extensão controlada de horizonte útil com backoff
  return motorAgendamento.despachar(demanda, disponibilidade.slotsValidados);
}`,
      explanation: "Blindagem tri-estado que impediu falhas silenciosas de rede no Microsoft Graph de cancelarem agendamentos legítimos.",
    },
    tags: ["NestJS", "Bun", "Microsoft Graph", "Axiom APL", "Drizzle ORM", "Resilient Architecture"],
  },
  {
    id: "almoxarifado",
    title: "Almoxarifado & Planejamento Dinâmico",
    subtitle: "Espelho ERP, Parser .MPP em TS Puro e Cobertura Matemática",
    company: "LYX Engenharia",
    period: "2026",
    role: "Core Systems Engineer",
    highlightBadge: "2.490 Tarefas em 250ms • TS Puro sem Java",
    overview:
      "Sistema de suprimentos que espelha as ordens de fornecimento do ERP MobileAPI (SAP), catálogo de 7.398 posições do Suplos e cronogramas MS Project, calculando a cobertura matemática de insumos no canteiro.",
    metrics: [
      { label: "Tempo de Parsing", value: "250ms", detail: "2.490 tarefas do MS Project em TS nativo" },
      { label: "Otimização de Rota", value: "98.3%", detail: "Timeout de 120s reduzido para 2s na OF" },
      { label: "Posições Mapeadas", value: "7.398", detail: "Estoque sincronizado em 13 canteiros de obras" },
      { label: "Casamento de Etapa", value: "795/2021", detail: "Folha WBS normalizada contra insumos" },
    ],
    problem:
      "A consulta de ordens de fornecimento dava timeout acima de 120s. Para ler cronogramas .mpp do MS Project, o mercado exigia serviços lentos em Java. O minStock do estoque vinha nulo em 100% do catálogo e 16% das notas fiscais divergiam o CNPJ legitimamente.",
    solution:
      "Descoberta do filtro mandatório 'ListaEmprd' que baixou a latência da API para 0,5s-2,7s. Leitura de .mpp em TypeScript puro (@tensor-estate/tsmpp) rodando em 250ms dentro do processo Node/Bun sem Java. Modelo matemático de cobertura C = (estoque + em trânsito) / necessidade(H) com escala logarítmica, e leitor híbrido de NF (determinístico unpdf + fallback IA).",
    technicalHighlights: [
      "Leitura de arquivos .mpp de 8MB em TypeScript nativo sobre cfb com hierarquia de 7 níveis",
      "Fórmula de cobertura de estoque eliminando dependência de parâmetros manuais inexistentes",
      "Tolerância inteligente de 16% de divergência de CNPJ em NFs (faturamento à ordem / terceiros)",
      "Sync de espelho incremental com carimbo almoxarifado_sync_run fora da thread de requisição",
    ],
    codeSnippet: {
      filename: "planejamento-dinamico.cobertura.ts",
      language: "typescript",
      code: `// Cálculo contínuo de cobertura matemática sem parametrização manual
export function calcularCoberturaInsumo(
  estoqueAtual: number,
  emTransito: number,
  necessidadeHorizonte: number
): CoberturaStatus {
  if (necessidadeHorizonte <= 0) {
    return { status: "SEM_DEMANDA_HORIZONTE", indice: null, cor: "gray" };
  }
  
  // Cobertura real normalizada em escala logarítmica
  const cobertura = (Math.max(0, estoqueAtual) + emTransito) / necessidadeHorizonte;
  
  return {
    indice: Number(cobertura.toFixed(2)),
    status: cobertura < 0.8 ? "CRITICO" : cobertura <= 1.2 ? "IDEAL" : "SOBRA",
    diasProjecao: Math.floor(cobertura * HORIZONTE_PADRAO_DIAS)
  };
}`,
      explanation: "Substituição do minStock inexistente por cálculo determinístico de cobertura dinâmica em canteiro.",
    },
    tags: ["TypeScript", "Parser .MPP", "unpdf", "ERP SAP", "Suplos API", "Drizzle ORM"],
  },
  {
    id: "medicoes",
    title: "Medições & Conciliação Orçamentária",
    subtitle: "Boletins de Empreiteiros com Ledger Próprio e Auditoria de R$ 1M+",
    company: "LYX Engenharia",
    period: "2026",
    role: "Backend & Domain Architect",
    highlightBadge: "96% Cobertura Orçamentária • R$ 1.03M+ Auditados",
    overview:
      "Reconstrução integral do boletim de medição que processa pagamentos de empreiteiras através da API do Mentor e orçamentos do ERP SAP, integrando assinatura eletrônica e livro-razão de retenções.",
    metrics: [
      { label: "Assertividade Orçamento", value: "96%", detail: "458 de 477 linhas casadas por família S" },
      { label: "Valores Sob Gestão", value: "R$ 1.03M+", detail: "Auditados em produção real de 5 obras" },
      { label: "Prevenção de Falso Estouro", value: "559% → 8.5%", detail: "Correção de agrupamento por variante" },
      { label: "Bug 'pageNo' Neutralizado", value: "3x Evitado", detail: "Prevenção de triplicação financeira indevida" },
    ],
    problem:
      "A API do Mentor ignorava silenciosamente paginação quando enviada como 'page', retornando a página 0 e triplicando valores sem nenhum erro HTTP. 76.6% dos valores mensais ficavam retidos por fila de inspeção e o fornecedor não registrava o histórico liberado.",
    solution:
      "Descoberta e parametrização exata do 'pageNo'. Criação de ledger proprietário em banco de dados para controle dos valores retidos liberados após aprovação de FVS. Algoritmo de conciliação por famílias de insumos espécie S, evitando estouros artificiais.",
    technicalHighlights: [
      "Ledger de transição de retido para liberado com controle transacional ACID",
      "Detecção de serviços compostos ('montagem e desmontagem') por razão inteira de preço unitário",
      "Padrão Ports & Adapters para assinatura digital via Contraktor desacoplada do domínio",
      "Sync por polling idempotente no fechamento do ciclo quinzenal (dias 16 ao 15)",
    ],
    codeSnippet: {
      filename: "conciliacao-orcamento.service.ts",
      language: "typescript",
      code: `// Casamento por família normalizada de insumo espécie 'S'
export function conciliarLinhaMedicaoComOrcamento(
  tarefaMentor: TarefaApontamento,
  insumosOrcamento: InsumoERP[]
): InsumoConciliado {
  // Casar por insumo isolado causava 559% de falso estouro
  // O correto é casar pelo prefixo de família do insumo S (Serviço)
  const insumoCasado = insumosOrcamento.find((insumo) => 
    insumo.especie === "S" && 
    normalizarFamilia(insumo.descricao).startsWith(normalizarFamilia(tarefaMentor.descricaoTarefa))
  );

  if (!insumoCasado) {
    throw new InsumoNaoMapeadoError(\`Insumo \${tarefaMentor.descricaoTarefa} sem correspondência\`);
  }
  return vincularConsumoOrcamentario(tarefaMentor, insumoCasado);
}`,
      explanation: "Regra algorítmica que reduziu falsos alertas de estouro financeiro de 559% para 8.5% reais.",
    },
    tags: ["PostgreSQL", "NestJS", "Contraktor API", "ACID Transactions", "Financial Ledger"],
  },
  {
    id: "pessoas-admissao",
    title: "Pessoas & Admissão CLT",
    subtitle: "Orquestração de Funil Kommo e Desacoplamento Assíncrono",
    company: "LYX Engenharia",
    period: "2026",
    role: "Full-Stack Engineer",
    highlightBadge: "25.8k LoC • 98 Arquivos de Teste",
    overview:
      "Módulo de contratação de mão de obra própria (MOP) integrado ao CRM Kommo, com pipeline de promoção automática de candidatos, validação de documentação pública e auditoria contra vazamento de PII.",
    metrics: [
      { label: "Linhas de Código", value: "25.838", detail: "Domínio completo de contratação CLT" },
      { label: "Linhas de Testes", value: "26.799", detail: "Testes unitários e de integração real" },
      { label: "Latência no Handler", value: "0ms", detail: "Sync removido do request HTTP para cron" },
      { label: "Auditoria BOLA", value: "100%", detail: "Controle de acesso por objeto em todos os endpoints" },
    ],
    problem:
      "A sincronização de candidatos com o CRM Kommo rodava no meio da requisição HTTP do usuário, gerando timeouts, risco de estado corrompido e bloqueio de tela.",
    solution:
      "Refatoração arquitetural (PR #1107) movendo o sync para cron assíncrono idempotente, com checklist de documentos com link público com token temporário e blindagem rigorosa contra BOLA (Broken Object Level Authorization).",
    technicalHighlights: [
      "Quadro Kanban de fases com testes práticos e promoção automática",
      "Proxy de download seguro para anexos com sanitização e guarda de CPF",
      "Classificação de erros em 'permanente' (PII inválido) vs 'transitório' (timeout) para evitar alertas espúrios",
    ],
    tags: ["NestJS", "Kommo CRM", "Security BOLA", "Async Jobs", "Better Auth"],
  },
  {
    id: "positivo-minitela",
    title: "Positivo Minitela Embarcada",
    subtitle: "Solução Desktop UWP de Baixo Nível para Notebooks Vision R15M",
    company: "Positivo Tecnologia / Policorp",
    period: "2023 - 2024",
    role: "Systems & Embedded Software Engineer",
    highlightBadge: "C# / C++ • Microsoft Store Certified",
    overview:
      "Desenvolvimento de software de baixo nível em C# e C++ para controlar a mini tela física integrada no chassi do notebook Positivo Vision R15M, exibindo notificações do WhatsApp, telemetria de hardware e previsão do tempo em tempo real.",
    metrics: [
      { label: "Plataforma", value: "Windows UWP", detail: "Publicado e certificado na Microsoft Store" },
      { label: "Stack de Baixo Nível", value: "C# / C++", detail: "Comunicação serial com microcontrolador" },
      { label: "Hardware Impactado", value: "Milhares", detail: "Notebooks de fábrica Positivo Vision R15M" },
      { label: "Gestão de Repositório", value: "GitLab", detail: "Liderança de branches e releases de fábrica" },
    ],
    problem:
      "Comunicação de dados bidirecional com display secundário LCD em barramento de hardware com restrições extremas de consumo de bateria e latência no Windows.",
    solution:
      "Desenvolvimento de ponte em C++ e C# integrando bibliotecas de baixo nível da Win32 / UWP API para leitura de hardware, armazenamento em banco relacional local e pipelines de empacotamento com assinatura de código para homologação na Microsoft Store.",
    technicalHighlights: [
      "Integração de baixo nível com microcontrolador da minitela",
      "Conversão de pacotes binários e comunicação serial eficiente",
      "Ciclo completo de certificação e distribuição de software OEM",
    ],
    tags: [".NET", "C#", "C++", "Windows UWP", "Hardware Telemetry", "Microsoft Store"],
  },
  {
    id: "caixa-remote-mgmt",
    title: "Gerenciamento Remoto de Máquinas",
    subtitle: "Painel e Daemon de Wake-On-LAN para Edital de Governo / Caixa",
    company: "FiscalTech / Caixa Econômica Federal",
    period: "2022 - 2023",
    role: "Full-Stack Developer",
    highlightBadge: "Wake-On-LAN • Linux & Python",
    overview:
      "Sistema de orquestração de estações de trabalho de rede bancária, permitindo que operadores acionem computadores remotamente via pacotes mágicos Wake-On-LAN, instalem pacotes de software e executem reinicializações remotas em lote.",
    metrics: [
      { label: "Protocolo de Rede", value: "WOL Magic Packet", detail: "Ativação remota através de sub-redes" },
      { label: "Ambiente", value: "Linux Server", detail: "Daemons seguros e scripts de orquestração" },
      { label: "Client Web", value: "SPA Responsivo", detail: "Interface em JavaScript e WebSocket" },
    ],
    problem:
      "Gerenciar centenas de estações físicas distribuídas sem precisar de técnicos no local para ligar ou atualizar equipamentos.",
    solution:
      "Backend em Python com sockets UDP para emissão de pacotes Wake-On-LAN, API RESTful para comandos de power management e interface de monitoramento responsiva em tempo real.",
    technicalHighlights: [
      "Transmissão UDP de pacotes Wake-On-LAN em sub-redes corporativas",
      "Daemon Linux de gerenciamento e telemetria de status de hosts",
      "Painel de controle com feedback assíncrono de disponibilidade",
    ],
    tags: ["Python", "Linux", "Wake-On-LAN", "Networking", "JavaScript"],
  },
];

export const FORENSIC_RULES: ForensicRule[] = [
  {
    id: 1,
    title: "hostname no log de produção",
    subtitle: "A assinatura que expôs containers concorrentes",
    category: "Observabilidade",
    insight:
      "Dois containers estavam rodando o mesmo cron de agendamento em produção, um deles com build desatualizada apontando para banco divergente. Nenhuma leitura estática de código jamais encontraria isso.",
    impact: "Resolvido via query APL no Axiom em 1 linha: summarize count() by hostname, event.",
    quote: "Observabilidade não é luxo; é a diferença entre debugar um fantasma por 3 semanas ou achar a raiz em 3 minutos.",
  },
  {
    id: 2,
    title: "Duração do evento como assinatura forense",
    subtitle: "30 minutos vs 20 minutos: entulho vs dado vivo",
    category: "Forense",
    insight:
      "562 agendamentos órfãos travavam a grade de fiscais no Microsoft Teams. A assinatura matemática que separava o que era vivo do que era lixo era a duração: 30 min pertencia à grade antiga, 20 min à atual. 100% dos órfãos tinham 30 min.",
    impact: "Limpeza cirúrgica com script sequencial de backoff de 180ms por delete, sem derrubar a API do Graph.",
    quote: "Quando os dados parecem aleatórios, procure o invariante temporal que a versão anterior deixou para trás.",
  },
  {
    id: 3,
    title: "calendarView do Graph é eventually consistent",
    subtitle: "A verdade autoritativa mora no GET /events/{id}",
    category: "Integração",
    insight:
      "Auditar existência de reuniões pelo calendarView causava oscilações fantasmas onde reuniões apareciam e sumiam sozinhas. A verdade de consistência imediata só existe consultando a rota do evento individual.",
    impact: "Fim de um postmortem de semanas e estabilização de 100% dos crons de agendamento.",
    quote: "Nunca use endpoints agregados de busca para validar consistência de escrita.",
  },
  {
    id: 4,
    title: "pageNo vs page na API Mentor",
    subtitle: "O parâmetro que triplicaria pagamentos em silêncio",
    category: "Integração",
    insight:
      "A API aceitava 'page', 'pagina' e 'offset' sem acusar erro HTTP 400, mas ignorava todos em silêncio e devolvia repetidamente a página 0. Errar o nome triplicava o valor consolidado do boletim de medição sem nenhum aviso.",
    impact: "Prevenção de triplicação financeira indevida em pagamentos de empreiteiros.",
    quote: "Se uma API de terceiro não dá erro com parâmetro errado, teste o retorno com payload nulo antes de confiar.",
  },
  {
    id: 5,
    title: "FollowUpOf sem ListaEmprd: timeout de 120s vs 2s",
    subtitle: "A chave de performance oculta no ERP SAP",
    category: "Integração",
    insight:
      "Consultar a MobileAPI do ERP sem o filtro de empreendimentos estourava o teto de 120 segundos. Com o parâmetro injetado, a rota responde entre 0,5 e 2,7 segundos.",
    impact: "Queda de 98% na latência e viabilidade técnica do espelho de ordens de fornecimento.",
    quote: "Antes de culpar o banco da ponta, investigue os filtros de partição da borda.",
  },
  {
    id: 6,
    title: "Pedpendente_Pendente é eco do filtro, não estado",
    subtitle: "Medição controlada vs suposição de documentação",
    category: "Modelagem",
    insight:
      "Com Situacao=N, todos os 753 itens consultados retornavam Pendente='N', inclusive os já recebidos no canteiro. O campo era apenas o reflexo do parâmetro GET. O estado real só pôde ser obtido cruzando saldo com o FollowUpBaixaOf.",
    impact: "Eliminação de dados falsos no almoxarifado de 13 obras simultâneas.",
    quote: "Nunca confie no nome de um campo de ERP legado sem antes testar com matriz de variação controlada.",
  },
  {
    id: 7,
    title: "A chave do orçamento é o insumo de espécie 'S'",
    subtitle: "96% de cobertura contra 0% por etapa",
    category: "Modelagem",
    insight:
      "A tentativa intuitiva de casar tarefas de obras pela descrição de Etapa falhava com 0% de acerto. A correlação real mora no DescricaoInsumo do insumo de espécie S (serviço), que alcançou 458 de 477 linhas (96%).",
    impact: "Automação total da conciliação orçamentária do módulo de medições.",
    quote: "O domínio do negócio dita a chave estrangeira lógica, nunca a convenção do diagrama de classes.",
  },
  {
    id: 8,
    title: "Casar por família e não por variante de insumo",
    subtitle: "559% de falso estouro reduzido para 8.5% real",
    category: "Modelagem",
    insight:
      "Agrupar insumos por variantes pontuais gerava estouros orçamentários astronômicos falsos de 559%. Normalizar por famílias de insumos com prefixo comum refletiu com exatidão os 8.5% de consumo real medido em canteiro.",
    impact: "Decisões de diretoria baseadas em relatórios financeiros fidedignos.",
    quote: "Modelagem estatística errada transforma uma operação saudável em alarme falso de crise.",
  },
  {
    id: 9,
    title: "Faixa de estoque é cálculo contínuo, não cadastro",
    subtitle: "O minStock vinha nulo em 100% do catálogo",
    category: "Modelagem",
    insight:
      "Esperar que engenheiros de obras preenchessem limites de estoque mínimo gerou uma coluna vazia em 100% das 7.398 posições. A solução foi deduzir a cobertura via fórmula matemática C = (estoque + em trânsito) / necessidade(H).",
    impact: "Automação viva sem exigir trabalho manual repetitivo da equipe de campo.",
    quote: "O melhor software não obriga o usuário a cadastrar o que a matemática pode calcular sozinha.",
  },
  {
    id: 10,
    title: "A etapa já vinha no Pcorc: liste o JSON cru",
    subtitle: "O custo de especular antes de inspecionar a rede",
    category: "Banco & Cache",
    insight:
      "Foram investidas dezenas de horas desenhando uma rota complexa de sincronização, até descobrirmos que o endpoint que já chamávamos já continha o campo oculto na resposta JSON.",
    impact: "Regra institucional: sempre inspecione o JSON cru completo da API antes de escrever código novo.",
    quote: "Antes de criar um endpoint novo, dê um curl no antigo e leia o retorno inteiro.",
  },
];

export const ARCHITECTURE_PILLARS = [
  {
    title: "Monolito Modular Enforçado",
    subtitle: "33 Bounded Contexts • 1 Processo • 1 Banco • 1 Transação",
    description:
      "Microserviços adicionam custos brutais de rede, sagas e consistência eventual onde um monolito bem desenhado brilha. As fronteiras dos 33 módulos são cobradas por ferramentas estáticas no CI: dependency-cruiser barra como erro qualquer import cruzado de tabelas ou arquivos internos.",
    metrics: "Superfície de acoplamento cabe em 1 linha: cross-context apenas via injeção de service.",
  },
  {
    title: "Testes Reais sem Fantasia (PGlite WASM)",
    subtitle: "714 Testes Verdes • Postgres e Better Auth Reais • Zero Mocks de BD",
    description:
      "Nenhum service ou controller entra em main sem spec no mesmo PR. Os testes rodam contra um Postgres real compilado em WASM (PGlite), garantindo que transações ACID, constraints e queries Drizzle se comportem exatamente como em produção.",
    metrics: "Volume de código de teste é superior ao volume de código de produção na maioria dos módulos.",
  },
  {
    title: "Espelho Idempotente, Não Proxy",
    subtitle: "Desacoplamento de Terceiros e Latência Previsível",
    description:
      "Nenhum sistema externo (ERP SAP, Mentor, Suplos, Kommo) é consultado dentro do ciclo de vida da requisição HTTP do usuário. Os dados são espelhados em background por crons idempotentes com advisory locks dedicados.",
    metrics: "Se o parceiro cair, nossa tela continua 100% no ar servindo dados com frescor auditável.",
  },
  {
    title: "Observabilidade com Gestão de Cardinalidade",
    subtitle: "Pino + Axiom • event: '<dominio>.<acao>' • IDs no Topo",
    description:
      "Logs estruturados contendo hostname, IDs de domínio (obraId, userId) e eventos padronizados. Identificamos e respeitamos o limite rígido de 257 colunas no Axiom para evitar descarte silencioso de batches.",
    metrics: "Consultas APL de 1 linha resolvem postmortems de alta criticidade em minutos.",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Engenharia de Sistemas & Backend",
    skills: [
      { name: "NestJS / Node.js / Bun", level: 95, detail: "Monolito modular, DI, crons, circuit breakers" },
      { name: "C# / .NET / C++", level: 90, detail: "UWP, drivers de hardware, serial, Win32, ASP.NET MVC" },
      { name: "Python", level: 88, detail: "Automação, daemons Linux, Wake-On-LAN, scripts forenses" },
      { name: "TypeScript Puro", level: 96, detail: "Parsers binários, tipagem estrita, ports & adapters" },
      { name: "PHP / Modern Backend", level: 85, detail: "APIs RESTful, autenticação, MVC corporativo" },
    ],
  },
  {
    category: "Bancos de Dados & Storage",
    skills: [
      { name: "PostgreSQL & Drizzle ORM", level: 94, detail: "Migrations no boot, advisory locks, schemas particionados" },
      { name: "PGlite (Postgres WASM)", level: 92, detail: "Slice testing real sem mock de banco de dados" },
      { name: "SQL Server / MariaDB / MySQL", level: 90, detail: "Modelagem relacional, índices compostos, transações ACID" },
      { name: "MongoDB / NoSQL", level: 82, detail: "Coleções flexíveis e pipelines de agregação" },
    ],
  },
  {
    category: "DevOps, CI/CD & Observabilidade",
    skills: [
      { name: "Jenkins & GitHub Actions", level: 90, detail: "Pipelines multi-stage, testes de carga, gates automáticos" },
      { name: "Axiom APL & Pino Logging", level: 92, detail: "Triagem forense, gestão de cardinalidade de datasets" },
      { name: "Docker & Linux Servers", level: 88, detail: "Containers, daemons, gestão de processos de cron" },
      { name: "Trunk-Based Development", level: 95, detail: "PRs enxutas para main, migrations expand-contract" },
    ],
  },
  {
    category: "Frontend Moderno & Experiência",
    skills: [
      { name: "Next.js 14 / React", level: 92, detail: "App Router, SSR, Server Components, client state" },
      { name: "Tailwind CSS & Design Systems", level: 94, detail: "Interfaces responsivas de alto impacto visual" },
      { name: "Framer Motion & Canvas FX", level: 88, detail: "Animações fluidas a 60fps e micro-interações" },
      { name: "JavaScript / Web APIs", level: 95, detail: "DOM, Web Audio API, WebSockets, assincronismo" },
    ],
  },
];

export const CAREER_JOURNEY = [
  {
    role: "Desenvolvedor de Software / Engenharia",
    company: "LYX Engenharia",
    period: "mai/2026 — set/2026+",
    type: "Contrato / Projeto Estratégico",
    description:
      "Arquiteto e desenvolvedor core do lyx-monolith (NestJS, Bun, PostgreSQL/Drizzle, Better Auth). 410 commits e 86 PRs mergeadas em main. Entregou 4 módulos de missão crítica do absoluto zero: Agenda Fiscais, Almoxarifado Inteligente, Medições de Empreiteiros e Admissão de Pessoas.",
    tags: ["NestJS", "Bun", "PostgreSQL", "Drizzle ORM", "Better Auth", "Axiom", "Microsoft Graph"],
  },
  {
    role: "Desenvolvedor Full-Stack Pleno",
    company: "Policorp Tecnologia",
    period: "2024 — Atual",
    type: "Tempo Integral",
    description:
      "Responsável pela liderança técnica de soluções desktop Windows UWP para Positivo Tecnologia (Vision R15M com tela embutida, comunicação serial de baixo nível C#/C++), gestão de pipelines no Jenkins e entrega de projetos corporativos com ASP.NET, PHP e MariaDB.",
    tags: [".NET", "C#", "C++", "Jenkins CI/CD", "Windows UWP", "RabbitMQ", "MariaDB"],
  },
  {
    role: "Desenvolvedor Full-Stack Júnior",
    company: "Policorp Tecnologia",
    period: "2023 — 2024",
    type: "Tempo Integral",
    description:
      "Desenvolvimento de aplicações web, APIs RESTful, modelagem de banco de dados relacional e automação de rotinas empresariais.",
    tags: ["JavaScript", "PHP", "MySQL", "APIs REST", "HTML/CSS"],
  },
  {
    role: "Jovem Aprendiz de Pesquisa & Desenvolvimento",
    company: "FiscalTech",
    period: "2022 — 2023",
    type: "P&D",
    description:
      "Desenvolvimento de soluções em Linux e Python para gerenciamento remoto e acionamento via Wake-On-LAN para edital de governo da Caixa Econômica Federal.",
    tags: ["Python", "Linux", "Wake-On-LAN", "Networking"],
  },
  {
    role: "Jovem Aprendiz de Eletroeletrônica",
    company: "Volkswagen",
    period: "2019 — 2021",
    type: "Técnico",
    description:
      "Formação técnica e prática de automação industrial, sensores e eletrônica na linha de montagem automotiva.",
    tags: ["Eletrônica", "Automação", "Sensores Industriais"],
  },
];

export const EDUCATION_HONORS = [
  {
    title: "Bacharel em Ciência da Computação",
    institution: "Universidade Positivo",
    period: "2021 — 2024",
    highlight: "Média Global 8.74 • Formado",
    badge: "Graduação",
    description:
      "Formação sólida em algoritmos, complexidade computacional, arquitetura de computadores, compiladores e engenharia de software.",
  },
  {
    title: "3º Lugar na Maratona de Programação",
    institution: "Universidade Positivo",
    period: "Competição Universitária",
    highlight: "Pódio de Algoritmos",
    badge: "Honra ao Mérito",
    description:
      "Resolução de problemas algorítmicos complexos sob pressão de tempo e restrições rigorosas de memória e CPU.",
  },
  {
    title: "CS50x — Introduction to Computer Science",
    institution: "Harvard University",
    period: "Certificação Internacional",
    highlight: "C, Python, SQL, Estruturas de Dados",
    badge: "Certificado",
    description:
      "Conceitos profundos de ciência da computação, gerenciamento manual de memória, ponteiros e algoritmos fundamentais.",
  },
  {
    title: "English Certificate C1 Advanced",
    institution: "EF SET",
    period: "Proficiência Fluente",
    highlight: "C1 Advanced CEFR",
    badge: "Idioma",
    description:
      "Capacidade de comunicação técnica e fluente em contextos corporativos internacionais, reuniões e escrita de documentação.",
  },
];
