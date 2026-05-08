import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function StylizedBurger() {
  const groupRef = useRef();
  
  const bottomBunGroup = useRef();
  const pattyGroup = useRef();
  const cheeseGroup = useRef();
  const tomatoGroup = useRef();
  const lettuceGroup = useRef();
  const topBunGroup = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    
    // Easing function towards 0
    const animateDrop = (ref, delay) => {
      if (ref.current) {
        if (t > delay) {
          // Smooth dampening to 0
          ref.current.position.y += (0 - ref.current.position.y) * delta * 8;
        }
      }
    };

    // Sequential drop delays
    animateDrop(bottomBunGroup, 0.2);
    animateDrop(pattyGroup, 0.8);
    animateDrop(cheeseGroup, 1.4);
    animateDrop(tomatoGroup, 2.0);
    animateDrop(lettuceGroup, 2.6);
    animateDrop(topBunGroup, 3.2);

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      // Start hovering after all pieces have fallen
      if (t > 4.0) {
        groupRef.current.position.y = Math.sin((t - 4.0) * 2) * 0.1;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Bottom Bun */}
      <group ref={bottomBunGroup} position={[0, 15, 0]}>
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[2.5, 2.3, 0.8, 32]} />
          <meshStandardMaterial color="#E28743" roughness={0.8} />
        </mesh>
      </group>

      {/* Meat Patty */}
      <group ref={pattyGroup} position={[0, 15, 0]}>
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[2.5, 2.5, 0.8, 32]} />
          <meshStandardMaterial color="#4E342E" roughness={0.9} />
        </mesh>
      </group>

      {/* Cheese */}
      <group ref={cheeseGroup} position={[0, 15, 0]}>
        <mesh position={[0, 0.2, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[4.5, 0.1, 4.5]} />
          <meshStandardMaterial color="#FFCA28" roughness={0.5} />
        </mesh>
      </group>

      {/* Tomato */}
      <group ref={tomatoGroup} position={[0, 15, 0]}>
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[2.4, 2.4, 0.4, 32]} />
          <meshStandardMaterial color="#E53935" roughness={0.3} />
        </mesh>
      </group>

      {/* Lettuce */}
      <group ref={lettuceGroup} position={[0, 15, 0]}>
        <mesh position={[0, 1.0, 0]}>
          <cylinderGeometry args={[2.6, 2.6, 0.2, 16]} />
          <meshStandardMaterial color="#7CB342" roughness={0.9} />
        </mesh>
      </group>

      {/* Top Bun with Seeds */}
      <group ref={topBunGroup} position={[0, 15, 0]}>
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[2.2, 2.5, 1.2, 32]} />
          <meshStandardMaterial color="#E28743" roughness={0.7} />
        </mesh>
        
        {/* Seeds on Top Bun */}
        <mesh position={[0.5, 2.4, 0.5]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.05, 0.15, 4, 8]} />
          <meshStandardMaterial color="#FFF9C4" />
        </mesh>
        <mesh position={[-0.8, 2.38, 0.8]} rotation={[0, 1, Math.PI / 2]}>
          <capsuleGeometry args={[0.05, 0.15, 4, 8]} />
          <meshStandardMaterial color="#FFF9C4" />
        </mesh>
        <mesh position={[0.8, 2.38, -0.8]} rotation={[0, 2, Math.PI / 2]}>
          <capsuleGeometry args={[0.05, 0.15, 4, 8]} />
          <meshStandardMaterial color="#FFF9C4" />
        </mesh>
        <mesh position={[-0.5, 2.4, -0.5]} rotation={[0, 3, Math.PI / 2]}>
          <capsuleGeometry args={[0.05, 0.15, 4, 8]} />
          <meshStandardMaterial color="#FFF9C4" />
        </mesh>
      </group>
    </group>
  );
}

export default function Burger3D() {
  return (
    <Canvas camera={{ position: [0, 2, 9], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <StylizedBurger />
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
}
