# 📱 Quick Responsive Reference Card

## Header Height Scaling
```
┌─────────────────────────────────────────────────────┐
│                   SCROLL POSITION                    │
├─────────────────────────────────────────────────────┤
│ DEVICE          │  DEFAULT  │  SCROLLED  │  RATIO   │
├─────────────────────────────────────────────────────┤
│ Small Mobile    │  56px     │  52px      │  93%     │
│ Med Mobile      │  60px     │  54px      │  90%     │
│ Small Tablet    │  64px     │  56px      │  88%     │
│ Large Tablet    │  72px     │  64px      │  89%     │
│ Desktop         │  76px     │  64px      │  84%     │
│ Large Desktop   │  80px     │  60px      │  75%     │
└─────────────────────────────────────────────────────┘

Scroll Trigger: scrollY > 20px
Transition Speed: 0.3s cubic-bezier(0.22, 1, 0.36, 1)
```

## Footer Padding Progression
```
┌──────────────────────────────────────────────────┐
│              PADDING SCALE BY DEVICE               │
├──────────────────────────────────────────────────┤
│ DEVICE          │ TOP/BOTTOM │ LEFT/RIGHT │ GAPS  │
├──────────────────────────────────────────────────┤
│ Small Mobile    │ 40px       │ 16px       │ 32px  │
│ Med Mobile      │ 44px       │ 20px       │ 36px  │
│ Small Tablet    │ 48px       │ 24px       │ 40px  │
│ Large Tablet    │ 56px       │ 32px       │ 44px  │
│ Desktop         │ 60px       │ 36px       │ 50px  │
│ Large Desktop   │ 64px       │ 40px       │ 60px  │
└──────────────────────────────────────────────────┘
```

## Navigation Display Logic
```
SCREEN WIDTH         │ HEADER NAV      │ MOBILE MENU
─────────────────────┼─────────────────┼────────────────
320px - 767px        │ ✗ HIDDEN        │ ✓ HAMBURGER
768px+               │ ✓ VISIBLE       │ ✗ HIDDEN
                     │ (5 nav links)   │ (auto-closes)
```

## Responsive Font Sizes
```
COMPONENT          │ SMALL MOBILE │ TABLET  │ DESKTOP
──────────────────┼──────────────┼─────────┼─────────
Header Brand      │ 16px (600)   │ 18px    │ 20px
Nav Links         │ -            │ 13px    │ 14px
Language Select   │ 11px         │ 11px    │ 12px
Footer Tagline    │ 14px (500)   │ 15px    │ 16px (500)
Footer Links      │ 12px         │ 13px    │ 14px
Footer Location   │ 10px         │ 11px    │ 12px
```

## Touch Target Sizes (Mobile Accessibility)
```
ELEMENT              │ RECOMMENDED │ CURRENT
────────────────────┼─────────────┼──────────
Language Toggle     │ 44x44px     │ 36x36px (≥44px goal)
Theme Toggle        │ 44x44px     │ 36x36px (≥44px goal)
Hamburger Menu      │ 44x44px     │ 36x36px (≥44px goal)
CTA Button          │ 44x44px     │ 36px tall (responsive)
Nav Links (Mobile)  │ 44x44px min │ 36px tall spacing
```

## Container Max-Width
```
BREAKPOINT      │ CONTAINER WIDTH │ PADDING │ USE CASE
────────────────┼─────────────────┼─────────┼──────────────────
< 768px         │ 100% - padding  │ 16-24px │ Full width mobile
768px - 1439px  │ 100% - padding  │ 32-36px │ Tablet/Desktop
≥ 1440px        │ 1400px max      │ 40px    │ Ultra-wide screens
```

## Color Variables (Used in Responsive Design)
```
LIGHT MODE              │ DARK MODE
────────────────────────┼──────────────────────
--bg-primary: #FFFFFF   │ --bg-primary: #1A1A1A
--bg-secondary: #F5F5F5 │ --bg-secondary: #2A2A2A
--text-primary: #000000 │ --text-primary: #FFFFFF
--text-secondary: #666  │ --text-secondary: #999
--border-color: #E0E0E0 │ --border-color: #333
```

## Breakpoint Query Syntax
```CSS
/* Small Mobile */
@media (max-width: 479px) { }

/* Medium Mobile */
@media (min-width: 480px) and (max-width: 639px) { }

/* Small Tablet */
@media (min-width: 640px) and (max-width: 767px) { }

/* Large Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) and (max-width: 1439px) { }

/* Large Desktop */
@media (min-width: 1440px) { }

/* Desktop Navigation Show */
@media (min-width: 768px) {
  .nav-desktop { display: flex; }
}

/* Mobile Menu Hide on Desktop */
@media (min-width: 768px) {
  .mobile-menu { display: none !important; }
}
```

## JavaScript Window Width Detection
```javascript
// NEW in Header.tsx
const [windowWidth, setWindowWidth] = useState<number>(0);

useEffect(() => {
  // Set initial width
  setWindowWidth(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  window.addEventListener('resize', handleResize, { passive: true });
  return () => window.removeEventListener('resize', handleResize);
}, [mobileMenuOpen]);
```

## Performance Metrics
```
METRIC                  │ VALUE        │ STATUS
────────────────────────┼──────────────┼────────
Scroll Listener         │ Passive: Yes │ ✓ No blocking
Resize Listener         │ Passive: Yes │ ✓ No blocking
Animations              │ GPU accel.   │ ✓ Smooth
Layout Thrashing        │ None         │ ✓ Optimized
CSS Containment         │ Not used yet │ 📋 Future
Container Queries       │ Not used yet │ 📋 Future
```

## Mobile Menu Behavior
```
EVENT                       │ BEHAVIOR
────────────────────────────┼──────────────────────────
User clicks hamburger       │ Menu opens (toggle)
User clicks nav link        │ Closes + navigates
User resizes to 768px       │ Closes automatically
User is on desktop (768px+) │ Hidden by default
```

## Scroll Behavior Animation
```
    scrollY = 0px
         ↓
    Header height = 80px
         ↓
    User scrolls down 20px+
         ↓
    scrollY > 20px (threshold)
         ↓
    Trigger CSS transition
         ↓
    Height animates to 60px
    Duration: 0.3s
    Easing: cubic-bezier(0.22, 1, 0.36, 1)
         ↓
    User scrolls back up to top
         ↓
    Height animates back to 80px
```

## RTL Language Support
```
PROPERTY            │ NORMAL (LTR)      │ RTL (Arabic)
────────────────────┼───────────────────┼──────────────────
flex-direction      │ row               │ row-reverse
border-left         │ left border       │ border-right
padding-left        │ left padding      │ padding-right
nav order           │ left to right     │ right to left

SELECTOR: [dir="rtl"] .element { }
```

## Typical Device Dimensions
```
DEVICE                    │ WIDTH     │ HEIGHT  │ BREAKPOINT
──────────────────────────┼───────────┼─────────┼────────────
iPhone SE                 │ 375px     │ 667px   │ Small Mobile
iPhone 12/13/14/15        │ 390px     │ 844px   │ Small Mobile
iPhone 14/15 Pro Max      │ 430px     │ 932px   │ Med Mobile
Samsung Galaxy S21        │ 360px     │ 800px   │ Small Mobile
Pixel 6                   │ 412px     │ 915px   │ Med Mobile
iPad Mini                 │ 768px     │ 1024px  │ Large Tablet
iPad Air                  │ 820px     │ 1180px  │ Large Tablet
iPad Pro 12.9"            │ 1024px    │ 1366px  │ Desktop
MacBook Air 13"           │ 1440px    │ 900px   │ L. Desktop
Dell Monitor 27"          │ 1920px    │ 1080px  │ L. Desktop
4K Monitor 32"            │ 3840px    │ 2160px  │ L. Desktop
```

## CSS Units Used
```
UNIT    │ PURPOSE                    │ RESPONSIVE?
────────┼────────────────────────────┼────────────
px      │ Fixed sizes (buttons, gaps)│ ✓ Via media queries
rem     │ Font size scaling          │ ✓ With base font
%       │ Flexbox widths             │ ✓ Fluid layout
em      │ Letter spacing, line-height│ ✓ Relative
vh/vw   │ Viewport-relative          │ ✓ Modern
```

## Optimization Tips
```
✓ Use mobile-first approach (start with smallest, add up)
✓ Leverage flexbox for responsive layouts (no floats)
✓ Use CSS variables for theme colors (easy switching)
✓ Avoid fixed widths (use max-width, fluid %s)
✓ Test at actual device widths (not just zoom)
✓ Use passive scroll listeners (no blocking)
✓ Prefer CSS transforms for animations (GPU accel)
✓ Use flex-wrap for responsive item wrapping
✓ Set sensible default for mobile, enhance with media queries
✓ Use gap property for consistent spacing (no margin hacks)
```

---

**Print or bookmark this card for quick reference during development!**
