# DevOps Duoo Logo Usage Guide

## 🎨 Logo Component

The `Logo.tsx` component provides a professional, SVG-based logo for DevOps Duoo with multiple variants and customization options.

## 📦 Installation

The logo is already included in `/components/Logo.tsx`. No additional installation required.

## 🚀 Usage

### Basic Usage

```tsx
import Logo from '@/components/Logo';

// Default full logo
<Logo />
```

### Logo Variants

#### 1. **Full Logo** (Icon + Text)
```tsx
<Logo variant="full" width={200} height={60} />
```
- Use in: Header, Footer, Large displays
- Best for: Desktop navigation

#### 2. **Icon Only**
```tsx
<Logo variant="icon" height={50} />
```
- Use in: Mobile navbar, Favicon, App icons
- Best for: Compact spaces, Mobile menus

#### 3. **Text Only**
```tsx
<Logo variant="text" width={200} height={40} />
```
- Use in: Documents, Print materials
- Best for: Text-heavy contexts

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | number | 200 | Width in pixels |
| `height` | number | 60 | Height in pixels |
| `className` | string | '' | Additional CSS classes |
| `variant` | 'full' \| 'icon' \| 'text' | 'full' | Logo variant |
| `animated` | boolean | false | Enable subtle animations |

## 🎯 Examples

### Navbar Logo
```tsx
<Logo 
  variant="full" 
  width={180} 
  height={50} 
  className="cursor-pointer"
/>
```

### Mobile Menu Icon
```tsx
<Logo 
  variant="icon" 
  height={40} 
  className="lg:hidden"
/>
```

### Footer Logo
```tsx
<Logo 
  variant="full" 
  width={160} 
  height={45} 
  animated={true}
/>
```

### Loading Screen
```tsx
<Logo 
  variant="icon" 
  height={80} 
  animated={true}
  className="animate-bounce"
/>
```

## 🎨 Design Elements

### Color Palette
- **Primary Blue**: `#3B82F6` - Trust, Technology
- **Cyan**: `#06B6D4` - Cloud, Flow
- **Green**: `#10B981` - Growth, Success

### Symbolism
- **Two Gears**: Left gear = **Dev** (Development), Right gear = **Ops** (Operations)
- **Infinity Loop**: Continuous integration and deployment - the endless DevOps cycle
- **Center Connector**: Pipeline hub where Dev and Ops meet and integrate
- **Flow Arrows**: Data/code flowing between development and operations
- **Gradient Colors**: Blue (Code) → Cyan (Cloud) → Green (Deployment Success)
- **"Duoo"**: Partnership of two essential forces working in harmony

## 🌓 Dark Mode Support

The logo automatically adapts to dark mode:
- Background colors adjust
- Text becomes white in dark mode
- Gradients remain vibrant

## 📱 Responsive Behavior

```tsx
// Desktop
<div className="hidden md:block">
  <Logo variant="full" width={200} height={60} />
</div>

// Mobile
<div className="md:hidden">
  <Logo variant="icon" height={40} />
</div>
```

## 🔄 Animation Options

### Subtle Animation
```tsx
<Logo animated={true} />
```
- Circle rotates slowly (20s cycle)
- Infinity symbol pulses gently

### Custom Animation
```tsx
<Logo 
  variant="icon" 
  className="hover:scale-110 transition-transform duration-300"
/>
```

## 📐 Size Guidelines

### Minimum Sizes
- **Full Logo**: 140px width minimum
- **Icon Only**: 24px minimum
- **Text Only**: 100px width minimum

### Recommended Sizes
- **Navbar**: 180-200px width
- **Footer**: 140-160px width
- **Mobile**: 40-50px height (icon)
- **Hero Section**: 250-300px width

## 🖼️ Export Options

### For Favicon
```tsx
// Generate favicon from icon variant
<Logo variant="icon" height={32} />
// Save as favicon.ico or favicon.svg
```

### For Social Media
```tsx
// Square format for social profiles
<Logo variant="icon" height={400} />
// Export as PNG: 400x400, 800x800, 1200x1200
```

### For Print
```tsx
// High-resolution logo
<Logo variant="full" width={600} height={180} />
// Export as SVG or PDF
```

## 🎭 Use Cases

### In Navbar (Example)
```tsx
'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            {/* Desktop */}
            <div className="hidden md:block">
              <Logo variant="full" width={180} height={50} />
            </div>
            {/* Mobile */}
            <div className="md:hidden">
              <Logo variant="icon" height={40} />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

### As Loading Spinner
```tsx
<div className="flex items-center justify-center min-h-screen">
  <Logo 
    variant="icon" 
    height={60} 
    animated={true}
    className="opacity-50"
  />
</div>
```

### In Email Signature
```tsx
<Logo 
  variant="full" 
  width={150} 
  height={45}
/>
```

## 🛠️ Customization

### Custom Colors
Edit the gradients in `Logo.tsx`:
```tsx
<linearGradient id="logoGradient">
  <stop offset="0%" stopColor="#YOUR_COLOR_1" />
  <stop offset="50%" stopColor="#YOUR_COLOR_2" />
  <stop offset="100%" stopColor="#YOUR_COLOR_3" />
</linearGradient>
```

### Custom Animation
```tsx
<Logo 
  variant="icon"
  className="animate-spin-slow hover:animate-ping"
/>
```

## 📋 Checklist for Implementation

- [ ] Update Navbar with logo
- [ ] Update Footer with logo
- [ ] Create favicon from icon variant
- [ ] Add logo to README
- [ ] Update social media profiles
- [ ] Create branded assets folder
- [ ] Test dark mode appearance
- [ ] Test responsive behavior
- [ ] Export various sizes for marketing

## 🎨 Brand Assets to Create

1. **Favicon Package**
   - favicon.ico (32x32)
   - apple-touch-icon.png (180x180)
   - android-chrome.png (192x192, 512x512)

2. **Social Media**
   - Profile picture (400x400)
   - Cover photo (1200x630)
   - LinkedIn banner (1584x396)

3. **Marketing**
   - Business card logo
   - Email header
   - Letterhead
   - Presentation template

## 💡 Tips

- Always use SVG for web (scalability)
- Keep minimum sizes for legibility
- Test on various backgrounds
- Ensure accessibility (contrast ratios)
- Use PNG exports for raster needs
- Maintain aspect ratios

---

**Logo Created**: November 27, 2025  
**Designer**: AI-Generated SVG Component  
**© DevOps Duoo - All Rights Reserved**
