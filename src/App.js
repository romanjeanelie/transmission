import { Canvas } from "@react-three/fiber"
import { Text, MeshTransmissionMaterial } from "@react-three/drei"

export const App = () => (
  <>
    <Canvas shadows camera={{ position: [0, 0, 20], fov: 50 }}>
      <color attach="background" args={["#e0e0e0"]} />
      <Status position={[0, 0, -10]} />
      <Torus />
    </Canvas>
  </>
)

const Torus = (props) => (
  <mesh receiveShadow castShadow {...props}>
    <torusGeometry args={[4, 1.2, 128, 64]} />
    <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
  </mesh>
)

function Status(props) {
  return (
    <Text fontSize={14} letterSpacing={-0.025} color="black" {...props}>
      TEXT
    </Text>
  )
}
