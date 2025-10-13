# Fast Track Academy Curriculum - AI Assistant Instructions

## Project Overview
This repository contains the **Fast Track Academy Curriculum** - an educational platform focused on mastery-based, project-driven learning for young innovators. The curriculum emphasizes life design, practical skills, and digital creation over traditional time-based schooling.

## Architecture & Components

### Dual Structure
- **Root Level**: Curriculum content (markdown files) defining learning modules and philosophy
- **`avatar-ai-creator/`**: Next.js 15 web application for hands-on AI/avatar creation

### Core Learning Modules (Markdown Files)
- `ai-bot-creation.md` - Gamified AI learning with XP system and character personas
- `life-automation-design.md` - Personal productivity and automation
- `digital-content-monetization.md` - Content creation and monetization strategies  
- `project-based-learning.md` - Meta-learning and self-assessment framework

### Web Application (`avatar-ai-creator/`)
- **Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS v4
- **Architecture**: App Router with component-based structure
- **Key Components**: `AvatarBuilder.tsx`, `BotBuilder.tsx`, `Navigation.tsx`
- **Purpose**: Interactive tool for curriculum's AI module

## Development Patterns

### Educational Content Conventions
- Use gamification elements (XP, character types, quests) in learning modules
- Structure with clear **Key Outcomes** sections for each module
- Include practical, real-world project examples
- Maintain encouraging, adventure-themed tone for engagement

### Next.js App Conventions
- Uses **App Router** exclusively (not Pages Router)
- Component state with `useState` hooks, no external state management
- **Turbopack** enabled for dev/build (`--turbopack` flag in scripts)
- TypeScript strict mode with proper interface definitions
- Tailwind CSS v4 for styling (note: newer version, check syntax)

### File Organization Patterns
```
/components/           # React components (*.tsx)
/app/                 # Next.js App Router pages
  layout.tsx          # Root layout with metadata
  page.tsx           # Main application entry
  globals.css        # Global Tailwind imports
```

## Key Developer Workflows

### Development Commands
```bash
cd avatar-ai-creator
npm run dev          # Development with Turbopack
npm run build        # Production build with Turbopack  
npm run lint         # ESLint checking
```

### Educational Content Updates
- Update `PROJECT_LOG.md` when making significant curriculum changes
- Maintain consistent gamification language across modules
- Reference the Fast Track Academy branding and philosophy

### Component Development
- Follow preset pattern for configuration options (see `AvatarBuilder.tsx` line 20-24)
- Use proper TypeScript interfaces for all component props
- Implement JSON export functionality for user configurations
- Include real-time preview capabilities in builders

## Integration Points
- Curriculum markdown files reference the web app for hands-on practice
- `README.md` serves as main entry point linking to all modules
- Deployment ready for Vercel (see `DEPLOYMENT.md` and `vercel.json`)
- Educational philosophy drives both content structure and app UX design

## Educational Context
This is designed for **young learners** transitioning from traditional education to self-directed, project-based mastery. Maintain age-appropriate language while respecting their capability for complex projects. The curriculum rejects traditional subject boundaries in favor of integrated, practical learning experiences.