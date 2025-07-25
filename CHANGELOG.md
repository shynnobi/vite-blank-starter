# Changelog

All notable changes to the Vite PowerFlow project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-07-17

### Added

- Migrated the project to a pnpm monorepo structure using TurboRepo for scalable, modular development.
- Centralized and refactored all scripts (build, test, lint, format, type-check, validation) for workspace awareness and DRY principles.
- Introduced advanced automation with lint-staged and Husky for robust pre-commit and pre-push validation.
- Unified and upgraded all dependencies and configuration files across all workspaces.
- Updated documentation and onboarding to reflect the new monorepo structure and developer workflow.

### Changed

- All apps and packages are now managed under a unified monorepo layout.
- Local development workflow now requires running `pnpm install` at the root.
- Removed legacy scripts, configs, and obsolete dependencies from the previous single-package structure.

### Documentation

- Main README and contribution guidelines updated for monorepo usage and best practices.

### Breaking Changes

- Project structure has changed: all local scripts, paths, and commands must be updated to use the new monorepo layout.

[2.0.0]: https://github.com/shynnobi/vite-powerflow/releases/tag/v2.0.0

## [1.2.0] 2025-04-12

### Added

- Path aliases for cleaner imports throughout the codebase
- GitHub CLI pre-installed in DevContainer for streamlined GitHub workflow
- Structured GitHub CLI usage guidelines in `.cursorrules` for consistent developer experience
- Vite 6.2.6 build system

### Changed

- Updated terminology from "starter kit" to "starter template" throughout the project
- Enhanced keywords in package.json to better reflect project features and technologies
- Updated license copyright to correctly reference "Vite PowerFlow Starter Template"
- Implemented modular documentation structure for improved organization
- Reorganized test files by domain for better maintainability
- Renamed e2e test files following Playwright conventions
- Improved dependency management and documentation
- Updated Vite from 6.2.5 to 6.2.6 to address security vulnerability
- Upgraded Storybook from v8.6.12 to v9.1.0-alpha.2 for improved performance and features

### Fixed

- Added missing @utils path alias in configuration files
- Patched server.fs.deny bypass vulnerability in Vite (CVE-pending)
- Corrected Storybook CSS import path to fix startup issues
- Removed deprecated argTypesRegex from Storybook actions config to resolve warnings

### Documentation

- Enhanced README with comprehensive structure and Credits section
- Added navigation references in getting started documentation
- Added changelog references to documentation
- Enhanced .cursorrules with ecosystem conventions and safety measures
- Improved development guidelines with detailed sections and table of contents
- Removed CONTRIBUTING.md and updated README to reflect changes in project structure
- Added social media badges to author section

### Dependencies

- Updated development dependencies with security patches and new features
- Updated production dependencies for improved performance and compatibility

[1.2.0]: https://github.com/shynnobi/vite-powerflow/releases/tag/v1.2.0

## [1.1.0] - 2025-04-03

### Added

- Integrated TanStack Query v5.71 for robust data fetching and caching
  - Added TanStack Query Provider setup
  - Configured TanStack Query DevTools for development
  - Implemented example usage with Posts feature
  - Added proper error handling and loading states

### Changed

- Updated project documentation to reflect new data fetching capabilities
- Enhanced README with TanStack Query version and documentation links
- Improved test organization and conventions:
  - Reorganized tests by domain (counter, posts, app)
  - Aligned e2e test naming with Playwright conventions
  - Improved test setup and mock management
  - Enhanced test maintainability and readability

### Improved

- Enhanced development guidelines:
  - Added ecosystem-specific conventions
  - Strengthened safety measures for Git operations
  - Improved code organization principles

[1.1.0]: https://github.com/shynnobi/vite-powerflow/releases/tag/v1.1.0

## [1.0.0] - Initial Release

### Added

- Core Features
  - Vite 6.2.6 build system
  - React 19.1.0 with TypeScript 5.8.3
  - Tailwind CSS 4.0.0 with shadcn/ui 0.8.0
  - Zustand 5.0.1 state management
  - Comprehensive testing setup (Vitest 3.1.1, Playwright 1.51.1, Testing Library)
  - ESLint 9.0.0 and Prettier 3.2.5
  - Git hooks with Husky 9.0.1
- Development Environment
  - Dev Container support
  - Hot Module Replacement (HMR)
  - TypeScript path aliases
  - Storybook 8.6.12 integration
- Documentation
  - Detailed README
  - Code conventions
  - Project structure

[1.0.0]: https://github.com/shynnobi/vite-powerflow/releases/tag/v1.0.0
