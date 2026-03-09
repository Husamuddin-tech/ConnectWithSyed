"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { mailLink } from "@/data/links";

const EnvelopeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
);

export default function MailSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const mailHref = `mailto:${mailLink.email}?subject=${encodeURIComponent(mailLink.subject)}&body=${encodeURIComponent(mailLink.body)}`;

  return (
    <section className="relative w-full max-w-lg mx-auto px-5 pb-8">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center text-xs uppercase tracking-widest mb-4"
        style={{ color: "#B09B78", letterSpacing: "0.2em" }}
      >
        Get in touch
      </motion.p>

      <motion.a
        href={mailHref}
        ref={wrapperRef as unknown as React.Ref<HTMLAnchorElement>}
        className="perspective-wrapper block w-full rounded-2xl outline-none"
        onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
          setIsHovered(false);
        }}
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "block" }}
      >
        <motion.div
          className="group relative flex flex-col items-center justify-center gap-4 w-full rounded-2xl p-8 glass border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileTap={{ scale: 0.97, rotateX: 4, transition: { duration: 0.1 } }}
        >

          {/* Gradient bg */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(180,153,123,0.15) 0%, transparent 70%)" }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
            }}
            animate={isHovered ? { backgroundPosition: ["200% 0%", "-100% 0%"] } : { backgroundPosition: "200% 0%" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />

          {/* Floating envelope icon */}
          <motion.div
            className="relative pointer-events-none"
            animate={{
              y: [0, -8, 0],
              rotateZ: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 0.5, ease: "easeInOut" },
            }}
            style={{ color: "#9B7B57", transformStyle: "preserve-3d" }}
          >
            {/* 3D depth shadow below icon */}
            <motion.div
              className="absolute inset-0 blur-sm -z-10"
              style={{ color: "#9B7B57", opacity: 0.3 }}
              animate={isHovered ? { y: 6, scale: 1.1 } : { y: 2, scale: 1 }}
            >
              <EnvelopeIcon />
            </motion.div>
            <EnvelopeIcon />
          </motion.div>

          {/* Text */}
          <div className="text-center pointer-events-none">
            <motion.p
              className="text-lg font-semibold"
              style={{ color: "#4A3C2C", fontFamily: "'Inter', sans-serif" }}
              animate={isHovered ? { z: 10 } : { z: 0 }}
            >
              Say Hello 👋
            </motion.p>
            <p className="text-sm mt-1" style={{ color: "#9B7B57", fontWeight: 300 }}>
              {mailLink.email}
            </p>
          </div>

          {/* Border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ border: "1.5px solid #B09B78" }}
            animate={{ opacity: isHovered ? 0.55 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
