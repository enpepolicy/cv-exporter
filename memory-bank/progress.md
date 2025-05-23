# Progress

## What Works

- **Local Development Server (`npm run dev`)**: Fully functional.
- **Dependencies**: All managed via npm. Font Awesome successfully removed.
- **Icon System**: Font Awesome icons fully replaced with native emojis in `src/App.vue`. Visuals and export functionality verified.
- **Code Cleanup**: Font Awesome references removed from `src/main.js` and `package.json`.
- **CV Data Refactoring (Phase 1)**:
    - `src/cvs.json` converted to `src/cvsData.js` (JavaScript module) (Initial step).
    - **CV Data Modularization (Phase 2)**: `src/cvsData.js` further refactored into a modular structure:
        - Common data (personal info, education, etc.) moved to `src/data/common.js`.
        - Skill sets moved to `src/data/skills.js`.
        - Individual work experiences moved to separate files under `src/data/experiences/`.
        - CVs are now assembled per language in files under `src/data/cvs/` (e.g., `en.js`, `fr.js`, `es.js`).
        - The main `src/cvsData.js` now imports and aggregates data from these modules, maintaining the same export structure for `App.vue`.
    - Application tested and confirmed functional after these data refactoring steps.
- **New Experience Added**: "Blockchain Engineer at Alloy (Contract)" experience added to all CV versions (now managed in `src/data/experiences/alloy.js` and assembled in language-specific CV files), with tailored descriptions and external URL `https://www.alloy.capital/`.
- **Memory Bank Updated**: `techContext.md`, `systemPatterns.md`, and `activeContext.md` reflect the icon system change, the initial data refactoring, the new Alloy experience, and the major modularization of `cvsData.js`.

**Previous PDF/Styling Iterations (Context Kept for Reference):**
- **Iteration 1**: General PDF robustness (overflow, wrapping, page breaks, line heights).
- **Iteration 2 (Targeted Icon/Chip Fixes - Pre-Emoji)**: Granular alignment for header icons, external link icon, and `align-middle` for skill chips.
- **Iteration 3 (Skill Chip Container Fix)**: Added `align-content-start` to the skill chip container div.
- **Iteration 4 (Header Contact Block Structure - Pre-Emoji)**: Structural changes to header contact info for alignment.

## What's Left to Build / Verify

- **`npm install` Execution**: Still pending to finalize removal of Font Awesome packages from `node_modules` and update `package-lock.json`. (User previously denied, awaiting confirmation/re-attempt).
- **CV Data Refactoring (Phase 2 - Experience Section)**: Completed by modularizing experiences into separate files.
- **Deletion of `src/cvs.json`**: This file is no longer present and was superseded by `src/cvsData.js`. (Marked as complete).
- **Labels in `cvsData.js`**: User needs to ensure that each CV object in `src/cvsData.js` (or the common structures it uses) contains a `labels` object with appropriate translations for UI elements for full localization functionality (ongoing consideration).
- **General Testing**: Further testing of all features on the deployed site is always recommended after these significant changes.

## Current Status

- **Icon System Refactor**: Completed. Emojis are in use and tested.
- **Dependency Management**: Font Awesome dependencies removed from `package.json`. `npm install` still pending.
- **Data Handling**: CV data is now managed in a modular structure under `src/data/`, with `src/cvsData.js` acting as the main aggregator. This significantly improves maintainability and de-duplicates data by separating common info, skills, experiences, and language-specific CV assemblies. The main `cvsData.js` still exports a flat array compatible with `App.vue`.
- **Deployment**: Awaiting `npm install` and then deployment of these changes.
- **PDF Styling**: Verified with emojis.

## Known Issues

- **(Resolved)** GitHub Action build failure due to missing Font Awesome package.
- **(Resolved)** GitHub Pages serving incorrect files due to misconfigured deployment source.
- **(Potential)** UI labels might not update correctly if `labels` objects are missing or incomplete in `cvsData.js`.
- **(Verified)** Visual rendering and alignment of emojis appear correct.
- **(Verified)** PDF/Image export rendering with emojis functions correctly.
- **(Observation)** A 404 error for an unspecified resource was observed in the browser console during `npm run dev`. This did not affect the tested functionality but may warrant investigation if other issues arise.

## Evolution of Project Decisions

- **Initial State**: CDN-based, single `index.html`, `http-server`.
- ... (previous decisions remain the same) ...
- **Problem 6 (PDF Export - Initial Report)**: PDF export has cropping, misalignment, and issues with "chip" elements.
- **Decision 6 (Iteration 1)**: General styling changes for PDF robustness.
- **Problem 7 (PDF Export - Feedback on Iteration 1)**: Specific alignment issues persist for header icons, external link icon, and skill chips.
- **Decision 7 (Iteration 2)**: Granular styling adjustments for icons and added `align-middle` to skill chips.
- **Problem 8 (PDF Export - Feedback on Iteration 2)**: Skill chip alignment in PDF still problematic (likely wrapped line alignment).
- **Decision 8 (Iteration 3)**: Added `align-content-start` to the parent `div` of skill chips to control the alignment of wrapped lines.
- **Problem 9 (Icon System)**: User request to replace Font Awesome icons with emojis and remove Font Awesome.
- **Decision 9 (Completed)**: Replaced Font Awesome icons with emojis in `src/App.vue`, removed Font Awesome from `src/main.js` and `package.json`. Updated Memory Bank. Visual and functional testing completed. `npm install` is pending.
- **Problem 10 (Data Repetition)**: CV data in `src/cvs.json` was highly repetitive across different language/version combinations. User requested refactoring to a JS module to reduce duplication.
- **Decision 10 (In Progress)**:
    - Renamed `src/cvs.json` to `src/cvsData.js` and changed `App.vue` import.
    - Defined common constants in `cvsData.js` (Initial step, now moved to `src/data/common.js` and `src/data/skills.js`).
    - Updated all CV entries in `cvsCollection` (Now assembled in language-specific files like `src/data/cvs/en.js`).
    - Application tested and confirmed functional with these changes.
    - Next steps: Update `systemPatterns.md` and `techContext.md` in the memory bank.
- **Current State**: CV data fully refactored into a modular structure under `src/data/`. New "Alloy" work experience (including external URL) integrated. Application is functional. `npm install` for Font Awesome removal still pending.
