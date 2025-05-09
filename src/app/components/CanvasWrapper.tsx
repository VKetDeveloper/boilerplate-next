'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SceneModel from './SceneModel'

export default function CanvasWrapper() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <SceneModel />
      <OrbitControls />
    </Canvas>
  );
}
