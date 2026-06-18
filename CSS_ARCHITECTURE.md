# CSS Architecture & Variables Reference

## 🎨 CSS Layer Structure

```
┌─────────────────────────────────────────────────────────────┐
│  tailgrids.css (Primary Entry)                              │
├─────────────────────────────────────────────────────────────┤
│ 1. @import "tailwindcss"                                    │
│    └─ Base Tailwind v4 with Vite plugin                     │
│                                                              │
│ 2. @import "tw-animate-css"                                 │
│    └─ Tailwind animation utilities                          │
│                                                              │
│ 3. @import "shadcn/tailwind.css"  ← NEW                     │
│    └─ shadcn/ui CSS variables (Nova preset)                 │
│       • --primary, --secondary, --destructive               │
│       • --background, --foreground, --card                  │
│       • --ring, --border, --input, --muted                  │
│       • --radius (for border-radius)                        │
│       • --font-sans (Geist)                                 │
│                                                              │
│ 4. @import "@fontsource-variable/geist"                     │
│    └─ Geist variable font family                            │
│                                                              │
│ 5. @custom-variant dark (&:is(.dark *))                     │
│    └─ Dark mode support (class-based)                       │
│                                                              │
│ 6. @plugin '@tailwindcss/forms'                             │
│    └─ Form input/select/checkbox styling                    │
│                                                              │
│ 7. @theme { ... } — Tailgrids Design Tokens                 │
│    ├─ --font-sans, --font-family-sans                       │
│    ├─ --color-primary-50 through --color-primary-950        │
│    ├─ --color-background-*, --color-foreground-*           │
│    ├─ --color-text-*, --color-border-color-base-*          │
│    ├─ --color-button-{primary,outline,error,success}       │
│    ├─ --color-badge-{primary,error,success,warning}        │
│    └─ State colors (error, success, warning, info)          │
│                                                              │
│ 8. @layer base { ... }                                      │
│    └─ Global base styles (scroll, body, box-sizing)         │
│                                                              │
│ 9. @layer utilities { ... }                                 │
│    └─ Custom utility classes                                │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 CSS Variables Reference

### shadcn/ui Variables (Nova Preset)

**Semantic Color System:**
```css
/* Brand Colors */
--primary              /* Blue-ish primary */
--secondary            /* Secondary color */
--destructive          /* Red, for errors */
--muted                /* Gray, for disabled */
--accent               /* Accent highlight */

/* Text Colors */
--foreground           /* Main text */
--primary-foreground   /* Text on primary bg */
--secondary-foreground /* Text on secondary bg */
--destructive-foreground
--muted-foreground

/* Backgrounds */
--background           /* Page background */
--card                 /* Card background */
--popover              /* Popover background */
--input                /* Input field background */
--border               /* Border color */

/* Effects */
--ring                 /* Focus ring color */
--radius               /* Default border-radius */

/* Typography */
--font-sans            /* Geist variable font */
```

**Usage in Tailwind:**
```tsx
className="bg-primary text-primary-foreground"
className="border border-border rounded-lg"
className="ring-ring focus:ring-2"
className="bg-card shadow-md"
```

---

### Tailgrids Variables (Extended Theme)

**Color Scales:**
```css
--color-primary-50, -100, -200, ..., -900, -950
--color-background-50, -100, ..., -soft-500
--color-foreground-50, -100, ..., -soft-500
--color-text-50, -100, -200, -300
--color-border-color-base-50, -100, -200, -300
```

**Component Tokens:**
```css
--color-button-primary-{background, hover-background, text, focus-ring}
--color-button-outline-{background, border, text, disabled-*}
--color-button-error-{background, hover-background, text, border, focus-ring}
--color-button-error-outline-{background, border, text, hover-*}
--color-button-success-*
--color-button-success-outline-*
--color-button-ghost-{text, hover-text, hover-background}
--color-button-group-primary-{background, hover-background, text, hover-text}
--color-button-group-secondary-{background, text}
--color-badge-{primary,error,success,warning,cyan,sky,blue,violet,purple,pink}-{background,text,icon-color}
```

**Usage in Tailwind:**
```tsx
className="bg-button-primary-background hover:bg-button-primary-hover-background"
className="text-button-ghost-text hover:text-button-ghost-hover-text"
className="border-badge-primary-text bg-badge-primary-background"
```

---

## 🔀 Choosing Which Variable to Use

| Scenario | Use | Example |
|----------|-----|---------|
| Generic text | `text-foreground` | `className="text-foreground"` |
| Button text on primary | `text-primary-foreground` | `className="text-primary-foreground"` |
| Text with Tailgrids tones | `text-primary-500`, `text-text-100` | `className="text-primary-500"` |
| Card background | `bg-card` | `className="bg-card"` |
| Custom background | `bg-background-100` | `className="bg-background-100"` |
| Border styling | `border-border` | `className="border border-border"` |
| Shadows/elevated | Use shadcn classes | `className="shadow-lg shadow-ring"` |
| Primary CTA button | shadcn `Button` | `<Button variant="default">` |
| Secondary CTA button | shadcn `Button outline` | `<Button variant="outline">` |
| Tailgrids component | `Button.tsx` wrapper | `<Button variant="primary">` |

---

## 🎯 Component Integration

### shadcn Button (Radix + Nova)

**File:** `src/components/ui/button.tsx`

**Variants:** default, outline, secondary, ghost, destructive, link  
**Sizes:** xs, sm, default, lg, icon, icon-xs, icon-sm, icon-lg  
**Features:** CVA-based, accessible, dark mode built-in

**Code:**
```tsx
import { Button } from "@/components/ui/button"

<Button variant="default" size="lg">
  Primary Button
</Button>

<Button variant="outline" size="sm" asChild>
  <a href="/about">Link Button</a>
</Button>
```

### Tailgrids Card (Custom)

**File:** `src/components/Card.tsx`

**Features:** Design token colors, hover effects, project card variant

**Code:**
```tsx
import { Card, ProjectCard } from "@/components/Card"

<Card hover>
  <h3 className="text-primary-500">Title</h3>
  <p className="text-text-100">Description</p>
</Card>

<ProjectCard
  title="My Project"
  description="..."
  tags={["React", "Tailwind"]}
/>
```

---

## 🌓 Dark Mode Behavior

### CSS Variables in Dark Mode

When `.dark` class is on `<html>`:

```css
/* Light Mode (default) */
html {
  --background: #ffffff
  --foreground: #000000
  --card: #f9fafb
}

/* Dark Mode */
html.dark {
  --background: #030712
  --foreground: #f8fafc
  --card: #111827
}
```

### How shadcn Components Adapt

All shadcn components automatically:
- Use inverted colors in dark mode
- Maintain contrast for accessibility
- Apply `dark:` pseudo-class rules where needed

**Example from shadcn button.tsx:**
```css
dark:aria-invalid:border-destructive/50
dark:aria-invalid:ring-destructive/40
dark:border-input
dark:bg-input/30
dark:hover:bg-input/50
```

### Manual Dark Mode Toggle

```tsx
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
```

---

## 📦 Utility Function: `cn()`

**Location:** `src/lib/utils.ts`

**What it does:**
1. Merges multiple class lists with `clsx`
2. Resolves conflicting Tailwind classes with `tailwind-merge`
3. Returns optimized class string

**Code:**
```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Example:**
```tsx
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        "bg-card text-foreground",
        className  // User can override with specific classes
      )}
      {...props}
    />
  )
}

// Usage
<Card className="bg-destructive" />
// Result: destructive wins over card
```

---

## 🚀 Quick Reference Commands

```bash
# Add more shadcn components
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu

# View all available components
npx shadcn-ui@latest add --help

# Dev server
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

---

## 📊 File Structure

```
src/
├── lib/
│   ├── utils.ts              ← cn() function
│   └── animations.ts         ← GSAP helpers
│
├── components/
│   ├── ui/
│   │   └── button.tsx        ← shadcn component (CVA + Radix)
│   ├── Button.tsx            ← Tailgrids wrapper
│   ├── Card.tsx              ← Tailgrids card
│   └── ...other custom components
│
├── App.tsx                   ← Main app component
├── main.tsx                  ← React entry
├── index.css                 ← Tailgrids tokens (legacy)
│
└── vite.config.ts
└── tsconfig.json

tailgrids.css                 ← Main CSS entry (combines all)
tailwind.config.js            ← Minimal Tailwind config
components.json               ← shadcn config
```

---

## ✅ Build Status

```
✓ TypeScript compilation
✓ Vite build (prod optimized)
✓ CSS processing (all layers)
✓ Asset bundling
✓ Tree-shaking applied
```

Final bundle sizes:
- **CSS:** 38.03 kB (7.16 kB gzipped)
- **JS:** 342.31 kB (116.46 kB gzipped)

---

## 🎓 Next Steps

1. ✅ shadcn/ui initialized (done)
2. ✅ CSS variables configured (done)
3. ✅ Dark mode support enabled (done)
4. ⏭️ Add more shadcn components as needed
5. ⏭️ Create custom components with CVA pattern
6. ⏭️ Deploy to production

Happy building! 🚀
