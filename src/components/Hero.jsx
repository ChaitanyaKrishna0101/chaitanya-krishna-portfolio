import { useEffect, useRef, useState } from 'react';

const roles = ['AI/ML Engineer', 'LLM Systems Builder', 'RAG Architect', 'Production AI Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phase, setPhase] = useState('typing');
  const canvasRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (phase === 'typing') {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 2000);
      }
    } else if (phase === 'waiting') {
      setPhase('deleting');
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, phase, roleIdx]);

  // Grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, dots = [], animId;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      dots = [];
      const cols = Math.floor(W / 50);
      const rows = Math.floor(H / 50);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({ x: i * 50, y: j * 50, ox: i * 50, oy: j * 50, vx: 0, vy: 0, phase: Math.random() * Math.PI * 2 });
        }
      }
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.005;
      dots.forEach(d => {
        d.x = d.ox + Math.sin(t + d.phase) * 3;
        d.y = d.oy + Math.cos(t + d.phase * 0.7) * 3;
        const dist = Math.sqrt((d.ox - W/2)**2 + (d.oy - H/2)**2);
        const alpha = 0.06 + 0.04 * Math.sin(t * 2 + d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,136,${alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const stats = [
    { n: '4', label: 'Live AI Systems' },
    { n: '7+', label: 'Months in Production AI' },
    { n: '60%', label: 'Cost Reduction via LLM' },
    { n: '15', label: 'Sectors Covered (TrustOS)' },
  ];

  return (
    <section id="about" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7 }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem,5vw,6rem) clamp(1.5rem,5vw,4rem)', paddingTop: '120px' }}>

        {/* Status badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2.5rem', animation: 'fadeUp 0.6s ease both' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)', animation: 'blink 2s infinite' }} />
          <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', textTransform: 'uppercase' }}>
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 style={{
          fontFamily: 'var(--display)', fontWeight: 800,
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          lineHeight: 1.0, letterSpacing: '-2px',
          marginBottom: '1.5rem',
          animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0,
          animationFillMode: 'forwards',
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>CHAITANYA</span>
          <span style={{ display: 'block', color: 'var(--accent)', textShadow: '0 0 40px rgba(0,255,136,0.4)' }}>KRISHNA</span>
        </h1>

        {/* Typewriter role */}
        <div style={{ height: '2.5rem', marginBottom: '2rem', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <span style={{ fontFamily: 'var(--code)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--text-muted)' }}>
            {'> '}<span style={{ color: 'var(--accent)' }}>{displayText}</span>
            <span style={{ animation: 'blink 0.8s infinite', color: 'var(--accent)' }}>_</span>
          </span>
        </div>

        {/* Tagline */}
        <p style={{
          maxWidth: '580px', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
          color: 'var(--text-muted)', lineHeight: 1.7,
          marginBottom: '3rem',
          animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          While most are learning AI — I've already shipped it.{' '}
          <span style={{ color: 'var(--text)' }}>Four production systems. Real problems solved. Measurable impact.</span>
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem', animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <button onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '14px 32px', background: 'var(--accent)', color: 'var(--bg)',
              fontSize: '11px', letterSpacing: '2px', fontFamily: 'var(--mono)',
              transition: 'all 0.2s', fontWeight: 600,
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,136,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            VIEW MY WORK
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '14px 32px',
              border: '1px solid var(--border-bright)',
              color: 'var(--accent)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'var(--mono)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-glow)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            LET'S TALK
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1px', background: 'var(--border)',
          border: '1px solid var(--border)',
          animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '2rem 1.5rem', background: 'var(--bg)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
            >
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '10px', letterSpacing: '1.5px', color: 'var(--text-muted)', marginTop: '6px', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '9px', letterSpacing: '3px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
