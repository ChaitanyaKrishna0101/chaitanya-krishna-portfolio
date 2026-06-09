const timeline = [
  {
    period: '2025 – Present',
    role: 'AI/ML Projects — Builder',
    org: 'Self-directed / Production',
    type: 'BUILDING',
    color: '#00ff88',
    points: [
      'Built and deployed 4 production AI systems covering RAG, LLM evaluation, CV, and bias detection',
      'Smart AI Task Platform: FastAPI + MySQL + ChromaDB + Gemini RAG architecture, live on Vercel',
      'AI Evaluator Pro: LLM-as-Judge evaluation framework with 60% cost reduction via smart routing',
      'TrustOS: Google Solution Challenge 2026 — bias detection across 15 sectors, 100K+ row datasets',
      'FaceMorph Attack Detector: Django + OpenCV + SSIM biometric security system, Docker-deployed',
    ],
  },
  {
    period: '2026 · 1–3 Months',
    role: 'AI Evaluation & LiDAR Annotator (RL)',
    org: 'Deccan AI — Hyderabad',
    type: 'PRODUCTION',
    color: '#0066ff',
    points: [
      'Evaluated robotic navigation data for RL models, generating structured AI feedback via reward and penalty signals',
      'Annotated LiDAR and video data with segmentation, object tracking, and 3D bounding boxes for AI/ML workloads',
    ],
  },
  {
    period: '2025 · 2 Months',
    role: 'Image Annotation & QC Analyst',
    org: 'Centific — Hyderabad',
    type: 'DATA QC',
    color: '#ff8c00',
    points: [
      'Annotated large-scale visual datasets for ML model training; performed QC and data validation for AI-ready pipelines',
    ],
  },
  {
    period: '2024 · 2 Months',
    role: 'Data Annotation Analyst — PII Projects',
    org: 'Centific — Hyderabad',
    type: 'PII / NLP',
    color: '#ff8c00',
    points: [
      'Labeled structured text and image data for PII detection; ensured privacy compliance and documented annotation approaches',
    ],
  },
  {
    period: '2024 – 2026',
    role: 'Master of Computer Applications (MCA)',
    org: "Aurora's PG College — Hyderabad",
    type: 'EDUCATION',
    color: '#ff3366',
    points: [
      'Final year MCA — specialized focus on AI/ML engineering and system deployment',
      'B.Sc. Computer Science — Kakatiya Govt. Degree College (75%)',
      'Concurrent self-education in LangChain, RAG architectures, transformer fine-tuning, and agentic AI',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>
            04 / TRAJECTORY
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
            How I Got<br /><span style={{ color: 'var(--accent)' }}>Here</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '140px', top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '3rem', position: 'relative' }}>
                {/* Period */}
                <div style={{ minWidth: '140px', paddingTop: '4px', textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '1px', lineHeight: 1.4 }}>{item.period}</div>
                  <div style={{ fontSize: '9px', padding: '2px 8px', background: `${item.color}15`, color: item.color, display: 'inline-block', marginTop: '6px', letterSpacing: '1px' }}>{item.type}</div>
                </div>

                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '136px', top: '8px',
                  width: '9px', height: '9px', borderRadius: '50%',
                  background: item.color, border: `2px solid var(--bg)`,
                  boxShadow: `0 0 10px ${item.color}60`,
                }} />

                {/* Content */}
                <div style={{ flex: 1, paddingLeft: '1rem' }}>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '4px' }}>{item.role}</h3>
                  <div style={{ fontSize: '11px', color: item.color, letterSpacing: '1px', marginBottom: '1rem' }}>{item.org}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: item.color, marginTop: '4px', fontSize: '8px', flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
