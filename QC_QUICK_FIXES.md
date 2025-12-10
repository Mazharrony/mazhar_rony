# 🚨 QC Quick Fixes - Priority Actions

## 🔴 CRITICAL - Fix Immediately

### 1. API Route Security (`app/api/brief/route.ts`)

**Add input validation:**
```typescript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }
    
    const { name, email, message } = validation.data;
    
    // Validate environment variable
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
      );
    }
    
    // ... rest of code
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json(
      { error: 'Unable to process request' },
      { status: 500 }
    );
  }
}
```

**Install zod:**
```bash
npm install zod
```

---

### 2. Add Error Boundary (`app/error-boundary.tsx`)

```typescript
'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page or contact support.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

**Update `app/layout.tsx`:**
```typescript
import { ErrorBoundary } from './error-boundary';

// Wrap children in ErrorBoundary
<ErrorBoundary>
  <LanguageProvider>
    {/* ... rest */}
  </LanguageProvider>
</ErrorBoundary>
```

---

### 3. Fix TypeScript `any` Types

**File: `src/components/Contact.tsx`**
```typescript
// Replace line 14:
// const [brief, setBrief] = useState<any>(null);

interface Brief {
  projectType?: string;
  deliverables?: string[];
  urgency?: 'low' | 'normal' | 'high';
  constraints?: string;
}

const [brief, setBrief] = useState<Brief | null>(null);
```

**File: `lib/i18n/LanguageProvider.tsx`**
```typescript
// Replace line 36:
// const [translations, setTranslations] = useState<Record<Language, any>>({

type TranslationObject = Record<string, string | TranslationObject>;
const [translations, setTranslations] = useState<Record<Language, TranslationObject>>({
  // ...
});
```

---

### 4. Add Form Validation (`src/components/Contact.tsx`)

```typescript
const [errors, setErrors] = useState<Record<string, string>>({});

const validateForm = (name: string, email: string, message: string): boolean => {
  const newErrors: Record<string, string> = {};
  
  if (!name || name.trim().length < 2) {
    newErrors.name = 'Name must be at least 2 characters';
  }
  
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = 'Please enter a valid email address';
  }
  
  if (!message || message.trim().length < 10) {
    newErrors.message = 'Message must be at least 10 characters';
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const formData = new FormData(e.target as HTMLFormElement);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  if (!validateForm(name, email, message)) {
    return;
  }
  
  // ... rest of submission logic
};
```

**Add error display in form:**
```typescript
{errors.name && <span className="error">{errors.name}</span>}
{errors.email && <span className="error">{errors.email}</span>}
{errors.message && <span className="error">{errors.message}</span>}
```

**Add honeypot field:**
```typescript
{/* Honeypot for spam protection */}
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
/>
```

---

### 5. Remove Console Statements

**File: `lib/i18n/LanguageProvider.tsx`**
```typescript
// Replace line 66:
// console.error('Failed to load translations:', error);

if (process.env.NODE_ENV === 'development') {
  console.error('Failed to load translations:', error);
}
// Or use proper logging service
```

---

## 🟡 HIGH PRIORITY - Fix Soon

### 6. Use Environment Variable for SITE_URL

**Create `.env.local`:**
```bash
NEXT_PUBLIC_SITE_URL=https://mazharrony.vercel.app
OPENAI_API_KEY=your_key_here
```

**Update all files with SITE_URL:**
```typescript
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mazharrony.vercel.app';
```

**Files to update:**
- `app/layout.tsx`
- `app/contact/page.tsx`
- `app/services/page.tsx`
- `app/work/page.tsx`
- `app/journey/page.tsx`
- `app/about/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

---

### 7. Remove Unused Dependencies

```bash
npm uninstall react-scripts
```

---

### 8. Add Rate Limiting

**Install:**
```bash
npm install next-rate-limit
```

**Add to `app/api/brief/route.ts`:**
```typescript
import rateLimit from 'next-rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function POST(req: NextRequest) {
  try {
    await limiter.check(req, 5); // 5 requests per minute
    
    // ... rest of code
  } catch {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }
}
```

---

## ✅ Quick Wins (5 minutes each)

1. **Add missing alt text to images** - Check all `<img>` tags
2. **Add ARIA labels** - Check icon-only buttons
3. **Update package.json** - Remove react-scripts
4. **Add .env.local to .gitignore** - Already done ✅
5. **Add error messages to API** - Improve user feedback

---

## 📋 Testing Checklist

After fixes, test:
- [ ] API route with invalid input
- [ ] API route with missing API key
- [ ] Form validation works
- [ ] Error boundary catches errors
- [ ] Rate limiting works
- [ ] No console errors in production build

---

**Estimated Time to Fix Critical Issues:** 2-3 hours  
**Estimated Time to Fix High Priority Issues:** 1-2 hours

