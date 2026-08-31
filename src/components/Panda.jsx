import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Panda({ position = [0, 0, 0], scale = 1, speed = 1 }) {
  const groupRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    groupRef.current.position.y = position[1] + Math.sin(t) * 0.3
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.4
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.7, 0.8, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#2D2D2D" />
      </mesh>
      <mesh position={[0.7, 0.8, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#2D2D2D" />
      </mesh>

      {/* Eye patches */}
      <mesh position={[-0.35, 0.15, 0.85]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#2D2D2D" />
      </mesh>
      <mesh position={[0.35, 0.15, 0.85]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#2D2D2D" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, -0.15, 1]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>
    </group>
  )
}

export default Panda