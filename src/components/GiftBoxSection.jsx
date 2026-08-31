import { useState } from 'react'

function GiftBoxSection() {
  const [opened, setOpened] = useState(false)

  return (
    <section
      id="gift"
      style={{
        position: 'relative',
        zIndex: 5,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>
        A little something for you 🎁
      </h2>

      {!opened ? (
        <button
          onClick={() => setOpened(true)}
          style={{
            fontSize: '4rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1) rotate(-5deg)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1) rotate(0deg)')}
        >
          🎁
          <div style={{
            fontSize: '1rem',
            marginTop: '0.5rem',
            color: 'var(--color-text)',
            fontWeight: 600
          }}>
            Click Me
          </div>
        </button>
      ) : (
        <div style={{
          maxWidth: '500px',
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2.5rem',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          animation: 'fadeInScale 0.5s ease'
        }}>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-text)', lineHeight: 1.6 }}>
            🎉 Happy Birthday! You mean the world to me. 🐼💕
          </p>
        </div>
      )}
    </section>
  )
}

export default GiftBoxSection