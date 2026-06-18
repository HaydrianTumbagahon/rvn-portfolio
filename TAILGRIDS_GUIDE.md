# Tailgrids Integration Guide

## ✅ Setup Complete

Your portfolio now integrates **Tailgrids** design system with **Tailwind CSS v4**, **GSAP animations**, and **TypeScript**.

---

## 🎨 Design System Architecture

### Tailgrids Design Tokens

All design tokens are defined in `src/index.css` using Tailwind v4's `@theme` block:

- **Colors**: `primary-*`, `background-*`, `foreground-*`, `text-*`, `border-*`
- **Buttons**: `button-primary-*`, `button-outline-*`, `button-ghost-*`
- **Badges**: `badge-primary-*`, `badge-success-*`, etc.
- **Status**: error, success, warning, info states

Access any token in Tailwind classes:
```tsx
className="bg-primary-500 text-foreground-50 border-border-color-base-200"
```

---

## 📦 Component Structure

### `src/components/`

#### **Button.tsx**
Reusable button with variants and sizes:
```tsx
import { Button } from '@/components/Button';

export function Example() {
  return (
    <>
      <Button variant="primary" size="lg">Primary</Button>
      <Button variant="outline" size="md">Outline</Button>
      <Button variant="ghost" size="sm">Ghost</Button>
    </>
  );
}
```

**Props:**
- `variant`: `'primary' | 'outline' | 'ghost'`
- `size`: `'sm' | 'md' | 'lg'`
- All standard button attributes

#### **Card.tsx**
Container component with optional hover effects:
```tsx
import { Card, ProjectCard } from '@/components/Card';

// Basic card
<Card className="p-6">
  <h3>My Card</h3>
</Card>

// Project card with tags
<ProjectCard
  title="My Project"
  description="Description here"
  tags={['React', 'Tailwind']}
  href="#"
/>
```

**Props:**
- `hover`: Enable hover shadow effect (default: true)
- `className`: Custom Tailwind classes

---

## 🎬 Animation Integration

### Combining Tailgrids with GSAP

Hero section animations use the `cn()` utility to merge Tailwind and animation classes:

```tsx
import { useEffect, useRef } from 'react';
import { heroReveal } from './lib/animations';
import { Card } from '@/components/Card';

export function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroReveal(heroRef.current);
    }
  }, []);

  return (
    <section ref={heroRef}>
      <Card>
        <h1>Hello</h1>
      </Card>
    </section>
  );
}
```

### Available Animations

- `heroReveal(container)` — staggered fade-in on mount
- `sectionFadeIn(section)` — scroll-triggered fade
- `sectionRevealTimeline(section)` — timeline for h2 + `.reveal-item` elements
- `pinSection(section)` — pin section while scrolling

---

## 🛠️ Using Tailgrids Components

### Via CLI

Add pre-built Tailgrids components:
```bash
npx tailgrids add button
npx tailgrids add card
npx tailgrids add navbar
npx tailgrids add hero
```

Components are installed to `src/components/tailgrids/` and use the design tokens from `src/index.css`.

---

## 🎯 Common Patterns

### Responsive Grid
```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(item => (
    <Card key={item.id}>{item.name}</Card>
  ))}
</div>
```

### Themed Section
```tsx
<section className="bg-background-100 py-24">
  <div className="mx-auto max-w-5xl px-6">
    <h2 className="text-foreground-50">Section Title</h2>
  </div>
</section>
```

### Interactive Button
```tsx
<Button 
  variant="primary"
  size="lg"
  onClick={() => console.log('clicked')}
  className="reveal-item" // For GSAP timeline
>
  Action
</Button>
```

---

## 🌓 Dark Mode

Dark mode is built into Tailgrids tokens. The theme uses dark mode colors by default (`--color-background-50: #030712`, etc.).

To add light mode toggle:
```tsx
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
```

---

## 📁 File Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── tailgrids/     ← Add Tailgrids components here
├── lib/
│   └── animations.ts  ← GSAP utilities
├── utils/
│   └── cn.ts          ← Class merging utility
├── data/
│   └── portfolio.ts   ← Portfolio content
├── App.tsx
├── main.tsx
├── index.css          ← All design tokens
└── vite.config.ts
```

---

## 🚀 Best Practices

1. **Use `cn()` for conditional classes**
   ```tsx
   import { cn } from '@/utils/cn';
   
   className={cn(
     'base-styles',
     isActive && 'active-styles',
     customClass
   )}
   ```

2. **Leverage design tokens**
   ```tsx
   // ✅ Good
   className="text-primary-500 bg-background-100"
   
   // ❌ Avoid
   className="text-blue-500 bg-gray-900"
   ```

3. **Keep animations reusable**
   ```tsx
   export const fadeInOnScroll = (element) => {
     return sectionFadeIn(element);
   };
   ```

4. **Use TypeScript for components**
   ```tsx
   interface Props extends React.HTMLAttributes<HTMLDivElement> {
     title: string;
   }
   
   export function Component({ title, ...props }: Props) {
     return <div {...props}>{title}</div>;
   }
   ```

---

## 📚 Resources

- **Tailgrids**: https://tailgrids.com
- **Tailwind v4**: https://tailwindcss.com/docs/v4
- **GSAP**: https://gsap.com/docs
- **Vite**: https://vitejs.dev

---

## 🎯 Next Steps

1. Run `npm run dev` to start the dev server
2. Explore the example portfolio in `src/App.tsx`
3. Add more components using `npx tailgrids add <component>`
4. Customize tokens in `src/index.css` under `@theme`
5. Create new pages/sections by combining cards, buttons, and animations

Happy building! 🚀
