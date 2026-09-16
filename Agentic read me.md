# 🔬 ResearchOS

<div align="center">

**Your personal team of AI agents that turns any question into a full professional report — with citations, charts, and executive summary — in under 10 minutes.**

[![Python](https://img.shields.io/badge/Python-3.10+-blue?style=flat-square&logo=python)](https://python.org)
[![LangGraph](https://img.shields.io/badge/LangGraph-1.1-purple?style=flat-square)](https://langchain-ai.github.io/langgraph)
[![Groq](https://img.shields.io/badge/LLM-Groq%20Llama%203-orange?style=flat-square)](https://console.groq.com)
[![Streamlit](https://img.shields.io/badge/UI-Streamlit-red?style=flat-square&logo=streamlit)](https://streamlit.io)
[![ChromaDB](https://img.shields.io/badge/VectorDB-ChromaDB-green?style=flat-square)](https://trychroma.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Free](https://img.shields.io/badge/API%20Cost-~%240-brightgreen?style=flat-square)]()

[Features](#features) · [How It Works](#how-it-works) · [Quick Start](#quick-start) · [Tech Stack](#tech-stack) · [Roadmap](#roadmap)

</div>

---

## What Is This?

Most AI research tools are just "chat with a document" or a single model generating a response. ResearchOS is different — it deploys **5 specialised AI agents** that collaborate, debate, and self-correct to produce research that is cited, structured, and verified.

You type one question. A team of agents does the rest.

| Feature | Basic RAG / Chatbot | ResearchOS |
|---|---|---|
| Architecture | Single model | 5 specialised agents |
| Research | One search pass | Parallel multi-query |
| Data | Text only | Structured extraction + Plotly charts |
| Quality control | None | Critic → revision loop |
| Output | Text response | Markdown + PDF + JSON |
| Observability | None | Live agent graph |
| Cost | Per-token API | Free tier (Groq + Tavily) |

---

## Demo

```
Question: "What is the current state of AI agents and multi-agent systems in 2025?"

[Supervisor]  Planning research → decomposed into 4 sub-queries
[Researcher]  Searching web    → 22 unique sources collected
[Analyst]     Analysing data   → 3 datasets extracted, 3 charts generated
[Writer]      Writing report   → 1,200-word cited Markdown draft
[Critic]      Reviewing draft  → 1 major issue found (missing citation)
[Writer]      Revising         → draft updated
[Critic]      Re-reviewing     → no issues found
[Supervisor]  Approving        → report approved

Output → report.md · report.pdf · report.json
Time   → ~6 minutes
```

The live agent collaboration graph animates in real time — every node lights up as it activates, edges appear as agents hand off work to each other.

---

## Features

- **5-Agent Pipeline** — Supervisor, Researcher, Analyst, Writer, Critic each with a distinct role and system prompt
- **Live Agent Graph** — Pyvis network graph updates in real time as agents activate
- **Critic Loop** — automatic fact-checking and revision cycle (up to 3 passes) before the report is approved
- **Parallel Search** — Researcher fires multiple Tavily queries simultaneously and deduplicates results
- **Auto Charts** — Analyst extracts numerical data from sources and generates Plotly charts automatically
- **RAG Retrieval** — Writer pulls the most relevant source chunks from ChromaDB for each section
- **PDF Export** — styled cover page, embedded charts, page numbers, full citations
- **Run History** — every completed report saved and accessible from the History tab
- **Rate Limit Resilient** — automatic retry with backoff on Groq 429 errors
- **Zero Cost** — runs entirely on Groq and Tavily free tiers

---

## How It Works

```
User Question
      │
      ▼
┌─────────────┐
│  Supervisor │  Decomposes question into 3–5 focused sub-queries
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Researcher │  Parallel Tavily search · deduplication · ChromaDB storage
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Analyst   │  Structured data extraction · Plotly charts · SQLite
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Writer    │  RAG retrieval · cited Markdown report synthesis
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Critic    │  Hallucination check · missing citations · structure review
└──────┬──────┘
       │
  Issues found?
  ┌────┴────┐
  │ Yes     │  → Writer revises (max 3 cycles)
  │ No      │  → Supervisor approves
  └────┬────┘
       │
       ▼
┌─────────────┐
│   Output    │  Markdown · PDF · JSON · Run history saved
└─────────────┘
```

---

## Agent Roles

| Agent | Job | Tools |
|---|---|---|
| **Supervisor** | Decomposes questions, coordinates agents, approves final output | LangGraph state machine |
| **Researcher** | Parallel web search, source deduplication, vector store ingestion | Tavily API, ChromaDB |
| **Analyst** | Extracts structured data, generates charts, persists to SQLite | Pandas, Plotly |
| **Writer** | RAG retrieval + cited Markdown report synthesis | ChromaDB, Groq LLM |
| **Critic** | Fact-checks against sources, flags hallucinations and missing citations | Groq LLM |

---

## Quick Start

### Prerequisites

- Python 3.10+
- Free [Groq API key](https://console.groq.com) — no credit card required
- Free [Tavily API key](https://app.tavily.com) — no credit card required

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/research-os
cd research-os
```

### 2. Create virtual environment

```bash
python -m venv agentic

# Windows
agentic\Scripts\activate

# Mac / Linux
source agentic/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure environment

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_key_here
TAVILY_API_KEY=your_tavily_key_here
GROQ_MODEL=llama-3.1-8b-instant
MAX_SEARCH_RESULTS=8
MAX_REVISION_CYCLES=3
```

> **Tip:** Use `llama-3.1-8b-instant` to avoid rate limits on the free tier. Switch to `llama-3.3-70b-versatile` for higher quality output.

### 5. Launch the dashboard

```bash
streamlit run app.py
```

Open `http://localhost:8501`, type a research question, click **Run Research**.

---

## Example Questions

**Start here — fast and reliable**
```
What is Python and why is it popular for machine learning?
What are the main benefits of cloud computing for businesses?
What are the biggest trends in cybersecurity in 2025?
```

**Quantitative — will generate charts**
```
What are the top programming languages by developer adoption in 2025?
Show me the growth of the global EV market over the past 5 years
Compare cloud provider market share between AWS, Azure, and GCP
```

**Hybrid — best for demos**
```
Why did AI investment surge in 2024 and what do analysts predict for 2025?
What are the biggest AI agent frameworks in 2025 and how do they compare?
How has the open-source LLM landscape evolved and what does the data show?
```

---

## Tech Stack

| Category | Technology | Why |
|---|---|---|
| Agent orchestration | LangGraph 1.1 | Stateful multi-agent graphs with conditional routing |
| LLM | Groq — Llama 3.1 / 3.3 | Free tier, fastest inference available |
| Web search | Tavily API | Reliable, structured results with relevance scores |
| Vector store | ChromaDB | Local, free, no infrastructure needed |
| Structured store | SQLite + Pandas | Zero setup, built into Python |
| Charts | Plotly | Interactive HTML + PNG export |
| Live visualisation | Pyvis + Streamlit | Real-time agent graph in the browser |
| PDF output | WeasyPrint | Pure Python — no LaTeX or Chrome dependency |
| Shared state | LangGraph TypedDict | Single source of truth across all agents |

**Total external API cost: ~$0** — Groq and Tavily both have free tiers sufficient for development and demos.

---

## Project Structure

```
research_os/
├── app.py                        Streamlit UI — main entry point
├── main.py                       CLI entry point
├── test_pipeline.py              Test suite (10 questions)
├── .env                          API keys and config
├── requirements.txt
│
├── state/
│   └── schema.py                 SharedState TypedDict — single source of truth
│
├── agents/
│   ├── supervisor.py             Plan + approve nodes
│   ├── researcher.py             Tavily search + ChromaDB ingestion
│   ├── analyst.py                Data extraction + Plotly charts
│   ├── writer.py                 RAG retrieval + report synthesis
│   └── critic.py                 Fact-check + hallucination detection
│
├── graph/
│   └── workflow.py               LangGraph graph — all 8 nodes and edges
│
├── memory/
│   ├── vector_store.py           ChromaDB wrapper
│   └── structured_store.py       SQLite interface
│
├── output/
│   ├── chart_generator.py        Plotly chart builder (bar, line, pie)
│   ├── pdf_renderer.py           Markdown → styled PDF via WeasyPrint
│   └── report_writer.py          Final output node — saves MD + PDF + JSON
│
├── visualisation/
│   ├── agent_graph.py            Pyvis live agent collaboration graph
│   └── run_history.py            Run history persistence
│
├── prompts/
│   └── agent_prompts.py          All LLM system prompts per agent
│
├── utils/
│   └── llm.py                    Shared LLM utility with retry + backoff
│
└── data/
    ├── chroma_db/                Local vector store (auto-created)
    ├── research.db               SQLite structured data (auto-created)
    ├── charts/                   Generated Plotly charts
    ├── reports/                  Final reports (MD + PDF + JSON)
    └── runs/                     Run history records
```

---

## Architecture Deep Dive

### Shared State

Every agent reads from and writes to a single `SharedState` TypedDict. No agent has private state — everything is transparent and inspectable at any point during the run.

```python
class SharedState(TypedDict):
    question:        str              # user input
    research_plan:   list[str]        # supervisor's sub-queries
    sources:         list[Source]     # researcher's findings
    structured_data: dict             # analyst's extracted datasets
    charts:          list[str]        # chart file paths
    draft_report:    str              # writer's current draft
    critique:        list[str]        # critic's issues
    revision_count:  int              # loop guard (max 3)
    final_report:    str              # approved report
    agent_log:       list[AgentEvent] # live visualisation feed
```

### The Critic Loop

The quality loop is what separates ResearchOS from a single-pass "write a report" prompt.

```
write_report → critique_report → approve_report
                                       │
               ┌──────── approved ─────┘
               │
               └──────── rejected ──→ write_report (max 3 cycles)
```

The Critic only surfaces `major` severity issues — hallucinated facts, missing citations, structural problems. Minor issues are filtered to prevent trivial revision cycles. After 3 revisions the Supervisor accepts the best available draft.

### Rate Limit Handling

All LLM calls go through `utils/llm.py` which automatically retries on Groq 429 errors — it parses the retry-after seconds from the error message and waits exactly that long before retrying (up to 6 attempts).

---

## LLM Options

Change `GROQ_MODEL` in `.env` — no code changes needed.

| Model | Speed | Quality | Free Tier TPM |
|---|---|---|---|
| `llama-3.1-8b-instant` ⭐ | Fastest | Good | 30,000 |
| `llama-3.3-70b-versatile` | Slow | Best | 6,000 |
| `gemma2-9b-it` | Fast | Decent | 15,000 |
| `mixtral-8x7b-32768` | Medium | Good | 5,000 |

---

## Limitations

- **Single session scope** — one question at a time. Multi-topic comparison is a v2 feature.
- **Tavily free tier** — ~1,000 searches/month. Upgrade to Tavily Pro for heavy use.
- **Chart accuracy** — numerical data is extracted by an LLM, not a parser. Verify critical figures against the cited source URLs.
- **Groq rate limits** — free tier is 6,000–30,000 TPM depending on model. The retry handler manages this automatically.

---

## Roadmap

- [ ] Multi-topic comparative reports
- [ ] GraphRAG — entity relationship tracking across sessions
- [ ] Self-RAG — Researcher validates its own retrieval before passing to Analyst
- [ ] Temporal durability — resume a crashed run exactly where it stopped
- [ ] Email delivery — send completed reports to your inbox
- [ ] FastAPI wrapper — call ResearchOS programmatically
- [ ] Ollama support — fully local, zero API dependency

---

## Built On Previous Work

This is the fourth project in a deliberate skill progression:

| # | Project | Stack | Core Concept |
|---|---|---|---|
| 1 | [Competitive Intelligence Monitor](https://github.com/yourusername/competitive-intel-monitor) | Temporal + Mistral + Tavily | Durable workflow execution |
| 2 | [Financial RAG Analyzer](https://github.com/yourusername/financial-rag-analyzer) | ChromaDB + Groq + EDGAR | Hybrid RAG + auto charts |
| 3 | [Neural Network Visualizer](https://github.com/yourusername/nn-visualization) | PyTorch + Flask + Canvas | Real-time layer visualisation |
| 4 | **ResearchOS** (this repo) | LangGraph + 5 agents + Pyvis | All of the above, multi-agent |

Each project's core pattern is reused here — Temporal's workflow thinking became LangGraph, the hybrid RAG became the Writer's retrieval layer, and the CNN layer visualisation became the live agent graph.

---

## Contributing

Pull requests are welcome. For major changes please open an issue first.

---

## License

MIT — free to use, modify, and build on.

---

<div align="center">

*If this project helped you, a ⭐ goes a long way.*

</div>
