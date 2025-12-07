# 🚀 Mazhar Rony Portfolio - Next.js Edition

A professional, SEO-optimized portfolio website built with Next.js 15, featuring multi-language support, dark mode, and modern animations.

## ✨ Features

### 🎯 Core Features
- ⚡ **Next.js 15** with App Router
- 🎨 **Modern UI** with Framer Motion animations
- 🌐 **Multi-language** support (EN, AR, RU, ZH, ES)
- 🌓 **Dark/Light** theme with persistence
- 📱 **Fully Responsive** design
- ♿ **Accessible** (WCAG compliant)

### 🔍 SEO Features
- 🎯 **Server-Side Rendering** (SSR)
- 📊 **Structured Data** (JSON-LD schema.org)
- 🗺️ **Dynamic Sitemap** generation
- 🤖 **Robots.txt** configuration
- 🖼️ **Open Graph** tags for social sharing
- 🐦 **Twitter Cards** support
- 🔗 **Canonical URLs** for all pages
- ⚡ **Core Web Vitals** optimized

### 🌍 Internationalization (i18n)
- Auto-detect browser language
- One-time confirmation popup
- Language preference saved in cookies
- RTL support for Arabic
- Professional translations included

## 📁 Project Structure

```
mazhar_rony/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage (all sections)
│   ├── work/                # Portfolio page
│   ├── services/            # Services page
│   ├── journey/             # Experience timeline
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── src/
│   ├── components/          # React components
│   │   ├── Header-next.tsx  # Updated header with i18n
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   └── ...
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
├── lib/
│   ├── i18n/
│   │   ├── LanguageContext.tsx    # Language provider
│   │   └── LanguageDetector.tsx   # Auto-detection
│   └── ThemeContext.tsx            # Theme provider
├── locales/
│   ├── en/common.json       # English translations
│   ├── ar/common.json       # Arabic translations
│   ├── ru/common.json       # Russian translations
│   ├── zh/common.json       # Chinese translations
│   └── es/common.json       # Spanish translations
├── public/                   # Static assets
│   ├── og-image.jpg         # Open Graph image
│   └── ...
├── next.config.mjs          # Next.js configuration
└── package-next.json        # Updated dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Backup your current setup**
   ```bash
   cp package.json package-react-backup.json
   ```

2. **Install Next.js dependencies**
   ```bash
   cp package-next.json package.json
   npm install
   ```

3. **Update your components**
   - Add `'use client'` to components using hooks/animations
   - Replace `src/components/Header.tsx` with `src/components/Header-next.tsx`
   - Update imports to use Next.js components (`next/link`, `next/image`)

4. **Configure your site**
   - Update `SITE_URL` in `app/layout.tsx` and all page files
   - Add your social media links to JSON-LD schema
   - Create OG images (1200x630px) for each page

5. **Fill in translations**
   - Update files in `locales/*/common.json` with your actual content
   - Use the `t()` function in components to access translations

### Development

```bash
# Start development server
npm run dev

# Visit http://localhost:3000
```

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 🌐 Routes

| Route | Description | SEO Focus |
|-------|-------------|-----------|
| `/` | Homepage with all sections | Brand, services overview |
| `/work` | Full portfolio gallery | Project showcase |
| `/services` | Detailed services | Service descriptions, keywords |
| `/journey` | Professional experience | Career timeline |
| `/about` | Full story and bio | Personal brand |
| `/contact` | Contact form | Lead generation |

## 🔧 Configuration

### Site URL
Update in `app/layout.tsx` and all route pages:
```tsx
const SITE_URL = 'https://your-domain.com';
```

### Social Links
Update JSON-LD in `app/layout.tsx`:
```tsx
sameAs: [
  'https://www.linkedin.com/in/yourprofile',
  'https://www.instagram.com/yourprofile',
]
```

### Language Detection
Customize in `lib/i18n/LanguageDetector.tsx`:
```tsx
const languageMap: Record<string, Language> = {
  'en': 'en',
  'ar': 'ar',
  // Add more mappings
};
```

## 🎨 Theming

The site supports light and dark modes:
- Automatic system preference detection
- Manual toggle in header
- Preference saved in localStorage

To customize colors, edit CSS variables in `src/App.css`:
```css
:root {
  --accent-primary: #6366f1;
  --bg-primary: #ffffff;
  /* ... */
}

.dark {
  --bg-primary: #0a0a0a;
  /* ... */
}
```

## 🌍 Adding a New Language

1. **Create translation file**
   ```bash
   cp locales/en/common.json locales/fr/common.json
   ```

2. **Translate content**
   ```json
   {
     "nav.home": "Accueil",
     "nav.work": "Travaux",
     ...
   }
   ```

3. **Add to language list**
   In `lib/i18n/LanguageContext.tsx`:
   ```tsx
   export type Language = 'en' | 'ar' | 'ru' | 'zh' | 'es' | 'fr';
   ```

4. **Update language selector**
   In `src/components/Header-next.tsx`:
   ```tsx
   const languages = [
     ...
     { code: 'fr', label: 'FR', name: 'Français' },
   ];
   ```

## 📊 SEO Validation

### Test Your Site

1. **Structured Data**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema Markup Validator](https://validator.schema.org/)

2. **Open Graph**
   - [OpenGraph Preview](https://www.opengraph.xyz/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Performance**
   - Run Lighthouse in Chrome DevTools
   - Aim for 90+ scores in all categories

4. **Mobile Friendly**
   - [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Submit to Search Engines

1. **Google Search Console**
   - Add property
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Monitor indexing

2. **Bing Webmaster Tools**
   - Verify site
   - Submit sitemap

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Configure**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**
   Add in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

### Other Platforms

The site can be deployed to:
- **Netlify**: Add `netlify.toml` configuration
- **AWS Amplify**: Connect GitHub repository
- **Docker**: Use official Next.js Docker image

## 📈 Performance Optimizations

✅ **Implemented:**
- Automatic code splitting
- Image optimization with Next.js Image
- Font optimization with next/font
- Server-side rendering for better FCP
- Static generation where possible
- Lazy loading for below-the-fold content

🔄 **Additional Recommendations:**
- Use CDN for static assets
- Enable compression (gzip/brotli)
- Implement service worker for offline support
- Add analytics (Google Analytics, Vercel Analytics)

## 🐛 Troubleshooting

### Common Issues

**"Module not found" errors**
- Ensure `@/` path alias is configured in `tsconfig.json`
- Check import paths are correct

**Hydration errors**
- Add `'use client'` to components using browser APIs
- Ensure server and client render the same content initially

**Images not loading**
- Add domain to `next.config.mjs` `images.domains`
- Provide width and height for all images

**Animations not working**
- Framer Motion requires `'use client'` directive
- Check browser console for errors

## 📚 Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS3, CSS Modules
- **Animations**: Framer Motion, GSAP
- **Icons**: SimpleIcons CDN
- **i18n**: Custom Context-based solution
- **State**: React Context API
- **Storage**: Cookies (js-cookie), localStorage

## 📝 License

This is a personal portfolio project. All rights reserved.

## 👨‍💼 About

**Mazhar Rony**  
Creative Digital Specialist  
Dubai, UAE

📧 [Contact](https://mazharrony.vercel.app/contact)  
💼 [LinkedIn](#) <!-- Add your LinkedIn URL -->  
📷 [Instagram](#) <!-- Add your Instagram URL -->

---

Built with ❤️ using Next.js
