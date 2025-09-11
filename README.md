# Chromezy - Premium Software Agency Website

> Pixel-perfect, animated frontend built with Next.js 14, TypeScript, and advanced motion libraries.

## 🚀 **Overview**

Chromezy is a modern software agency website featuring:

- ⚡ **Next.js 14** with App Router and TypeScript
- 🎨 **Advanced Animations** via Framer Motion + GSAP
- 🎭 **Smooth Scrolling** with Lenis
- 💎 **Glass Morphism** and gradient effects
- 📱 **Responsive Design** with Tailwind CSS
- ♿ **Accessibility First** (WCAG 2.1 AA)
- 🔍 **SEO Optimized** (SSG/SSR/ISR)

## 🛠️ **Tech Stack**

### **Core**

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Smooth Scroll**: @studio-freight/lenis

### **Development**

- **Testing**: Vitest + Playwright + RTL
- **Linting**: ESLint (strict) + Prettier
- **Documentation**: Storybook
- **Icons**: Lucide React

## 🏗️ **Project Structure**

```
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Marketing pages (SSG)
│   ├── (app)/            # App pages (SSR)
│   └── api/              # API routes
├── components/           # React components
│   ├── ui/              # Primitive components
│   ├── sections/        # Page sections
│   ├── layouts/         # Layout components
│   └── animations/      # Motion wrappers
├── lib/                 # Utilities & configs
│   ├── animations.ts    # Animation presets
│   ├── utils.ts        # Utility functions
│   └── constants.ts    # App constants
├── hooks/              # Custom hooks
├── types/              # TypeScript definitions
├── styles/             # Global styles
└── public/             # Static assets
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

# Start development environment
./scripts/docker-dev.sh start

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
# Start development environment
./scripts/docker-dev.sh start

# View logs
./scripts/docker-dev.sh logs

# Run tests
./scripts/docker-dev.sh test

# Start Storybook
./scripts/docker-dev.sh storybook

# Open container shell
./scripts/docker-dev.sh shell

# Stop all services
./scripts/docker-dev.sh stop

# See all commands
./scripts/docker-dev.sh help
```

### **Available Scripts**

```bash
yarn dev          # Development server
yarn build        # Production build
yarn start        # Production server
yarn lint         # Run ESLint
yarn lint:fix     # Fix linting issues
yarn type-check   # TypeScript check
yarn test         # Run unit tests
yarn test:e2e     # Run E2E tests
yarn storybook    # Start Storybook
yarn format       # Format with Prettier
yarn format:check # Check formatting
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

- Smooth scroll with Lenis
- Parallax backgrounds (performance-optimized)
- Staggered card reveals
- Morphing glass effects
- Progressive image loading

## 🐳 **Docker Development**

### **Architecture**

- **Multi-stage builds** for development, testing, and production
- **Hot reload** with volume mounting for instant changes
- **Service profiles** for different development needs
- **Optimized caching** with anonymous volumes

### **Services Available**

- `app` - Main development server (port 3000)
- `storybook` - Component documentation (port 6006)
- `test-ui` - Interactive testing (port 51204)
- `e2e` - End-to-end testing with Playwright
- `prod` - Production build testing (port 3001)

### **Development Workflow**

```bash
# Start development
./scripts/docker-dev.sh start

# Make changes to code (auto-reloads)
# View at http://localhost:3000

# Run tests
./scripts/docker-dev.sh test

# Build Storybook
./scripts/docker-dev.sh storybook

# Test production build
./scripts/docker-dev.sh prod
```

### **Debugging**

- Node.js debugger available on port 9229
- Attach VS Code debugger to container
- Full source maps in development mode

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

### **SEO Strategy**

- SSG for marketing pages
- ISR for dynamic content
- Structured data markup
- Meta tag optimization
- Sitemap generation

## 🧪 **Testing Strategy**

- **Unit**: Component logic and utilities
- **Integration**: Data fetching and routing
- **E2E**: Critical user journeys
- **Visual**: Screenshot regression (Storybook)
- **A11y**: Accessibility testing

## 📚 **Documentation**

For detailed project information, development guides, and roadmap:

- **[📋 Project Roadmap](./docs/ROADMAP.md)** - Development phases and milestones
- **[📚 Full Documentation](./docs/)** - Comprehensive guides and specifications

## 👥 **Contributing**

1. Follow the [Agent.md](./Agent.md) standards
2. Use conventional commits
3. Write tests for new features
4. Ensure accessibility compliance
5. Update documentation (see [docs/](./docs/))

## 📄 **License**

Private - Chromezy Frontend Assignment

---

**Built with ❤️ following pixel-perfect standards and performance-first principles.**
