# System Patterns

## System Architecture

- **Client-Side Single Page Application (SPA)**: The application is entirely client-side, built with Vue.js and Vite.
- **Static Site Output**: Vite builds the project into static assets (HTML, CSS, JS) in the `dist/` directory, which can be hosted on any static web hosting service.
- **Data Flow**:
    1. `index.html` (from `dist/` after build, or served by Vite dev server) is loaded.
    2. JavaScript bundles are loaded, initializing the Vue.js 3 application (`src/App.vue` via `src/main.js`).
    3. The Vue app imports CV data from `src/cvsData.js`. This main `cvsData.js` file now acts as an aggregator, importing data from a modular structure located in `src/data/`.
        - `src/data/common.js`: Holds shared data like contact info, base personal info, education, honors, and reference bases.
        - `src/data/skills.js`: Holds skill set arrays (frontend, fullstack, blockchain).
        - `src/data/experiences/*.js`: Individual files for each work experience, defining base info and language/version specific descriptions.
        - `src/data/cvs/*.js`: Files per language (e.g., `en.js`, `fr.js`, `es.js`) that import from `common.js`, `skills.js`, and `experiences/*.js` to assemble the complete CV objects for that language.
    4. `src/cvsData.js` concatenates the CV arrays from `src/data/cvs/*.js` and exports a single flat `cvsCollection` array.
    5. The `processCVs` method in `App.vue` transforms this imported flat array from `cvsData.js` into a nested structure (language -> versions).
    6. User selects language and version via UI controls.
    7. Vue app filters and displays the relevant CV data from the processed state.
    8. Export functions (`html2pdf.js`, `html2canvas.js`, imported as npm modules) process the `#cv-content` DOM element to generate PDF/image.

```mermaid
graph TD
    UserBrowser[User Browser] -- Loads --> IndexHTML[index.html (Vite served/built)]
    IndexHTML -- Loads & Initializes --> VueApp[Vue.js App (src/App.vue)]
    VueApp -- Imports from --> MainCVSData[src/cvsData.js (Aggregator)]

    MainCVSData -->|imports & concatenates| EN_CVs[src/data/cvs/en.js]
    MainCVSData -->|imports & concatenates| FR_CVs[src/data/cvs/fr.js]
    MainCVSData -->|imports & concatenates| ES_CVs[src/data/cvs/es.js]

    EN_CVs -->|imports| CommonData[src/data/common.js]
    EN_CVs -->|imports| SkillsData[src/data/skills.js]
    EN_CVs -->|imports| ExpModules[src/data/experiences/*.js]
    FR_CVs -->|imports| CommonData
    FR_CVs -->|imports| SkillsData
    FR_CVs -->|imports| ExpModules
    ES_CVs -->|imports| CommonData
    ES_CVs -->|imports| SkillsData
    ES_CVs -->|imports| ExpModules

    UserBrowser -- Selects Lang/Version --> VueApp
    VueApp -- Updates DOM --> CVDisplay[CV Display Area]
    UserBrowser -- Clicks Export --> ExportLib[html2pdf.js / html2canvas.js (npm modules)]
    ExportLib -- Reads DOM --> CVDisplay
    ExportLib -- Generates --> File[PDF / PNG]
    File -- Downloads to --> UserBrowser
```

## Key Technical Decisions

- **Vite**: Chosen as the build tool and development server for its speed and modern ESM-based architecture.
- **Vue.js 3**: Used for its reactivity and component-based architecture (currently a single root component `src/App.vue`). Options API is used.
- **Tailwind CSS**: Managed via npm and PostCSS for utility-first CSS styling.
- **Modular Data Structure (`src/data/`)**: CV data is now managed in a modular structure under `src/data/`.
    - Shared constants (personal info, education, skills) are in `src/data/common.js` and `src/data/skills.js`.
    - Each work experience is defined in its own module under `src/data/experiences/`.
    - Language-specific CVs are assembled in modules under `src/data/cvs/` (e.g., `en.js`).
    - The main `src/cvsData.js` imports these modules and exports a single flat `cvsCollection`. This approach significantly improves maintainability and de-duplicates common information while providing `App.vue` with data in the expected flat structure.
- **npm for Package Management**: All external libraries (Vue, Tailwind, export tools) are managed as npm dependencies. Emojis are used for icons, requiring no external library.
- **No CDNs or Import Maps**: All dependencies are bundled or processed by Vite, removing reliance on external CDNs and import maps.
- **JSON-LD for SEO**: Dynamically generated and updated by the Vue application.

## Design Patterns in Use

- **Component-Based Architecture (Vue.js)**: The application is structured around a single root Vue component (`src/App.vue`).
- **Data-Driven Views**: The UI dynamically renders based on the processed data from the aggregated `cvsCollection` (exported by `src/cvsData.js` after transformation by `processCVs`) and user selections.
- **Observer Pattern (Vue.js Reactivity)**: Vue's reactivity system automatically updates the DOM when underlying data changes.
- **Data Transformation**:
    - Data is now structured modularly in `src/data/`. Shared constants are in `common.js` and `skills.js`. Experiences are in `src/data/experiences/*.js`. Language-specific CVs are assembled in `src/data/cvs/*.js`.
    - The main `src/cvsData.js` aggregates these modules into a flat `cvsCollection` array.
    - The `processCVs` method in `App.vue` transforms this imported flat array into a nested structure (language -> versions) suitable for the application's display logic.

## Component Relationships

- **`src/App.vue` (Main Vue Component)**:
    - Manages state: `cvs` (processed, nested CV data), `selectedLanguage`, `selectedVersion`, `cvData` (current CV being displayed), `labels`.
    - Handles methods: `processCVs`, `filterCVs`, `updateLabels`, `updateJSONLD`, `exportPDF`, `exportImage`, `populateAvailableVersions`.
    - Interacts with DOM elements: Mounts to `#app` in `index.html`, uses `#cv-content` for export.
    - Uses emojis directly in the template for icons.
- **`src/main.js`**: Entry point for the Vite application. Initializes Vue, imports `App.vue`, and global CSS. Font Awesome setup has been removed.
- **`src/cvsData.js`**: Now acts as an aggregator. It imports data from the modular structure under `src/data/` (specifically from `src/data/cvs/*.js`) and exports the final `cvsCollection` array.
- **`src/data/**`**: New directory containing modularized data:
    - `src/data/common.js`: Shared constants.
    - `src/data/skills.js`: Skill lists.
    - `src/data/experiences/*.js`: Individual experience modules.
    - `src/data/cvs/*.js`: Language-specific CV assembly modules.
- **`index.html` (root)**: Minimal HTML template for Vite.
- **NPM Modules**:
    - `vue`: Core rendering and reactivity.
    - `tailwindcss`, `postcss`, `autoprefixer`: Styling.
    - `html2pdf.js`, `html2canvas`: PDF/Image generation.
    - Icons are handled by native emojis, no separate npm module.

## Critical Implementation Paths

- **Data Processing and Filtering (`processCVs`, `filterCVs`, `populateAvailableVersions`)**: Core logic for transforming, loading, and displaying the correct CV.
- **PDF/Image Export (`exportPDF`, `exportImage`)**: Relies on npm-imported libraries correctly interpreting the DOM of `#cv-content`.
- **Reactivity and State Management (Vue.js)**: Ensuring changes to `selectedLanguage` or `selectedVersion` correctly trigger updates.
- **JSON-LD Generation (`updateJSONLD`)**: Dynamically creating and updating the structured data script.
