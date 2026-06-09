export default function Contact() {
  const links = [
    { label: 'EMAIL', value: 'chaitanyachaithu370@gmail.com', href: 'mailto:chaitanyachaithu370@gmail.com', color: '#00ff88' },
    { label: 'GITHUB', value: 'github.com/ChaitanyaKrishna0101', href: 'https://github.com/ChaitanyaKrishna0101', color: '#0066ff' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/chaitanya-krishna01', href: 'https://linkedin.com/in/chaitanya-krishna01', color: '#ff3366' },
    { label: 'LOCATION', value: 'Hyderabad, Telangana — Open to Remote', href: null, color: '#ff8c00' },
  ];

  return (
    <section id="contact" style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              05 / LET'S BUILD
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.0, marginBottom: '1.5rem' }}>
              IF YOU'RE<br />BUILDING<br /><span style={{ color: 'var(--accent)' }}>SERIOUS AI</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '400px' }}>
              I'm not waiting to be ready. I am ready. Four production systems. Real architecture decisions. Measurable impact.
            </p>
            <a href="mailto:chaitanyachaithu370@gmail.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 36px', background: 'var(--accent)', color: 'var(--bg)',
                fontSize: '11px', letterSpacing: '3px', fontFamily: 'var(--mono)', fontWeight: 700,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(0,255,136,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              START CONVERSATION ↗
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {links.map((l) => (
              <div key={l.label}
                style={{
                  padding: '1.5rem 2rem',
                  border: '1px solid var(--border)',
                  background: 'var(--bg2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'all 0.2s', cursor: l.href ? 'pointer' : 'default',
                }}
                onMouseEnter={e => { if (l.href) { e.currentTarget.style.borderColor = l.color + '50'; e.currentTarget.style.background = 'var(--bg3)'; }}}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg2)'; }}
                onClick={() => l.href && window.open(l.href)}
              >
                <div>
                  <div style={{ fontSize: '9px', letterSpacing: '2px', color: l.color, marginBottom: '6px' }}>{l.label}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{l.value}</div>
                </div>
                {l.href && <span style={{ color: l.color, fontSize: '1.2rem' }}>↗</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
