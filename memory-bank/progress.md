# Progress

## What Works

- **Core CV Display**: The application successfully loads `index.html`, initializes Vue.js, fetches data from `cvs.json`, and displays the CV content.
- **Language Selection**: Users can switch between English, Spanish, and French. The UI labels and CV content update accordingly.
- **Version Selection**: Users can select different CV versions (e.g., "Front-End Developer", "Full Stack Developer"). The CV content and title update based on the selection.
- **Dynamic Data Loading**: CV data is correctly filtered and rendered from `cvs.json` based on language and version.
- **PDF Export**: The "Export to PDF" functionality using `html2pdf.js` appears to be implemented and should generate a PDF of the `#cv-content` div.
- **Image Export**: The "Export to Image" functionality using `html2canvas.js` appears to be implemented and should generate a PNG image of the `#cv-content` div.
- **Styling**: The application uses Tailwind CSS and custom styles for a professional and responsive design.
- **JSON-LD**: Structured metadata is dynamically generated and updated in the `<head>` of the document.
- **Local Serving**: The application can be served using `http-server` or VSCode Live Server.

## What's Left to Build

- **No new features are immediately planned as per the current state.** The existing functionality seems complete for its purpose.
- **Potential Enhancements (Future Considerations, not current tasks):**
    -   Refactor Vue app into smaller components for better maintainability if the project grows.
    -   Add a build step (e.g., Vite, Webpack) to bundle assets, enable SCSS/SASS, and optimize for production if CDN reliance becomes an issue.
    -   Implement more robust error handling, especially for the `fetch` call.
    -   Add unit or end-to-end tests (Playwright is mentioned as a skill in `cvs.json`, so this could be a future addition).
    -   Improve accessibility further (e.g., ARIA attributes, keyboard navigation for custom controls if any were more complex).

## Current Status

- The project is a functional, client-side interactive CV viewer.
- All core features described in `index.html` (language/version switching, PDF/image export) are implemented.
- The Memory Bank documentation has just been populated based on the existing codebase.

## Known Issues

- **Comment vs. Code Discrepancy for Data Source**:
    -   **Issue**: The main comment block at the top of `index.html` states: "CV data is managed directly within the script, eliminating the need for external JSON files and avoiding CORS issues."
    -   **Reality**: The Vue application's `fetchCVs` method explicitly fetches data from `cvs.json` using `fetch(\`cvs.json?timestamp=\${new Date().getTime()}\`)`.
    -   **Impact**: This is a documentation inconsistency. The code's behavior (fetching `cvs.json`) is what's actually happening.
    -   **Recommendation**: Update the comment in `index.html` to accurately reflect that data is loaded from `cvs.json`.
- **Potential CDN Downtime/Blocking**: Reliance on CDNs means that if a CDN is down or blocked (e.g., in a restricted network environment), the application might not load or function correctly. This is an inherent trade-off of using CDNs without local fallbacks for this type of simple project.

## Evolution of Project Decisions

- **Initial State (as of 2025-05-22)**:
    -   The project was found in its current state.
    -   Decision made to populate the Memory Bank to document the existing structure and functionality.
    -   The primary data source is `cvs.json`, despite a misleading comment in `index.html`.
    -   The application uses Vue.js 3 via CDN and import maps, indicating a preference for a no-build-step setup for simplicity.
