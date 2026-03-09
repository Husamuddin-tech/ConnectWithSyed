export interface SocialLink {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  gradient: string;
  accentColor: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "portfolio",
    name: "Portfolio",
    description: "See my work & projects",
    url: "https://syed-porfolio.vercel.app",
    icon: "portfolio",
    gradient: "from-mocha-500/20 to-sand-300/20",
    accentColor: "#7D6044",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Check out my code",
    url: "https://github.com/Husamuddin-tech",
    icon: "github",
    gradient: "from-warm-900/20 to-warm-600/20",
    accentColor: "#47433F",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect professionally",
    url: "https://www.linkedin.com/in/syed-husamuddin",
    icon: "linkedin",
    gradient: "from-sand-400/20 to-cream-300/20",
    accentColor: "#B09B78",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Watch my videos",
    url: "https://youtube.com/@mubbu_tech",
    icon: "youtube",
    gradient: "from-mocha-400/20 to-sand-300/20",
    accentColor: "#9B7B57",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Follow my journey",
    url: "https://instagram.com/povwithmubbu",
    icon: "instagram",
    gradient: "from-sand-300/20 to-cream-200/20",
    accentColor: "#C8B89A",
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    description: "Thoughts & threads",
    url: "https://twitter.com/SyedHusamuddin8",
    icon: "twitter",
    gradient: "from-warm-800/20 to-warm-500/20",
    accentColor: "#635E58",
  },
];

export const mailLink = {
  email: "techmubbu@gmail.com",
  subject: "Hey Syed, let's connect!",
  body: "Hi Syed,\n\nI found your links page and wanted to reach out...",
};
