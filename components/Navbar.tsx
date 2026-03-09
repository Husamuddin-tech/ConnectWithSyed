"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4"
    >
      <div className="glass rounded-full px-6 py-2.5 flex items-center gap-3 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-sand-400 animate-pulse" />
        <span
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: "#7D6044", fontFamily: "'Inter', sans-serif", letterSpacing: "0.18em" }}
        >
          SyedConnect
        </span>
        <div className="w-2 h-2 rounded-full bg-sand-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>
    </motion.nav>
  );
}
