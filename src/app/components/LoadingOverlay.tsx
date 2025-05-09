'use client';
import { useGLTF } from '@react-three/drei';
import { useAppStore } from '../stores/useAppStore';
import { useEffect } from 'react';

export default function SceneModel() {
  const { scene } = useGLTF('/models/sample.glb');
  const setModelLoaded = useAppStore((s) => s.setModelLoaded);

  useEffect(() => {
    setModelLoaded(true);
  }, [setModelLoaded]);

  return <primitive object={scene} />;
}
