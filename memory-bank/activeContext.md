# Active Context

## Current Focus

Refactoring CV data (`cvsData.js`) to de-duplicate content. Initial phase (common sections like personal info base, education, honors/awards, references base, and skills lists) complete and tested.

## Recent Changes

- Renamed `src/cvs.json` to `src/cvsData.js` and converted it to a JavaScript module.
- Updated `src/App.vue` to import data from `src/cvsData.js`.
- Refactored `cvsData.js` to define and use shared constants for:
    - `commonPersonalInfoBase` (name, contact details)
    - `commonEducation`
    - `commonHonorsAwards`
    - `commonReferencesBase` (structure for references)
    - `frontendSkills`, `fullstackSkills`, `blockchainSkills`
- Applied these constants to all CV entries in `cvsCollection` for the respective sections.
- Verified basic application functionality (data loading, display) after these refactoring steps.
- Previous task (Emoji migration) was successfully completed and documented.

## Next Steps

- Update `progress.md`, `systemPatterns.md`, and `techContext.md` to reflect the data refactoring in `cvsData.js`.
- Ask the user for confirmation to delete the now redundant `src/cvs.json` file.
- Discuss potential further refactoring of the `experience` section within `cvsData.js` for more advanced de-duplication, if desired by the user.
- Await further instructions.

## Active Decisions & Considerations

- **Emoji for Icons**: (Completed) Switched to native emojis.
- **Styling Adjustments for Emojis**: (Completed) Emojis are treated as text characters.
- **Data Refactoring Strategy**: The `cvsData.js` module is refactored internally but continues to export a flat array (`cvsCollection`) in the same structure previously provided by `cvs.json`. This minimizes changes required in `App.vue`, particularly in the `processCVs` method.
- **Iterative Refactoring**: Large refactoring tasks are best done in stages, with testing after each stage.

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
