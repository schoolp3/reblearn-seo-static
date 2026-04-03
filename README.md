# RebLearn site (Next.js)

## Local
1. Copy `.env.example` to `.env.local` and set `AI_GATEWAY_API_KEY` (and optional vars).
2. `npm install`
3. `npm run dev`

## Deploy (Vercel + GitHub)
- Framework: **Next.js** (auto-detected).
- Set environment variables in the Vercel project (see `.env.example`).
- Push to GitHub; Vercel builds with `npm run build`.

## Edge worker (`worker.js`)
If Cloudflare (or similar) routes between Figma and Vercel, keep `VERCEL_PATHS` / `shouldRouteToVercel` in sync with new App Router paths (including `/api/*` and `/_next/*`).
