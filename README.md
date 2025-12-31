# Auditware Website

A modern static website built with Astro and MDX, featuring a dynamic theming system and page-specific color schemes.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview built site
npm run preview

# Run SEO validation tests
npm run test:seo
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ModernHero.astro       # Main hero component with theming
│   ├── Navbar.astro           # Navigation component
│   ├── Footer.astro           # Footer component
│   ├── ServiceToggle.astro    # Service tabs component
│   ├── SentryFeatures.astro   # Sentry features section
│   ├── StatsSection.astro     # Statistics display
│   └── ...                    # Other components
├── layouts/
│   └── BaseLayout.astro       # Base HTML layout with SEO
├── pages/
│   ├── index.mdx              # Homepage
│   ├── sentry.mdx             # Sentry platform page
│   ├── radar.mdx              # Radar tool page
│   ├── audit-wizard.mdx       # Audit Wizard page
│   ├── audits.mdx             # Audits page
│   └── ...                    # Other pages
├── styles/
│   ├── global.css             # Global styles and utilities
│   ├── tokens.css             # Design system tokens
│   └── themes.ts              # Theme definitions and helpers
public/
├── images/                    # Static images and assets
├── favicon.svg
└── robots.txt
tests/
└── seo.test.js                # SEO validation tests
```

## 🎨 Theming System

The site uses a centralized theming system defined in `src/styles/themes.ts`. Each major page has its own color palette:

| Page | Theme | Primary Color |
|------|-------|--------------|
| Home | Purple | `#a855f7` |
| Audit Wizard | Blue | `#4f63ff` |
| Sentry | Green | `#59b886` |
| Radar | Dark Green | `#214c40` |
| Audits | Sky Blue | `#3b82f6` |

### Using Themes in Pages

```astro
---
import { radarTheme, themeToColorScheme } from '../styles/themes.ts';
export const pageTheme = radarTheme;
---

<ModernHero 
  title="Your Page Title"
  description="Your description"
  colorScheme={themeToColorScheme(pageTheme)}
/>
```

## 📝 Editing Pages

### Adding Content
Pages are written in MDX (Markdown + JSX), making them easy to edit:

```mdx
---
layout: ../layouts/BaseLayout.astro
title: "Page Title | Auditware"
description: "Page description for SEO"
---

import Navbar from '../components/Navbar.astro';
import ModernHero from '../components/ModernHero.astro';
import Footer from '../components/Footer.astro';

<Navbar />

<ModernHero 
  title="Your Title"
  description="Your description"
  primaryCta={{
    text: "Get Started",
    href: "/link"
  }}
  imageUrl="/images/hero-image.png"
  imageAlt="Hero image description"
/>

<Footer />
```

## 🧩 Key Components

### ModernHero
Main hero section with gradient text and theme support:

```astro
<ModernHero 
  title="Main Title"
  description="Hero description text"
  primaryCta={{
    text: "Primary Button",
    href: "/path"
  }}
  secondaryCta={{
    text: "Secondary Button",
    href: "/path"
  }}
  imageUrl="/images/hero.png"
  imageAlt="Hero image"
  colorScheme={themeToColorScheme(pageTheme)}
/>
```

### Navbar
Site navigation with dynamic active states:

```astro
<Navbar />
```

### ServiceToggle
Tabbed service display with feature lists:

```astro
<ServiceToggle 
  title="Our Services"
  subtitle="What we offer"
  services={[...]}
/>
```

## 🎯 Design System

### Colors
- **Theming**: Page-specific color palettes in `themes.ts`
- **Global Colors**: Defined in `tokens.css` as CSS custom properties
- **Gradient Text**: Automatic subtle gradients from white to accent colors

### Typography
- **Display Font**: Inter (system default)
- **Body Font**: Inter
- **Monospace**: JetBrains Mono
- **Scales**: 6xl, 5xl, 4xl, 3xl, 2xl, xl, lg, base, sm, xs

### Spacing
Consistent spacing scale from `var(--spacing-1)` to `var(--spacing-32)`

### Breakpoints
- **Mobile**: 0-479px
- **Tablet**: 480-767px
- **Desktop**: 768-1199px
- **Large Desktop**: 1200px+

## 📱 Responsive Design

All components are fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🔍 SEO & Optimization

This website is fully optimized for search engines with comprehensive SEO implementation.

### What's Implemented

#### Foundation
- ✅ **Structured Data (JSON-LD)**: Organization, WebSite, FAQPage, BreadcrumbList schemas
- ✅ **Complete Meta Tags**: Title, description, Open Graph, Twitter Cards
- ✅ **Image Optimization**: Astro Image component with WebP conversion, lazy loading
- ✅ **Sitemap**: Automatically generated at `/sitemap-index.xml`

#### Content & Structure
- ✅ **FAQ Section**: `/faq` page with FAQPage schema markup
- ✅ **Image Alt Text**: All images have descriptive alt attributes
- ✅ **Internal Linking**: Comprehensive navigation structure
- ✅ **Breadcrumb Navigation**: With BreadcrumbList schema

#### Advanced Optimization
- ✅ **Security Headers**: CSP, X-Frame-Options, X-Content-Type-Options
- ✅ **Performance**: DNS prefetch, font optimization, resource hints
- ✅ **Automated Testing**: CI/CD validation for all SEO requirements

### Testing & Validation

Run comprehensive SEO tests:

```bash
npm run test:seo
```

This validates:
- Meta tags (title, description, OG, Twitter)
- Structured data (Organization, WebSite, FAQPage, BreadcrumbList)
- Image optimization and alt text
- Internal/external linking
- Accessibility (lang, viewport, headings)
- Performance indicators

All PRs automatically run SEO validation via GitHub Actions.

### Configuration

#### Site Settings
Edit in `tests/seo.test.js`:

```javascript
const SITE_CONFIG = {
  siteUrl: 'https://auditware.io',
  siteName: 'Auditware',
  twitterHandle: '@auditware',
  socialProfiles: [
    'https://twitter.com/auditware',
    'https://linkedin.com/company/auditware'
  ],
  foundingDate: '2020'
};
```

#### Page Metadata
Add to page frontmatter:

```yaml
---
layout: ../layouts/BaseLayout.astro
title: "Page Title | Auditware"
description: "Page description for SEO (150-160 chars)"
image: "/images/og-image.png"
---
```

#### Structured Data
Add custom schemas via frontmatter:

```yaml
structuredData:
  "@context": "https://schema.org"
  "@type": "Service"
  name: "Your Service"
  description: "Service description"
```

### Security Headers

Configured in `public/_headers` (Netlify) and `vercel.json` (Vercel):
- **X-Frame-Options**: Prevent clickjacking
- **X-Content-Type-Options**: Prevent MIME sniffing
- **Content-Security-Policy**: Restrict resource loading
- **Referrer-Policy**: Control referrer information
- **Permissions-Policy**: Restrict browser features

**Note**: HSTS is commented out by default. Enable after testing HTTPS.

### Performance Optimizations

- DNS prefetching for external domains
- Preconnect for critical resources (fonts, analytics)
- Font display: swap for better perceived performance
- Image lazy loading (below fold)
- Image eager loading (hero images)
- Automatic WebP conversion
- Cache headers for static assets (1 year)
- CSS/JS bundling and minification

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Pre-Deployment Checklist

Required actions:
- [ ] Verify site configuration in `tests/seo.test.js`
- [ ] Update social media URLs in `src/layouts/BaseLayout.astro`
- [ ] Test locally: `npm run build && npm run preview`
- [ ] Run SEO tests: `npm run test:seo`
- [ ] All tests passing

Post-deployment:
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Validate structured data: https://validator.schema.org/
- [ ] Test social cards (Facebook, Twitter, LinkedIn)
- [ ] Monitor Core Web Vitals in Search Console

### Validation Tools

**Schema Validation**
- Schema.org Validator: https://validator.schema.org/
- Google Rich Results Test: https://search.google.com/test/rich-results

**Performance Testing**
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse: Built into Chrome DevTools
- WebPageTest: https://www.webpagetest.org/

**Social Preview Testing**
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

### SEO Components

#### FAQSection
```astro
<FAQSection
  title="Frequently Asked Questions"
  faqs={[
    {
      question: "Your question?",
      answer: "Your answer"
    }
  ]}
/>
```

#### Breadcrumb
```astro
<Breadcrumb 
  items={[
    { name: "Home", href: "/" },
    { name: "Current Page" }
  ]}
/>
```

Automatically generates BreadcrumbList schema for search engines.

## 🛠 Technical Stack

- **Framework**: [Astro 5.x](https://astro.build/) with TypeScript support
- **Content**: MDX for enhanced markdown with components
- **Styling**: Component-scoped CSS with design tokens
- **Deployment**: Optimized for Vercel/Netlify/static hosting
- **SEO**: Automated sitemap generation with `@astrojs/sitemap`

## 🚨 Development Guidelines

### Safe to Edit
✅ **MDX page content** (`src/pages/*.mdx`)
✅ **Theme colors** (`src/styles/themes.ts`)
✅ **Images** (`public/images/`)
✅ **Component props** in MDX files

### Be Careful
⚠️ **Component logic** (`src/components/*.astro`)
⚠️ **Global styles** (`src/styles/`)
⚠️ **Layout structure** (`src/layouts/`)

## 📦 Build & Deploy

```bash
# Development
npm run dev              # http://localhost:4321

# Production
npm run build           # Output to dist/
npm run preview         # Preview production build

# Testing
npm run test:seo        # Validate SEO requirements
```

## 🔄 Git Workflow

The project uses semantic commits and maintains clean history:
- Feature development in branches
- All changes tested via `npm run build`
- SEO tests pass before deployment
- Production builds deployed from `main` branch

---

**Built with ❤️ by the Auditware team**
