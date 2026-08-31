import { useState, useEffect, useRef } from 'react'
import useScrollProgress from '../hooks/useScrollProgress'
import GiftModal from './GiftModal'
import giftContent from '../data/giftContent'

const pandaFiles = [
  'gif-1.gif', 'gif-2.gif', 'gif-3.gif', 'gif-4.gif', 'gif-5.gif',
  'gif-6.gif', 'gif-7.gif', 'gif-8.gif', 'gif-9.gif'
]

const BASE_SIZE = 110

// one distinct color per gift box (index matches pandaFiles / giftContent order)
const giftColors = [
  '#FF6FA5', '#FFD966', '#7FDBFF', '#C9A9FF', '#39FF14',
  '#FF9ECD', '#B5EAD7', '#FF9F4D', '#4DFFDF'
]

function PandaJourney({ hideOrbit = false }) {
  const scrollProgress = useScrollProgress()
  const [autoRotate, setAutoRotate] = useState(0)
  const frameRef = useRef()

  // which panda is currently front-and-center
  const [activeIndex, setActiveIndex] = useState(0)
  // which gift is open in the modal (null = closed, otherwise 0-8)
  const [openGiftIndex, setOpenGiftIndex] = useState(null)

  useEffect(() => {
    function animate() {
      setAutoRotate((prev) => prev + 0.0015)
      frameRef.current = requestAnimationFrame(animate)
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  const totalAngleOffset = autoRotate + scrollProgress * Math.PI * 2

  // figure out which panda has the highest frontFactor (i.e. is facing us)
  let currentActive = 0
  let bestFront = -Infinity

  const pandaElements = pandaFiles.map((file, i) => {
    const baseAngle = (i / pandaFiles.length) * Math.PI * 2
    const angle = baseAngle - totalAngleOffset

    const orbitRadiusX = 420
    const orbitRadiusZ = 650

    const x = Math.sin(angle) * orbitRadiusX
    const z = Math.cos(angle) * orbitRadiusZ

    const frontFactor = Math.cos(angle)
    if (frontFactor > bestFront) {
      bestFront = frontFactor
      currentActive = i
    }

    const normalizedFront = (frontFactor + 1) / 2 // 0 to 1
    const sharpenedFront = Math.pow(normalizedFront, 3) // sharper falloff - only near-front stays big
    const scale = 0.4 + sharpenedFront * 1.4
    const size = BASE_SIZE * scale

    const opacity = 0.35 + ((frontFactor + 1) / 2) * 0.65
    const blur = frontFactor < 0.3 ? (0.3 - frontFactor) * 3 : 0
    const yBob = Math.sin(angle * 2 + i) * 15

    return (
      <img
        key={i}
        src={`/gifs/${file}`}
        alt={`panda ${i + 1}`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `${size}px`,
          height: `${size}px`,
          objectFit: 'cover',
          borderRadius: '50%',
          boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
          border: '3px solid rgba(255,255,255,0.6)',
          transform: `
            translate(-50%, -50%)
            translate3d(${x}px, ${yBob}px, ${z}px)
          `,
          opacity,
          filter: `blur(${blur}px)`,
          zIndex: Math.round(z),
          transition: 'filter 0.2s linear'
        }}
      />
    )
  })

  // keep activeIndex state in sync (used as a React key so the gift icon
  // re-plays its entrance animation whenever the front panda changes)
  useEffect(() => {
    if (currentActive !== activeIndex) {
      setActiveIndex(currentActive)
    }
  }, [currentActive, activeIndex])

  return (
    <>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      perspective: '1400px',
      overflow: 'hidden',
      zIndex: 1,
      pointerEvents: 'none',
      opacity: hideOrbit ? 0 : 1,
      transition: 'opacity 0.6s ease'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d'
      }}>
        {/* Orbit ring */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '900px',
          height: '900px',
          marginLeft: '-450px',
          marginTop: '-450px',
          borderRadius: '50%',
          border: '3px solid rgba(255, 182, 213, 0.65)',
          boxShadow: '0 0 40px rgba(255, 182, 213, 0.35)',
          transform: 'rotateX(78deg)',
          transformStyle: 'preserve-3d',
        }} />

        {/* Title above the orbit */}
        <div
          className="twinkle-title"
          style={{
            position: 'absolute',
            top: '18%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '1px',
            textAlign: 'center',
            zIndex: 5,
            whiteSpace: 'nowrap'
          }}
        >
          Happy Birthday My Dear Panda 🐼
        </div>

        {pandaElements}
      </div>

      {/* Gift icon for whichever panda is currently facing us */}
      <button
        key={activeIndex}
        onClick={() => setOpenGiftIndex(activeIndex)}
        aria-label={`Open gift from panda ${activeIndex + 1}`}
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          pointerEvents: hideOrbit ? 'none' : 'auto',
          zIndex: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          animation: 'fadeInScale 0.5s ease, floatPanda 3s ease-in-out infinite'
        }}
      >
        <span
          style={{
            fontSize: '3rem',
            filter: `drop-shadow(0 0 14px ${giftColors[activeIndex]}) drop-shadow(0 6px 10px rgba(0,0,0,0.3))`,
            color: giftColors[activeIndex],
            WebkitTextStroke: `1px ${giftColors[activeIndex]}`
          }}
        >
          🎁
        </span>
        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#0B0F2E',
            background: giftColors[activeIndex],
            padding: '0.15rem 0.7rem',
            borderRadius: '999px',
            boxShadow: `0 0 10px ${giftColors[activeIndex]}`
          }}
        >
          #{activeIndex + 1}
        </span>
      </button>
    </div>

    <GiftModal
      gift={openGiftIndex !== null ? giftContent[openGiftIndex] : null}
      index={openGiftIndex}
      total={giftContent.length}
      onNext={() => setOpenGiftIndex((i) => (i + 1) % giftContent.length)}
      onClose={() => setOpenGiftIndex(null)}
    />
    </>
  )
}

export default PandaJourney