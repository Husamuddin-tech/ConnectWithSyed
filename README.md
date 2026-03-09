<div align="center">
  <img src="https://raw.githubusercontent.com/Husamuddin-tech/syedconnect/main/public/profile.jpg" width="100" height="100" style="border-radius: 50%" alt="Syed Husamuddin Logo">
  <h1>SyedConnect</h1>
  <p><strong>A stunning, interactive 3D Social Links Application built with Next.js</strong></p>

  <div>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  </div>
</div>

---

## 🚀 About The Project

SyedConnect is a modern, highly interactive "Link in Bio" minimalist application. Designed to aggregate all social links and portfolios into a single, beautiful hub. It features a unique, warm beige color palette, frosted glassmorphism UI, and immersive dynamic 3D backgrounds and hover states.

### ✨ Key Features

- **Immersive 3D Background**: Hand-coded WebGL canvas using Three.js featuring gently floating wireframe orbs, a breathing glow sphere, and slow-rotating particle dust.
- **Physics-based Hover Effects**: Social cards track mouse movement via Framer Motion's `useSpring`, physically tilting away from the cursor while rendering extruded 3D drop shadows and Z-depth popping elements.
- **Micro-interactions**: Floating 3D arrows, subtle shimmer sweeps on hover, animated border glows, and tactile click depression.
- **Glassmorphism UI**: Beautiful frosted glass effects overlaying the 3D canvas with perfectly tweaked blurring and transparency values.
- **Fully Responsive**: Flawless scaling from massive desktop displays down to mobile devices.
- **Type-Safe Links Configuration**: Social links and data are easily driven by a centralized `data/links.ts` file, making updating the site perfectly safe and robust.

## 🛠️ Built With

This project pulls together some of the best modern front-end tooling to create its unique interactive feel:

- [Next.js (App Router)](https://nextjs.org/) - React Framework for blazing fast React Server Components.
- [TypeScript](https://www.typescriptlang.org/) - Static typing for robust code.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling for rapid, strictly-tokenized design.
- [Framer Motion](https://www.framer.com/motion/) - Declarative, physics-based animation library driving the UI interactions.
- [Three.js](https://threejs.org/) - Bare-metal WebGL library powering the highly optimized immersive background.
- [Lucide Icons](https://lucide.dev/) - Beautifully clean and crisp SVG iconography.

## 💻 Getting Started

### Prerequisites

Ensure you have Node.js installed (v18.17.0 or higher is recommended).

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Syed-Husam-Uddin/syedconnect.git
   ```
2. Navigate to the project directory
   ```sh
   cd syedconnect
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## 📂 Project Structure

- `app/` - Next.js App Router core pages and layout (including custom `<head>` metadata).
- `components/` - Isolated React functional components:
  - `HeroSection.tsx` - Avatar, name, and bio.
  - `SocialGrid.tsx` & `SocialCard.tsx` - The mapping grid and highly complex interactive 3D card layout.
  - `MailSection.tsx` - Get-in-touch interactive card.
  - `ThreeBackground.tsx` - Custom WebGL background via Three.js.
  - `Navbar.tsx` - Floating, pulsing top-right icon.
- `data/` - Static configurations. `links.ts` contains all social routing and platform color theming.
- `public/` - Static assets, including the profile picture.

## ⚙️ Customization

To make this your own portfolio hub, simply edit:
1. `data/links.ts`: Update arrays to point to your personal URLs and edit the `mailLink` object.
2. `public/profile.jpg`: Replace with your own avatar image.
3. `app/layout.tsx`: Update the root SEO `title` and `description` string.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**Syed Husamuddin**
- Portfolio: [syed-porfolio.vercel.app](https://syed-porfolio.vercel.app)
- GitHub: [@Husamuddin-tech](https://github.com/Husamuddin-tech)
- LinkedIn: [@SyedHusamuddin](https://www.linkedin.com/in/syed-husamuddin)
