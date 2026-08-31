const letterColors = [
  '#FFD966', '#C9A9FF', '#7FDBFF', '#FF9ECD',
  '#B5EAD7', '#FFD966', '#C9A9FF', '#7FDBFF',
  '#FF9ECD', '#B5EAD7', '#FFD966', '#C9A9FF',
  '#7FDBFF', '#FF9ECD', '#B5EAD7', '#FFD966',
  '#C9A9FF', '#7FDBFF', '#FF9ECD', '#B5EAD7',
  '#FFD966', '#C9A9FF'
]

function Header() {
  const text = "It's Your Birthday (10 Sept)"

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.4rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backdropFilter: 'blur(10px)',
        background: 'rgba(11, 15, 46, 0.5)',
        borderBottom: '1px solid rgba(201, 169, 255, 0.15)'
      }}>
        <div style={{ fontSize: '1.6rem' }}>
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="glitter-letter"
              style={{
                color: letterColors[i % letterColors.length],
                animationDelay: `${i * 0.08}s`
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </header>

      {/* Torch/spotlight light effect from top - firefly glow */}
<div style={{
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '900px',
  height: '700px',
  background: 'radial-gradient(ellipse at top, rgba(220, 255, 150, 0.22) 0%, rgba(180, 255, 120, 0.1) 35%, transparent 70%)',
  zIndex: 2,
  pointerEvents: 'none'
}} />
    </>
  )
}

export default Header