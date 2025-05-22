# Project Brief

## Core Requirements

- Develop and maintain an interactive Curriculum Vitae (CV) web application.
- The application must display CV information dynamically based on user selections for language and CV version.
- Support multiple languages (English, Spanish, French).
- Support multiple versions of the CV, allowing for different focuses (e.g., Front-End, Full Stack, Blockchain).
- Allow users to export the currently displayed CV as a PDF.
- Allow users to export the currently displayed CV as an image (PNG).
- CV data should be sourced from an external JSON file (`cvs.json`).
- The application should be easily servable via a simple HTTP server.

## Goals

- Provide a professional and user-friendly way for Enrique Peña to present his CV.
- Enable easy switching between different CV versions tailored for various job applications.
- Offer a multilingual experience.
- Ensure the CV is easily shareable and viewable online and offline (via PDF).
- Maintain a clean, modern, and responsive design.

## Scope

### In Scope:
- Frontend development of the CV viewer using Vue.js 3 and Tailwind CSS.
- Implementation of language and version selection logic.
- PDF export functionality using `html2pdf.js`.
- Image export functionality using `html2canvas.js`.
- Dynamic data loading from `cvs.json`.
- Structured metadata (JSON-LD) for SEO.
- Styling for a professional look and feel.
- Basic setup instructions for running the project locally.

### Out of Scope:
- Backend development beyond serving static files (no database, no server-side rendering beyond what `http-server` provides).
- User authentication or accounts.
- Content Management System (CMS) for CV data (data is managed directly in `cvs.json`).
- Automated deployment pipelines (manual deployment or simple static hosting is assumed).
- Advanced analytics or tracking.
- Editing CV data directly within the application interface.
