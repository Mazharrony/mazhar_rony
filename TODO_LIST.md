# 📝 TODO Comments - What You Need To Fill In

This file lists all the TODO comments in the codebase that need your attention.

---

## 🌐 Site URLs (CRITICAL - Update First!)

### File: `app/layout.tsx` (Line ~17)
```tsx
// TODO: Replace with your actual production URL
const SITE_URL = 'https://mazharrony.vercel.app';
```
**Action**: Change to your actual domain (e.g., `https://yourdomain.com`)

---

### Files to Update (Same TODO):
- `app/work/page.tsx` (Line ~3)
- `app/services/page.tsx` (Line ~3)
- `app/journey/page.tsx` (Line ~3)
- `app/about/page.tsx` (Line ~3)
- `app/contact/page.tsx` (Line ~3)
- `app/sitemap.ts` (Line ~3)
- `app/robots.ts` (Line ~3)

**Quick Fix Command**:
```bash
# Replace all at once (macOS/Linux)
find app -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's|https://mazharrony.vercel.app|https://YOUR-DOMAIN.com|g' {} +
```

---

## 🖼️ Images (HIGH PRIORITY)

### File: `app/layout.tsx` (Line ~38)
```tsx
// TODO: Add your actual OG image URL
images: [{
  url: `${SITE_URL}/og-image.jpg`,
  // ...
}],
```
**Action**: Create `public/og-image.jpg` (1200x630px) with your branding

---

### File: `app/layout.tsx` (Line ~47)
```tsx
// TODO: Add your actual OG image URL
images: [`${SITE_URL}/og-image.jpg`],
```
**Action**: Same as above, ensure the image exists

---

### File: `app/layout.tsx` (Line ~49)
```tsx
// TODO: Add your Twitter handle if applicable
// creator: '@yourhandle',
```
**Action**: Uncomment and add your Twitter username if you have one

---

### File: `app/layout.tsx` (Line ~81)
```tsx
image: `${SITE_URL}/profile-image.jpg`, // TODO: Add your profile image
```
**Action**: Create `public/profile-image.jpg` with your professional photo

---

### OG Images for Other Pages:
Create these images (1200x630px):
- `app/work/page.tsx` → `public/og-work.jpg`
- `app/services/page.tsx` → `public/og-services.jpg`
- `app/journey/page.tsx` → `public/og-journey.jpg`
- `app/about/page.tsx` → `public/og-about.jpg`
- `app/contact/page.tsx` → `public/og-contact.jpg`

---

## 🔗 Social Media Links (IMPORTANT)

### File: `app/layout.tsx` (Line ~91-95)
```tsx
// TODO: Add your actual social media URLs
sameAs: [
  // 'https://www.linkedin.com/in/yourprofile',
  // 'https://www.instagram.com/yourprofile',
  // 'https://github.com/yourprofile',
]
```
**Action**: 
1. Uncomment the lines
2. Replace with your actual profile URLs
3. Add more platforms if needed (Behance, Dribbble, etc.)

Example:
```tsx
sameAs: [
  'https://www.linkedin.com/in/mazharrony',
  'https://www.instagram.com/mazharrony',
  'https://www.behance.net/mazharrony',
]
```

---

## 📧 Contact Information

### File: `app/contact/page.tsx` (Line ~51-53)
```tsx
// TODO: Add your actual contact information
// telephone: '+971-XXX-XXX-XXXX',
// email: 'your@email.com',
```
**Action**: 
1. Uncomment these lines
2. Add your real phone number and email
3. Format: International phone format

Example:
```tsx
telephone: '+971-50-123-4567',
email: 'mazhar@example.com',
```

---

## 📁 Portfolio Projects

### File: `app/work/page.tsx` (Line ~39-51)
```tsx
// TODO: Add your actual projects here
{
  '@type': 'CreativeWork',
  name: 'Brand Identity Project',
  description: 'Complete branding solution for a Dubai-based business',
  creator: {
    '@type': 'Person',
    name: 'Mazhar Rony'
  },
  // image: 'URL to project image',
  // url: 'URL to case study if applicable',
},
// Add more projects...
```
**Action**: 
1. Replace placeholder project
2. Add your actual portfolio items
3. Include project images and case study URLs if available

Example:
```tsx
{
  '@type': 'CreativeWork',
  name: 'JNK Nutrition Brand Campaign',
  description: 'Complete social media strategy and content creation for fitness supplement brand',
  creator: {
    '@type': 'Person',
    name: 'Mazhar Rony'
  },
  image: `${SITE_URL}/projects/jnk-nutrition.jpg`,
  url: `${SITE_URL}/work/jnk-nutrition`,
  dateCreated: '2024-05-01'
},
```

---

## 📄 Page Content

### File: `app/work/page.tsx` (Line ~60-65)
```tsx
{/* 
  NOTE: Import and use your Portfolio component here
  Or create a full-page version with more detailed project views
*/}
<p>Full portfolio page coming soon. For now, see the work section on the homepage.</p>
```
**Action**: Replace placeholder with actual Portfolio component

Example:
```tsx
'use client';

import Portfolio from '@/src/components/Portfolio';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function WorkPage() {
  const { t } = useLanguage();
  
  return (
    <section id="work">
      <h1>{t('work.title')}</h1>
      <Portfolio />
    </section>
  );
}
```

---

### Similar placeholders in:
- `app/services/page.tsx` (Line ~107)
- `app/journey/page.tsx` (Line ~35)
- `app/about/page.tsx` (Line ~35)
- `app/contact/page.tsx` (Line ~51)

**Action**: Import and use your existing components or create full-page versions

---

## 🌍 Translations

### Files: All `locales/*/common.json` files

Current status: Placeholder translations provided

**Action**: Review and update with your actual content in each language:

1. **English** (`locales/en/common.json`): ✅ Base language
2. **Arabic** (`locales/ar/common.json`): 🔄 Verify translations
3. **Russian** (`locales/ru/common.json`): 🔄 Verify translations
4. **Chinese** (`locales/zh/common.json`): 🔄 Verify translations
5. **Spanish** (`locales/es/common.json`): 🔄 Verify translations

Add more keys as needed:
```json
{
  "work.title": "My Work",
  "work.description": "Explore my portfolio",
  "services.detail.marketing": "Professional marketing services",
  // Add any strings your components need
}
```

---

## 🎨 Accessibility

### Throughout Components

**Action**: Add meaningful alt text to images

❌ **Bad**:
```tsx
<Image src="/project.jpg" alt="image1" />
```

✅ **Good**:
```tsx
<Image 
  src="/project.jpg" 
  alt="Brand identity design for JNK Nutrition featuring modern logo, packaging, and color palette" 
  width={800}
  height={600}
/>
```

---

### Form Elements

**Action**: Add proper labels and ARIA attributes

Example in contact form:
```tsx
<form>
  <label htmlFor="name">{t('contact.name')}</label>
  <input 
    id="name"
    name="name"
    type="text"
    required
    aria-required="true"
    aria-label="Your full name"
  />
  
  {/* Honeypot for spam protection */}
  <input 
    type="text"
    name="website"
    style={{ display: 'none' }}
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
  />
</form>
```

---

## 🔒 Environment Variables

### File: Create `.env.local`

**Action**: Create this file with sensitive data

```bash
# .env.local (DON'T commit to git!)
NEXT_PUBLIC_SITE_URL=https://mazharrony.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Add more as needed
```

Then update `.gitignore`:
```
.env.local
```

---

## 📊 Analytics (Optional)

### File: `app/layout.tsx`

**Action**: Add Google Analytics or Vercel Analytics

For Google Analytics:
```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🚀 Deployment Configuration

### File: Create `vercel.json` (optional)

**Action**: Add Vercel-specific configuration if needed

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "redirects": [
    {
      "source": "/old-portfolio",
      "destination": "/work",
      "permanent": true
    }
  ]
}
```

---

## 📋 Summary of TODOs by Priority

### 🔴 CRITICAL (Must Do Before Launch)
1. ✅ Update SITE_URL in all 8 files
2. ✅ Create all OG images (7 images, 1200x630px)
3. ✅ Fill translation files with actual content
4. ✅ Add social media links to JSON-LD

### 🟡 HIGH PRIORITY (Should Do Soon)
5. ✅ Add contact information (email, phone)
6. ✅ Replace page placeholders with real components
7. ✅ Add portfolio projects to structured data
8. ✅ Add meaningful alt text to all images
9. ✅ Create profile image for Person schema

### 🟢 MEDIUM PRIORITY (Nice to Have)
10. ✅ Add Google Analytics
11. ✅ Create custom 404 page
12. ✅ Add more translation keys as needed
13. ✅ Set up environment variables
14. ✅ Add Twitter handle (if applicable)

### ⚪ LOW PRIORITY (Optional)
15. ✅ Add more languages
16. ✅ Create Vercel configuration
17. ✅ Add more social profiles
18. ✅ Expand JSON-LD schemas

---

## 🔍 Quick Search Commands

Find all TODOs in your codebase:

```bash
# Search for TODO comments
grep -r "TODO" app/ lib/ src/

# Count TODOs
grep -r "TODO" app/ lib/ src/ | wc -l

# Search specific file types
find . -name "*.tsx" -o -name "*.ts" | xargs grep "TODO"
```

---

## ✅ Completion Tracking

Mark these as you complete them:

- [ ] Updated all SITE_URL references (8 files)
- [ ] Created og-image.jpg
- [ ] Created og-work.jpg
- [ ] Created og-services.jpg
- [ ] Created og-journey.jpg
- [ ] Created og-about.jpg
- [ ] Created og-contact.jpg
- [ ] Created profile-image.jpg
- [ ] Added social media links
- [ ] Added email address
- [ ] Added phone number
- [ ] Filled English translations
- [ ] Verified Arabic translations
- [ ] Verified Russian translations
- [ ] Verified Chinese translations
- [ ] Verified Spanish translations
- [ ] Replaced work page placeholder
- [ ] Replaced services page placeholder
- [ ] Replaced journey page placeholder
- [ ] Replaced about page placeholder
- [ ] Replaced contact page placeholder
- [ ] Added portfolio projects to schema
- [ ] Added meaningful image alt texts
- [ ] Added Google Analytics (optional)
- [ ] Created .env.local file

---

**Total TODOs**: ~25 items  
**Estimated Time**: 2-4 hours  
**Difficulty**: Easy to Moderate  

Most TODOs are straightforward content updates. The technical setup is already complete!

---

*Use this file as a reference while completing the migration.*  
*Cross-reference with CHECKLIST.md for the full workflow.*
