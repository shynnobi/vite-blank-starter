# Vite React TypeScript Starter Kit

A modern and robust starter kit for React web application development, configured with current best practices and tools.

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.2-646CFF.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0.14-38B2AC.svg)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.21.0-4B32C3.svg)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

## 📑 Table of Contents

- [🚀 Features](#-features)
- [📦 Project Structure](#-project-structure)
- [🎨 Theming](#-theming)
- [🚀 Getting Started](#-getting-started)
- [🔄 Path Aliases](#-path-aliases)
- [🐳 Development Container](#-development-container)
  - [Docker Configuration](#docker-configuration)
  - [Getting Started with the Dev Container](#getting-started-with-the-dev-container)
  - [Benefits of Using the Dev Container](#benefits-of-using-the-dev-container)
  - [Git Configuration](#git-configuration)
- [🧪 Testing](#-testing)
- [🛠️ Available Scripts](#️-available-scripts)
- [📝 Code Conventions](#-code-conventions)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Features

- ⚡️ **[Vite](https://vitejs.dev/)** - Lightning fast build tool
- ⚛️ **[React 19](https://react.dev/)** - Latest React version with Hooks
- 📝 **[TypeScript](https://www.typescriptlang.org/)** - Static typing for robust code
- 🎨 **Styling & UI** :
  - 🌊 [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
  - 🎯 [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
  - 🌓 Dark mode support with theme switching
  - 🎭 [react-icons](https://react-icons.github.io/react-icons/) for beautiful icons
- 🧪 **Complete Testing Setup** :
  - 🃏 [Vitest](https://vitest.dev/) for unit and integration tests
  - 🎭 [Playwright](https://playwright.dev/) for E2E testing
  - 🧪 [@testing-library/react](https://testing-library.com/react) for component testing
- 📏 **Code Quality** :
  - [ESLint](https://eslint.org/) with latest flat config (v9)
  - [Prettier](https://prettier.io/) for code formatting
  - [TypeScript ESLint](https://typescript-eslint.io/) for TypeScript-specific rules
- 🔍 **Pre-commit hooks** :
  - [Husky](https://typicode.github.io/husky/) for git hooks
  - [lint-staged](https://github.com/okonet/lint-staged) for staged files linting
  - [commitlint](https://commitlint.js.org/) for standardized commit messages
- 📦 **State Management** :
  - [Zustand](https://zustand-demo.pmnd.rs/) for simple and scalable state management

## 📦 Project Structure

```
├── src/                  # Application source code
│ ├── components/         # Reusable components
│ │ └── ui/               # shadcn/ui components
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
└── components.json       # shadcn/ui components configuration
```

## 🎨 Theming

The project includes a dark mode implementation using Tailwind CSS and React context:

- Toggle between light and dark modes
- System preference detection
- Persistent theme selection
- Smooth theme transitions

## 🚀 Getting Started

1. Clone the project:

   ```bash
   git clone [https://github.com/shynnobi/vite-blank-starter]
   cd vite-blank-starter
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start development server:
   ```bash
   pnpm dev
   ```

## 🔄 Path Aliases

This project uses path aliases to avoid relative import paths like `../../../components`. The following aliases are pre-configured:

- `@/*` → `src/*`
- `@assets/*` → `src/assets/*`
- `@components/*` → `src/components/*`
- `@context/*` → `src/context/*`
- `@lib/*` → `src/lib/*`
- `@pages/*` → `src/pages/*`
- `@shared/*` → `src/shared/*`
- `@store/*` → `src/store/*`
- `@tests/*` → `tests/*`
- `@utils/*` → `src/utils/*`

### Adding a New Path Alias

To add a new path alias (e.g., `@utils/*`), you need to update the following files:

1. **vite.config.ts**:

   ```typescript
   resolve: {
     alias: [
       // ... existing aliases
       { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
     ],
   },
   ```

2. **vitest.config.ts**:

   ```typescript
   resolve: {
     alias: [
       // ... existing aliases
       { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
     ],
   },
   ```

3. **tsconfig.json**:

   ```json
   "paths": {
     // ... existing paths
     "@utils/*": ["src/utils/*"]
   }
   ```

4. **tsconfig.app.json**:
   ```json
   "paths": {
     // ... existing paths
     "@utils/*": ["src/utils/*"]
   }
   ```

After adding the alias, you can use it in your imports:

```typescript
import { formatDate } from '@utils/date';
```

## 🐳 Development Container

This project includes a development container configuration for VS Code, which provides a consistent development environment for all contributors.

### Docker Configuration

The development container uses Docker and is pre-configured with:

- Node.js 20 (TypeScript-enabled image)
- PNPM package manager
- VS Code extensions for React, TypeScript, ESLint, Prettier, Vite, Playwright, Tailwind CSS, and Vitest
- Pre-configured editor settings (formatting, tab size, etc.)
- Automatic port forwarding for Vite (5173) and other services

### Getting Started with the Dev Container

To use the development container:

1. Install [Docker](https://www.docker.com/get-started/) on your machine
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code
3. Clone this repository
4. Open the project in VS Code
5. When prompted "Reopen in Container", click "Reopen in Container"
   - Alternatively, use the command palette (F1) and select "Dev Containers: Reopen in Container"

The container will build automatically, install all dependencies, and provide a consistent environment with all the necessary tools.

### Benefits of Using the Dev Container

- Consistent development environment for all contributors
- All dependencies and tools are pre-installed
- No need to install Node.js, PNPM, or other tools locally
- Isolation from your local system
- Works identically on Windows, macOS, and Linux

### Git Configuration

The development container is configured to use your local Git configuration. Make sure your `.gitconfig` file is properly set up with your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

If you're using the development container and your commits don't appear with your GitHub avatar, you may need to run these commands inside the container.

## 🧪 Testing

- Unit and Integration tests:

  ```bash
  pnpm test # Run all tests
  pnpm test:watch # Watch mode
  pnpm test:ui # Vitest UI interface
  ```

- E2E tests:
  ```bash
  pnpm test:e2e # Run E2E tests with Playwright
  pnpm test:e2e:ui # Run E2E tests with Playwright UI
  ```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run all tests
- `pnpm test:verbose` - Run tests with detailed output
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm test:e2e` - Run E2E tests with Playwright
- `pnpm test:e2e:verbose` - Run E2E tests with detailed tracing
- `pnpm lint` - Check code with ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm fix` - Format and fix all code (Prettier + ESLint)
- `pnpm type-check` - Check TypeScript types
- `pnpm prepare` - Prepare Husky git hooks

## 📝 Code Conventions

- **TypeScript**: Strict mode enabled
- **ESLint**: Modern configuration with React and TypeScript support
- **Commits**: Conventional Commits format
  - `feat:` New features
  - `fix:` Bug fixes
  - `chore:` Maintenance tasks
  - `docs:` Documentation changes
  - `test:` Test modifications
- **Components**: Follow shadcn/ui conventions for consistency
- **Styling**: Use Tailwind CSS utility classes

## 🤝 Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

The MIT License is a permissive license that allows you to use, modify, distribute, and sublicense the code for both private and commercial purposes, provided that the original copyright notice and the license text are included.
