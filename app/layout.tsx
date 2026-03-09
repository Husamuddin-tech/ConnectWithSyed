import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyedConnect — Links",
  description: "Connect with Syed Husamuddin — Portfolio, GitHub, LinkedIn, YouTube, Instagram, X & more.",
  keywords: ["portfolio", "developer", "links", "social", "SyedConnect"],
  openGraph: {
    title: "SyedConnect",
    description: "All my links in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
