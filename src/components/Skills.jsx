const skillGroups = [
  {
    category: 'AI / ML Core',
    color: '#00ff88',
    skills: [
      { name: 'LLMs & Prompt Engineering', level: 90 },
      { name: 'RAG Pipelines', level: 88 },
      { name: 'RLHF & Model Evaluation', level: 85 },
      { name: 'Computer Vision', level: 78 },
      { name: 'PyTorch / TensorFlow', level: 72 },
      { name: 'HuggingFace Transformers', level: 80 },
    ],
  },
  {
    category: 'Engineering & Stack',
    color: '#0066ff',
    skills: [
      { name: 'Python (FastAPI / Django)', level: 88 },
      { name: 'React 18 / Vite', level: 82 },
      { name: 'Docker & Deployment', level: 78 },
      { name: 'MySQL / SQLite', level: 75 },
      { name: 'ChromaDB / VectorDBs', level: 82 },
      { name: 'REST APIs & JWT Auth', level: 85 },
    ],
  },
  {
    category: 'Data & Annotation',
    color: '#ff8c00',
    skills: [
      { name: 'LiDAR & Multimodal Annotation', level: 88 },
      { name: 'NLP Data Pipelines', level: 80 },
      { name: 'PII Detection & Compliance', level: 82 },
      { name: 'Label Studio / QC Workflows', level: 85 },
      { name: 'Statistical Fairness Modeling', level: 74 },
      { name: 'Feature Engineering', level: 78 },
    ],
  },
];

const tools = ['Git/GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Vercel', 'Render', 'HuggingFace Spaces', 'Label Studio', 'Groq API', 'Gemini API', 'ChromaDB', 'Docker'];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,4rem)', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>
            03 / TECHNICAL ARSENAL
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
            Skills &<br /><span style={{ color: 'var(--accent)' }}>Capabilities</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', marginBottom: '3rem' }}>
          {skillGroups.map((group) => (
            <div key={group.category} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
                <div style={{ width: '8px', height: '8px', background: group.color, borderRadius: '50%' }} />
                <span style={{ fontSize: '10px', letterSpacing: '2px', color: group.color, textTransform: 'uppercase' }}>{group.category}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text)' }}>{skill.name}</span>
                      <span style={{ fontSize: '0.75rem', color: group.color, fontFamily: 'var(--code)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '2px', background: 'var(--border)', position: 'relative' }}>
                      <div style={{
                        position: 'absolute', left: 0, top: 0, height: '100%',
                        width: `${skill.level}%`,
                        background: group.color,
                        boxShadow: `0 0 8px ${group.color}60`,
                        transition: 'width 1s ease',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Tools & Platforms</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tools.map(tool => (
              <span key={tool} style={{
                padding: '8px 16px', fontSize: '11px', letterSpacing: '1px',
                border: '1px solid var(--border)', color: 'var(--text-muted)',
                transition: 'all 0.2s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
