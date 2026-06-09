import { useState, useEffect } from 'react';

const links = ['about', 'projects', 'skills', 'experience', 'contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(1.5rem, 5vw, 4rem)',
      height: '60px',
      background: scrolled ? 'rgba(6,6,8,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div style={{
          width: '28px', height: '28px',
          border: '1.5px solid var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '12px', color: 'var(--accent)', fontFamily: 'var(--display)',
          fontWeight: 700,
        }}>CK</div>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '2px' }}>
          AI/ML ENGINEER
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(link => (
          <button key={link} onClick={() => scrollTo(link)}
            style={{
              fontSize: '10px', letterSpacing: '2px',
              color: active === link ? 'var(--accent)' : 'var(--text-muted)',
              transition: 'color 0.2s',
              fontFamily: 'var(--mono)',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = active === link ? 'var(--accent)' : 'var(--text-muted)'}
          >
            {link}
          </button>
        ))}
        <a href="https://github.com/ChaitanyaKrishna0101" target="_blank" rel="noreferrer"
          style={{
            padding: '6px 14px',
            border: '1px solid var(--border-bright)',
            fontSize: '10px', letterSpacing: '2px', color: 'var(--accent)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
        >
          GITHUB
        </a>
      </div>
    </nav>
  );
}
