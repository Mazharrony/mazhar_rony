# Stories Feature - Mobile-First Story Cards

A complete mobile-first Next.js web app featuring stacked story cards with scroll animations and full-page detail views.

## Features

### 1. Stacked Cards List (`/stories`)
- **Vertical stack** of story cards
- **Scroll animations**: Cards scale down and fade as they scroll up
- **Hidden scrollbar**: Clean app-like look (no visible scrollbar)
- **Mobile-first design**: Optimized for mobile devices
- **Smooth transitions**: Uses Framer Motion for fluid animations

### 2. Scroll Behavior
- Cards at the **top** fade out and scale down as they leave the viewport
- Cards in the **center** are fully visible and normal size
- Cards **below** fade in as they approach the center
- Uses `requestAnimationFrame` for smooth 60fps animations

### 3. Full-Page Detail View (`/stories/[id]`)
- **Full-screen** detail page (fills entire viewport)
- Large title and full story text
- **Back button** to return to list
- **Previous/Next buttons** for navigation

### 4. Swipe Navigation
- **Swipe right** → Next story
- **Swipe left** → Previous story
- **Slide animations**: Pages slide in from left/right
- Works on both mobile (touch) and desktop (drag)

## File Structure

```
app/
  stories/
    page.tsx              # Main list page with stacked cards
    [id]/
      page.tsx            # Detail page with swipe navigation

src/components/stories/
  StoryCard.tsx           # Individual card component
  StoryDetail.tsx         # Full-page detail component

lib/data/
  stories.ts              # Stories data and helper functions
```

## Components

### StoryCard
- Displays title, short description, and "Read more" link
- Receives `scale`, `opacity`, and `y` props for animations
- Uses Framer Motion for hover/tap effects

### StoryDetail
- Full-page view with story content
- Handles swipe gestures
- Navigation buttons for previous/next

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** (Functional components)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **TypeScript** (Type safety)

## Usage

1. Visit `/stories` to see the stacked cards
2. Scroll up/down to see cards fade and scale
3. Tap any card to open full-page detail view
4. Swipe left/right or use buttons to navigate between stories
5. Tap "Back" to return to the list

## Customization

### Adding More Stories
Edit `lib/data/stories.ts` and add to the `stories` array:

```typescript
{
  id: '7',
  title: 'Your Story Title',
  shortDescription: 'Brief description',
  fullText: 'Full story text here...'
}
```

### Adjusting Animation Speed
In `app/stories/page.tsx`, modify:
- `fadeStartDistance`: When fading starts (default: 30% of viewport)
- `maxFadeDistance`: When fully faded (default: 80% of viewport)
- `scale` calculation: How much cards shrink (default: 0.7x)

### Changing Colors
Update Tailwind classes in components:
- Background: `bg-gray-950`
- Cards: `bg-gray-800` to `bg-gray-900`
- Text: `text-white`, `text-gray-300`, `text-blue-400`

## Performance

- Uses `requestAnimationFrame` for smooth scroll tracking
- `will-change: opacity` for optimized animations
- Passive scroll listeners for better performance
- Debounced resize handlers

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Touch gestures work on all touch devices

