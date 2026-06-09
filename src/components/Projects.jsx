import { useState } from 'react';

const projects = [
  {
    id: 'smart-ai',
    tag: 'RAG · PRODUCTION',
    title: 'Smart AI Task Platform',
    problem: 'Employees wasted hours searching company PDFs. Knowledge was siloed, answers delayed.',
    solution: 'Full-stack RAG system — admins upload docs, chunked & embedded into ChromaDB; Gemini AI generates grounded answers via semantic retrieval.',
    impact: 'Document search time: minutes → seconds. Zero hallucination via grounded retrieval. Role-based JWT auth.',
    tech: ['FastAPI', 'MySQL', 'ChromaDB', 'Gemini API', 'React 18', 'JWT', 'Sentence Transformers', 'Render'],
    github: 'https://github.com/ChaitanyaKrishna0101',
    demo: 'https://smart-ai-task-platform.vercel.app',
    color: '#00ff88',
    num: '01',
  },
  {
    id: 'ai-evaluator',
    tag: 'LLM EVALUATION · PRODUCTION',
    title: 'AI Evaluator Pro',
    problem: 'Teams shipped AI models without knowing hallucination rates or safety failures — expensive post-deployment fixes.',
    solution: 'Runs two LLMs side-by-side, scores every response on hallucination, safety, and bias via LLM-as-Judge with 60 adversarial prompts.',
    impact: '60% cost reduction demonstrated via smart router strategy. <4% quality drop. Business impact dashboard in dollars.',
    tech: ['FastAPI', 'Groq API', 'LLaMA 3.1', 'LLM-as-Judge', 'SQLite', 'Docker', 'HuggingFace Spaces'],
    github: 'https://github.com/ChaitanyaKrishna0101',
    demo: 'https://chaithu0101-ai-evaluator.hf.space',
    color: '#0066ff',
    num: '02',
  },
  {
    id: 'trustos',
    tag: 'AI GOVERNANCE · GOOGLE SOLUTION CHALLENGE 2026',
    title: 'TrustOS — AI Audit & Bias Detection',
    problem: 'AI making hiring, loan, and medical decisions carries hidden algorithmic bias with no practical governance tool to detect it pre-deployment.',
    solution: 'Browser-based platform that accepts 100K+ row datasets, applies statistical fairness metrics across 15 sectors with Gemini 2.0 Flash explanations.',
    impact: '~80% reduction in data preprocessing time. Bias-mitigated ML-ready datasets exported with full data privacy.',
    tech: ['React 18', 'Gemini 2.0 Flash', 'Tailwind CSS', 'Statistical Fairness Modeling', 'Vercel'],
    github: 'https://github.com/ChaitanyaKrishna0101',
    demo: 'https://trust-os-ai.vercel.app',
    color: '#ff3366',
    num: '03',
  },
  {
    id: 'morphy',
    tag: 'COMPUTER VISION · INTERNSHIP',
    title: 'FaceMorph Attack Detector',
    problem: 'Face morphing attacks blend two identities into one image to fool passport scanners and banking KYC systems — real identity fraud.',
    solution: 'Full-stack Django app that generates morphed faces (alpha-blending via OpenCV) and detects them using SSIM at 90% similarity threshold.',
    impact: 'Applicable to aviation, banking & government ID verification. Containerised with Docker, CSRF protection, session auth, SSL.',
    tech: ['Python', 'Django', 'OpenCV', 'SSIM', 'Docker', 'Render'],
    github: 'https://github.com/ChaitanyaKrishna0101',
    demo: 'https://facemorphattacks.onrender.com',
    color: '#ff8c00',
    num: '04',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,4rem)', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>
          02 / SYSTEMS SHIPPED
        </div>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
          Production AI<br /><span style={{ color: 'var(--accent)' }}>In the Wild</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '500px', fontSize: '0.9rem' }}>
          Not prototypes. Not demos. Four live systems solving real problems for real users.
        </p>
      </div>

      {/* Project list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {projects.map((p) => (
          <div key={p.id}
            onClick={() => setActive(active === p.id ? null : p.id)}
            style={{
              background: active === p.id ? 'var(--bg3)' : 'var(--bg2)',
              border: `1px solid ${active === p.id ? p.color + '60' : 'var(--border)'}`,
              cursor: 'pointer', transition: 'all 0.25s ease',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              if (active !== p.id) {
                e.currentTarget.style.borderColor = p.color;
                e.currentTarget.style.background = 'var(--bg3)';
                e.currentTarget.style.transform = 'translateX(6px)';
                e.currentTarget.style.boxShadow = `4px 0 0 0 ${p.color}, 0 0 40px ${p.color}12`;
              }
            }}
            onMouseLeave={e => {
              if (active !== p.id) {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg2)';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1.8rem 2rem' }}>
              <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: '3rem', color: active === p.id ? p.color : 'var(--text-dim)', transition: 'color 0.3s', minWidth: '70px' }}>
                {p.num}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '9px', letterSpacing: '2px', color: p.color, marginBottom: '6px', textTransform: 'uppercase' }}>{p.tag}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', color: 'var(--text)' }}>{p.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '300px', justifyContent: 'flex-end' }}>
                {p.tech.slice(0, 3).map(t => (
                  <span key={t} style={{ fontSize: '9px', padding: '3px 8px', border: '1px solid var(--border)', color: 'var(--text-muted)', letterSpacing: '1px' }}>{t}</span>
                ))}
              </div>
              <div style={{ width: '32px', height: '32px', flexShrink: 0, border: `1px solid ${active === p.id ? p.color : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: active === p.id ? p.color : 'var(--text-muted)', fontSize: '1rem', transition: 'all 0.3s', transform: active === p.id ? 'rotate(45deg)' : 'none', background: active === p.id ? p.color + '10' : 'transparent' }}>+</div>
            </div>

            {/* Click hint */}
            {active !== p.id && (
              <div style={{ padding: '0 2rem 1.2rem calc(2rem + 70px + 2rem)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '4px 12px',
                  border: `1px dashed ${p.color}60`,
                  background: `${p.color}08`,
                  animation: 'pulse-border 2.5s ease-in-out infinite',
                }}>
                  <span style={{ color: p.color, fontSize: '9px' }}>▸</span>
                  <span style={{ fontSize: '10px', color: p.color, letterSpacing: '1.5px' }}>CLICK TO EXPAND</span>
                </div>
                <span style={{ fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '1px' }}>PROBLEM · SOLUTION · IMPACT</span>
              </div>
            )}

            {/* Expanded detail */}
            <div style={{ maxHeight: active === p.id ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <div style={{ padding: '0 2rem 2.5rem 2rem', paddingLeft: 'calc(2rem + 70px + 2rem)', borderTop: `1px solid ${p.color}20` }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Problem', text: p.problem },
                    { label: 'Solution', text: p.solution },
                    { label: 'Impact', text: p.impact },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: '9px', letterSpacing: '2px', color: p.color, marginBottom: '8px', textTransform: 'uppercase' }}>{item.label}</div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: '9px', padding: '4px 10px', border: `1px solid ${p.color}30`, color: p.color, letterSpacing: '1px', background: `${p.color}08` }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    style={{ padding: '8px 20px', background: p.color, color: 'var(--bg)', fontSize: '10px', letterSpacing: '2px', fontFamily: 'var(--mono)', fontWeight: 600 }}
                    onClick={e => e.stopPropagation()}>
                    LIVE DEMO ↗
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ padding: '8px 20px', border: `1px solid ${p.color}40`, color: p.color, fontSize: '10px', letterSpacing: '2px', fontFamily: 'var(--mono)' }}
                    onClick={e => e.stopPropagation()}>
                    GITHUB ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
