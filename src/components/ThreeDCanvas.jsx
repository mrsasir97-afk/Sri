import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus, Sparkles } from '@react-three/drei';

function HerbalHerb() {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 2) / 2;
      meshRef.current.rotation.y = Math.cos(t / 3) / 2;
      meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#d4af37"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function HealingOrb() {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh position={[-2.5, 1, -1]} scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#2d6a4f"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.1}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function GoldRing() {
  const ringRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.3;
      ringRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <mesh ref={ringRef} position={[2.2, -1, -0.5]} scale={1.3}>
      <torusGeometry args={[1.2, 0.08, 16, 100]} />
      <meshStandardMaterial color="#f3e5ab" metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

export default function ThreeDCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ powerPreference: 'high-performance', antialias: false }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fff2a3" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#40916c" />
        
        <Sparkles count={40} scale={10} size={2.5} speed={0.3} color="#d4af37" />
        <HerbalHerb />
        <HealingOrb />
        <GoldRing />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
