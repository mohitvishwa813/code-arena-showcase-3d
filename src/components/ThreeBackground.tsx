
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { Mesh, Vector3, Color, MathUtils } from 'three';
import { Group } from 'three';

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
  
  // Random float animation parameters
  const floatParams = useMemo(() => ({
    amplitude: Math.random() * 0.3 + 0.1,
    frequency: Math.random() * 0.5 + 0.2,
    offset: Math.random() * Math.PI * 2
  }), []);

  // Animate each particle with more dynamic movement
  useFrame(({ clock }) => {
    if (mesh.current) {
      // Rotation animation
      mesh.current.rotation.x += rotationSpeed.x;
      mesh.current.rotation.y += rotationSpeed.y;
      mesh.current.rotation.z += rotationSpeed.z;
      
      // Floating animation
      const time = clock.getElapsedTime();
      mesh.current.position.y = position[1] + Math.sin(time * floatParams.frequency + floatParams.offset) * floatParams.amplitude;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
};

const ParticleField = () => {
  // Generate random particles
  const particles = useMemo(() => {
    const temp = [];
    const count = 60; // Increased number of particles
    
    const colors = [
      new Color('#8B5CF6').getStyle(), // purple
      new Color('#D946EF').getStyle(), // pink
      new Color('#0EA5E9').getStyle(), // blue
      new Color('#F97316').getStyle(), // orange 
      new Color('#10B981').getStyle(), // teal
    ];
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 35;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 20;
      
      const size = Math.random() * 0.4 + 0.1;
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
  const group = useRef<Group>();
  
  useFrame((state) => {
    if (group.current) {
      // More dynamic rotation animation
      const t = state.clock.getElapsedTime();
      group.current.rotation.y = t * 0.1;
      group.current.rotation.x = Math.sin(t * 0.05) * 0.2;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, -10]}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[5, 0.3, 16, 6]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <torusGeometry args={[6, 0.2, 16, 6]} />
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[7, 0.1, 16, 6]} />
        <meshStandardMaterial color="#D946EF" emissive="#D946EF" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="three-canvas">
      <Canvas camera={{ position: [0, 0, 10], fov: 65 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D946EF" />
        <HexagonGroup />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
