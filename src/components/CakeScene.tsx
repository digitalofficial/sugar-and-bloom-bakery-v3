"use client";

import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CakeModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
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
      <mesh position={[0, 0.42, 0]}>
        <torusGeometry args={[1.35, 0.08, 16, 64]} />
        <meshStandardMaterial color="#FF85A2" roughness={0.4} />
      </mesh>
      {/* Middle tier */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[1.05, 1.15, 0.7, 64]} />
        <meshStandardMaterial color="#FFF0F5" roughness={0.3} metalness={0.05} />
      </mesh>
      <mesh position={[0, 1.47, 0]}>
        <torusGeometry args={[1.0, 0.07, 16, 64]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.4} />
      </mesh>
      {/* Top tier */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.7, 0.8, 0.6, 64]} />
        <meshStandardMaterial color="#FF85A2" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0, 2.35, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#F5D5A0" roughness={0.3} />
      </mesh>
      {/* Berries on top */}
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
    </group>
  );
}

function CakeCanvas({ scrollProgress }: { scrollProgress: number }) {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 35 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#FF85A2" />
      <pointLight position={[0, 5, 0]} intensity={0.6} color="#FFD700" />
      <Suspense fallback={null}>
        <CakeModel scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
}

export default function CakeScene() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
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

  // If WebGL isn't available or Three.js crashes, show fallback
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasError(true);
    } catch {
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div ref={containerRef} style={{ width: "100%", height: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "4rem" }}>🎂</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ width: "100%", height: "60vh", maxHeight: "500px", position: "relative", zIndex: 5 }}>
      <CakeCanvas scrollProgress={scrollProgress} />
    </div>
  );
}
