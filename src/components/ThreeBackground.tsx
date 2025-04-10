
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { Mesh, Vector3, Color, Object3D } from 'three';

const Particle = ({ position, size, color }) => {
  const mesh = useRef<Mesh>();
  
  // Random slow rotation for each particle
  const rotationSpeed = useMemo(() => {
    return new Vector3(
      Math.random() * 0.01 - 0.005,
      Math.random() * 0.01 - 0.005,
      Math.random() * 0.01 - 0.005
    );
  }, []);

  // Slowly animate each particle
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += rotationSpeed.x;
      mesh.current.rotation.y += rotationSpeed.y;
      mesh.current.rotation.z += rotationSpeed.z;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

const ParticleField = () => {
  // Generate random particles
  const particles = useMemo(() => {
    const temp = [];
    const count = 40; // Number of particles
    
    const colors = [
      new Color('#8B5CF6').getStyle(), // purple
      new Color('#D946EF').getStyle(), // pink
      new Color('#0EA5E9').getStyle(), // blue
    ];
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 15;
      
      const size = Math.random() * 0.3 + 0.1;
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      temp.push({
        id: i,
        position: [x, y, z],
        size,
        color: colors[colorIndex]
      });
    }
    
    return temp;
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          position={particle.position}
          size={particle.size}
          color={particle.color}
        />
      ))}
    </>
  );
};

const HexagonGroup = () => {
  const group = useRef<Object3D>();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, -10]}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[5, 0.2, 16, 6]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <torusGeometry args={[6, 0.1, 16, 6]} />
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="three-canvas">
      <Canvas camera={{ position: [0, 0, 10], fov: 65 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <HexagonGroup />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
