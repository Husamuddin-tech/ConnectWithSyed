"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/links";
import SocialCard from "./SocialCard";

export default function SocialGrid() {
  return (
    <section className="relative w-full max-w-lg mx-auto px-5 py-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-xs uppercase tracking-widest mb-6"
        style={{ color: "#B09B78", letterSpacing: "0.2em" }}
      >
        Find me on
      </motion.p>

      <div className="flex flex-col gap-3">
        {socialLinks.map((link, index) => (
          <SocialCard key={link.id} link={link} index={index} />
        ))}
      </div>
    </section>
  );
}
