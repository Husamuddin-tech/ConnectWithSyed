"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-10">
      {/* Avatar ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8"
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(180,153,123,0.25) 0%, transparent 70%)",
            transform: "scale(1.4)",
          }}
        />
        {/* Rotating dashed ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin-slow"
          style={{
            border: "1.5px dashed rgba(176,155,120,0.45)",
            transform: "scale(1.25)",
          }}
        />
        {/* Avatar circle */}
        <div
          className="relative w-24 h-24 rounded-full glass flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #EDE0C4 0%, #C8B89A 100%)",
            border: "2px solid rgba(200,184,154,0.5)",
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Syed Husamuddin"
            fill
            className="object-cover"
            priority
            sizes="96px"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          lineHeight: 1.1,
          marginBottom: "0.5rem",
        }}
        className="shimmer-text"
      >
        Syed Husamuddin
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="text-base md:text-lg max-w-sm"
        style={{ color: "#9B7B57", fontWeight: 300, letterSpacing: "0.01em" }}
      >
        Developer · Creator · Storyteller
      </motion.p>

      {/* Animated divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 h-px w-24 mx-auto"
        style={{
          background: "linear-gradient(90deg, transparent, #C8B89A, transparent)",
        }}
      />
    </section>
  );
}
