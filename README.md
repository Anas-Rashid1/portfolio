# Anas — creative developer portfolio

A responsive Next.js App Router portfolio with TypeScript, GSAP entrance animations, ScrollTrigger reveals, an animated orbital illustration, and project detail dialogs. Reduced-motion preferences disable animation.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if script execution is disabled.

## Personalize

- Edit `src/data/portfolio.ts` for your biography, grouped skills, experience, education, projects, and contact links. Content reflects AnasSept2026.pdf and the additional projects described in this conversation.
- Featured projects include the e-scooter app, print ordering website, electronics store, Moving7, Signs365 digital signage, StarBike IoT, Gamer Gizmo, and the enterprise backend API system. The print ordering website and Signs365 WebSocket project are listed separately.
- Email, GitHub, and LinkedIn links are configured from the resume. The download link serves `public/AnasSept2026.pdf`.
- Edit `src/app/layout.tsx` for the browser title and SEO description.
- Edit `src/app/globals.css` for colors, typography, and responsive styles.
- Three generated cover images are saved locally in `public/images/`; remaining project cards use typography and CSS backgrounds. All generated images are labeled illustrative covers. Generation prompts are recorded in `public/images/ASSETS.md`. No external image or font service is required.

## Verify and build

```sh
npm run typecheck
npm run build
npm start
```

This project is local only; no deployment has been created.
