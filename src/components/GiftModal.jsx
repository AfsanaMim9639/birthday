function GiftModal({ gift, index, total, onNext, onClose }) {
  if (!gift) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(11, 15, 46, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeInScale 0.3s ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '520px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: 'rgba(26, 27, 58, 0.95)',
          border: '1px solid rgba(201, 169, 255, 0.3)',
          borderRadius: '20px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          animation: 'fadeInScale 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '0.8rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: 'var(--color-secondary)',
            fontSize: '1.6rem',
            cursor: 'pointer',
            lineHeight: 1
          }}
        >
          ×
        </button>

        <h3 style={{
          fontSize: '1.4rem',
          color: 'var(--color-accent)',
          marginBottom: '0.3rem'
        }}>
          🎁 {gift.title}
        </h3>

        {total && (
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--color-secondary)',
            marginBottom: '1.2rem',
            letterSpacing: '1px'
          }}>
            {index + 1} / {total}
          </p>
        )}

        {gift.type === 'message' && (
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--color-text)',
            lineHeight: 1.7,
            whiteSpace: 'pre-line'
          }}>
            {gift.message}
          </p>
        )}

        {gift.type === 'image' && (
          <>
            <img
              src={gift.imageSrc}
              alt={gift.title}
              style={{
                width: '100%',
                borderRadius: '14px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                marginBottom: gift.caption ? '1rem' : 0
              }}
            />
            {gift.caption && (
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--color-text)',
                lineHeight: 1.7,
                whiteSpace: 'pre-line'
              }}>
                {gift.caption}
              </p>
            )}
          </>
        )}

        {gift.type === 'video' && (
          <>
            {gift.caption && (
              <p style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>
                {gift.caption}
              </p>
            )}
            <video
              src={gift.videoSrc}
              controls
              autoPlay
              style={{
                width: '100%',
                borderRadius: '14px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
              }}
            />
          </>
        )}

        {gift.type === 'audio' && (
          <>
            {gift.caption && (
              <p style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>
                {gift.caption}
              </p>
            )}
            <audio
              src={gift.audioSrc}
              controls
              autoPlay
              style={{ width: '100%' }}
            />
          </>
        )}

        {onNext && (
          <button
            onClick={onNext}
            style={{
              marginTop: '2rem',
              padding: '0.7rem 1.8rem',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#0B0F2E',
              background: 'var(--color-accent)',
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 6px 16px rgba(255, 217, 102, 0.4)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            পরের গিফট ➜
          </button>
        )}
      </div>
    </div>
  )
}

export default GiftModal