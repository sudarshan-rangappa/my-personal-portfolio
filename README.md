# 🚀 Sudarshan Rangappa — Cybersecurity Portfolio

[![Live Website](https://img.shields.io/badge/Live-sudarshanrangappa.in.net-blue?style=for-the-badge)](https://www.sudarshanrangappa.in.net)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> A sleek, theme-driven portfolio built to showcase my dual expertise in both Blue Team (defensive) and Red Team (offensive) cybersecurity.

---

## 🌟 Features

### 🎭 Dual Theme Support
- 🔵 **Blue Team Mode**: Focused on SOC ops, threat detection, SIEM, and defense
- 🔴 **Red Team Mode**: Showcasing offensive tactics, pentesting, and recon tools
- ⚡ Real-time theme switching with contextual changes across the site

### 🎬 Interactive UX
- Custom decrypt-style intro animation
- Simulated terminal streams & cyber-themed transitions
- Smooth scrolls, hover states, and dynamic project tabs

### 📱 Responsive Design
- Mobile-first layout, adaptive elements
- Certificate carousels & tool grids optimized for all devices

---

## 🛠️ Tech Stack

| Area         | Tech                               |
|--------------|------------------------------------|
| Framework    | Next.js 15                         |
| Language     | TypeScript                         |
| Styling      | Tailwind CSS                       |
| Animation    | Custom CSS + Framer Motion Concepts |
| Icons        | Lucide React                       |
| Deployment   | Vercel                             |

---

## 📁 Project Structure

```
MY-PERSONAL-PORTFOLIO/
├── .next/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Home/
│       │   │   ├── ContactSection.tsx
│       │   │   ├── HeroSection.tsx
│       │   │   ├── PortfolioTabs.tsx
│       │   │   └── Timeline.tsx
│       │   └── ui/
│       │       ├── timeline.tsx
│       │       ├── DecryptedText.tsx
│       │       ├── Navbar.tsx
│       │       └── ThemeProvider.tsx
│       ├── hooks/
│       │   └── useTheme.ts
│       ├── lib/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/sudarshan-rangappa/my-personal-portfolio.git
cd my-personal-portfolio

# 2. Install dependencies
npm install
# or
yarn install

# 3. Run dev server
npm run dev
# or
yarn dev

# 4. Visit in browser
http://localhost:3000
📊 Portfolio Sections
🧰 Projects
ICDE (Integrated Cyber Defense Environment) — End-to-end Blue Team lab simulating enterprise security infrastructure with AD, SIEM, SOAR, IDS

Other red/blue-themed labs coming soon...

🏆 Certifications
CEH – Certified Ethical Hacker

OSINT – Basel Institute

Deep Learning – NVIDIA

Cyber Threat Intel – ARCx

⚔️ Technical Arsenal
Network: Nmap, Wireshark, Aircrack-ng
Web Security: Burp Suite, SQLMap, Nikto
SIEM: Splunk, Wazuh, QRadar
Offensive Tools: Metasploit, Hydra, John
OSINT: Maltego, theHarvester, Sherlock
Forensics: Autopsy, Volatility, Binwalk

🎨 Theme Palette
Blue Team
css
Copy code
--theme-primary: #3b82f6;
--theme-accent: #60a5fa;
--theme-glow: rgba(59, 130, 246, 0.2);
Red Team
css
Copy code
--theme-primary: #ef4444;
--theme-accent: #f87171;
--theme-glow: rgba(239, 68, 68, 0.2);
📱 Responsive Breakpoints
Device	Range	Behavior
Mobile	< 640px	Carousel nav, grid reflow
Tablet	640px–1024px	Adjusted layout, touch optimizations
Desktop	> 1024px	Full theme features, hover effects

⚡ Performance Benchmarks
Lighthouse: 95+ across all metrics

FCP: < 1.5s

LCP: < 2.5s

100% type-safe with strict TypeScript config

🔒 Security Considerations
External links opened safely

No sensitive data exposure

Optimized assets & lazy loading

Built-in XSS-safe rendering with strict typing

🛣️ Roadmap
 Security Blog – Writeups, tool usage, real-world cases

 Interactive Labs – Simulations for hands-on learning

 Theme-Based Resumes – Auto-switching content per theme

 Analytics – Dashboards for portfolio traffic

 PWA Support – Full offline mode

🤝 Contributing
bash
Copy code
# Fork > Clone > Create a feature branch
git checkout -b feature/YourFeature

# Commit > Push > PR
git commit -m "Add amazing feature"
git push origin feature/YourFeature
📄 License
MIT © Sudarshan Rangappa

🙏 Acknowledgments
@rizwaan – For development guidance and architecture suggestions

Next.js – Modern web framework

Tailwind CSS – Utility-first styling

Lucide Icons – Icon set powering the visuals

📞 Connect




<div align="center"> <strong>🔐 Securing the digital frontier, one vulnerability at a time.</strong><br/> <em>Built with ❤️ by Sudarshan Rangappa</em> </div> ```