import useInView from '../hooks/useInView'
import Confetti from './Confetti'
import Penguin from './Penguin'

function Footer() {
  const [ref, inView] = useInView(0.4)

  return (
    <footer
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '420px',
        padding: '2rem',
        textAlign: 'center',
        color: 'var(--color-text)',
        fontSize: '0.9rem',
        zIndex: 10,
        overflow: 'hidden'
      }}
    >
      <Confetti active={inView} count={120} />
      <Penguin active={inView} />

      <div style={{ position: 'relative', zIndex: 25, paddingTop: '1rem' }}>
       
      </div>
    </footer>
  )
}

export default Footer