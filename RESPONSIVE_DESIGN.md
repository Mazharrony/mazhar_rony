# Responsive Design Guide – Header & Footer

## Overview

The Header and Footer components are fully responsive and optimized for all device types and screen sizes. They feature granular breakpoints for small phones, tablets, and desktops with dynamic scaling and layout adjustments.

---

## Breakpoints Overview

| Breakpoint | Device Type | Width Range | Use Case |
|-----------|------------|-------------|----------|
| **Small Mobile** | Phone (small) | 320px – 479px | iPhone SE, older Android |
| **Medium Mobile** | Phone (standard) | 480px – 639px | iPhone 11, Android standard |
| **Small Tablet** | Tablet (small) | 640px – 767px | iPad mini, horizontal phone |
| **Large Tablet** | Tablet (large) | 768px – 1023px | iPad, iPad Pro (small) |
| **Desktop** | Desktop/Laptop | 1024px – 1439px | Standard laptop, desktop |
| **Large Desktop** | Large screens | 1440px+ | 4K, ultra-wide monitors |

---

## Header Responsive Behavior

### Height Scaling
- **Small Mobile (320px)**: 56px (scrolled: 52px)
- **Medium Mobile (480px)**: 60px (scrolled: 54px)
- **Small Tablet (640px)**: 64px (scrolled: 56px)
- **Large Tablet (768px)**: 72px (scrolled: 64px)
- **Desktop (1024px)**: 76px (scrolled: 64px)
- **Large Desktop (1440px)**: 80px (scrolled: 60px)

### Padding & Spacing
- **Small Mobile**: 16px horizontal (container), 8-12px gaps
- **Medium Mobile**: 20px horizontal, 10-14px gaps
- **Small Tablet**: 24px horizontal, 14-16px gaps
- **Large Tablet+**: 32px-40px horizontal, 24-36px gaps

### Typography
- **Brand name**: Scales from 16px → 20px
- **Nav links**: 13px → 14px (desktop only)
- **Controls**: Dynamic font sizes based on viewport

### Navigation Display
- **Mobile (320px-767px)**: Hamburger menu only
- **Tablet (768px+)**: Full desktop navigation links (About, Journey, Work, Services, Contact)

### Controls Panel (Right Zone)
- **Language Toggle**: 40px → 50px width, auto-sizing on small screens
- **Theme Toggle**: 36px → 40px button size
- **CTA Button** ("Say hello"): Adapts padding from 7px 14px → 10px 20px

### Mobile Menu (Hamburger Drawer)
- Opens below header with 16px-24px padding
- Navigation items stack vertically
- Links are 10px-14px font size
- CTA button expands to full width on mobile
- Automatically closes when window resizes to tablet/desktop

---

## Footer Responsive Behavior

### Layout Stacking
- **Mobile (320px-767px)**: Vertical stacked layout (2 parts stack vertically)
- **Tablet (768px+)**: Side-by-side layout (left content | right button)

### Padding & Spacing
- **Small Mobile (320px)**: 40px top/bottom, 16px horizontal
- **Medium Mobile (480px)**: 44px top/bottom, 20px horizontal
- **Small Tablet (640px)**: 48px top/bottom, 24px horizontal
- **Large Tablet (768px)**: 56px top/bottom, 32px horizontal
- **Desktop (1024px)**: 60px top/bottom, 36px horizontal
- **Large Desktop (1440px)**: 64px top/bottom, 40px horizontal

### Typography
- **Tagline**: 14px → 16px (emotional core message)
- **Links**: 12px → 14px
- **Location**: 10px → 12px (subtle detail)

### Link Navigation
- **Small Mobile**: Column layout (stacked vertically), 12px gaps
- **Medium Mobile**: Column layout, 14px gaps
- **Small Tablet**: Column layout, 16px gaps
- **Large Tablet+**: Horizontal layout with flexing

### CTA Button ("maybe.")
- **Mobile**: Full width (100%), adaptive padding
- **Desktop**: Auto width, right-aligned in footer-right zone

### Gap Adjustments
- **Small Mobile**: 32px between left/right sections
- **Medium Mobile**: 36px between sections
- **Large Tablet+**: 40px-60px between sections

---

## Responsive Animations & Interactions

### Header
- **Scroll Behavior**: Height smoothly transitions when scrollY > 20px
- **Hover Effects**: Nav links show underline animation, brand shows opacity change
- **Mobile Menu**: Slides in/out with Framer Motion animations
- **Controls**: Theme toggle has hover background, language select has focus states

### Footer
- **Entrance Animation**: Fades in and scales when in viewport (useInView)
- **Link Hover**: Color transitions on nav links
- **Button Interaction**: Scale and shadow on hover, shrink on click
- **Responsive Stacking**: Smooth layout changes at breakpoints

---

## RTL Support (Arabic)

Both header and footer support RTL (right-to-left) layout for Arabic language:
- Flexbox directions reverse automatically
- Border directions flip (left ↔ right)
- Padding directions adjust automatically
- Navigation items reorder as needed

---

## Dynamic Window Width Detection

Header component now tracks window width and:
- Closes mobile menu when resizing to desktop (768px+)
- Adjusts layout dynamically without full page refresh
- Prevents menu from being stuck open on orientation change

---

## Testing Checklist

- [ ] Small Phone (320px): Text readable, no overflow, menu works
- [ ] Standard Phone (480px): All controls visible, spacing balanced
- [ ] Small Tablet (640px): Navigation hidden, hamburger functional
- [ ] iPad (768px): Desktop nav appears, full width works
- [ ] Laptop (1024px): 3-zone layout optimal, gaps generous
- [ ] Ultra-wide (1440px+): Container max-width applied, centered
- [ ] Orientation Change: Mobile menu closes on portrait→landscape
- [ ] Scroll Behavior: Header shrinks smoothly on all breakpoints
- [ ] Dark Mode: All colors adapt, shadows visible
- [ ] Touch Targets: Buttons 36px+ on mobile (accessible)

---

## CSS Custom Properties Used

- `--bg-primary`: Background color (light/dark mode aware)
- `--bg-secondary`: Secondary background (hover states)
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--border-color`: Border/divider color
- All automatically switch on dark mode

---

## Performance Notes

- ✅ Hardware acceleration on transforms and opacity changes
- ✅ Passive scroll listeners (no blocking)
- ✅ Debounced resize handling
- ✅ No layout thrashing (CSS handles most responsiveness)
- ✅ Minimal JavaScript for dimension tracking

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Flexbox for layouts (100% support)
- CSS Grid considered for future enhancements
- Container queries available as progressive enhancement

---

## Future Enhancements

1. **Container Queries**: Use CSS `@container` for component-level responsiveness
2. **Viewport Units**: Consider `lvh`, `svh` for better mobile viewport handling
3. **Sticky Offset**: Dynamic sticky positioning based on header height
4. **Gesture Support**: Swipe gestures for mobile menu on supported devices
5. **Prefers-Reduced-Motion**: Honor user's motion preferences

---

**Last Updated**: December 2025
**Component Versions**: Header 2.1, Footer 2.1
