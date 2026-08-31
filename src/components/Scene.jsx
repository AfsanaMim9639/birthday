import { Canvas } from '@react-three/fiber'
import Panda from './Panda'

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#FFD6E8" />

      <Panda position={[-3, 1, -2]} scale={0.5} speed={0.8} />
      <Panda position={[3, -1, -3]} scale={0.4} speed={1.2} />
      <Panda position={[0, 2, -4]} scale={0.35} speed={1} />
      <Panda position={[-2, -2, -1]} scale={0.45} speed={0.9} />
      <Panda position={[0, 0, 0]} scale={1.2} speed={0.6} />
    </Canvas>
  )
}

export default Scene