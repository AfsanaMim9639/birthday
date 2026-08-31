import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PandaJourney from './components/PandaJourney'
import ProposalSection from './components/ProposalSection'
import Stars from './components/Stars'
import useInView from './hooks/useInView'

function App() {
  const [proposalRef, proposalInView] = useInView(0.4)

  return (
    <div style={{
      width: '100vw',
      minHeight: '600vh',
      position: 'relative'
    }}>
      <Stars count={150} />

      <Header />

      <PandaJourney hideOrbit={proposalInView} />

      <div style={{ height: '500vh' }}></div>

      <ProposalSection sectionRef={proposalRef} />

      <Footer />
    </div>
  )
}

export default App