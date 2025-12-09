# UI Design System & Guidelines
**Mazhar's Portfolio - Universal Design Reference**

## 🎨 Color Palette

### Light Mode
```css
--bg-primary: #ffffff      /* Main background */
--bg-secondary: #f8f8f8    /* Alternate sections */
--bg-card: #ffffff         /* Card backgrounds */
--text-primary: #1a1a1a    /* Main text */
--text-secondary: #666666  /* Secondary text */
--border-color: #e0e0e0    /* Borders & dividers */
```

### Dark Mode
```css
--bg-primary: #0a0a0a      /* Main background */
--bg-secondary: #1a1a1a    /* Alternate sections */
--bg-card: #242424         /* Card backgrounds */
--text-primary: #ffffff    /* Main text */
--text-secondary: #d4d4d4  /* Secondary text */
--border-color: #404040    /* Borders & dividers */
```

### Shadows
```css
--shadow: 0 2px 8px rgba(0, 0, 0, 0.08)        /* Light: default shadow */
--shadow: 0 2px 8px rgba(0, 0, 0, 0.32)        /* Dark: default shadow */
--shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.12) /* Light: hover shadow */
--shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.48) /* Dark: hover shadow */
```

## 🎯 Design Principles

### 1. **Monochrome First**
- **NO colored accents** (no blue, purple, green, etc.)
- Use only: black, white, and gray shades
- Icons must use `currentColor` to inherit text color
- Borders use `var(--border-color)`

### 2. **Hierarchy Through Typography**
```css
h1: 3.5rem (56px) - Main headlines
h2: 2.5rem (40px) - Section headers
h3: 1.5rem (24px) - Subsection headers
p:  1rem (16px)   - Body text
small: 0.9rem (14.4px) - Small text
```

### 3. **Spacing Scale**
```css
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  40px
2xl: 60px
3xl: 80px
4xl: 120px
```

### 4. **Border Radius**
```css
small:  8px  - Buttons, inputs
medium: 12px - Small cards
large:  16px - Large cards, modals
```

## 🎭 Component Patterns

### Cards
```css
background: var(--bg-card)
border: 1.5px solid var(--border-color)
border-radius: 16px
padding: 24px
box-shadow: var(--shadow)
transition: all 0.3s ease

:hover {
  transform: translateY(-4px)
  box-shadow: var(--shadow-hover)
}
```

### Buttons
```css
Primary:
  background: var(--text-primary)
  color: var(--bg-primary)
  padding: 16px 32px
  border-radius: 8px
  font-weight: 600

Secondary:
  background: transparent
  color: var(--text-primary)
  border: 1.5px solid var(--border-color)
```

### Icons
```css
/* ALWAYS use SVG with currentColor */
<svg fill="currentColor">...</svg>

.icon {
  color: var(--text-primary);  /* or var(--text-secondary) */
}
```

### Input Fields
```css
background: var(--bg-primary)
border: 1.5px solid var(--border-color)
border-radius: 8px
padding: 12px 16px
color: var(--text-primary)

:focus {
  border-color: var(--text-primary)
  outline: none
}
```

## ⚡ Animations

### Entrance Animations
```css
/* Fade In Up */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scale In */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Slide In Left */
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
```

### Timing Functions
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--theme-transition-duration: 2000ms
--theme-transition-easing: cubic-bezier(0.25, 0.1, 0.25, 1.0)
```

### Hover Effects
```css
/* Standard hover: lift + shadow */
:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

/* Icon hover: scale + rotate */
:hover {
  transform: scale(1.2) rotate(10deg);
}
```

## 📐 Layout Patterns

### Section Structure
```css
.fold {
  padding: 120px 0;
  background: var(--bg-primary);
}

.fold:nth-child(even) {
  background: var(--bg-secondary);
}
```

### Grid Systems
```css
/* Two-column */
grid-template-columns: 1.2fr 1fr;
gap: 80px;

/* Three-column */
grid-template-columns: repeat(3, 1fr);
gap: 40px;

/* Responsive */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
```

## 🚫 What NOT to Do

❌ **Never use:**
- Colored backgrounds (blue, purple, green gradients)
- Colored icons or accent colors
- Multiple font families
- Box shadows with color (use rgba black only)
- CSS variables with color values (except in :root)

❌ **Avoid:**
```css
/* BAD */
background: linear-gradient(135deg, #6366f1, #a855f7);
color: #3b82f6;
border-left: 4px solid var(--method-color);

/* GOOD */
background: var(--bg-secondary);
color: var(--text-primary);
border-left: 4px solid var(--border-color);
```

## ✅ Quick Reference Checklist

When creating new components:

- [ ] Uses CSS variables from :root (--bg-*, --text-*, --border-color)
- [ ] No hardcoded color values
- [ ] Icons use `fill="currentColor"` or `color: var(--text-primary)`
- [ ] Hover states use transform + shadow (no color change)
- [ ] Spacing follows 4/8/16/24/40/80/120px scale
- [ ] Transitions use cubic-bezier easing
- [ ] Responsive breakpoint at 768px
- [ ] Dark mode compatible (uses CSS variables)
- [ ] Animations are subtle and purposeful
- [ ] Accessible contrast ratios (WCAG AA minimum)

## 🎬 Animation Best Practices

### Scroll Animations (Framer Motion)
```jsx
// Standard entrance
variants={{
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}}

// Parallax scroll
const y = useTransform(scrollY, [0, 1000], [0, -100]);
style={{ y }}
```

### Stagger Children
```jsx
variants={{
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
}}
```

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  font-size: 2rem;
  padding: 60px 0;
  grid-template-columns: 1fr;
}

/* Tablet */
@media (max-width: 1024px) {
  padding: 80px 0;
  gap: 40px;
}

/* Desktop */
@media (min-width: 1025px) {
  /* Default styles */
}
```

---

**Last Updated:** December 9, 2025  
**Version:** 1.0  
**Status:** Active Reference

**Note:** This document is the single source of truth for all UI decisions. Any new component or page must follow these guidelines.
