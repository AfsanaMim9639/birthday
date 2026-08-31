const words = ['I', 'LOVE', 'YOU']

function Penguin({ active }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '340px',
      pointerEvents: 'none',
      zIndex: 15
    }}>
      {/* Rope - positioned near penguin hand height */}
      <div style={{
        position: 'absolute',
        top: '110px',
        left: '20%',
        width: '60%',
        height: '2px',
        background: 'rgba(232, 227, 255, 0.6)',
        opacity: active ? 1 : 0,
        transition: 'opacity 0.6s ease 0.3s'
      }} />

      {/* Hanging words */}
      <div style={{
        position: 'absolute',
        top: '110px',
        left: '20%',
        width: '60%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
      }}>
        {words.map((word, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                background: '#FFFFFF',
                border: '2px solid #FF6FA5',
                borderRadius: '8px',
                padding: '6px 12px',
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '2px',
                color: '#FF6FA5',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                transform: active ? 'translateY(0)' : 'translateY(-40px)',
                opacity: active ? 1 : 0,
                transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + i * 0.15}s, opacity 0.4s ease ${0.3 + i * 0.15}s`,
                animation: active ? `ropeBounce 2.2s ease-in-out ${1 + i * 0.15}s infinite` : 'none'
              }}
            >
              {word}
            </div>

            {/* Heart hanging below LOVE */}
            {word === 'LOVE' && (
              <img
                src="/images/heart.png"
                alt="glowing heart"
                style={{
                  width: '110px',
                  height: 'auto',
                  marginTop: '10px',
                  transform: active ? 'translateY(0)' : 'translateY(-30px)',
                  opacity: active ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.6 + i * 0.15}s, opacity 0.4s ease ${0.6 + i * 0.15}s`,
                  animation: active ? `ropeBounce 2.2s ease-in-out ${1.3 + i * 0.15}s infinite` : 'none',
                  filter: 'drop-shadow(0 6px 12px rgba(255, 180, 60, 0.5))'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Left penguin */}
      <img
        src="/images/penguin.png"
        alt="penguin"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '2%',
          width: '170px',
          height: 'auto',
          transform: active ? 'translateY(0) scale(1)' : 'translateY(120%) scale(0.85)',
          opacity: active ? 1 : 0,
          transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
          filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))'
        }}
      />

      {/* Right penguin (mirrored) */}
      <img
        src="/images/penguin.png"
        alt="penguin"
        style={{
          position: 'absolute',
          bottom: 0,
          right: '2%',
          width: '170px',
          height: 'auto',
          transform: active
            ? 'translateY(0) scale(1) scaleX(-1)'
            : 'translateY(120%) scale(0.85) scaleX(-1)',
          opacity: active ? 1 : 0,
          transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
          filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))'
        }}
      />
    </div>
  )
}

export default Penguin