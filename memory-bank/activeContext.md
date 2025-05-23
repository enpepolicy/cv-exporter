# Active Context

## Current Focus

CV data management and structure. Recently completed refactoring `src/cvsData.js` into a modular structure.

## Recent Changes

- **Refactored `src/cvsData.js` into multiple files:**
    - Created `src/data/common.js` for shared personal info, education, honors, and references.
    - Created `src/data/skills.js` for skill set definitions.
    - Created individual experience modules under `src/data/experiences/` (e.g., `alloy.js`, `dispatcherPro.js`, etc.).
    - Created CV assembly files per language under `src/data/cvs/` (e.g., `en.js`, `fr.js`, `es.js`).
    - The main `src/cvsData.js` now imports and aggregates data from these modules.
- **Updated Alloy Experience (Iterative Refinements)**:
    - Modified `src/data/experiences/alloy.js` in multiple steps.
    - Initially removed "(Contract)" from the company name and revised descriptions to remove mentions of EVM node management, aiming for conciseness (around 4 bullet points).
    - Subsequently, further refined descriptions to remove phrases like "decentralized applications," shifting focus to "institutional-grade," "enterprise," or "robust and secure application architectures" to better reflect the product's nature as an enterprise service aggregator.
- Added `external: "https://www.alloy.capital/"` to the "Blockchain Engineer at Alloy" work experience in all CV versions (managed in `src/data/experiences/alloy.js`).
- Added new work experience "Blockchain Engineer at Alloy" to all CV versions. Descriptions were tailored for Front-End, Full Stack, and Blockchain CV types across English, Spanish, and French, and subsequently updated with the refinements mentioned above.
- Renamed `src/cvs.json` to `src/cvsData.js` and converted it to a JavaScript module (initial refactor step).
- Updated `src/App.vue` to import data from `src/cvsData.js` (initial refactor step).
- Refactored `cvsData.js` to define and use shared constants for common sections and skills (initial refactor step, now superseded by modular files).
- Verified basic application functionality (data loading, display) after these refactoring steps.
- Previous task (Emoji migration) was successfully completed and documented.

## Next Steps

- Update `progress.md`, `systemPatterns.md`, and `techContext.md` to reflect the new modular data architecture.
- Await further instructions.

## Active Decisions & Considerations

- **Emoji for Icons**: (Completed) Switched to native emojis.
- **Styling Adjustments for Emojis**: (Completed) Emojis are treated as text characters.
- **Data Refactoring Strategy**: `src/cvsData.js` has been refactored into a modular structure under `src/data/`. The main `src/cvsData.js` file now acts as an aggregator, ensuring it continues to export `cvsCollection` in the flat array structure expected by `App.vue`, thus minimizing changes to the Vue component.
- **Iterative Refactoring**: Large refactoring tasks are best done in stages, with testing after each stage. This modularization is a significant step in that direction.

## Important Patterns & Preferences

- **Tailwind CSS for Styling**: Continue to leverage Tailwind utility classes.
- **Dependency Minimization**: Ongoing goal (e.g., Font Awesome removal).
- **Memory Bank Maintenance**: Core files (`projectbrief.md`, `productContext.md`, `systemPatterns.md`, `techContext.md`, `activeContext.md`, `progress.md`) are kept up-to-date to reflect the project's current state and evolution.

## Learnings & Project Insights

- Replacing an icon library with emojis can reduce dependencies but requires careful testing of visual consistency and alignment. (Insight from previous task)
- User feedback is crucial for catching missed details or undesired styling changes during refactoring. (General insight)
- Maintaining a comprehensive Memory Bank is essential for project continuity and effective task resumption. (Core principle)
- Iterative refactoring with testing at each step helps manage complexity and catch issues early.
- When refactoring data sources, maintaining the expected output structure for consumers (like Vue components) can simplify the transition.
- Adding new, multi-faceted experience entries requires careful tailoring for each CV variant (language/type) to maintain relevance and truthfulness.
- Modularizing data into smaller, focused files (e.g., by data type or specific experience) significantly improves maintainability and readability of the codebase, especially for large datasets.
