# ✅ Next.js Migration Checklist

Copy this checklist and mark items as you complete them!

---

## 🔧 Setup & Installation

### Phase 1: Preparation
- [ ] Read `MIGRATION_SUMMARY.md` (5 min overview)
- [ ] Read `QUICK_START.md` (step-by-step guide)
- [ ] Backup current code:
  ```bash
  git checkout -b backup-react
  git add .
  git commit -m "Backup: React version"
  git checkout main
  ```
- [ ] Backup package.json:
  ```bash
  cp package.json package-react-backup.json
  ```

### Phase 2: Dependencies
- [ ] Replace package.json:
  ```bash
  cp package-next.json package.json
  ```
- [ ] Install dependencies:
  ```bash
  npm install
  ```
- [ ] Install additional packages:
  ```bash
  npm install js-cookie @types/js-cookie
  ```
- [ ] Verify installation: `npm ls next` should show version 15.x

---

## 🔨 Code Updates

### Phase 3: Component Updates
- [ ] Add `'use client';` to `src/components/Hero.tsx`
- [ ] Add `'use client';` to `src/components/Services.tsx`
- [ ] Add `'use client';` to `src/components/Process.tsx`
- [ ] Add `'use client';` to `src/components/Portfolio.tsx`
- [ ] Add `'use client';` to `src/components/About.tsx`
- [ ] Add `'use client';` to `src/components/Testimonials.tsx`
- [ ] Add `'use client';` to `src/components/FinalCTA.tsx`
- [ ] Add `'use client';` to `src/components/Footer.tsx`
- [ ] Add `'use client';` to `src/components/ServiceModal.tsx`

### Phase 4: Header Component
- [ ] Backup original Header:
  ```bash
  cp src/components/Header.tsx src/components/Header-react-backup.tsx
  ```
- [ ] Copy new Header:
  ```bash
  cp src/components/Header-next.tsx src/components/Header.tsx
  ```
- [ ] Add language styles:
  ```bash
  cat src/components/Header-language.css >> src/components/Header.css
  ```
- [ ] Test header renders without errors

### Phase 5: Image Optimization (Optional but Recommended)
- [ ] Replace `<img>` with `<Image>` in Hero component
- [ ] Replace `<img>` with `<Image>` in About component
- [ ] Replace `<img>` with `<Image>` in Portfolio component
- [ ] Replace `<img>` with `<Image>` in Services component
- [ ] Add width/height props to all images

---

## 🌐 Configuration

### Phase 6: Site Configuration
- [ ] Update SITE_URL in `app/layout.tsx`
- [ ] Update SITE_URL in `app/work/page.tsx`
- [ ] Update SITE_URL in `app/services/page.tsx`
- [ ] Update SITE_URL in `app/journey/page.tsx`
- [ ] Update SITE_URL in `app/about/page.tsx`
- [ ] Update SITE_URL in `app/contact/page.tsx`
- [ ] Update SITE_URL in `app/sitemap.ts`
- [ ] Update SITE_URL in `app/robots.ts`

### Phase 7: Social Links & Personal Info
- [ ] Add LinkedIn URL in `app/layout.tsx` JSON-LD
- [ ] Add Instagram URL in `app/layout.tsx` JSON-LD (if applicable)
- [ ] Add Twitter handle in metadata (if applicable)
- [ ] Add email in contact page JSON-LD
- [ ] Add phone number in contact page JSON-LD (optional)

### Phase 8: TypeScript Configuration
- [ ] Open `tsconfig.json`
- [ ] Verify `baseUrl: "."` exists
- [ ] Verify path alias `"@/*": ["./*"]` exists
- [ ] Add if missing and save

---

## 🖼️ Assets

### Phase 9: Create Images
- [ ] Create `public/og-image.jpg` (1200x630px) - Homepage
- [ ] Create `public/og-work.jpg` (1200x630px) - Work page
- [ ] Create `public/og-services.jpg` (1200x630px) - Services
- [ ] Create `public/og-journey.jpg` (1200x630px) - Journey
- [ ] Create `public/og-about.jpg` (1200x630px) - About
- [ ] Create `public/og-contact.jpg` (1200x630px) - Contact
- [ ] Create `public/profile-image.jpg` - Your photo for schema
- [ ] Optimize all images (compress without quality loss)

---

## 🌍 Translations

### Phase 10: English (EN)
- [ ] Open `locales/en/common.json`
- [ ] Update `hero.title` with your actual hero title
- [ ] Update `hero.description` with your description
- [ ] Update all service names
- [ ] Update footer text
- [ ] Add any missing keys

### Phase 11: Arabic (AR)
- [ ] Open `locales/ar/common.json`
- [ ] Translate or get translations for all keys
- [ ] Verify RTL text reads correctly
- [ ] Test Arabic layout

### Phase 12: Other Languages
- [ ] Translate Russian (`locales/ru/common.json`)
- [ ] Translate Chinese (`locales/zh/common.json`)
- [ ] Translate Spanish (`locales/es/common.json`)
- [ ] Or remove languages you don't need from:
  - `lib/i18n/LanguageContext.tsx`
  - `src/components/Header-next.tsx`

---

## 🧪 Testing

### Phase 13: Local Testing
- [ ] Start dev server: `npm run dev`
- [ ] Test homepage loads: `http://localhost:3000/`
- [ ] Test work page: `http://localhost:3000/work`
- [ ] Test services page: `http://localhost:3000/services`
- [ ] Test journey page: `http://localhost:3000/journey`
- [ ] Test about page: `http://localhost:3000/about`
- [ ] Test contact page: `http://localhost:3000/contact`
- [ ] Test sitemap: `http://localhost:3000/sitemap.xml`
- [ ] Test robots: `http://localhost:3000/robots.txt`

### Phase 14: Feature Testing
- [ ] Test language switcher (EN → AR → RU → ZH → ES)
- [ ] Verify language preference persists on reload
- [ ] Test theme toggle (Light ↔ Dark)
- [ ] Verify theme persists on reload
- [ ] Test language auto-detection popup
- [ ] Test Arabic RTL layout
- [ ] Test navigation between pages
- [ ] Test smooth scroll (if any anchor links)
- [ ] Test all animations work
- [ ] Test on mobile viewport (responsive)

### Phase 15: Build Testing
- [ ] Run: `npm run build`
- [ ] Check build completes without errors
- [ ] Check for warnings and fix if critical
- [ ] Run: `npm run start`
- [ ] Test production build locally
- [ ] Verify everything works in production mode

---

## 🔍 SEO Validation

### Phase 16: Metadata Check
- [ ] View source on homepage
- [ ] Verify unique `<title>` tag present
- [ ] Verify meta description present
- [ ] Verify Open Graph tags present
- [ ] Verify Twitter Card tags present
- [ ] Verify canonical URL correct
- [ ] Repeat for all 6 pages

### Phase 17: Structured Data
- [ ] Copy page source from homepage
- [ ] Paste into: https://validator.schema.org/
- [ ] Verify Person schema is valid
- [ ] Verify WebSite schema is valid
- [ ] Fix any errors shown
- [ ] Test work page structured data
- [ ] Test services page structured data

### Phase 18: Rich Results
- [ ] Go to: https://search.google.com/test/rich-results
- [ ] Test your homepage URL
- [ ] Verify eligible for rich results
- [ ] Check any warnings
- [ ] Fix issues if any

### Phase 19: Social Sharing
- [ ] Go to: https://www.opengraph.xyz/
- [ ] Test homepage URL
- [ ] Verify OG image displays
- [ ] Verify title and description correct
- [ ] Test on LinkedIn post preview
- [ ] Test on Facebook sharing debugger

---

## 🚀 Deployment

### Phase 20: Pre-deployment
- [ ] Create `.env.local` with production URL
- [ ] Test final build: `npm run build`
- [ ] Verify no console errors
- [ ] Commit all changes to git:
  ```bash
  git add .
  git commit -m "feat: Migrate to Next.js with SEO"
  ```

### Phase 21: Deploy to Vercel
- [ ] Push to GitHub: `git push origin main`
- [ ] Go to: https://vercel.com/new
- [ ] Import your repository
- [ ] Verify framework: Next.js (auto-detected)
- [ ] Click "Deploy"
- [ ] Wait for deployment (~2-3 min)
- [ ] Visit deployed URL
- [ ] Test all routes on live site

### Phase 22: Custom Domain (if applicable)
- [ ] Add custom domain in Vercel dashboard
- [ ] Update DNS records at domain registrar
- [ ] Wait for SSL certificate (~10 min)
- [ ] Verify HTTPS works
- [ ] Update SITE_URL in all files to your domain
- [ ] Redeploy

---

## 📊 Post-Launch

### Phase 23: Performance
- [ ] Open site in Chrome
- [ ] Open DevTools (F12)
- [ ] Go to Lighthouse tab
- [ ] Run audit (Desktop)
- [ ] Verify Performance: 90+
- [ ] Verify Accessibility: 90+
- [ ] Verify Best Practices: 90+
- [ ] Verify SEO: 90+
- [ ] Run audit (Mobile)
- [ ] Fix any issues scoring below 90

### Phase 24: Search Console
- [ ] Go to: https://search.google.com/search-console
- [ ] Add property (your domain)
- [ ] Verify ownership (HTML file or DNS)
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Wait 24-48 hours for indexing

### Phase 25: Monitoring
- [ ] Set up Google Analytics (optional)
- [ ] Set up Vercel Analytics (built-in)
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Check indexing status weekly
- [ ] Monitor traffic and rankings

---

## 🎨 Polish (Optional)

### Phase 26: Enhancements
- [ ] Add custom 404 page (`app/not-found.tsx`)
- [ ] Add loading states (`app/loading.tsx`)
- [ ] Add error boundaries (`app/error.tsx`)
- [ ] Implement contact form API route
- [ ] Add form validation
- [ ] Add honeypot field for spam protection
- [ ] Add reCAPTCHA (if needed)
- [ ] Add newsletter signup (if applicable)

### Phase 27: More Languages (if needed)
- [ ] Add French translations
- [ ] Add German translations
- [ ] Add Japanese translations
- [ ] Update language selector
- [ ] Test all new languages

### Phase 28: Advanced SEO
- [ ] Add breadcrumbs with schema
- [ ] Add FAQ schema (if applicable)
- [ ] Add review schema (if you have testimonials)
- [ ] Add video schema (if you have video content)
- [ ] Set up Google My Business (for local SEO)
- [ ] Create backlinks strategy

---

## ✅ Final Verification

### Phase 29: Complete Check
- [ ] All routes work perfectly
- [ ] All languages translate correctly
- [ ] Theme switches work
- [ ] All images load
- [ ] No console errors
- [ ] Mobile view looks perfect
- [ ] Tablet view looks perfect
- [ ] Desktop view looks perfect
- [ ] All animations smooth
- [ ] Contact form works (if implemented)
- [ ] Lighthouse score 90+ all categories
- [ ] Sitemap indexed by Google
- [ ] Rich results eligible
- [ ] Site loads in < 3 seconds

### Phase 30: Documentation
- [ ] Update README with new deployment URL
- [ ] Document any custom changes you made
- [ ] Note any issues encountered and solutions
- [ ] Save credentials safely (Vercel, etc.)
- [ ] Create maintenance schedule
- [ ] Plan content updates

---

## 🎉 Success!

Once all items are checked:
- ✅ Your site is fully migrated to Next.js
- ✅ SEO is optimized for search engines
- ✅ Multi-language support is active
- ✅ Performance is excellent
- ✅ You're production-ready!

---

## 📈 Ongoing Tasks (Monthly)

- [ ] Check Google Search Console for issues
- [ ] Review Core Web Vitals
- [ ] Update content regularly
- [ ] Add new portfolio items
- [ ] Check broken links
- [ ] Update dependencies: `npm update`
- [ ] Monitor site speed
- [ ] Review analytics data
- [ ] Refresh OG images if needed
- [ ] Update translations if content changes

---

**Track your progress:**
- Phases completed: _____ / 30
- Estimated time: 4-8 hours (depending on your pace)
- Difficulty: Intermediate

**Need help?**
- Check `MIGRATION_GUIDE.md` for details
- Check `QUICK_START.md` for commands
- Check `README-NEXT.md` for documentation

---

*Keep this checklist and mark your progress!*  
*Good luck with the migration! 🚀*
