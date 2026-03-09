"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialGrid from "@/components/SocialGrid";
import MailSection from "@/components/MailSection";

// Dynamically import ThreeBackground so canvas only renders client-side
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(160deg, #FDFAF5 0%, #FAF5EB 40%, #F5EDD8 80%, #EDE0C4 100%)",
      }}
    >
      {/* 3D Particle Background */}
      <ThreeBackground />

      {/* Content layer */}
      <div className="relative flex flex-col items-center w-full" style={{ zIndex: 10 }}>
        <Navbar />
        <HeroSection />
        <SocialGrid />
        <MailSection />

        {/* Footer */}
        <footer className="w-full text-center py-8 px-4">
          <p className="text-xs" style={{ color: "#C8B89A", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} Syed Husamuddin
          </p>
        </footer>
      </div>
    </main>
  );
}
