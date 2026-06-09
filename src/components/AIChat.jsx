import { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `You are an intelligent AI assistant embedded in Chaitanya Krishna's portfolio website. Your ONLY job is to answer questions about Chaitanya. Be concise, direct, and impressive. Never make things up — stick to what you know.

About Chaitanya Krishna:
- Full name: Emmadi Chaitanya Krishna. Based in Hyderabad, India. Goes by "Chaithu".
- Final-year MCA student at Aurora's PG College, Hyderabad (graduating 2026).
- B.Sc. Computer Science from Kakatiya Govt. Degree College (75%).
- 7+ months professional experience in AI data annotation, RLHF workflows, and model evaluation at Deccan AI and Centific.
- Currently actively job hunting for AI/ML Engineering, Full-Stack AI, and Data Engineering roles (Hyderabad, Bangalore, Remote).

PROJECTS (all live in production):
1. Smart AI Task Platform — RAG-based system. FastAPI + MySQL + ChromaDB + Gemini API + React/Vite. Live at smart-ai-task-platform.vercel.app. Solves company PDF knowledge retrieval. Reduced search time from minutes to seconds.
2. AI Evaluator Pro — LLM evaluation framework. Groq/LLaMA + Gemini, LLM-as-Judge, 60 adversarial prompts. Live at chaithu0101-ai-evaluator.hf.space. Demonstrated 60% cost reduction via smart routing with <4% quality drop.
3. TrustOS AI — Bias detection platform. React 18 + Gemini 2.0 Flash + statistical fairness modeling. Live at trust-os-ai.vercel.app. Google Solution Challenge 2026. Detects bias across 15 sectors in 100K+ row datasets.
4. FaceMorph Attack Detector — Computer vision biometric security. Django + OpenCV + SSIM (90% threshold). Live at facemorphattacks.onrender.com. Applicable to aviation, banking, government ID systems.

TECHNICAL SKILLS:
- AI/ML: LLMs, RAG pipelines, RLHF, Prompt Engineering, Computer Vision, NLP, Object Detection, Semantic Segmentation
- Libraries: PyTorch, TensorFlow, HuggingFace Transformers, NumPy, Pandas, Scikit-learn
- Backend: Python, FastAPI, Django, SQL (MySQL/SQLite)
- Frontend: React 18, Vite, Tailwind CSS
- Tools: Docker, Git/GitHub, Jupyter, ChromaDB, Label Studio, Groq API, Gemini API
- Deployment: Vercel, Render, HuggingFace Spaces

EXPERIENCE:
- Deccan AI (1-3 months): AI Evaluation & LiDAR Annotator — evaluated RL navigation data, annotated LiDAR/video with 3D bounding boxes
- Centific (4 months total): Image Annotation & QC Analyst + PII Data Annotation Analyst

Contact: chaitanyachaithu370@gmail.com | GitHub: github.com/ChaitanyaKrishna0101 | LinkedIn: linkedin.com/in/chaitanya-krishna01

If asked about salary/compensation, say he's open to discussing based on role and responsibilities.
If asked something you don't know about him, say "I don't have that information — reach out directly at chaitanyachaithu370@gmail.com"
Keep answers to 2-4 sentences max unless a detailed question requires more. Be professional but not robotic.`;

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! I'm Chaitanya's AI assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('groq_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(!localStorage.getItem('groq_key'));
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const saveKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('groq_key', apiKey.trim());
      setShowKeyInput(false);
    }
  };

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    const key = localStorage.getItem('groq_key') || apiKey;
    if (!key) {
      setMessages([...newMessages, { role: 'assistant', content: 'Please add a Groq API key to enable AI responses.' }]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages.slice(-8),
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || 'Something went wrong. Try again.';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Network error. Check your API key and try again.' }]);
    }
    setLoading(false);
  };

  const quickQuestions = [
    'What are his best projects?',
    'Is he open to work?',
    'What tech stack does he use?',
    'Tell me about TrustOS',
  ];

  return (
    <section style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,4rem)', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <div style={{ width: '7px', height: '7px', background: '#00ff88', borderRadius: '50%', animation: 'blink 2s infinite' }} />
            <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', textTransform: 'uppercase' }}>AI-POWERED</span>
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.1 }}>
            Ask Anything<br /><span style={{ color: 'var(--accent)' }}>About Chaitanya</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.8rem', fontSize: '0.85rem' }}>
            Powered by Groq + LLaMA. Ask about projects, skills, experience, or availability.
          </p>
        </div>

        {/* API Key setup */}
        {showKeyInput && (
          <div style={{ marginBottom: '1.5rem', padding: '1.5rem', border: '1px solid rgba(255,140,0,0.3)', background: 'rgba(255,140,0,0.05)' }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#ff8c00', marginBottom: '1rem' }}>⚡ ADD GROQ API KEY TO ENABLE AI CHAT</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="password"
                placeholder="gsk_..."
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && saveKey()}
                style={{
                  flex: 1, padding: '10px 14px', background: 'var(--bg)',
                  border: '1px solid var(--border)', color: 'var(--text)',
                  fontSize: '12px', fontFamily: 'var(--mono)', outline: 'none',
                }}
              />
              <button onClick={saveKey}
                style={{ padding: '10px 20px', background: '#ff8c00', color: 'var(--bg)', fontSize: '10px', letterSpacing: '2px', fontFamily: 'var(--mono)', fontWeight: 600 }}>
                SAVE
              </button>
            </div>
            <p style={{ fontSize: '10px', color: 'var(--text-dim)', marginTop: '8px' }}>
              Get a free key at console.groq.com — stored locally only
            </p>
          </div>
        )}

        {/* Chat window */}
        <div style={{ border: '1px solid var(--border)', background: 'var(--bg)', marginBottom: '1rem' }}>
          {/* Header */}
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />)}
              </div>
              <span style={{ fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--code)', marginLeft: '8px' }}>chaitanya_ai.chat</span>
            </div>
            {!showKeyInput && (
              <button onClick={() => setShowKeyInput(true)}
                style={{ fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '1px' }}>
                CHANGE KEY
              </button>
            )}
          </div>

          {/* Messages */}
          <div ref={chatBoxRef} style={{ height: '320px', overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem',
            scrollbarWidth: 'thin', scrollbarColor: 'var(--border) transparent' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '2px', flexShrink: 0,
                  background: msg.role === 'user' ? 'var(--accent2)' : 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', color: 'var(--bg)', fontWeight: 700, fontFamily: 'var(--display)',
                }}>
                  {msg.role === 'user' ? 'YOU' : 'AI'}
                </div>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px',
                  background: msg.role === 'user' ? 'var(--bg3)' : 'rgba(0,255,136,0.05)',
                  border: `1px solid ${msg.role === 'user' ? 'var(--border)' : 'rgba(0,255,136,0.15)'}`,
                  fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text)',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '2px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--bg)', fontWeight: 700, fontFamily: 'var(--display)' }}>AI</div>
                <div style={{ padding: '12px 16px', border: '1px solid rgba(0,255,136,0.15)', background: 'rgba(0,255,136,0.05)', display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', animation: `blink 1.2s ${i*0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            
          </div>

          {/* Input */}
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about projects, skills, availability..."
              style={{
                flex: 1, padding: '10px 14px', background: 'var(--bg2)',
                border: '1px solid var(--border)', color: 'var(--text)',
                fontSize: '13px', fontFamily: 'var(--mono)', outline: 'none',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button onClick={send} disabled={loading || !input.trim()}
              style={{
                padding: '10px 20px', background: 'var(--accent)', color: 'var(--bg)',
                fontSize: '11px', letterSpacing: '2px', fontFamily: 'var(--mono)', fontWeight: 600,
                opacity: loading || !input.trim() ? 0.5 : 1, transition: 'opacity 0.2s',
              }}>
              SEND
            </button>
          </div>
        </div>

        {/* Quick questions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {quickQuestions.map(q => (
            <button key={q} onClick={() => { setInput(q); }}
              style={{
                padding: '6px 14px', fontSize: '11px', border: '1px solid var(--border)',
                color: 'var(--text-muted)', transition: 'all 0.2s', fontFamily: 'var(--mono)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
