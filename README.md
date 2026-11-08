# Isurindu · Personal portfolio (Next.js 15, App Router, TypeScript)

    npm ci
    npm run dev        # http://localhost:3000
    npm run typecheck
    npm run build && npm start

## Make it yours
1. `src/data/profile.ts`: set your email, LinkedIn and GitHub. Put your photo in `public/` and set `photo: "/isu.jpg"`.
2. `src/data/story.ts`: your story chapters and "why people trust me" points.
3. `src/data/experience.ts`, `projects.ts`, `credentials.ts`: roles, projects and certificates.

## Structure
    src/app/               layout, page, global styles
    src/components/layout  Navbar, Footer
    src/components/sections  Hero, Story, WhyMe, Work, ClientJourney, Experience, Credentials, Contact
    src/components/ui      Portrait, ResortPhone (live website), Reveal
    src/data/              all content
    src/types/             shared types

Deploy on Vercel: push to GitHub, import the repo, click Deploy.

## Developer handoff
Dependencies and generated build folders are excluded from the handoff ZIP.
Run `npm ci` after extracting, then `npm run dev` to start locally.
Development output uses `.next-dev`; production builds use `.next` so they can run independently.
