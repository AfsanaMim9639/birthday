import { useMemo } from 'react'

const colors = [
  '#FF6FA5', '#FFD966', '#7FDBFF', '#C9A9FF',
  '#39FF14', '#FF9ECD', '#B5EAD7', '#FF4D4D',
  '#4DFFDF', '#FFA94D', '#FF6EC7', '#6EFFB8'
]

function Confetti({ active, count = 120 }) {
  const pieces = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.8,
      duration: 2.2 + Math.random() * 1.8,
      size: 5 + Math.random() * 7,
      rotate: Math.random() * 360,
      shape: Math.random() > 0.5 ? '50%' : '2px'
    }))
  }, [count, active])

  if (!active) return null

  return (
    <div style={{
      position: 'absolute',
      top: '-50px',
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible',
      pointerEvents: 'none',
      zIndex: 20
    }}>
      {pieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 2.5}px`,
            background: p.color,
            borderRadius: p.shape,
            transform: `rotate(${p.rotate}deg)`,
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
            opacity: 0
          }}
        />
      ))}
    </div>
  )
}

export default Confetti