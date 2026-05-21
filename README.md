# Mazhar Rony — Portfolio

Freelance Web & App Developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # add your Web3Forms key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure

| File | What's inside |
| --- | --- |
| `data/site.ts` | Name, role, email, WhatsApp number, stats, tagline |
| `data/projects.ts` | All 21 projects (live URL, repo, tags, gradients) |
| `data/services.ts` | Service offerings |
| `data/pricing.ts` | Pricing tiers (AED) |
| `data/faqs.ts` | FAQ entries |
| `data/content.ts` | Process steps & testimonials (replace with real ones) |
| `data/tech.ts` | Tech stack marquee |

### Contact form (Web3Forms)
1. Visit [web3forms.com](https://web3forms.com) and enter your email — you'll receive an access key.
2. Put it in `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_real_key_here
   ```
3. Restart `npm run dev`. Submissions go straight to your inbox.

### WhatsApp button
Edit `whatsappRaw` / `whatsappDisplay` / `whatsappMessage` in `data/site.ts`.

## Build & deploy

```bash
npm run build
npm run start
```

**Deploy on Vercel:** push to GitHub → import repo → set the `NEXT_PUBLIC_WEB3FORMS_KEY` env var → done.

## Replace placeholders later
- **Project thumbnails:** drop screenshots into `public/projects/<slug>.png` and update `ProjectCard.tsx` to use them.
- **Testimonials:** edit `data/content.ts` and remove the `TODO` comment.
- **Stats:** edit `site.stats` in `data/site.ts`.
