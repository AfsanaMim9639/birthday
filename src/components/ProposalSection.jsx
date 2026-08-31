import { useState, useRef } from 'react'
import Confetti from './Confetti'

function ProposalSection({ sectionRef }) {
  const playAreaRef = useRef(null)
  const [noPos, setNoPos] = useState({ top: '50%', left: '68%' })
  const [answered, setAnswered] = useState(false)

  function dodge() {
    const area = playAreaRef.current
    if (!area) return

    const areaRect = area.getBoundingClientRect()
    const buttonWidth = 130
    const buttonHeight = 56

    const maxLeft = Math.max(areaRect.width - buttonWidth, 0)
    const maxTop = Math.max(areaRect.height - buttonHeight, 0)

    const newLeft = Math.random() * maxLeft
    const newTop = Math.random() * maxTop

    setNoPos({ top: `${newTop}px`, left: `${newLeft}px` })
  }

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 5,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      {!answered ? (
        <>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            color: 'var(--color-accent)',
            marginBottom: '3rem',
            textShadow: '0 0 20px rgba(255, 217, 102, 0.5)',
            maxWidth: '700px'
          }}>
            Will you be my Panda Forever?? 🐼❤️
          </h2>

          <div
            ref={playAreaRef}
            style={{
              position: 'relative',
              width: 'min(440px, 92vw)',
              height: '170px'
            }}
          >
            <button
              onClick={() => setAnswered(true)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '22%',
                transform: 'translate(-50%, -50%)',
                padding: '1rem 2.2rem',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#0B0F2E',
                background: 'var(--color-accent)',
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 8px 22px rgba(255, 217, 102, 0.5)',
                zIndex: 2
              }}
            >
              Yes 🐼💖
            </button>

            <button
              onMouseEnter={dodge}
              onTouchStart={dodge}
              onClick={dodge}
              style={{
                position: 'absolute',
                top: noPos.top,
                left: noPos.left,
                padding: '1rem 2.2rem',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(201, 169, 255, 0.4)',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'top 0.25s ease, left 0.25s ease',
                zIndex: 1
              }}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <div style={{ position: 'relative', animation: 'fadeInScale 0.6s ease' }}>
          <Confetti active={answered} count={100} />
          <p style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            color: 'var(--color-primary)',
            lineHeight: 1.7,
            maxWidth: '600px'
          }}>
            জানতাম! 🥹❤️<br />
            তুমি এখন থেকে চিরকাল আমার Panda! 🐼💖
          </p>
        </div>
      )}
    </section>
  )
}

export default ProposalSection