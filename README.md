# Chromezy - Premium Software Agency Website

> Pixel-perfect, animated frontend built with Next.js 15, TypeScript, and modern motion libraries.

## 🚀 **Overview**

Chromezy is a modern software agency website featuring:

- ⚡ **Next.js 15** with App Router and TypeScript
- 🎨 **Advanced Animations** via Motion (`motion/react`)
- 💎 **Glass Morphism** and gradient effects
- 📱 **Responsive Design** with Tailwind CSS
- ♿ **Accessibility First** (WCAG 2.1 AA)
- 🔍 **SEO Optimized** (SSG/SSR/ISR)

## 🛠️ **Tech Stack**

### **Core**

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Motion (`motion/react`)

### **Development**

- **Testing**: Vitest + Playwright + React Testing Library
- **Linting**: ESLint (strict) + Prettier
- **Documentation**: Storybook
- **Icons**: react-icons, Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority, @radix-ui/react-slot

## 🏗️ **Project Structure**

```
├── app/                         # Next.js App Router
│   ├── components/            # UI components
│   ├── sections/              # Page sections
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Data & constants
│   │   ├── Data.tsx            # Centralized mock data
│   │   └── constants.ts        # Animation and UI constants
│   └── Types/                 # Shared TS types
├── styles/                      # Global styles
└── public/                      # Static assets
```

## 🎯 **Getting Started**

### **Prerequisites**

- Node.js ≥ 18.17.0
- Yarn ≥ 1.22.22
- Docker & Docker Compose (optional but recommended)

### **Quick Start (Docker - Recommended)**

```bash
# Clone and navigate to project
git clone <repository-url>
cd chromezy-frontend

# Build and run (hot reload)
docker compose up --build

# Open browser
open http://localhost:3000
```

### **Local Installation**

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Open browser
open http://localhost:3000
```

### **Docker Development Commands**

```bash
# Start dev container (hot reload)
docker compose up --build

# Follow logs
docker compose logs -f

# Open a shell inside the container
docker compose exec app sh

# Stop and remove
docker compose down
```

### **Available Scripts**

```bash
yarn dev            # Development server (Next.js)
yarn build          # Production build (Next.js)
yarn start          # Production server
yarn lint           # Run ESLint
yarn lint:fix       # Fix linting issues
yarn type-check     # TypeScript check
yarn test           # Run unit tests (Vitest)
yarn test:ui        # Vitest UI
yarn test:e2e       # Run E2E tests (Playwright)
yarn storybook      # Start Storybook
yarn build-storybook# Build Storybook static site
yarn format         # Format with Prettier
yarn format:check   # Check formatting
```

## 🎨 **Design System**

### **Animation Hierarchy**

1. **Micro-interactions**: Hover states, button clicks
2. **Page Transitions**: Route changes, section reveals
3. **Scroll Animations**: Parallax, reveal on scroll
4. **Complex Sequences**: Multi-step animations

### **Performance Targets**

- **FCP** < 1.2s
- **LCP** < 2.5s
- **CLS** < 0.1
- **FID/INP** < 100ms
- **Bundle Size** < 200KB (gzipped)

### **Accessibility**

- ✅ WCAG 2.1 AA compliance
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ `prefers-reduced-motion` support
- ✅ Color contrast ≥ 4.5:1

## 📦 **Key Features**

### **Sections**

- 🌟 **Hero**: Animated glass orb, "CONCEPT to REALITY"
- 🛠️ **Product Engineering**: MVP, SaaS, AI, Commerce cards
- 📈 **Success Stories**: Interactive portfolio grid
- 💻 **Technologies**: Animated tech stack showcase
- 📝 **Featured Insights**: Blog preview cards
- 📞 **Contact**: Interactive form with validation

### **Animations**

- Parallax backgrounds (performance-optimized)
- Staggered card reveals
- Morphing glass effects
- Progressive image loading

## 🐳 **Docker Development**

### **Architecture**

- Single service: `app` (Next.js dev server on port 3000)
- Hot reload via bind mount of project directory
- Node modules and .next cached as anonymous volumes

### **Workflow**

```bash
# Start dev server
docker compose up --build

# Edit code locally; app reloads automatically
# View at http://localhost:3000

# Stop
docker compose down
```

## 🔧 **Development Guidelines**

### **Component Structure**

```typescript
// ✅ Good: Clear separation of concerns
const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <MotionWrapper variant="slideUp">
      <Card>
        <CardIcon>{icon}</CardIcon>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </MotionWrapper>
  );
};
```

### **Animation Patterns**

```typescript
// ✅ Reusable motion configurations
export const motionVariants = {
    slideUp: {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};
```

## 🚀 **Deployment**

### **Build Optimization**

- Image optimization with `next/image`
- Font optimization with `next/font`
- Bundle analysis with `@next/bundle-analyzer`
- Performance monitoring with Web Vitals

**Built with ❤️ by Murtaza Lightwala (Mindfire Solutions)**
