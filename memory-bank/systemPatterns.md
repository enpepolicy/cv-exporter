# System Patterns

## System Architecture

- **Client-Side Single Page Application (SPA)**: The application is entirely client-side, built with Vue.js and Vite.
- **Static Site Output**: Vite builds the project into static assets (HTML, CSS, JS) in the `dist/` directory, which can be hosted on any static web hosting service.
- **Data Flow**:
    1. `index.html` (from `dist/` after build, or served by Vite dev server) is loaded.
    2. JavaScript bundles are loaded, initializing the Vue.js 3 application (`src/App.vue` via `src/main.js`).
    3. The Vue app imports CV data directly from `src/cvs.json` (which is bundled with the app).
    4. The `processCVs` method in `App.vue` transforms the flat JSON data into a nested structure (language -> versions).
    5. User selects language and version via UI controls.
    6. Vue app filters and displays the relevant CV data from the processed state.
    7. Export functions (`html2pdf.js`, `html2canvas.js`, imported as npm modules) process the `#cv-content` DOM element to generate PDF/image.

```mermaid
graph LR
    UserBrowser[User Browser] -- Loads --> IndexHTML[index.html (Vite served/built)]
    IndexHTML -- Loads & Initializes --> VueApp[Vue.js App (src/App.vue)]
    VueApp -- Imports & Processes --> CVSJSON[src/cvs.json (Bundled)]
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
- **`src/cvs.json` for Data**: CV data is stored in `src/cvs.json` and directly imported into the application, making it part of the build. Data is transformed in `App.vue` from a flat list to a nested structure.
- **npm for Package Management**: All external libraries (Vue, Tailwind, export tools) are managed as npm dependencies. Emojis are used for icons, requiring no external library.
- **No CDNs or Import Maps**: All dependencies are bundled or processed by Vite, removing reliance on external CDNs and import maps.
- **JSON-LD for SEO**: Dynamically generated and updated by the Vue application.

## Design Patterns in Use

- **Component-Based Architecture (Vue.js)**: The application is structured around a single root Vue component (`src/App.vue`).
- **Data-Driven Views**: The UI dynamically renders based on the processed data from `src/cvs.json` and user selections.
- **Observer Pattern (Vue.js Reactivity)**: Vue's reactivity system automatically updates the DOM when underlying data changes.
- **Data Transformation**: The `processCVs` method in `App.vue` transforms the flat structure of `src/cvs.json` into a nested structure suitable for the application's logic.

## Component Relationships

- **`src/App.vue` (Main Vue Component)**:
    - Manages state: `cvs` (processed, nested CV data), `selectedLanguage`, `selectedVersion`, `cvData` (current CV being displayed), `labels`.
    - Handles methods: `processCVs`, `filterCVs`, `updateLabels`, `updateJSONLD`, `exportPDF`, `exportImage`, `populateAvailableVersions`.
    - Interacts with DOM elements: Mounts to `#app` in `index.html`, uses `#cv-content` for export.
    - Uses emojis directly in the template for icons.
- **`src/main.js`**: Entry point for the Vite application. Initializes Vue, imports `App.vue`, and global CSS. Font Awesome setup has been removed.
- **`src/cvs.json`**: Data source, imported directly. Contains a flat array of CV version objects.
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
