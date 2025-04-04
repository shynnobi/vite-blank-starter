# Vite PowerFlow ⚡ v1.1.0

A modern React starter kit with a robust development workflow, featuring comprehensive tooling and industry best practices for professional applications.

[![Version](https://img.shields.io/badge/Version-1.1-blue.svg)](./CHANGELOG.md)
[![React](https://img.shields.io/badge/React-19.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-8.6-FF4785.svg)](https://storybook.js.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.23-4B32C3.svg)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

<div align="center">

## 👨‍💻 Author

<a href="https://github.com/shynnobi">
  <img src="https://github.com/shynnobi.png" width="100" alt="Shynn" style="border-radius: 100px"/>
</a>

**Shynn** · _Front-end Developer & 3D Artist_

[![GitHub](https://img.shields.io/badge/GitHub-shynnobi-24292e.svg?style=for-the-badge&logo=github)](https://github.com/shynnobi)
[![Bluesky](https://img.shields.io/badge/Bluesky-@shynnobi-0560ff.svg?style=for-the-badge&logo=bluesky)](https://bsky.app/profile/shynnobi.bsky.social)
[![Instagram](https://img.shields.io/badge/Instagram-@shynnobi-E4405F.svg?style=for-the-badge&logo=instagram)](https://www.instagram.com/shynnobi_)

</div>

## 📑 Table of Contents

- [Vite PowerFlow](#vite-powerflow)
  - [📑 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [📦 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Option 1: Standard Setup](#option-1-standard-setup)
    - [Option 2: Using Dev Container (Recommended)](#option-2-using-dev-container-recommended)
    - [Dev Container Benefits](#dev-container-benefits)
    - [Git Configuration with Dev Container](#git-configuration-with-dev-container)
  - [🎨 Theming](#-theming)
  - [🔄 Path Aliases](#-path-aliases)
    - [Adding a New Path Alias](#adding-a-new-path-alias)
  - [🔗 Git Hooks](#-git-hooks)
  - [🧪 Testing](#-testing)
  - [📚 Component Development with Storybook](#-component-development-with-storybook)
  - [🛠️ Available Scripts](#️-available-scripts)
  - [📝 Code Conventions](#-code-conventions)
  - [📄 License](#-license)
  - [📋 Changelog](#-changelog)

## ✨ Features

- ⚡️ **[Vite 6.2](https://vitejs.dev/)** - Lightning fast build tool
- ⚛️ **[React 19.1](https://react.dev/)** - Latest version with Hooks
- 📝 **[TypeScript 5.3](https://www.typescriptlang.org/)** - Static typing for robust code
- 🎨 **Styling & UI** :
  - 🌊 [Tailwind CSS 4.0](https://tailwindcss.com/) - Utility-first styling
  - 🎯 [shadcn/ui 0.8](https://ui.shadcn.com/) - Beautiful, accessible components
  - 📚 [Storybook 8.6](https://storybook.js.org/) - Component documentation and testing
  - 🎭 [react-icons 5.5](https://react-icons.github.io/react-icons/) - Beautiful icons
  - 🌓 Dark mode support with theme switching
- 🔄 **Data Management** :
  - 🚀 [TanStack Query 5.71.5](https://tanstack.com/query/latest) - Powerful data fetching and caching
  - 📦 [Zustand 5.0.3](https://zustand-demo.pmnd.rs/) - Simple and scalable state management
- 🧪 **Complete Testing Setup** :
  - 🃏 [Vitest 3.0.9](https://vitest.dev/) - Unit and integration tests
  - 🎭 [Playwright 1.51.1](https://playwright.dev/) - E2E testing
  - 🧪 [@testing-library/react 16.2.0](https://testing-library.com/react) - Component testing
- 📏 **Code Quality** :
  - [ESLint 9.23.0](https://eslint.org/) - Latest flat config
  - [Prettier 3.2.5](https://prettier.io/) - Code formatting
  - [TypeScript ESLint 8.27.0](https://typescript-eslint.io/) - TypeScript-specific rules
- 🔍 **Pre-commit hooks** :
  - [Husky 9.0.11](https://typicode.github.io/husky/) - Git hooks
  - [lint-staged 15.2.2](https://github.com/okonet/lint-staged) - Staged files linting
  - [commitlint 19.2.0](https://commitlint.js.org/) - Standardized commit messages

## 📦 Project Structure

```
├── src/                  # Application source code
│ ├── components/         # Reusable components
│ │ └── ui/               # shadcn/ui components with Storybook stories
│ ├── store/              # Zustand state management
│ ├── assets/             # Static assets
│ ├── context/            # React context providers
│ ├── pages/              # Page components
│ ├── lib/                # Utility libraries
│ ├── utils/              # Utility functions (logging, etc.)
│ └── shared/             # Shared types and interfaces
├── tests/                # Tests
│ ├── e2e/                # End-to-end tests
│ ├── integration/        # Integration tests
│ └── unit/               # Unit tests
├── public/               # Static files
├── .husky/               # Git hooks configuration
├── eslint.config.js      # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vitest.config.ts      # Vitest configuration
├── playwright.config.ts  # Playwright E2E testing configuration
├── commitlint.config.js  # Commit message linting rules
├── .storybook/          # Storybook configuration
└── components.json       # shadcn/ui components configuration
```

## 🚀 Getting Started

This starter kit can be used in two ways: directly or with development containers.

### Option 1: Standard Setup

1. Create a new project using this template:

   ```bash
   # Using degit (recommended)
   npx degit shynnobi/vite-powerflow my-project
   # OR clone the repository
   git clone https://github.com/shynnobi/vite-powerflow my-project
   ```

2. Navigate to your project:

   ```bash
   cd my-project
   ```

3. Install dependencies:

   ```bash
   pnpm install
   # OR using npm
   npm install
   # OR using yarn
   yarn install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   # OR using npm
   npm run dev
   # OR using yarn
   yarn dev
   ```

### Option 2: Using Dev Container (Recommended)

For a consistent development experience across all environments, we recommend using the included Dev Container configuration:

1. Prerequisites:

   - Install [Docker](https://www.docker.com/get-started/) on your machine
   - Install [VS Code](https://code.visualstudio.com/)
   - Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code

2. Create a new project using this template:

   ```bash
   # Using degit (recommended)
   npx degit shynnobi/vite-powerflow my-project
   # OR clone the repository
   git clone https://github.com/shynnobi/vite-powerflow my-project
   ```

3. Open the project in VS Code:

   ```bash
   cd my-project
   code .
   ```

4. When prompted "Reopen in Container", click "Reopen in Container"

   - Alternatively, use the command palette (F1) and select "Dev Containers: Reopen in Container"

5. The container will build automatically, install all dependencies, and you can start developing immediately. The development server will be accessible at http://localhost:5173.

### Dev Container Benefits

- Consistent development environment for all contributors
- All dependencies and tools are pre-installed
- No need to install Node.js, PNPM, or other tools locally
- Isolation from your local system
- Works identically on Windows, macOS, and Linux

### Git Configuration with Dev Container

The development container is configured to use your local Git configuration. Make sure your `.gitconfig` file is properly set up with your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 🎨 Theming

This project includes a complete dark/light theme system:

- Automatic theme detection based on system preferences
- Manual theme switching with persistent storage
- Tailwind CSS theme variables
- shadcn/ui theme integration

### Usage

```tsx
// Access theme in components
import { useTheme } from '@/context/theme/ThemeContext';

function MyComponent() {
	const { theme, setTheme } = useTheme();
	// ...
}
```

## 🔄 Path Aliases

Path aliases are configured for better import organization:

```typescript
// Instead of
import { Component } from '../../../components/Component';

// Use
import { Component } from '@components/Component';
```

### Available Aliases

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@context/*` → `src/context/*`
- `@lib/*` → `src/lib/*`
- `@pages/*` → `src/pages/*`
- `@shared/*` → `src/shared/*`
- `@store/*` → `src/store/*`
- `@tests/*` → `tests/*`
- `@utils/*` → `src/utils/*`

### Adding a New Path Alias

1. Add the alias in `tsconfig.json`:

   ```json
   {
   	"paths": {
   		"@newAlias/*": ["src/newPath/*"]
   	}
   }
   ```

2. Add it in `vite.config.ts`:
   ```typescript
   resolve: {
   	alias: [{ find: '@newAlias', replacement: resolve(__dirname, 'src/newPath') }];
   }
   ```

## 🔗 Git Hooks

This project uses Husky for Git hooks:

### Pre-commit Hook

Automatically runs before each commit:

1. TypeScript type checking (`pnpm type-check`)
2. Unit tests (`pnpm test`)
3. Code formatting and linting (`pnpm lint-staged`)

### Commit Message Hook

Enforces conventional commit messages:

- Format: `type(scope): description`
- Types: build, chore, ci, docs, feat, fix, perf, refactor, style, test
- Example: `feat(auth): add login form`

## 🧪 Testing

The project includes a comprehensive testing setup with three types of tests:

### Unit Tests

Located in `tests/unit/`, using Vitest and React Testing Library.

```bash
npm run test:unit        # Run unit tests
npm run test:unit:watch  # Run unit tests in watch mode
```

### Integration Tests

Located in `tests/integration/`, using Vitest and React Testing Library.

```bash
npm run test:integration        # Run integration tests
npm run test:integration:watch  # Run integration tests in watch mode
```

### E2E Tests

Located in `tests/e2e/`, using Playwright.

```bash
npm run test:e2e        # Run E2E tests
npm run test:e2e:ui     # Run E2E tests with Playwright UI
```

### Examples

The project includes example tests for reference:

- Unit tests: Counter store tests in `tests/unit/counter/`
- Integration tests: Posts feature tests in `tests/integration/posts/`
- E2E tests: Basic app navigation in `tests/e2e/`

### Test Setup

Test configuration and setup is located in:

- `tests/unit/setup.ts` - Global test setup for unit tests

## 📚 Component Development with Storybook

Storybook is integrated for component development and documentation:

```bash
pnpm storybook        # Start Storybook development server
pnpm build-storybook  # Build static Storybook site
```

- Components are documented in `.stories.tsx` files
- Located alongside component files
- Includes component variants and states
- Interactive documentation and testing
- Accessible at http://localhost:6006 during development

## 🛠️ Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Testing
pnpm test             # Run tests
pnpm test:verbose     # Run tests with detailed output
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Generate test coverage report
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:verbose # Run E2E tests with tracing enabled

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting
pnpm fix              # Fix all code quality issues
pnpm type-check       # Run TypeScript type checking
pnpm validate         # Run all code quality checks

# Storybook
pnpm storybook        # Start Storybook development server
pnpm build-storybook  # Build static Storybook site
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.
