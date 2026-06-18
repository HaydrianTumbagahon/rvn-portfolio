# shadcn/ui Integration Summary

## ✅ Setup Complete

Your portfolio now has **shadcn/ui** (Radix + Nova preset) integrated with existing Tailgrids, Tailwind v4, GSAP, and TypeScript.

---

## 📁 CSS Architecture Overview

### Hierarchy (bottom to top)

```
tailgrids.css (main entry)
├── @import "tailwindcss"
├── @import "tw-animate-css"
├── @import "shadcn/tailwind.css"          ← shadcn CSS variables
├── @import "@fontsource-variable/geist"   ← Geist font
├── @custom-variant dark (...)             ← Dark mode setup
├── @plugin '@tailwindcss/forms'
└── @theme { ... }                         ← Tailgrids tokens

src/index.css (legacy, kept for compatibility)
├── @import "tailwindcss"
├── @plugin "@tailwindcss/forms"
├── @theme { ... }                         ← Duplicate Tailgrids tokens
└── @layer utilities { ... }
```

**Note:** `tailgrids.css` is the primary CSS entry point. Both files are imported, which is fine for this setup.

---

## 🎨 Design Tokens & CSS Variables

### shadcn/ui CSS Variables (via Nova preset)

shadcn/ui (Radix Nova) provides semantic CSS variables:

```css
/* Color System */
--primary: hsl(...)         /* Primary brand color */
--secondary: hsl(...)       /* Secondary color */
--destructive: hsl(...)     /* Error/delete state */
--muted: hsl(...)           /* Muted/disabled state */
--accent: hsl(...)          /* Accent color */

/* Text */
--foreground: hsl(...)      /* Text color */
--primary-foreground: hsl(...)
--secondary-foreground: hsl(...)
--destructive-foreground: hsl(...)
--muted-foreground: hsl(...)

/* Backgrounds */
--background: hsl(...)      /* Page background */
--card: hsl(...)            /* Card background */
--popover: hsl(...)         /* Popover background */
--input: hsl(...)           /* Input background */
--border: hsl(...)          /* Border color */

/* Effects */
--ring: hsl(...)            /* Focus ring color */
--radius: ...               /* Border radius */

/* Typography */
--font-sans: ..., sans-serif
```

### Tailgrids Tokens (Complementary)

Tailgrids tokens in `@theme` provide additional semantic classes:

```css
/* Primary */
--color-primary-50 through --color-primary-950
--color-primary-text

/* Backgrounds & Foregrounds */
--color-background-*
--color-foreground-*
--color-text-*
--color-border-color-base-*

/* Component States */
--color-button-primary-*
--color-button-outline-*
--color-button-error-*
--color-button-success-*
--color-badge-*-*
```

---

## 📦 Package Dependencies

### New shadcn/ui Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `class-variance-authority` | ^0.7.1 | CVA for component variants |
| `clsx` | ^2.1.1 | Conditional class merging |
| `tailwind-merge` | ^3.6.0 | Merge conflicting Tailwind classes |
| `radix-ui` | ^1.6.0 | Headless Radix component library |
| `lucide-react` | ^1.21.0 | Icon library |
| `@fontsource-variable/geist` | ^5.2.9 | Geist variable font |
| `tw-animate-css` | ^1.4.0 | Animation utilities |

---

## 🛠️ Core Files

### `components.json`
```json
{
  "style": "radix-nova",
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "tailgrids.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### `src/lib/utils.ts`
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage:** Merge Tailwind classes intelligently:
```tsx
import { cn } from "@/lib/utils"

className={cn(
  "px-4 py-2 rounded",
  isActive && "bg-primary text-white",
  customClass
)}
```

### `src/components/ui/button.tsx`
Pre-built button component with:
- **CVA variants:** default, outline, secondary, ghost, destructive, link
- **Sizes:** xs, sm, default, lg, icon, icon-sm, icon-lg
- **Features:** `asChild` prop (Slot), full accessibility, dark mode support

**Usage:**
```tsx
import { Button } from "@/components/ui/button"

<Button variant="outline" size="lg">Click me</Button>
```

---

## 🌓 Dark Mode Configuration

### How It Works

1. **CSS Custom Variant** (in tailgrids.css):
   ```css
   @custom-variant dark (&:is(.dark *))
   ```

2. **Toggle Implementation:**
   - Add `class="dark"` to `<html>` element to enable dark mode
   - CSS variables automatically adapt for dark mode

3. **Shadcn Components:**
   - All components have built-in dark mode support via CSS variables
   - No additional configuration needed

**Example Theme Toggle:**
```tsx
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (isDark) {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }
    setIsDark(!isDark)
  }

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
```

---

## 🚀 Adding More shadcn Components

Install pre-built shadcn/ui components:

```bash
# Add individual components
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add toast
```

All components:
- Use `cn()` for class merging
- Support dark mode automatically
- Include TypeScript types
- Follow shadcn design patterns

---

## 🎯 Integration Patterns

### Using shadcn Button with Tailgrids Tokens

```tsx
import { Button } from "@/components/ui/button"

// shadcn variant + Tailgrids token color
<Button variant="outline" className="border-border-color-base-200">
  Styled Button
</Button>
```

### Custom Component with CVA

```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg p-6",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground",
        elevated: "bg-card shadow-lg",
        outlined: "border border-border bg-background"
      },
      size: {
        sm: "p-2",
        md: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

export function CustomCard({ variant, size, className, ...props }) {
  return (
    <div className={cn(cardVariants({ variant, size, className }))} {...props} />
  )
}
```

### Using shadcn with Tailgrids Card

```tsx
import { Card } from "@/components/Card"        // Tailgrids
import { Button } from "@/components/ui/button" // shadcn

<Card className="shadow-lg">
  <h3 className="text-primary-500">Section</h3>
  <p className="text-text-100">Description</p>
  <div className="mt-4 flex gap-2">
    <Button variant="default">Submit</Button>
    <Button variant="outline">Cancel</Button>
  </div>
</Card>
```

---

## 📊 Component Sources

| Component Type | Source | Usage |
|---|---|---|
| **Custom Portfolio Cards** | `src/components/Card.tsx` | For project showcase, structured layouts |
| **shadcn Buttons** | `src/components/ui/button.tsx` | Form interactions, general UI |
| **Tailgrids Design Tokens** | `tailgrids.css` `@theme` | Colors, sizes, spacing via classes |
| **shadcn CSS Variables** | Nova preset | Semantic color system for shadcn |
| **Animations** | `src/lib/animations.ts` | Scroll-triggered GSAP animations |
| **Utility Classes** | `cn()` function | Merge and resolve class conflicts |

---

## ✨ Best Practices

1. **Use `cn()` for class merging:**
   ```tsx
   // ✅ Good
   className={cn(baseStyles, conditionalStyles, props.className)}
   
   // ❌ Avoid
   className={baseStyles + ' ' + conditionalStyles}
   ```

2. **Leverage shadcn preset colors:**
   ```tsx
   // ✅ Use semantic colors
   className="text-primary bg-secondary border-border"
   
   // ⚠️ Mix with Tailgrids when needed
   className="text-primary-500 bg-background-100"
   ```

3. **Use CVA for component variants:**
   ```tsx
   // ✅ Type-safe variants
   const buttonVariants = cva(baseClass, { variants: { ... } })
   <Button variant="outline" size="lg" />
   
   // ❌ Avoid inline conditionals
   className={isOutline ? 'border-2' : 'solid'}
   ```

4. **Export variants for composition:**
   ```tsx
   export { Button, buttonVariants }
   
   // Reuse elsewhere
   const customClass = buttonVariants({ variant: 'outline' })
   ```

---

## 🔗 Resource Links

- **shadcn/ui**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com
- **CVA**: https://cva.style
- **Tailwind v4**: https://tailwindcss.com/docs/v4
- **Lucide Icons**: https://lucide.dev

---

## 📝 File Structure (After shadcn init)

```
src/
├── components/
│   ├── ui/
│   │   └── button.tsx          ← shadcn component
│   ├── Button.tsx              ← Tailgrids wrapper
│   ├── Card.tsx                ← Tailgrids card
│   └── tailgrids/              ← Additional Tailgrids components
├── lib/
│   ├── utils.ts                ← cn() utility function
│   └── animations.ts           ← GSAP utilities
├── App.tsx
├── main.tsx
├── index.css                   ← Tailgrids @theme (legacy)
└── tailgrids.css               ← Main CSS entry (shadcn + Tailgrids)
```

---

## 🚀 Next Steps

1. **Test the build:** `npm run build` ✅ (Already working)
2. **Start dev server:** `npm run dev`
3. **Add more components:** `npx shadcn-ui@latest add <component>`
4. **Create custom components:** Use CVA + `cn()` pattern
5. **Customize themes:** Update CSS variables in tailgrids.css

Happy building! 🎨
