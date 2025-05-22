# Active Context

## Current Focus

- Initial project documentation and context gathering.
- Populating the Memory Bank files based on the existing project structure and code (`index.html`, `cvs.json`, `package.json`).

## Recent Changes

- `memory-bank/projectbrief.md` created and populated.
- `memory-bank/productContext.md` created and populated.
- `memory-bank/systemPatterns.md` created and populated.
- `memory-bank/techContext.md` created and populated.

## Next Steps

- Review all populated Memory Bank files for consistency and completeness.
- Update `memory-bank/progress.md` to reflect that the previously noted comment discrepancy in `index.html` regarding `cvs.json` loading is already resolved in the current version of `index.html`.

## Active Decisions & Considerations

- **Data Source Clarification (Resolved)**: Previously, a discrepancy was noted where the `index.html` comment suggested CV data was in-script, while the code fetched `cvs.json`. Upon review of the current `index.html` (as of 2025-05-22), the comment correctly states that data is loaded from `cvs.json`. This issue is considered resolved.
- **Project Simplicity**: The project is currently a single HTML file with inline Vue.js and styles, relying on CDNs. This is simple for deployment but has limitations (e.g., no build step, harder to manage larger codebases). This simplicity is reflected in the documentation.

## Important Patterns & Preferences

- **CDN Usage**: Heavy reliance on CDNs for major libraries (Vue, Tailwind, Font Awesome, export tools).
- **Single-File Structure**: Most of the application logic and templating resides in `index.html`.
- **Data in `cvs.json`**: CV content is externalized to `cvs.json`, which is good for separation of concerns.
- **Vue Options API**: The Vue application is structured using the Options API.

## Learnings & Project Insights

- The project is a well-structured interactive CV viewer.
- It effectively uses Vue.js for dynamic content and `cvs.json` for data management.
- The export functionalities (PDF/Image) are key features.
- The use of import maps is a modern approach for managing modules without a build step in simpler projects.
- The previously noted inconsistency in `index.html` comments regarding data sourcing has been verified as resolved in the current file version.
