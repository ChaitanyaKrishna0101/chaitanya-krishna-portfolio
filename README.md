---
title: Chaitanya Krishna Portfolio
emoji: 🤖
colorFrom: green
colorTo: blue
sdk: docker
pinned: false
---

<div align="center">

<h1>⚡ CHAITANYA KRISHNA</h1>
<h3><code>AI / ML Engineer &nbsp;·&nbsp; Builder &nbsp;·&nbsp; Hyderabad</code></h3>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=00FF88&center=true&vCenter=true&width=650&lines=While+others+learn+AI+%E2%80%94+I+ship+it.;4+Live+Production+Systems.;LLMs+%C2%B7+RAG+%C2%B7+CV+%C2%B7+Bias+Detection.;Available+Immediately.;8-12+LPA+%C2%B7+Hyderabad+%E2%86%92+Anywhere." alt="Typing SVG" />

<br/>
<br/>

[![](https://img.shields.io/badge/◈_LIVE_PORTFOLIO-OPEN-00ff88?style=for-the-badge&logoColor=black)](https://chaithu0101-chaitanya-krishna-portfolio.hf.space/)
&nbsp;
[![](https://img.shields.io/badge/◈_SOURCE_CODE-GITHUB-0d1117?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ChaitanyaKrishna0101/chaitanya-krishna-portfolio)
&nbsp;
[![](https://img.shields.io/badge/◈_DEPLOYED_ON-HUGGINGFACE-ff3366?style=for-the-badge&logo=huggingface&logoColor=white)](https://chaithu0101-chaitanya-krishna-portfolio.hf.space/)

<br/>

> *"While most people are still learning AI — I've already shipped it."*

</div>

---

<br />

## `01` &nbsp; WHAT THIS IS

A **production-grade AI/ML portfolio** — not a template, not a tutorial clone. Every line written from scratch. Every design decision intentional. Every feature chosen to demonstrate real engineering thinking.

```
THE GOAL    →   Show who I am as an engineer in under 60 seconds
THE HOW     →   Cinematic intro + 4 live project breakdowns + AI chat
THE RESULT  →   A portfolio that works as hard as the engineer behind it
```

<br />

---

<br />

## `02` &nbsp; LIVE FEATURES

<br />

| Feature | What It Does | Tech Behind It |
|---------|-------------|----------------|
| 🎬 **Cinematic Intro** | Full-screen video player with custom overlay controls | Canvas API + CSS gradients |
| 🤖 **AI Recruiter Chat** | Answers anything about me — casual or professional | Groq + LLaMA 3.1 + FastAPI proxy |
| ⚡ **Dot-Grid Canvas** | Breathing sine-wave particle animation in hero | Pure `requestAnimationFrame` |
| 🖱️ **Custom Cursor** | Dot + trailing ring with RAF lag effect | Vanilla JS, zero libraries |
| 📁 **Project Accordion** | Slide + glow hover, smooth cubic-bezier expand | CSS transitions + inline styles |
| 📊 **Skill Bars** | Animated percentage bars per skill group | CSS keyframes |
| 🕐 **Timeline** | Color-coded vertical experience timeline | Pure CSS + React |
| 🌑 **Dark Futuristic UI** | Terminal-meets-editorial aesthetic | CSS variables + Syne + IBM Plex Mono |

<br />

---

<br />

## `03` &nbsp; SYSTEM ARCHITECTURE

<br />

```
╔═════════════════════════════════════════════════════════════════════════════════════════════╗
║                           SYSTEM ARCHITECTURE                                               ║
╠═════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                             ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐   ║
║   │  BROWSER  (React 18 + Vite)                                                         │   ║
║   │                                                                                     │   ║
║   │   Hero  ──►  Video  ──►  Projects  ──►  Skills  ──►  AI Chat  ──►  Contact          │   ║
║   │                                                          │                          │   ║
║   │                                                    POST /api/chat                   │   ║
║   └──────────────────────────────────────────────────────────┼──────────────────────────┘   ║
║                                                              │                              ║
║                                                              ▼                              ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐   ║
║   │  HUGGINGFACE SPACES  (FastAPI + Python)                                             │   ║
║   │                                                                                     │   ║
║   │   POST /api/chat  ──────────────────────────────────────────►  Groq API             │   ║
║   │                                                                    │                │   ║
║   │                                                             LLaMA 3.1 8B Instant    │   ║
║   │                                                                    │                │   ║
║   │   GET  /           ──►  dist/index.html                    ◄───────┘                │   ║
║   │   GET  /assets/*   ──►  StaticFiles                                                 │   ║
║   │   GET  /intro.mp4  ──►  FileResponse (video/mp4)                                    │   ║
║   └─────────────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                             ║
║   ┌─────────────────────────────────────────────────────────────────────────────────────┐   ║
║   │  SECRETS VAULT  (HuggingFace)                                                       │   ║
║   │                                                                                     │   ║
║   │   GROQ_API_KEY  ──►  injected at runtime  ──►  never exposed to browser             │   ║
║   └─────────────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════════════════════╝

```

<br />

---

<br />

## `04` &nbsp; TECH STACK — EVERY CHOICE INTENTIONAL

<br />

```
LAYER           TECHNOLOGY                  WHY THIS, NOT SOMETHING ELSE
──────────────  ──────────────────────────  ────────────────────────────────────────
UI Framework    React 18 + Vite             Fast HMR, component isolation, no bloat
Styling         Pure CSS Variables          Zero runtime cost, full theme control
Typography      Syne + IBM Plex Mono        Editorial weight + terminal authenticity
Animation       CSS Keyframes + Canvas API  No library = no bundle size tax
AI Engine       Groq + LLaMA 3.1 8B        Fastest inference, free tier, REST-based
Backend         FastAPI + Uvicorn           Lightweight, async, SPA routing support
Deployment      HuggingFace Spaces          Free, Docker-ready, persistent URL
Version Control Git LFS                     Handles 9.8MB video without repo bloat
```

<br />

---

<br />

## `05` &nbsp; THE AI CHAT — HOW IT ACTUALLY WORKS

<br />

Most portfolio chatbots are just a system prompt saying *"answer about me."*
This one is engineered differently.

<br />

**① Dual-Mode Detection**
```
"hi" / "how are you" / "had dinner?"
        ↓
   CASUAL MODE — pure conversation, zero tech talk
   matches energy, never pitches unprompted

"what are his projects" / "why should I hire him"
        ↓
   PROFESSIONAL MODE — structured, creative, impressive
   rotates format every single reply
```

**② Dynamic Format Rotation** — never the same answer twice
```
Story      →  "Here's the thing — [context]. So he [did X]. Result: [impact]."
Structured →  ▸ PROBLEM / ▸ SOLUTION / ▸ IMPACT
Contrast   →  "Most freshers do X. Chaitanya does Y."
Numbered   →  ① fact  ② fact  ③ fact
Direct     →  one sentence + one fact + one link
Reframe    →  "That's actually a strength — [evidence]. [close strong]."
```

**③ Negative Reframing** — handles tough recruiter questions
```
"You're a fresher"     →  reframe with 7+ months production AI + 4 live systems
"Small projects"       →  reframe with 100K+ rows, Docker, JWT auth, live users
"No X years exp"       →  reframe with production systems > years on paper
```

**④ Server-Side Key Proxy**
```
Visitor browser  →  POST /api/chat  →  FastAPI  →  Groq API
                                           ↑
                                    GROQ_API_KEY
                                    (HF Secret, never exposed)
```

<br />

---

<br />

## `06` &nbsp; PROJECT STRUCTURE

<br />

```
chaitanya-krishna-portfolio/
│
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          ← custom RAF cursor with trailing ring
│   │   ├── Nav.jsx             ← fixed nav, scroll-aware background
│   │   ├── Hero.jsx            ← canvas dot-grid + typewriter roles
│   │   ├── VideoSection.jsx    ← cinematic player with overlay
│   │   ├── Projects.jsx        ← accordion + hover glow + expand
│   │   ├── Skills.jsx          ← animated bars + tools grid
│   │   ├── Experience.jsx      ← vertical timeline, color-coded
│   │   ├── AIChat.jsx          ← Groq chat, dual-mode, proxy-based
│   │   ├── Contact.jsx         ← links + strong CTA
│   │   └── Footer.jsx
│   │
│   ├── App.jsx                 ← section composition
│   ├── main.jsx                ← React entry point
│   └── index.css               ← CSS vars, keyframes, global reset
│
├── public/
│   ├── intro.mp4               ← cinematic intro video (add manually)
│   └── favicon.svg
│
├── dist/                       ← generated by npm run build
│
├── app.py                      ← FastAPI: chat proxy + static serving
├── requirements.txt            ← fastapi, uvicorn, httpx
├── Dockerfile                  ← multi-stage Node → Python
├── vite.config.js
└── package.json
```

<br />

---

<br />

## `07` &nbsp; RUN LOCALLY

<br />

```bash
# Clone
git clone https://github.com/ChaitanyaKrishna0101/chaitanya-krishna-portfolio
cd chaitanya-krishna-portfolio

# Install
npm install

# Add your intro video
cp /path/to/your/video.mp4 public/intro.mp4

# Start
npm run dev
# → http://localhost:5173
```

> For AI chat locally, open browser console and run:
> `localStorage.setItem("groq_key", "gsk_your_key_here")`
> Get a free key at [console.groq.com](https://console.groq.com)

<br />

---

<br />

## `08` &nbsp; DEPLOY TO HUGGINGFACE SPACES

<br />

```bash
# 1 — Build
npm run build

# 2 — Create Space at huggingface.co/spaces
#     SDK: Docker | Visibility: Public

# 3 — Add remote
git remote add hf https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE

# 4 — Track video with Git LFS (if > 50MB)
git lfs install
git lfs track "*.mp4"
git add .gitattributes

# 5 — Push
git add .
git commit -m "Deploy"
git push hf main

# Live at → https://YOUR_USERNAME-YOUR_SPACE.hf.space
```

**Add your Groq key as a secret:**
```
HuggingFace Space → Settings → Variables and Secrets → New Secret
Name:  GROQ_API_KEY
Value: gsk_...
```

<br />

---

<br />

## `09` &nbsp; MY LIVE AI PROJECTS

<br />

```
┌─────────────────────────────────┬──────────────────────────────────┬────────────┐
│ PROJECT                         │ STACK                            │ STATUS     │
├─────────────────────────────────┼──────────────────────────────────┼────────────┤
│ Smart AI Task Platform          │ FastAPI + ChromaDB + Gemini      │ ● LIVE     │
│ RAG knowledge retrieval system  │ + React 18 + JWT + MySQL         │            │
├─────────────────────────────────┼──────────────────────────────────┼────────────┤
│ AI Evaluator Pro                │ Groq + LLaMA + LLM-as-Judge      │ ● LIVE     │
│ LLM evaluation framework        │ + FastAPI + SQLite + Docker      │            │
├─────────────────────────────────┼──────────────────────────────────┼────────────┤
│ TrustOS                         │ React + Gemini 2.0 Flash         │ ● LIVE     │
│ AI bias detection platform      │ + Statistical Fairness Modeling  │            │
│ Google Solution Challenge 2026  │                                  │            │
├─────────────────────────────────┼──────────────────────────────────┼────────────┤
│ FaceMorph Attack Detector       │ Django + OpenCV + SSIM           │ ● LIVE     │
│ Biometric security system       │ + Docker + Render                │            │
└─────────────────────────────────┴──────────────────────────────────┴────────────┘
```

<br />

---

<br />

## `10` &nbsp; ABOUT ME

<br />

```
NAME          Emmadi Chaitanya Krishna  ("Chaithu")
DEGREE        MCA 2026 — Aurora's PG College, Osmania University
EXPERIENCE    7+ months — Deccan AI + Centific
CERTS         HuggingFace Agentic AI  ·  Microsoft Azure
AVAILABLE     Immediately
SALARY        8 – 12 LPA
LOCATION      Hyderabad → Bangalore → Chennai → anywhere India
```

<br />

<div align="center">

---

[![](https://img.shields.io/badge/✉%20EMAIL-chaitanyachaithu370%40gmail.com-0a3d2e?style=for-the-badge&logoColor=white)](mailto:chaitanyachaithu370@gmail.com)

[![](https://img.shields.io/badge/in%20LINKEDIN-chaitanya--krishna01-0066ff?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/chaitanya-krishna01)

[![](https://img.shields.io/badge/◈%20GITHUB-ChaitanyaKrishna0101-ff3366?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ChaitanyaKrishna0101)

[![](https://img.shields.io/badge/🚀%20PORTFOLIO-LIVE%20NOW-0d0d0d?style=for-the-badge&logoColor=white)](https://chaithu0101-chaitanya-krishna-portfolio.hf.space/)

---

```
NOT WAITING TO BE READY.  ALREADY READY.
```

*⭐ Star this repo if it helped you think differently about portfolios*

</div>
