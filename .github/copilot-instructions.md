# AI Coding Agent Instructions

## Project Overview

This is a **Next.js 15** portfolio website using **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui components**. The site showcases a personal brand with modern animations using **Motion** and custom UI components.

## Architecture & Structure

### Core Technology Stack

- **Next.js 15** with App Router (`src/app/` directory)
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** with custom CSS variables and animations
- **shadcn/ui** components (New York style variant)
- **Motion** for animations (replacing Framer Motion)
- **Lucide React** for icons

### Directory Structure

```
src/
├── app/(app)/         # App Router group with main page
├── components/        # Organized by function, not type
│   ├── ui/            # shadcn/ui base components
│   └── logos/         # Brand logo components (SVG-based)
└── lib/utils.ts       # Shared utilities (mainly cn() for className merging)
```

## Development Conventions

### Component Patterns

1. **Barrel Exports**: All component directories use `index.ts` for clean imports

   ```typescript
   // src/components/index.ts
   export * from "./hero-section";
   export * from "./footer";
   ```

2. **Component Architecture**: Page components are composed of section components

   ```tsx
   // Main page structure in src/app/(app)/page.tsx
   export default function Home() {
     return (
       <>
         <HeroSection />
         <Specialty />
         <TechnologiesSection />
         {/* ... more sections */}
       </>
     );
   }
   ```

3. **UI Components**: Follow shadcn/ui patterns with CVA (Class Variance Authority)
   - Use `cn()` from `@/lib/utils` for className merging
   - Implement variant props for component customization
   - Forward refs for composability

### Styling Conventions

- **CSS Variables**: Defined in `globals.css` for theme consistency
- **Font Stack**: Uses Google Fonts (Space Grotesk, Lora, Fira Code) with CSS variables
- **Component Styling**: Use Tailwind classes with logical grouping
- **Motion**: Prefer `motion` library over `framer-motion` for animations

### TypeScript Patterns

- **Strict Configuration**: All strict TypeScript options enabled
- **Import Aliases**: Use `@/` for src directory imports
- **React 19**: Uses latest React types and patterns

## Build & Development

### Key Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build with Turbopack for production
npm run lint         # ESLint with Next.js config
npm run prettier     # Format code with Prettier + Tailwind plugin
```

### Configuration Files

- `eslint.config.mjs`: Flat config with Next.js, React, and Prettier integration
- `components.json`: shadcn/ui configuration (New York style, CSS variables)
- `tsconfig.json`: Strict TypeScript with Next.js plugin
- Uses **Turbopack** for faster builds (enabled in scripts)

## Integration Points

### shadcn/ui Integration

- Components installed to `src/components/ui/`
- Uses "new-york" style variant with CSS variables
- Custom button component with extensive variant system
- Progressive blur and infinite slider custom components

### Font Management

- Three font families loaded in `layout.tsx` with CSS variables
- Portuguese language set (`lang="pt-BR"`)
- Proper font optimization with `next/font/google`

## Best Practices for AI Agents

1. **Component Creation**: Always create barrel exports in `index.ts` files
2. **Styling**: Use existing Tailwind patterns and CSS variables
3. **Motion**: Use `motion` library for animations, not `framer-motion`
4. **Icons**: Use Lucide React icons consistently
5. **TypeScript**: Maintain strict typing and use proper React 19 patterns
6. **Imports**: Use `@/` alias for all internal imports
7. **shadcn/ui**: Follow existing component patterns when adding new UI components

## Critical Files to Reference

- `src/components/ui/button.tsx` - Example of CVA pattern implementation
- `src/app/layout.tsx` - Font loading and root layout structure
- `src/components/hero-section.tsx` - Complex component composition example
- `components.json` - shadcn/ui configuration reference
