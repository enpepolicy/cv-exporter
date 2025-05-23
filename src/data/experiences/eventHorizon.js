// src/data/experiences/eventHorizon.js

export const eventHorizonExperienceBase = {
  role: "Front-End Developer", // Base role, can be overridden for specific CV versions
  company: "Event Horizon Tech EU [Contractor]",
  location: "America and Europe", // Base location
  date_range: "Dec 2023 - Jun 2024", // English base
  external: "https://eventhorizontech.eu/"
};

export const eventHorizonDescriptions = {
  "en-1": [ // Front-End
    "Managed and consolidated freelance projects and tech initiatives under Event Horizon Tech EU.",
    "Delivered over 35 projects across America and Europe with high client retention and 95% positive ratings.",
    "Led front-end development efforts, providing tailored solutions that enhanced user engagement."
  ],
  "en-2": [ // Full-Stack (Role changes to Full Stack Developer)
    "Managed and consolidated freelance projects and tech initiatives under Event Horizon Tech EU.",
    "Delivered over 35 projects across America and Europe with high client retention and 95% positive ratings.",
    "Managed full stack development, ensuring seamless integration between front-end applications and back-end services."
  ],
  "en-3": [ // Blockchain (Role changes to Full Stack Developer)
    "Managed and consolidated freelance projects and tech initiatives under Event Horizon Tech EU.",
    "Delivered over 35 projects with high client retention and 95% positive ratings.",
    "Led the development of blockchain-integrated applications, ensuring security and scalability."
  ],
  "fr-1": [ // Front-End
    "Géré et consolidé des projets freelance et des initiatives technologiques sous Event Horizon Tech EU.",
    "Livré plus de 35 projets à travers l'Amérique et l'Europe avec une forte rétention de clients et 95% d'évaluations positives.",
    "Dirigé les efforts de développement front-end, fournissant des solutions sur mesure qui ont amélioré l'engagement des utilisateurs."
  ],
  "fr-2": [ // Full-Stack (Role changes to Full Stack Developer)
    "Géré et consolidé des projets freelance et des initiatives technologiques sous Event Horizon Tech EU.",
    "Livré plus de 35 projets à travers l'Amérique et l'Europe avec une forte rétention de clients et 95% d'évaluations positives.",
    "Géré le développement full stack, assurant une intégration transparente entre les applications front-end et les services back-end."
  ],
  "fr-3": [ // Blockchain (Role changes to Full Stack Developer)
    "Géré et consolidé des projets freelance et des initiatives technologiques sous Event Horizon Tech EU.",
    "Livré plus de 35 projets avec une forte rétention de clients et 95% d'évaluations positives.",
    "Dirigé le développement d'applications intégrées à la blockchain, en assurant sécurité et évolutivité."
  ],
  "es-1": [ // Front-End
    "Gestioné y consolidé proyectos freelance e iniciativas tecnológicas bajo Event Horizon Tech EU.",
    "Entregué más de 35 proyectos a través de América y Europa con alta retención de clientes y 95% de valoraciones positivas.",
    "Lideré esfuerzos de desarrollo front-end, proporcionando soluciones a medida que mejoraron el compromiso de los usuarios."
  ],
  "es-2": [ // Full-Stack (Role changes to Full Stack Developer)
    "Gestioné y consolidé proyectos freelance e iniciativas tecnológicas bajo Event Horizon Tech EU.",
    "Entregué más de 35 proyectos a través de América y Europa con alta retención de clientes y 95% de valoraciones positivas.",
    "Gestioné el desarrollo full stack, asegurando una integración fluida entre aplicaciones front-end y servicios back-end."
  ],
  "es-3": [ // Blockchain (Role changes to Full Stack Developer)
    "Gestioné y consolidé proyectos freelance e iniciativas tecnológicas bajo Event Horizon Tech EU.",
    "Entregué más de 35 proyectos con alta retención de clientes y 95% de valoraciones positivas.",
    "Lideré el desarrollo de aplicaciones integradas con blockchain, asegurando seguridad y escalabilidad."
  ]
};

// Specific roles and date ranges if they differ by language/version
export const eventHorizonRoles = {
  "en-1": "Front-End Developer", "fr-1": "Front-End Developer", "es-1": "Front-End Developer",
  "en-2": "Full Stack Developer", "fr-2": "Full Stack Developer", "es-2": "Full Stack Developer",
  "en-3": "Full Stack Developer", "fr-3": "Full Stack Developer", "es-3": "Full Stack Developer"
};

export const eventHorizonDateRanges = {
  en: "Dec 2023 - Jun 2024",
  fr: "décembre 2023 - juin 2024",
  es: "Dic 2023 - Jun 2024"
};

export const eventHorizonLocations = {
  en: "America and Europe",
  fr: "Amerique et Europe", // Note: Original was "Amerique et Europe"
  es: "América y Europa"
};
