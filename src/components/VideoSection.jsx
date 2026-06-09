import { useState, useRef } from 'react';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section id="video" style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,4rem)', background: 'var(--bg2)', scrollMarginTop: '60px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              01 / INTRODUCTION
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
              In My Own<br /><span style={{ color: 'var(--accent)' }}>Words</span>
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '320px', fontSize: '0.85rem', lineHeight: 1.6 }}>
            I let my work speak first, then I explain the thinking behind it.
          </p>
        </div>

        {/* Video wrapper */}
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={toggle}>
          {/* Decorative border */}
          <div style={{
            position: 'absolute', inset: '-1px',
            background: 'linear-gradient(135deg, var(--accent), var(--accent2), transparent)',
            zIndex: 0, borderRadius: '2px',
            opacity: 0.4,
          }} />
          <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg)', padding: '2px' }}>
            <video
              ref={videoRef}
              src="/intro.mp4"
              style={{ width: '100%', display: 'block', maxHeight: '560px', objectFit: 'cover', background: '#000' }}
              onEnded={() => setPlaying(false)}
            />
            {/* Overlay */}
            {!playing && (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(6,6,8,0.7)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '1.5rem',
              }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  border: '2px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                  boxShadow: '0 0 30px rgba(0,255,136,0.3)',
                }}>
                  <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid var(--accent)', marginLeft: '4px' }} />
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--accent)', textTransform: 'uppercase' }}>
                  PLAY INTRO
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quote from video */}
        <div style={{
          marginTop: '2rem', padding: '2rem', borderLeft: '2px solid var(--accent)',
          background: 'var(--accent-glow)',
        }}>
          <p style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(1rem,2vw,1.3rem)', color: 'var(--text)', lineHeight: 1.5, fontStyle: 'italic' }}>
            "While most people are still learning AI — I've already shipped it."
          </p>
          <div style={{ marginTop: '1rem', fontSize: '10px', letterSpacing: '2px', color: 'var(--text-muted)' }}>
            — CHAITANYA KRISHNA
          </div>
        </div>
      </div>
    </section>
  );
}
