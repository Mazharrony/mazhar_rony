# Portfolio (Next.js)

Personal portfolio website built with **Next.js (App Router)** and **Tailwind CSS**.

## Tech stack

- **Next.js** (App Router) + **React**
- **TypeScript**
- **Tailwind CSS**

## Project structure

- `app/`: routes, layouts, metadata (Next.js App Router)
- `src/components/`: UI components used by pages in `app/`
- `lib/`: shared logic (i18n, theme context, data)
- `public/`: static assets

## Getting started

Install dependencies:

```bash
npm install
```

If you need environment variables, copy `env.example` to `.env.local` and update the values.

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production

Build:

```bash
npm run build
```

Start:

```bash
npm run start
```

## Deployment

Deploy on **Vercel** (recommended for Next.js). Configure environment variables in Vercel Project Settings if needed.
