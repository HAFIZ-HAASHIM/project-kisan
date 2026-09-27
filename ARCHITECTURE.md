# 🌾 Project-Kisan Architecture & Technical Design

Project-Kisan is an autonomous, context-aware agentic AI system engineered to assist farmers with localized agricultural decision support, disease diagnosis, market price intelligence, and government subsidy exploration.

---

## 🏛️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                     │
│         (Next.js 14 · React · Tailwind CSS · Multilingual)  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Agent Orchestrator & Router                 │
│         (Context Dispatcher · Intent Classifier)            │
└───────┬──────────────────────┬──────────────────────┬───────┘
        │                      │                      │
        ▼                      ▼                      ▼
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│  Crop Health │       │  Mandi Price │       │  Scheme &    │
│  Diagnostic  │       │  Predictor   │       │  Advisory    │
│  Agent       │       │  Agent       │       │  Agent       │
└───────┬──────┘       └───────┬──────┘       └───────┬──────┘
        │                      │                      │
        ▼                      ▼                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   Foundation Model Layer                    │
│      (Google Gemini 1.5 Flash / Pro · Multimodal Vision)    │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   Data & Storage Layer                      │
│        (MongoDB · Firebase Cache · Agmarknet Dataset)       │
└─────────────────────────────────────────────────────────────┘
```

---

## 🤖 Multi-Agent Specializations

1. **Crop Health Diagnostics Agent (`/diagnosis`):**
   - Ingests leaf/plant imagery via camera or upload.
   - Executes multimodal visual reasoning through Gemini 1.5.
   - Identifies pathogens, nutrient deficiencies, and pest infestations.
   - Recommends localized, cost-effective bio-pesticides and chemical treatments.

2. **Mandi Price & Market Intelligence Agent (`/market`):**
   - Retrieves real-time and historical wholesale market commodity data.
   - Computes short-term price trajectories and volatility indices.
   - Provides clear **Sell vs. Hold** advisories to maximize farmer profit margins.

3. **Government Scheme & Subsidy Navigator (`/schemes`):**
   - Parses state and central agricultural benefit programs.
   - Filters eligibility criteria based on land holding size, crop type, and region.

4. **Multilingual Context Engine (`lib/languages.ts`):**
   - Supports seamless localization across regional Indian languages.
   - Normalizes farmer queries and voice transcriptions into structured LLM prompts.

---

## 🔒 Security & Environment Strategy

- API keys (`GEMINI_API_KEY`, Firebase credentials) are strictly decoupled via server-side Next.js route handlers.
- Client requests pass through schema validation before LLM invocation.
- Rate-limiting prevents quota exhaustion on external AI provider endpoints.
