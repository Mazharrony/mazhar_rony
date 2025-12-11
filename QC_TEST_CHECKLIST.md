# Service Cards & Details Page - QC Test Checklist

## 📱 Mobile Version Tests

### 1. Service Cards List View
- [ ] All 7 service cards are visible in vertical stack
- [ ] Cards have proper overlapping/cascading effect
- [ ] Cards fade and scale correctly on scroll
- [ ] "View More" button is visible on all cards (not hidden by overlap)
- [ ] Cards are clickable and open detail view
- [ ] Scroll is smooth without visible scrollbar
- [ ] Responsive on small screens (320px, 375px, 480px)

### 2. Mobile Detail Page - Content Verification
Test each service (social, content, ads, webopt, brand, ecommerce, webapp):

#### For Each Service:
- [ ] **Tagline** displays correctly (not showing translation key)
- [ ] **Overview** section shows full content
- [ ] **Why** section shows full content
- [ ] **Approach** shows all 4 steps with titles and descriptions
- [ ] **Deliverables** shows all 6 items
- [ ] **FAQ** shows all 5 questions with answers
- [ ] **CTA** section displays correctly

### 3. Mobile Detail Page - Navigation
- [ ] Swipe left/right navigates between services
- [ ] Previous/Next buttons work correctly
- [ ] Close button closes detail view
- [ ] Backdrop click closes detail view
- [ ] Navigation indicators show current service
- [ ] Smooth animations on page transitions
- [ ] Content scrolls independently (not entire page)

### 4. Mobile Detail Page - Responsive
- [ ] Content fits on small screens (320px)
- [ ] Text is readable on all screen sizes
- [ ] Buttons are properly sized and clickable
- [ ] No horizontal scrolling
- [ ] Images/content don't overflow

---

## 💻 Desktop Version Tests

### 1. Service Cards (Desktop)
- [ ] All 7 service cards visible in horizontal scroll
- [ ] Cards are clickable
- [ ] "View More" links work
- [ ] Smooth horizontal scrolling

### 2. Desktop Detail Page - Content Verification
Test each service page at `/services/[slug]`:

#### For Each Service:
- [ ] **Tagline** displays correctly
- [ ] **Overview** section shows full content
- [ ] **Why** section shows full content
- [ ] **Approach** shows all 4 steps
- [ ] **Deliverables** shows all 6 items
- [ ] **FAQ** shows all 5 questions (expandable)
- [ ] **CTA** section displays correctly

### 3. Desktop Detail Page - Functionality
- [ ] Page loads correctly for each service slug
- [ ] Scroll animations work smoothly
- [ ] FAQ items expand/collapse correctly
- [ ] CTA buttons link correctly
- [ ] Back navigation works
- [ ] Page is responsive (tablet sizes)

---

## 🌍 Language Testing

### Test All Languages (EN, AR, RU, ZH, ES)

#### Mobile Version:
- [ ] All content displays in selected language
- [ ] No translation keys showing (like "services.detail.brand.tagline")
- [ ] RTL layout works for Arabic
- [ ] Text doesn't overflow in any language

#### Desktop Version:
- [ ] All content displays in selected language
- [ ] No translation keys showing
- [ ] RTL layout works for Arabic
- [ ] Long translations don't break layout

---

## 🐛 Known Issues to Check

### English Version Specific:
- [ ] First service (social) shows content ✓
- [ ] Other 6 services show content (not translation keys)
- [ ] All sections populated for all services

### Common Issues:
- [ ] No empty sections showing
- [ ] No "services.detail.xxx" keys visible
- [ ] Smooth animations without jank
- [ ] Proper error handling for missing translations

---

## ✅ Quick Verification Commands

Run these to verify JSON structure:
```bash
# Check English content
node -e "const fs=require('fs');const d=JSON.parse(fs.readFileSync('public/locales/en.json','utf8'));console.log('Services:',Object.keys(d.services.detail).filter(k=>!['badge','overview','why','approach','deliverables','faq','cta'].includes(k)));"
```

---

## 📝 Test Results Template

```
Date: __________
Tester: __________

Mobile Tests:
- Cards: [ ] Pass [ ] Fail - Notes: __________
- Detail Pages: [ ] Pass [ ] Fail - Notes: __________
- Navigation: [ ] Pass [ ] Fail - Notes: __________

Desktop Tests:
- Cards: [ ] Pass [ ] Fail - Notes: __________
- Detail Pages: [ ] Pass [ ] Fail - Notes: __________

Language Tests:
- English: [ ] Pass [ ] Fail - Notes: __________
- Arabic: [ ] Pass [ ] Fail - Notes: __________
- Russian: [ ] Pass [ ] Fail - Notes: __________
- Chinese: [ ] Pass [ ] Fail - Notes: __________
- Spanish: [ ] Pass [ ] Fail - Notes: __________

Overall: [ ] Ready for Production [ ] Needs Fixes
```

