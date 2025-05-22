# Active Context

## Current Focus

- Resolving GitHub Action build failure related to Font Awesome dependency.
- Ensuring the Vite-based build process is stable and all dependencies are correctly managed.
- Updating Memory Bank documentation to reflect the major architectural shift from CDN/http-server to a Vite build system.

## Recent Changes

- **Migrated to Vite**: Project refactored from a single `index.html` with CDN dependencies to a Vite-based build system.
    - `package.json` updated with Vite, Vue, Tailwind CSS, Font Awesome, and export libraries as npm dependencies.
    - `http-server` removed.
    - Tailwind CSS configured via `tailwind.config.js` and `postcss.config.js`.
    - Global styles moved to `src/assets/main.css`.
    - `src/main.js` created as the Vite app entry point, initializing Vue and Font Awesome.
    - Root `index.html` simplified to a Vite template.
    - Main application logic and template moved to `src/App.vue`.
- **CV Data Handling Changed**:
    - `cvs.json` moved from `public/` to `src/cvs.json`.
    - `App.vue` now imports `cvs.json` directly instead of fetching it.
    - A `processCVs` method was added to `App.vue` to transform the flat `src/cvs.json` data into the nested structure (language -> versions) expected by the component's logic.
- **Dependency Fix**: Added `@fortawesome/free-brands-svg-icons` to `package.json` to resolve build errors.
- **Defensive Coding**: Added checks in `App.vue` to prevent errors if `versions` array is missing/empty for a language.

## Next Steps

- User to commit changes (`package.json`, `src/App.vue`, `src/cvs.json`, new config files, etc.) and push to Git.
- User to re-run the GitHub Action to confirm the build now passes.
- If the build is successful, finalize Memory Bank updates (`progress.md`).
- If issues persist, further troubleshoot the GitHub Action or any new local errors.

## Active Decisions & Considerations

- **Data Structure**: The application logic in `App.vue` expects a nested data structure for CVs (language objects containing version arrays). The `src/cvs.json` file contains a flat list, so a transformation step (`processCVs`) is now performed in `App.vue`.
- **Labels in `cvs.json`**: For correct UI label localization, each version object within `src/cvs.json` should contain a `labels` object with translated strings. This was communicated to the user.
- **Build Stability**: Ensuring the `npm run build` command works reliably both locally and in the CI environment is a priority.

## Important Patterns & Preferences

- **Vite Build System**: The project now uses Vite for development and production builds.
- **NPM Dependency Management**: All external libraries are managed via `package.json`.
- **Single File Component (`src/App.vue`)**: The main application logic and template reside in `src/App.vue`.
- **Direct JSON Import**: `src/cvs.json` is imported directly as a module.
- **Vue Options API**: The Vue application in `src/App.vue` uses the Options API.

## Learnings & Project Insights

- Migrating from a CDN-based approach to a build system like Vite significantly changes project structure, dependency management, and asset handling.
- Careful attention to `package.json` is crucial for CI/CD environments, as missing dependencies are a common source of build failures.
- Data transformation logic may be needed if the source data structure doesn't perfectly match the application's internal expectations.
- Incremental testing after major changes is important to catch issues early (e.g., testing `npm run dev` before `npm run build`).
