// src/data/experiences/dispatcherPro.js

export const dispatcherProExperienceBase = {
  role: "Senior Front-End Developer",
  company: "Dispatcher-pro",
  location: "Paris, France",
  date_range: "Jun 2024 - Dec 2024", // English base, French/Spanish versions have localized dates
  external: "https://dispatcher-pro.com/"
};

export const dispatcherProDescriptions = {
  "en-1": [ // Front-End
    "Developed new features and maintained an enterprise dashboard application for construction companies using Vue.js",
    "Implemented an end-to-end testing suite using Playwright, enhancing application reliability.",
    "Worked in a Dockerized environment with CI/CD pipelines in GitLab."
  ],
  "en-2": [ // Full-Stack
    "Developed and maintained an enterprise dashboard application for construction companies using Vue.js",
    "Implemented end-to-end testing with Playwright in a Dockerized environment with GitLab CI/CD.",
    "Collaborated with back-end teams to optimize API integrations."
  ],
  "en-3": [ // Blockchain (less emphasis, more general front-end)
    "Developed and maintained front-end components for enterprise applications using Vue.js.",
    "Implemented end-to-end testing suites using Playwright.",
    "Worked with Dockerized environments and GitLab CI/CD."
  ],
  "fr-1": [ // Front-End
    "Développé de nouvelles fonctionnalités et maintenu une application de tableau de bord d'entreprise pour les sociétés de construction en utilisant Vue.js.",
    "Implémenté une suite de tests end-to-end avec Playwright, améliorant la fiabilité de l'application.",
    "Travaillé dans un environnement Dockerisé avec des pipelines CI/CD sur GitLab."
  ],
  "fr-2": [ // Full-Stack
    "Développé et maintenu une application de tableau de bord d'entreprise pour les sociétés de construction en utilisant Vue.js 2.7.", // Note: Vue.js 2.7 was specifically mentioned here
    "Implémenté des tests end-to-end avec Playwright dans un environnement Dockerisé avec GitLab CI/CD.",
    "Collaboré avec les équipes back-end pour optimiser les intégrations API."
  ],
  "fr-3": [ // Blockchain (less emphasis, more general front-end)
    "Développé et maintenu des composants front-end pour des applications d'entreprise en utilisant Vue.js.",
    "Implémenté des suites e2e de tests et collaboré à l'intégration des differents fonctionnalités.", // Slightly different wording here
    "Travaillé avec des environnements Dockerisés et GitLab CI/CD."
  ],
  "es-1": [ // Front-End
    "Desarrollé nuevas características y mantuve una aplicación de panel de control empresarial para empresas de construcción utilizando Vue.js.",
    "Implementé una suite de pruebas end-to-end usando Playwright, mejorando la confiabilidad de la aplicación.",
    "Trabajé en un entorno Dockerizado con pipelines CI/CD en GitLab."
  ],
  "es-2": [ // Full-Stack
    "Desarrollé y mantuve una aplicación de panel de control empresarial para empresas de construcción utilizando Vue.js.",
    "Implementé pruebas end-to-end con Playwright en un entorno Dockerizado con GitLab CI/CD.",
    "Colaboré con equipos back-end para optimizar integraciones API."
  ],
  "es-3": [ // Blockchain (less emphasis, more general front-end)
    "Desarrollé y mantuve componentes front-end para aplicaciones empresariales utilizando Vue.js.",
    "Implementé suites de pruebas end-to-end utilizando Playwright.",
    "Trabajé con entornos Dockerizados y GitLab CI/CD."
  ]
};

// Specific date ranges if they differ by language (as seen in original cvsData)
export const dispatcherProDateRanges = {
  en: "Jun 2024 - Dec 2024",
  fr: "juin 2024 - decembre 2024",
  es: "Jun 2024 - Dic 2024"
};
