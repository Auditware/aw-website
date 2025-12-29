# Auditware Website

A static, code-first website rebuilt from Webflow export using Astro, MDX, and Storybook.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook for component development
npm run storybook

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.astro    # Button component with variants
│   ├── Hero.astro      # Hero section component
│   ├── Navbar.astro    # Navigation component
│   └── *.stories.html  # Storybook stories
├── layouts/
│   └── BaseLayout.astro # Base HTML layout
├── pages/
│   └── index.mdx       # Homepage (MDX format)
├── styles/
│   └── tokens.css      # Design system tokens
public/
├── images/             # Static assets from Webflow
└── favicon.png
.storybook/             # Storybook configuration
├── main.js
└── preview.js
```

## 📝 Editing Pages

### ✅ Safe to Edit

**Pages are written in MDX** - you can safely edit these:

- `src/pages/*.mdx` - Page content and copy
- Text content within MDX files
- Component props and content

### ❌ Do Not Touch

**These files control layout and styling** - avoid editing:

- `src/components/*.astro` - Component logic and styling
- `src/styles/tokens.css` - Design system tokens
- `src/layouts/*.astro` - HTML structure
- `.storybook/` - Storybook configuration

## 🧩 Available Components

### Button
```jsx
<Button variant="primary" size="md" href="/path">Click me</Button>
```

**Variants:** `primary`, `secondary`, `navbar`, `video`, `white`
**Sizes:** `sm`, `md`, `lg`

### Hero
```jsx
<Hero 
  title="Your Title"
  subtitle="Optional subtitle"
  description="Description text"
  imageUrl="/images/your-image.png"
  imageAlt="Image description"
  badges={[
    { text: "Badge text", href: "/link", icon: "/icon.png" }
  ]}
/>
```

### Navbar
```jsx
<Navbar />
```

## 🎨 Storybook

View and test components in isolation:

```bash
npm run storybook
```

Open http://localhost:6006 to see all component variations and documentation.

## 🎯 Design System

Design tokens are centralized in `src/styles/tokens.css`:

- **Colors**: CSS custom properties for brand colors
- **Typography**: Font families and sizes
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Mobile, tablet, desktop, large desktop

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: 0px - 479px
- **Tablet**: 480px - 767px  
- **Desktop**: 768px - 991px
- **Large Desktop**: 992px+

## 🔄 Development Workflow

1. **Edit Content**: Modify MDX files in `src/pages/`
2. **Preview Changes**: Run `npm run dev` and visit http://localhost:4321
3. **Component Development**: Use `npm run storybook` for component work
4. **Build**: Run `npm run build` before deployment

## 📋 Page Editing Guidelines

### Adding New Pages
1. Create new `.mdx` file in `src/pages/`
2. Add frontmatter with layout and metadata
3. Import and use existing components
4. Keep styling in components, not in MDX

### Editing Existing Pages
1. Edit text content directly in MDX
2. Update component props as needed
3. Don't add inline styles or CSS
4. Test responsive behavior

### Example Page Structure
```mdx
---
layout: ../layouts/BaseLayout.astro
title: "Page Title"
description: "Page description"
---

import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';

<Navbar />

<Hero 
  title="Page Title"
  description="Page description"
  imageUrl="/images/page-image.png"
/>

# Your Content Here

Regular markdown content and components.
```

## 🛠 Technical Details

- **Framework**: Astro 5.x with TypeScript
- **Content**: MDX for pages with component support
- **Styling**: Component-scoped CSS with design tokens
- **Components**: Astro components for reusability
- **Preview**: Storybook for component development
- **Assets**: Static images copied from Webflow export

## 🚨 Important Notes

- **Source of Truth**: Code + Git (no external CMS)
- **Fidelity**: Visual design matches Webflow export exactly
- **Maintainability**: Components are small, reusable, and prop-driven
- **Collaboration**: Non-technical users can safely edit MDX content
- **AI-Friendly**: Structure optimized for AI-driven iteration

## 🏗 Build Commands

```bash
# Development
npm run dev              # Start dev server
npm run storybook        # Start Storybook

# Production  
npm run build           # Build static site
npm run build-storybook # Build Storybook
npm run preview         # Preview built site
```

---

**Remember**: Keep components boring and predictable. Prefer clarity over cleverness. The goal is long-term maintainability and safe collaboration.
