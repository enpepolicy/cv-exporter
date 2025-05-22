# Product Context

## Problem Statement

- Traditional static CVs (e.g., Word documents, simple PDFs) are inflexible and cannot be easily tailored to different job applications or audiences without creating multiple separate files.
- Presenting a comprehensive CV with multiple language options and different professional focuses (e.g., Front-End, Full-Stack, Blockchain) in a single, manageable format is challenging.
- Ensuring a consistent, professional, and modern presentation across different devices and platforms can be difficult with static files.
- Sharing and updating CVs can be cumbersome, especially when multiple versions exist.

## Solution Overview

- This project provides an interactive web-based CV for Enrique Peña.
- It allows users (recruiters, potential employers, Enrique himself) to select the desired language (English, Spanish, French) and CV version (e.g., "Front-End Developer", "Full Stack Developer", "Blockchain and Web3 Developer").
- The CV content dynamically updates based on these selections, drawing data from a central `cvs.json` file.
- The application offers features to export the currently viewed CV to PDF or as a PNG image, facilitating easy sharing and offline access.
- It is built as a single-page application (SPA) using Vue.js 3 for reactivity and Tailwind CSS for styling, ensuring a responsive and modern user interface.
- Structured data (JSON-LD) is included to improve SEO and make the CV content more machine-readable.

## User Experience Goals

- **Intuitive Navigation**: Users should easily understand how to switch between languages and CV versions.
- **Clear Presentation**: The CV information should be presented in a clean, readable, and professional manner.
- **Responsive Design**: The CV should look good and function well on various devices (desktops, tablets, mobile phones).
- **Fast Loading**: The application should load quickly.
- **Easy Export**: Exporting to PDF or image should be a straightforward, one-click process.
- **Accessibility**: While not explicitly detailed in the current files, aiming for good accessibility practices is a general goal for web applications.
- **Professionalism**: The overall look and feel should convey Enrique Peña's professional image effectively.
