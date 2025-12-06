# Portfolio Setup Guide

## Installation

```bash
npm install
```

## Running the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Portfolio Items

### Images
1. Create/use the folder: `public/portfolio/images/`
2. Add your image files (.jpg, .png, .gif, .webp)
3. They will appear in the Portfolio section (once API is set up)

### Videos  
1. Create/use the folder: `public/portfolio/videos/`
2. Add your video files (.mp4, .webm)
3. They will appear in the Portfolio section (once API is set up)

## Manual Portfolio Setup (Temporary)

Until the API is set up, add items manually:

Edit `src/components/Portfolio.tsx` and replace the `loadPortfolioItems` function with hardcoded items:

```typescript
const items: PortfolioItem[] = [
  { id: '1', type: 'image', src: '/portfolio/images/your-image.jpg', title: 'Project Name', category: 'image' },
  { id: '2', type: 'video', src: '/portfolio/videos/your-video.mp4', title: 'Video Name', category: 'video' }
];
```

## Building for Production

```bash
npm run build
```

## Customizing Your Portfolio

### Update Personal Info
File: `src/components/Resume.tsx`
- Update skills, tools, experience, education

### Change Colors
File: `src/index.css` (look for `:root`)
```css
:root {
  --primary: #6366f1;      /* Main color */
  --secondary: #ec4899;    /* Accent color */
}
```

### Update Hero Section
File: `src/components/Hero.tsx`
- Change title, subtitle, button text
- Modify gradient colors

## Deployment Options

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `build` folder
- **GitHub Pages**: Configure in `package.json`

## Features Included

✓ SaaS-style motion animations
✓ Hero section with animated shapes
✓ Navigation with scroll effects
✓ Resume/CV section
✓ Dynamic portfolio gallery
✓ Image & video filtering
✓ Modal lightbox viewer
✓ Statistics with animated counters
✓ Contact form
✓ Fully responsive
✓ TypeScript support

## Need Help?

Check the component files in `src/components/` - each has clear structure and comments.
