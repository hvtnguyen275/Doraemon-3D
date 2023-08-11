import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from '@react-three/drei';

function Model({ props }: any) {
  const { scene } = useGLTF('/take-copter.glb');
  return (
    <>
      <primitive object={scene} {...props} />
    </>
  );
}

function Figures() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        camera={{
          fov: 45,
          zoom: 0.5,
          near: 1,
          far: 1000,
          position: [1, 5, 3],
        }}
        shadows='soft'
        style={{ position: 'absolute' }}
      >
        <color attach='background' args={['#ffff']} />
        <OrbitControls />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={'apartment'}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default Figures;
