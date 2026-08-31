const pandaConfigs = [
  { src: 'gif-1.gif', top: '8%',  left: '5%',  size: 90,  delay: 0 },
  { src: 'gif-2.gif', top: '15%', left: '80%', size: 110, delay: 0.5 },
  { src: 'gif-3.gif', top: '35%', left: '15%', size: 80,  delay: 1 },
  { src: 'gif-4.gif', top: '60%', left: '85%', size: 100, delay: 1.5 },
  { src: 'gif-5.gif', top: '75%', left: '10%', size: 95,  delay: 0.3 },
  { src: 'gif-6.gif', top: '20%', left: '45%', size: 70,  delay: 0.8 },
  { src: 'gif-7.gif', top: '50%', left: '55%', size: 85,  delay: 1.2 },
  { src: 'gif-8.gif', top: '85%', left: '60%', size: 90,  delay: 0.6 },
  { src: 'gif-9.gif', top: '5%',  left: '55%', size: 75,  delay: 1.8 },
]

function FloatingPandas() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {pandaConfigs.map((panda, i) => (
        <img
          key={i}
          src={`/gifs/${panda.src}`}
          alt={`floating panda ${i + 1}`}
          style={{
            position: 'absolute',
            top: panda.top,
            left: panda.left,
            width: `${panda.size}px`,
            height: 'auto',
            borderRadius: '50%',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            animation: `floatPanda 6s ease-in-out infinite`,
            animationDelay: `${panda.delay}s`,
            opacity: 0.9
          }}
        />
      ))}
    </div>
  )
}

export default FloatingPandas