# 📸 How to Add Images to Your Portfolio

## Quick Setup

Your portfolio is now running with **EXTREME animations** and dynamic dark theme! Here's how to add your images:

## Step 1: Locate the Folders

Navigate to your project folder: `e:\JOB - 050925\Maz\PORTFOLIO\web\public\portfolio\`

You should see:
```
├── images/
└── videos/
```

## Step 2: Add Images

1. **Open File Explorer** and go to: `e:\JOB - 050925\Maz\PORTFOLIO\web\public\portfolio\images\`

2. **Add your images** with these naming conventions:
   - `design-01.jpg`
   - `design-02.jpg`
   - `design-03.jpg`
   - etc.

   Or use any name like:
   - `portfolio-item-1.jpg`
   - `my-work-01.png`

3. **Supported formats**: JPG, PNG, GIF, WEBP

## Step 3: Save and Refresh

1. The Portfolio component will **automatically detect** your files
2. Refresh your browser at `http://localhost:3000`
3. Your images will appear in the **Portfolio** section with animations!

## Step 4: Add Videos (Optional)

Follow the same process for `public/portfolio/videos/`:

- `demo-01.mp4`
- `demo-02.mp4`
- etc.

**Supported formats**: MP4, WEBM, MOV

## Image Gallery Features

✨ **Your portfolio now has:**
- 🎬 Extreme 3D morphing animations on hover
- 🎨 Dark theme with gradient glassmorphism
- 📱 Fully responsive design
- 🎯 Filter buttons (All/Images/Videos)
- 🖼️ Modal lightbox for full-size viewing
- ⚡ Smooth hover effects with scale and rotate

## Update the Fetching (OPTIONAL)

If you want to pre-configure image names, edit `src/components/Portfolio.tsx`:

Find this section (around line 35-40):
```typescript
const imagePaths = [
  '/portfolio/images/design-01.jpg',
  '/portfolio/images/design-02.jpg',
  // Add more paths here
];
```

## 🚀 Current Status

✅ Hero section with 5 animated shapes
✅ Resume with pre-filled data
✅ Portfolio gallery with dynamic loading
✅ Statistics with animated counters
✅ Contact form with validation
✅ Extreme animations on all sections
✅ Dark theme with gradients
✅ Mobile responsive

## Next Steps

1. Add your images to `public/portfolio/images/`
2. Add your videos to `public/portfolio/videos/` (optional)
3. Update contact links in Resume.tsx if needed
4. Deploy to Vercel/Netlify when ready!

---

**Need help?** Check START_HERE.txt for more details!
