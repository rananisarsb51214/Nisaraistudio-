# Agent Book Integration Guide

## Overview
This guide explains how to integrate the Nisar AI Agent Book into your Nisaraistudio portfolio site.

## Files Added

### 1. `src/components/AgentBookHero.tsx`
- Beautiful landing page for the AI Agent Book
- Features showcase grid
- Chapter preview section
- Call-to-action buttons

### 2. `pages/agent-book.tsx` (Optional)
Create a dedicated page route for deep linking

### 3. Navigation Updates
Add "Learning Hub" → "Agent Book" to main navigation menu

## Integration Steps

### Step 1: Route Configuration
```typescript
// In your app router/Next.js pages
import AgentBookPage from '@/pages/agent-book';

// Add route: /learning/agent-book
```

### Step 2: Embed the Book
Option A: Iframe (Recommended)
```tsx
<iframe 
  src="/agent-book/index.html"
  style={{ width: '100%', height: '100vh' }}
/>
```

Option B: Deploy separately
- Host at `docs.nisaraistudio.dev`
- Link externally

### Step 3: Navigation Menu
Add to main navigation:
```
Studio
├── Projects
├── Services
├── Learning Hub  ← NEW
│   ├── Agent Book
│   └── Documentation
└── Contact
```

## Deployment

### GitHub Pages
```bash
unzip nisar-ai-agent-book.zip
cp -r nisar-ai-agent-book public/agent-book
git add public/agent-book
git commit -m "Deploy: Add Agent Book"
git push
```

### Vercel
The book is auto-deployed with main site at:
- `https://nisaraistudio.vercel.app/agent-book`

### Standalone Deployment
```bash
vercel nisaraistudio-book.vercel.app
```

## SEO & Metadata

Add to page metadata:
```html
<meta name="description" content="Learn AI agent architecture with Nisar AI Agent Book - 9 comprehensive chapters, interactive simulator, zero dependencies">
<meta name="keywords" content="AI agents, machine learning, architecture, agent design patterns">
<og:image content="path/to/book-preview.png">
```

## Analytics Integration

Track book engagement:
```typescript
// Chapter viewed event
gtag.event('agent_book_chapter_viewed', {
  chapter_id: chapterId,
  chapter_title: chapterTitle,
  reading_time: timeSpentSeconds
});

// Search usage
gtag.event('agent_book_search', {
  query: searchTerm,
  results_count: resultsFound
});
```

## Next Steps

- [ ] Test book embeds locally
- [ ] Add book preview images/screenshots
- [ ] Create social sharing cards
- [ ] Set up analytics tracking
- [ ] Deploy to production
- [ ] Announce in social media/newsletter

