import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#1e3a8a"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.5}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};
