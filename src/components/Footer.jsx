export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem clamp(1.5rem,5vw,4rem)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '1px', fontFamily: 'var(--code)' }}>
        © 2026 CHAITANYA KRISHNA — HYDERABAD, IN
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { l: 'GitHub', h: 'https://github.com/ChaitanyaKrishna0101' },
          { l: 'LinkedIn', h: 'https://linkedin.com/in/chaitanya-krishna01' },
          { l: 'Email', h: 'mailto:chaitanyachaithu370@gmail.com' },
        ].map(({ l, h }) => (
          <a key={l} href={h} target="_blank" rel="noreferrer"
            style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--text-dim)', transition: 'color 0.2s', textTransform: 'uppercase' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
          >{l}</a>
        ))}
      </div>
      <span style={{ fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--code)' }}>
        BUILT WITH REACT + VITE
      </span>
    </footer>
  );
}
