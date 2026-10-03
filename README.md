# MessMate

A responsive marketing landing page for MessMate, a student startup concept for campus meal booking and live queue tracking.

## Run locally

Requirements: Node.js 18 or newer.

```bash
pnpm install
pnpm dev
```

Vite prints the local URL (normally `http://localhost:5173`).

## Production build

```bash
pnpm build
pnpm preview
```

The deployable static site is generated in `dist/`.

## Deploy to Vercel

1. Create a GitHub repository and push this folder to it.
2. In the Vercel dashboard, select **Add New...** then **Project**.
3. Import the GitHub repository.
4. Vercel will detect **Vite** and pnpm automatically. Keep the defaults: build command `pnpm build`, output directory `dist`, and install command `pnpm install`.
5. Select **Deploy**. No environment variables or extra configuration are required.

For future deployments, push to the connected GitHub branch and Vercel will deploy it automatically.
