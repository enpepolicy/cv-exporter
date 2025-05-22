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

- Populate `memory-bank/progress.md`.
- Review all populated Memory Bank files for consistency and completeness.
- Address the discrepancy noted in `index.html` comments vs. code regarding `cvs.json` loading (comment says data is in script, code fetches `cvs.json`). This should be clarified in `progress.md` or by updating the comment in `index.html`.

## Active Decisions & Considerations

- **Data Source Clarification**: The comment in `index.html` states: "CV data is managed directly within the script, eliminating the need for external JSON files and avoiding CORS issues." However, the Vue app's `fetchCVs` method clearly fetches `cvs.json?timestamp=...`. This needs to be reconciled. For now, documentation assumes `cvs.json` is the source of truth as per the code.
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
- There's a minor inconsistency in code comments versus implementation regarding data sourcing that should be addressed for clarity.
