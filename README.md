# Portfólio de Engenharia // Luiz Henrique da Silva de Oliveira

> **"Não é hype. É engenharia de verdade."**  
> Portfólio, dossiê técnico e manifesto profissional de Luiz Henrique da Silva de Oliveira.

Site desenvolvido em **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** e **Web Audio API**, inspirado nas referências de alta octanagem de design ([Lando Norris](https://landonorris.com/)) e na postura assertiva de campanha editorial ([Ousmane Ballon d'Or](https://www.ousmaneballondor.fr/)).

---

## 🚀 Destaques do Projeto

- **Manifesto de Engenharia ("A Propaganda")**: Narrativa focada em impacto real, contrapondo vícios comuns de desenvolvimento com a disciplina de engenharia de sistemas.
- **Estudos de Caso Reais do `lyx-monolith`**:
  - `agenda-fiscais`: Motor de 27 regras orientadas a dados, escalonador de 4 passes e erradicação de 562 eventos zumbis no Microsoft Teams/Graph.
  - `almoxarifado`: Espelho de ERP SAP sem timeouts (120s para 2s), parser de arquivos `.mpp` do MS Project em TypeScript nativo (2.490 tarefas em 250ms) e leitor híbrido de DANFE.
  - `medicoes`: Boletim de medição de empreiteiros, prevenção do bug silencioso `pageNo` e conciliação orçamentária de R$ 1.03M+ por famílias de insumos.
  - `pessoas-admissao-clt`: Sync assíncrono desacoplado do request HTTP e blindagem BOLA.
- **Projetos de Baixo Nível & Hardware**:
  - Positivo Tecnologia: Minitela embutida para notebook Vision R15M em C#, C++ e Windows UWP certificada na Microsoft Store.
  - Caixa Econômica Federal: Daemon e painel de Wake-On-LAN em Python e Linux.
- **Os 10 Achados Forenses da LYX**: Dossiê interativo com lições cruas de observabilidade, integracão e modelagem.
- **Terminal de Telemetria Interativo**: Shell funcional simulando consultas APL no Axiom, testes PGlite WASM e comandos do sistema.
- **Micro-interações Táteis**: Sintetizador embutido com Web Audio API (sem dependência de arquivos externos de áudio) com botão de mute/unmute.
- **Download do Currículo**: Botão com animação de confetes servindo o arquivo real `public/cv.pdf`.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 18+ ou Bun 1.0+

### Instalação e Execução com Bun (Recomendado)
```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento (porta 3000)
bun run dev

# Ou gerar build estático de produção
bun run build
bun run start
```

### Com NPM
```bash
npm install
npm run dev
```

Abra no navegador em: `http://localhost:3000`

---

## 🌐 Deploy Rápido (Vercel)

Como o projeto é 100% estático e dinâmico no client sem necessidade de banco de dados ou back-end:
1. Suba o repositório no seu GitHub (`https://github.com/Luiz-Henrique03/portfolio`).
2. Conecte na [Vercel](https://vercel.com) e clique em **Deploy**.
3. Em menos de 1 minuto o site estará publicado mundialmente com HTTPS e CDN global.
