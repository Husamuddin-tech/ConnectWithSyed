"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xede0c4, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xd4ba88, 1.2, 30);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0x9b7b57, 0.6, 20);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // ---------- Particles ----------
    const particleCount = 1800;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc8b89a,
      size: 0.03,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---------- Glow Sphere ----------
    const sphereGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xd4ba88,
      transparent: true,
      opacity: 0.12,
      roughness: 0.3,
      metalness: 0.6,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(2.5, 0, -2);
    scene.add(sphere);

    // ---------- Wireframe Orbs ----------
    const orbData = [
      { pos: [-3, 1, -1] as [number, number, number], scale: 0.7, speed: 0.6 },
      { pos: [3.5, -1.5, -1.5] as [number, number, number], scale: 0.5, speed: 0.8 },
      { pos: [0, 2.5, -3] as [number, number, number], scale: 0.9, speed: 0.4 },
    ];

    const orbs = orbData.map(({ pos, scale, speed }) => {
      const geo = new THREE.IcosahedronGeometry(1, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xb09b78,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      return { mesh, baseY: pos[1], speed };
    });

    // ---------- Animation Loop ----------
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Particle slow rotation
      particles.rotation.y = t * 0.025;
      particles.rotation.x = Math.sin(t * 0.015) * 0.12;

      // Sphere breath
      const s = 1 + Math.sin(t * 0.7) * 0.04;
      sphere.scale.setScalar(s);
      sphere.rotation.y = t * 0.08;
      sphere.rotation.x = t * 0.05;

      // Orb float
      orbs.forEach(({ mesh, baseY, speed }) => {
        mesh.position.y = baseY + Math.sin(t * speed) * 0.4;
        mesh.rotation.x = t * 0.2;
        mesh.rotation.z = t * 0.15;
      });

      renderer.render(scene, camera);
    };
    animate();

    // ---------- Resize Handler ----------
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, width: "100%", height: "100%" }}
    />
  );
}
