# Vite React TypeScript Starter Kit

A modern and robust starter kit for React web application development, configured with current best practices and tools.

## 🚀 Features

- ⚡️ **[Vite](https://vitejs.dev/)** - Lightning fast build tool
- ⚛️ **[React 18](https://react.dev/)** - Latest React version with Hooks
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
└── vitest.config.ts      # Vitest configuration
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

## 🔧 Development Container

This project includes a development container configuration for VS Code, which provides a consistent development environment for all contributors.

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
- `pnpm lint` - Check code with ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Check TypeScript types

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
