"use client";

import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

// If a .glb model exists, load it. Otherwise show a stylized cylinder cake.
function CakeModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  // Spin = 0 to 360° over scroll, Y position drops after halfway
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
    // After 50% scroll, start moving down
    const dropProgress = Math.max(0, (scrollProgress - 0.5) * 2);
    groupRef.current.position.y = -dropProgress * 3;
  });

  return (
    <group ref={groupRef}>
      {/* Base tier */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.4, 1.5, 0.8, 64]} />
        <meshStandardMaterial color="#F5D5A0" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Base frosting ring */}
      <mesh position={[0, 0.42, 0]}>
        <torusGeometry args={[1.35, 0.08, 16, 64]} />
        <meshStandardMaterial color="#FF85A2" roughness={0.4} />
      </mesh>

      {/* Middle tier */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[1.05, 1.15, 0.7, 64]} />
        <meshStandardMaterial color="#FFF0F5" roughness={0.3} metalness={0.05} />
      </mesh>
      {/* Middle frosting ring */}
      <mesh position={[0, 1.47, 0]}>
        <torusGeometry args={[1.0, 0.07, 16, 64]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.4} />
      </mesh>

      {/* Top tier */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.7, 0.8, 0.6, 64]} />
        <meshStandardMaterial color="#FF85A2" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Top frosting swirl */}
      <mesh position={[0, 2.35, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#F5D5A0" roughness={0.3} />
      </mesh>

      {/* Drip effects — small spheres around the edge of each tier */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh key={`drip-base-${i}`} position={[Math.cos(angle) * 1.4, 0.2 - Math.random() * 0.3, Math.sin(angle) * 1.4]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#FF85A2" roughness={0.4} />
          </mesh>
        );
      })}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        return (
          <mesh key={`drip-mid-${i}`} position={[Math.cos(angle) * 1.05, 0.9 - Math.random() * 0.2, Math.sin(angle) * 1.05]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#A8E6CF" roughness={0.4} />
          </mesh>
        );
      })}

      {/* Berries / decorations on top */}
      <mesh position={[0.3, 2.45, 0.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#DC2626" roughness={0.5} />
      </mesh>
      <mesh position={[-0.2, 2.45, -0.15]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#DC2626" roughness={0.5} />
      </mesh>
      <mesh position={[0, 2.5, 0.25]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#7C3AED" roughness={0.5} />
      </mesh>

      {/* Gold leaf flakes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const tier = i % 3;
        const y = tier === 0 ? 0.2 : tier === 1 ? 1.2 : 2.1;
        const r = tier === 0 ? 1.42 : tier === 1 ? 1.07 : 0.72;
        return (
          <mesh key={`gold-${i}`} position={[Math.cos(angle) * r, y, Math.sin(angle) * r]} rotation={[Math.random(), Math.random(), Math.random()]}>
            <boxGeometry args={[0.08, 0.01, 0.06]} />
            <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function CakeScene() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current?.closest("section");
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const containerH = container.scrollHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / (containerH - window.innerHeight)));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "60vh",
        maxHeight: "500px",
        position: "relative",
        zIndex: 5,
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 6], fov: 35 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#FF85A2" />
        <pointLight position={[0, 5, 0]} intensity={0.6} color="#FFD700" />
        <Suspense fallback={null}>
          <Center>
            <CakeModel scrollProgress={scrollProgress} />
          </Center>
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
