# Active Context

## Current Focus

- **Resolved**: 404 error for `main.js` on the deployed GitHub Pages site (`https://enpepolicy.github.io/cv-exporter/`).
- The site is now loading correctly after user updated GitHub Pages deployment settings.

## Recent Changes

- Verified `vite.config.js` has the correct `base: '/cv-exporter/'`.
- User provided a screenshot of GitHub Pages settings, confirming the deployment source was misconfigured (was `main` branch, `/ (root)`).
- **User Action Completed**: Changed GitHub Pages deployment source settings:
    - Branch: `gh-pages` (or the actual branch the GitHub Action deploys to).
    - Folder: `/ (root)`.
- Confirmed the deployed site at `https://enpepolicy.github.io/cv-exporter/` is now working.

## Next Steps

- All immediate issues related to the Vite migration and GitHub Pages deployment appear to be resolved.
- Consider reviewing `cvs.json` for complete `labels` objects for full localization if not already done.
- Continue with any further development or documentation tasks.

## Active Decisions & Considerations

- **GitHub Pages Deployment Source**: Confirmed as the root cause of the previous 404 error. Correcting this to point to the `gh-pages` branch (or equivalent) and its root folder resolved the issue.

## Important Patterns & Preferences

- **Vite Build System**: Project uses Vite for development and production builds.
- **NPM Dependency Management**: All external libraries are managed via `package.json`.
- **GitHub Actions for Deployment**: A workflow handles building and deploying to GitHub Pages.

## Learnings & Project Insights

- Correct configuration of both the build tool (`vite.config.js base` property) and the hosting platform's deployment settings (GitHub Pages source branch and folder) is critical for successful deployment, especially for SPAs with specific asset path requirements.
- Troubleshooting deployment issues often involves checking console logs for 404s, verifying build configurations, and then inspecting hosting platform settings.
