# Next.js Migration - Quick Start Script

## 📋 Step-by-Step Migration Commands

### 1️⃣ Backup Current Setup
```bash
# Backup your React version
cp package.json package-react-backup.json
cp -r src src-react-backup

# Create backup branch in git (recommended)
git checkout -b backup-react-version
git add .
git commit -m "Backup: React version before Next.js migration"
git checkout main
```

### 2️⃣ Install Next.js Dependencies
```bash
# Replace package.json with Next.js version
cp package-next.json package.json

# Install all dependencies (this may take 2-3 minutes)
npm install

# Install additional required package
npm install js-cookie @types/js-cookie
```

### 3️⃣ Update TypeScript Configuration
Add to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### 4️⃣ Replace Header Component
```bash
# Backup original header
cp src/components/Header.tsx src/components/Header-react-backup.tsx

# Use Next.js version
cp src/components/Header-next.tsx src/components/Header.tsx

# Add language styles to Header.css
cat src/components/Header-language.css >> src/components/Header.css
```

### 5️⃣ Update Components with 'use client'

Add `'use client';` at the top of these files:
```bash
# Files that need 'use client' directive:
# - src/components/Hero.tsx
# - src/components/Services.tsx
# - src/components/Process.tsx
# - src/components/Portfolio.tsx
# - src/components/About.tsx
# - src/components/Testimonials.tsx
# - src/components/FinalCTA.tsx
# - src/components/Footer.tsx
# - src/components/ServiceModal.tsx
```

Quick script to add it:
```bash
for file in src/components/{Hero,Services,Process,Portfolio,About,Testimonials,FinalCTA,Footer,ServiceModal}.tsx; do
  if [ -f "$file" ]; then
    echo "'use client';" | cat - "$file" > temp && mv temp "$file"
    echo "Updated: $file"
  fi
done
```

### 6️⃣ Update Configuration Files

Update `SITE_URL` in these files:
- `app/layout.tsx`
- `app/work/page.tsx`
- `app/services/page.tsx`  
- `app/journey/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

```bash
# Find and replace (macOS/Linux)
find app -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's|https://mazharrony.vercel.app|https://YOUR-DOMAIN.com|g' {} +

# Or manually update SITE_URL constant in each file
```

### 7️⃣ Create Environment Variables
```bash
# Create .env.local file
cat > .env.local << EOF
NEXT_PUBLIC_SITE_URL=https://mazharrony.vercel.app
# Add more environment variables as needed
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF

# Add to .gitignore
echo ".env.local" >> .gitignore
```

### 8️⃣ Test Development Server
```bash
# Start Next.js development server
npm run dev

# Open browser to http://localhost:3000
# Test all routes:
# - http://localhost:3000/
# - http://localhost:3000/work
# - http://localhost:3000/services
# - http://localhost:3000/journey
# - http://localhost:3000/about
# - http://localhost:3000/contact
```

### 9️⃣ Create OG Images

Create these images (1200x630px) in `/public/`:
```bash
# You'll need to create these manually:
# - public/og-image.jpg (Homepage)
# - public/og-work.jpg (Work page)
# - public/og-services.jpg (Services page)
# - public/og-journey.jpg (Journey page)
# - public/og-about.jpg (About page)
# - public/og-contact.jpg (Contact page)
# - public/profile-image.jpg (Your photo for schema)
```

### 🔟 Fill Translation Files

Update these JSON files with your actual content:
- `locales/en/common.json`
- `locales/ar/common.json`
- `locales/ru/common.json`
- `locales/zh/common.json`
- `locales/es/common.json`

Use the translation keys in your components:
```tsx
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Component = () => {
  const { t } = useLanguage();
  return <h1>{t('hero.title')}</h1>;
};
```

---

## 🧪 Testing Checklist

### Functionality Tests
```bash
# ✅ Test all routes load without errors
# ✅ Test language switching (EN, AR, RU, ZH, ES)
# ✅ Test theme toggle (Light/Dark)
# ✅ Test language auto-detection popup
# ✅ Test RTL layout for Arabic
# ✅ Test all animations work
# ✅ Test contact form (if implemented)
# ✅ Test navigation between pages
# ✅ Test mobile responsiveness
```

### SEO Tests
```bash
# Test sitemap
curl http://localhost:3000/sitemap.xml

# Test robots.txt
curl http://localhost:3000/robots.txt

# View page source and check:
# ✅ Unique <title> on each page
# ✅ Meta description present
# ✅ Open Graph tags
# ✅ JSON-LD structured data
# ✅ Canonical URLs
```

### Validation Tools
```bash
# After deploying, test with:
# 1. Google Rich Results Test
#    https://search.google.com/test/rich-results

# 2. Schema Markup Validator  
#    https://validator.schema.org/

# 3. OpenGraph Preview
#    https://www.opengraph.xyz/

# 4. Lighthouse (in Chrome DevTools)
#    Aim for 90+ in all categories
```

---

## 🚀 Build & Deploy

### Production Build
```bash
# Create optimized production build
npm run build

# This will:
# - Generate static pages (SSG)
# - Optimize images
# - Bundle JavaScript
# - Create sitemap
# - Minify everything

# Test production build locally
npm run start

# Visit http://localhost:3000
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Deploy via Git (Easiest)
```bash
# Push to GitHub
git add .
git commit -m "feat: Migrate to Next.js with full SEO"
git push origin main

# Connect repository in Vercel dashboard:
# 1. Go to https://vercel.com/new
# 2. Import your repository
# 3. Framework: Next.js (auto-detected)
# 4. Click Deploy
```

---

## 🔧 Post-Deployment Tasks

### 1. Update DNS (if using custom domain)
```bash
# In your domain registrar:
# - Add A record: 76.76.21.21
# - Or CNAME record: cname.vercel-dns.com
```

### 2. Submit to Search Engines
```bash
# Google Search Console
# 1. Add property: https://yourdomain.com
# 2. Verify ownership (via HTML file or DNS)
# 3. Submit sitemap: https://yourdomain.com/sitemap.xml

# Bing Webmaster Tools
# 1. Add site
# 2. Verify
# 3. Submit sitemap
```

### 3. Set Up Analytics
```bash
# Add Google Analytics to app/layout.tsx
# Or use Vercel Analytics (built-in)
```

### 4. Monitor Performance
```bash
# Check these regularly:
# - Core Web Vitals in Search Console
# - Vercel Analytics dashboard
# - Lighthouse scores
# - Page speed insights
```

---

## 🆘 Troubleshooting

### Build Errors

**Error: Cannot find module '@/...'**
```bash
# Solution: Update tsconfig.json with path aliases
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Error: Hydration failed**
```bash
# Solution: Add 'use client' to components using:
# - useState, useEffect, useRef
# - Browser APIs (window, document)
# - Framer Motion, GSAP
```

**Error: Image is missing required "width" and "height" properties**
```bash
# Solution: Add width/height to all <Image> components
<Image src="/img.jpg" width={800} height={600} alt="..." />
```

### Runtime Errors

**Language translations not showing**
```bash
# Check: Translation files exist in public/locales
# Check: JSON files are valid
# Check: useLanguage hook is called inside LanguageProvider
```

**Theme not persisting**
```bash
# Check: localStorage is accessible
# Check: ThemeProvider wraps your components
# Check: 'use client' directive is present
```

---

## 📊 Expected Results

After successful migration, you should have:

✅ **Performance**
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

✅ **SEO**
- Valid structured data (Person, WebSite schemas)
- Unique meta tags on all pages
- Proper heading hierarchy (h1 → h2 → h3)
- All images have alt text
- Sitemap indexed by Google

✅ **Accessibility**
- WCAG 2.1 AA compliant
- Keyboard navigation works
- ARIA labels on interactive elements
- Proper form semantics
- Color contrast ratios meet standards

✅ **Internationalization**
- 5 languages supported
- RTL layout for Arabic
- Language auto-detection
- Translations load correctly

---

## 📝 Final Checklist

Before going live:

- [ ] All environment variables set
- [ ] SITE_URL updated everywhere
- [ ] OG images created (1200x630)
- [ ] Social media links added to JSON-LD
- [ ] All translation files filled
- [ ] Contact form tested
- [ ] 404 page customized (optional)
- [ ] Favicon added
- [ ] robots.txt allows indexing
- [ ] Sitemap accessible
- [ ] Analytics configured
- [ ] Custom domain connected (if applicable)
- [ ] SSL certificate active
- [ ] All routes tested on mobile
- [ ] Performance tested with Lighthouse
- [ ] Structured data validated

---

## 🎉 Success!

You've successfully migrated to Next.js! Your portfolio is now:
- ⚡ Faster
- 🔍 SEO-optimized
- 🌐 Multi-language
- ♿ Accessible
- 📱 Mobile-friendly
- 🚀 Production-ready

Need help? Check:
- `MIGRATION_GUIDE.md` - Detailed explanation
- `README-NEXT.md` - Full documentation
- [Next.js Docs](https://nextjs.org/docs)
