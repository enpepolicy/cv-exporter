# Tech Context

## Technologies Used

- **Core Frontend**:
    - HTML5
    - CSS3 (via Tailwind CSS and global styles in `src/assets/main.css`)
    - JavaScript (ES6 Modules)
- **Build Tool / Development Server**:
    - Vite (`vite`)
- **JavaScript Framework**:
    - Vue.js 3 (managed via npm, imported in `src/main.js`)
- **CSS Framework**:
    - Tailwind CSS (managed via npm, configured in `tailwind.config.js` and `postcss.config.js`)
- **Data Format**:
    - JSON (for `src/cvs.json`, imported directly into the application)
- **Export Libraries**:
    - `html2pdf.js` (managed via npm) - For PDF export.
    - `html2canvas.js` (managed via npm) - For image export.
- **Icons**:
    - Font Awesome (managed via npm: `@fortawesome/fontawesome-svg-core`, `@fortawesome/vue-fontawesome`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`)
- **Fonts**:
    - Google Fonts (Roboto, Montserrat - imported in `src/assets/main.css`)
- **Package Manager**:
    - npm (manages all project dependencies via `package.json`)
- **Version Control**:
    - Git (implied by `.gitignore`)

## Development Setup

1.  **Prerequisites**:
    *   A modern web browser (e.g., Chrome, Firefox, Edge).
    *   Node.js and npm installed.
2.  **Get the Code**:
    *   Clone or download the project files.
3.  **Install Dependencies**:
    *   Navigate to the project root directory in your terminal.
    *   Run `npm install` to install all project dependencies listed in `package.json`.
4.  **Serve the Application (Development Mode)**:
    *   In the project root directory, run `npm run dev`.
    *   Vite will start a development server, typically on a local port (e.g., `http://localhost:5173`). The exact URL, including the base path (`/cv-exporter/`), will be shown in the terminal.
    *   Open this URL in your browser.
5.  **Build for Production**:
    *   Run `npm run build`.
    *   Vite will create an optimized production build in the `dist/` directory.
6.  **Preview Production Build Locally**:
    *   Run `npm run preview`.
    *   Vite will serve the contents of the `dist/` folder, allowing you to test the production build locally.

## Technical Constraints

- **Client-Side Only**: All logic, data processing, and rendering happen in the user's browser.
- **Browser Compatibility**: Modern evergreen browsers are the primary target. Functionality (especially PDF/Image export) might vary in older browsers.
- **Export Quality**: The quality of PDF/Image exports depends on `html2pdf.js` and `html2canvas.js` accurately rendering the HTML/CSS.

## Dependencies

(Refer to `package.json` for a complete list of dependencies and their versions.)
Key dependencies include:
- `vue`: Core framework for UI.
- `vite`, `@vitejs/plugin-vue`: Build tooling and Vue integration.
- `tailwindcss`, `postcss`, `autoprefixer`: For styling.
- `html2pdf.js`, `html2canvas`: For export features.
- `@fortawesome/*`: For Font Awesome icons.

## Tool Usage Patterns

- **Vite**: Handles development server, Hot Module Replacement (HMR), and production builds. Configuration is in `vite.config.js`.
- **Vue.js**: Used with the Options API in a single root component (`src/App.vue`).
    - Data properties manage state.
    - Methods handle logic.
    - Computed properties derive data.
    - Watchers react to state changes.
- **Tailwind CSS**: Utility classes are applied in `src/App.vue` template. Global styles and Tailwind directives are in `src/assets/main.css`. Configuration in `tailwind.config.js` and `postcss.config.js`.
- **`src/cvs.json`**: Acts as a simple database, imported directly as a module into `src/App.vue`. Data is transformed from a flat list to a nested structure (language -> versions) within the `processCVs` method in `App.vue`.
- **`html2pdf.js` / `html2canvas.js`**: Imported as modules and invoked in Vue methods in `src/App.vue`, targeting the `#cv-content` div.
- **Font Awesome**: Icons are imported individually in `src/main.js` and registered globally for use with the `<font-awesome-icon>` component.
