// src/data/experiences/carft.js

export const carftExperienceBase = {
  role: "Full Stack Developer", // Base role, can be overridden
  company: "CARFT",
  location: "Lyon, France",
  date_range: "Aug 2022 - May 2023", // English base
  external: "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
};

export const carftDescriptions = {
  "en-1": [ // Front-End
    "Spearheaded front-end development and Web3 architecture design for a blockchain-based collectible car card game.",
    "Enhanced gameplay with real-world prizes, backed by Ubisoft and other investors.",
    "Integrated Web3 technologies with Google Cloud platforms to ensure scalability and robust performance."
  ],
  "en-2": [ // Full-Stack
    "Managed both front-end and back-end development for a blockchain-based collectible car card game.",
    "Integrated Node.js services with Vue.js front-end to enhance game functionality and user experience.",
    "Ensured scalability and robust performance through integration with Google Cloud platforms."
  ],
  "en-3": [ // Blockchain (Role changes to Développeur Full Stack in original data for fr/es, keeping consistent here)
    "Designed and implemented Web3 architecture for a blockchain-based collectible car card game.",
    "Integrated smart contracts and ensured compliance with blockchain standards.",
    "Collaborated with cross-functional teams to deliver a seamless gaming experience."
  ],
  "fr-1": [ // Front-End
    "Dirigé le développement front-end et la conception de l'architecture Web3 pour un jeu de cartes de voitures de collection basé sur la blockchain.",
    "Amélioré le gameplay avec des prix réels, soutenu par Ubisoft et d'autres investisseurs.",
    "Intégré des technologies Web3 avec les plateformes Google Cloud pour assurer évolutivité et performances robustes."
  ],
  "fr-2": [ // Full-Stack
    "Géré le développement front-end et back-end pour un jeu de cartes de voitures de collection basé sur la blockchain.",
    "Intégré des services Node.js avec le front-end Vue.js pour améliorer la fonctionnalité du jeu et l'expérience utilisateur.",
    "Assuré l'évolutivité et des performances robustes grâce à l'intégration avec les plateformes Google Cloud."
  ],
  "fr-3": [ // Blockchain (Role is Développeur Full Stack)
    "Conçu et implémenté l'architecture Web3 pour un jeu de cartes de voitures de collection basé sur la blockchain.",
    "Intégré des smart contracts et assuré la conformité avec les standards blockchain.",
    "Collaboré avec des équipes multifonctionnelles pour offrir une expérience de jeu fluide."
  ],
  "es-1": [ // Front-End
    "Dirigí el desarrollo front-end y el diseño de la arquitectura Web3 para un juego de cartas coleccionables de autos basado en blockchain.",
    "Mejoré la jugabilidad con premios del mundo real, respaldado por Ubisoft y otros inversores.",
    "Integré tecnologías Web3 con plataformas de Google Cloud para asegurar escalabilidad y rendimiento robusto."
  ],
  "es-2": [ // Full-Stack
    "Gestioné el desarrollo front-end y back-end para un juego de cartas coleccionables de autos basado en blockchain.",
    "Integré servicios de Node.js con front-end de Vue.js para mejorar la funcionalidad del juego y la experiencia del usuario.",
    "Aseguré escalabilidad y rendimiento robusto a través de la integración con plataformas de Google Cloud."
  ],
  "es-3": [ // Blockchain (Role is Développeur Full Stack in original, implies Full Stack Developer in Spanish)
    "Diseñé e implementé la arquitectura Web3 para un juego de cartas coleccionables de autos basado en blockchain.",
    "Integré smart contracts y aseguré el cumplimiento con estándares blockchain.",
    "Colaboré con equipos multifuncionales para ofrecer una experiencia de juego fluida."
  ]
};

// Specific roles and date ranges if they differ by language/version
export const carftRoles = { // Role is "Full Stack Developer" for en-1, en-2. "Développeur Full Stack" for fr-3, es-3.
  "en-1": "Full Stack Developer", "en-2": "Full Stack Developer", "en-3": "Full Stack Developer", // Assuming consistency for EN
  "fr-1": "Full Stack Developer", "fr-2": "Full Stack Developer", "fr-3": "Développeur Full Stack",
  "es-1": "Full Stack Developer", "es-2": "Full Stack Developer", "es-3": "Desarrollador Full Stack" // Translated "Développeur Full Stack"
};


export const carftDateRanges = {
  en: "Aug 2022 - May 2023",
  fr: "août 2022 - mai 2023",
  es: "Ago 2022 - May 2023"
};
