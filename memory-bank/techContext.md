# Tech Context

## Technologies Used

- **Core Frontend**:
    - HTML5
    - CSS3 (via Tailwind CSS and custom styles)
    - JavaScript (ES6 Modules)
- **JavaScript Framework**:
    - Vue.js 3 (specifically `vue@3/dist/vue.esm-browser.js` via CDN)
- **CSS Framework**:
    - Tailwind CSS (via CDN `https://cdn.tailwindcss.com`)
- **Data Format**:
    - JSON (for `cvs.json`)
- **Export Libraries**:
    - `html2pdf.js` (version 0.10.1 via CDN) - For PDF export.
    - `html2canvas.js` (version 1.4.1 via CDN) - For image export (used by `html2pdf.js` and directly for PNG export).
- **Icons**:
    - Font Awesome (version 6.4.0 via CDN)
- **Fonts**:
    - Google Fonts (Roboto, Montserrat)
- **Development Server (Recommended)**:
    - `http-server` (Node.js package, version `^14.1.1` as per `package.json`) or VSCode Live Server extension.
- **Package Manager (for dev dependencies like `http-server`)**:
    - npm (implied by `package.json` and `package-lock.json`)
- **Version Control**:
    - Git (implied by `.gitignore`)

## Development Setup

1.  **Prerequisites**:
    *   A modern web browser (e.g., Chrome, Firefox, Edge).
    *   Node.js and npm installed (if you want to use `http-server` from `package.json` or manage other Node.js based dev tools).
2.  **Get the Code**:
    *   Clone or download the project files.
3.  **Install Dependencies (Optional, for `http-server`)**:
    *   Navigate to the project root directory in your terminal.
    *   Run `npm install` to install `http-server` (if not globally installed).
4.  **Serve the Application**:
    *   **Using `http-server`**:
        *   In the project root directory, run `npx http-server` (or `http-server` if globally installed, or `npm start` if a script is added to `package.json` like `"start": "http-server"`).
        *   Open your browser and navigate to the local address provided (e.g., `http://localhost:8080`).
    *   **Using VSCode Live Server**:
        *   Open the `index.html` file in VSCode.
        *   Right-click and select "Open with Live Server".
5.  **View and Interact**:
    *   The CV application should now be running in your browser.

## Technical Constraints

- **Client-Side Only**: All logic, data processing, and rendering happen in the user's browser. No backend beyond a static file server.
- **CDN Dependencies**: Relies on CDNs for Vue.js, Tailwind CSS, Font Awesome, and export libraries. An internet connection is required for these to load initially. For offline development or deployment, these would need to be localized.
- **Browser Compatibility**: Functionality (especially PDF/Image export) might vary slightly or have issues in older or less common browsers. Modern evergreen browsers are the primary target.
- **Performance with Large `cvs.json`**: If `cvs.json` becomes extremely large, fetching and processing it entirely on the client-side might lead to performance degradation on initial load or when filtering. The current file size seems manageable.
- **Export Quality**: The quality of PDF/Image exports depends on `html2pdf.js` and `html2canvas.js` accurately rendering the HTML/CSS. Complex CSS or layouts can sometimes pose challenges.

## Dependencies

- **`http-server` (devDependency in `package.json`)**: A simple, zero-configuration command-line HTTP server. Used for serving the `index.html` and other static assets locally.
- **External CDN Libraries**:
    - `vue`: Core framework for UI.
    - `tailwindcss`: For styling.
    - `html2pdf.js`, `html2canvas.js`: For export features.
    - `font-awesome`: For icons.
    - `Google Fonts`: For custom typography.

## Tool Usage Patterns

- **Vue.js**: Used with the Options API in a single large instance within `index.html`. Data properties manage state, methods handle logic, computed properties derive data, and watchers react to state changes. The template is embedded directly in `index.html`.
- **Tailwind CSS**: Utility classes are applied directly in the HTML structure for styling. Some custom CSS is also present in `<style>` tags for scrollbars, card effects, etc.
- **`cvs.json`**: Acts as a simple database. Fetched via `fetch()` API. The `timestamp` query parameter is used to prevent caching during development/updates.
- **`html2pdf.js` / `html2canvas.js`**: Invoked in Vue methods, targeting the `#cv-content` div to generate files. Options are configured for output format and quality.
- **Import Maps**: Used to alias `vue` and `cvs` for ES module imports directly in the browser without a build step.
