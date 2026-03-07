"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

////////////////////////////////////////////////////////////
// Performance Mode
////////////////////////////////////////////////////////////

function usePerformanceMode() {
  const [lowPerf, setLowPerf] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isLowRAM = navigator.deviceMemory && navigator.deviceMemory < 4;
    if (isMobile || isLowRAM) setLowPerf(true);
  }, []);

  return lowPerf;
}

////////////////////////////////////////////////////////////
// Smooth Scroll
////////////////////////////////////////////////////////////

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}

////////////////////////////////////////////////////////////
// Mandala Wheel
////////////////////////////////////////////////////////////

function MandalaWheel() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) ref.current.rotation.z += 0.0006;
  });

  return (
    <mesh ref={ref}>
      <ringGeometry args={[2.6, 2.65, 128]} />
      <meshBasicMaterial
        color="#d4af37"
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

////////////////////////////////////////////////////////////
// Planet Alignment
////////////////////////////////////////////////////////////

function PlanetAlignment() {
  const groupRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      groupRef.current.position,
      { y: -2 },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <group ref={groupRef}>
      <mesh position={[-1, 0, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#ff9933" />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#c9a227" />
      </mesh>
    </group>
  );
}

////////////////////////////////////////////////////////////
// AI Headline
////////////////////////////////////////////////////////////

function usePersonalizedHeadline() {
  const [headline, setHeadline] = useState(
    " Unlock your destiny with Dhwani Astro"
  );

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const sign = localStorage.getItem("zodiac");

    if (name && sign) {
      setHeadline(`${name}, Venus is guiding your ${sign} energy ✨`);
    }
  }, []);

  return headline;
}

////////////////////////////////////////////////////////////
// Main Hero
////////////////////////////////////////////////////////////

export default function PremiumHero() {
  useLenis();
  const lowPerf = usePerformanceMode();
  const headline = usePersonalizedHeadline();
  const audioRef = useRef(null);

  ////////////////////////////////////////////////////////////
  // Mantra Audio (Play on first interaction)
  ////////////////////////////////////////////////////////////

  const playMantra = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0;
    audioRef.current.play();

    gsap.to(audioRef.current, {
      volume: 0.3,
      duration: 3,
    });
  };

  return (
    <section
      className="hero-section relative h-[80vh] w-full overflow-hidden text-white"
      onClick={playMantra}
    >

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e0b3b_0%,#0c0824_50%,#000000_100%)]" />

      {/* Gold Aura */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#c9a227] blur-[200px] opacity-10 rounded-full" />
      </div>

      {/* Sanskrit OM */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 text-8xl font-serif animate-pulse">
        ॐ
      </div>

      {/* 3D Scene */}
      {!lowPerf && (
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.4} />

          {/* Subtle Stars */}
          <Stars
            radius={100}
            depth={50}
            count={1500}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />

          <MandalaWheel />
          <PlanetAlignment />
        </Canvas>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <div className="mb-6 px-4 py-2 border border-[#c9a227] text-[#f5e6b2] rounded-full text-sm backdrop-blur-sm">
          AI Cosmic Forecast • Updated Live
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-4xl leading-tight">
          {headline}
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Ancient Vedic wisdom enhanced by intelligent planetary analysis.
        </p>

        <button
          className="
          mt-10
          px-10 py-4
          border-2 border-[#c9a227]
          text-[#f5e6b2]
          rounded-full
          relative
          overflow-hidden
          transition-all duration-500
          hover:shadow-[0_0_30px_#c9a227]
          "
        >
          <span className="relative z-10">
            Start Free Consultation
          </span>

          {/* <span className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-[#ff9933]/40 to-transparent
            translate-x-[-100%]
            hover:translate-x-[100%]
            transition-transform duration-700
          " /> */}
        </button>

      </div>

      {/* Mantra Audio File */}
      <audio
        ref={audioRef}
        src="/audio/om-mantra.mp3"
        loop
      />

    </section>
  );
}
