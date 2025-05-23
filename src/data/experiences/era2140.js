// src/data/experiences/era2140.js

export const era2140ExperienceBase = {
  role: "Full Stack JavaScript Developer", // Base role
  company: "ERA 2140",
  location: "Paris, France", // Base location, "France" for fr-3, es-3
  date_range: "Jan 2022 - Aug 2022", // English base
  external: "https://www.era2140.com/"
};

export const era2140Descriptions = {
  "en-1": [ // Front-End
    "Developed front-end components for crypto gaming platforms utilizing Web3 technologies.",
    "Built reactive interfaces and integrated front-end wallets adhering to ERC standards.",
    "Optimized application performance and user experience using advanced front-end tools including Vite."
  ],
  "en-2": [ // Full-Stack
    "Developed and maintained full stack components for crypto gaming platforms using Vue.js and Node.js.",
    "Ensured seamless communication between client-side applications and server-side APIs.",
    "Implemented features for NFT marketplaces and DeFi environments."
  ],
  "en-3": [ // Blockchain (Role is Développeur Full Stack Javascript in original fr/es)
    "Developed blockchain-based gaming platforms, integrating Web3 technologies.",
    "Built NFT marketplaces and DeFi environments, leveraging tools like Moralis.",
    "Facilitated smart contract interactions using Ethers.js."
  ],
  "fr-1": [ // Front-End
    "Développé des composants front-end pour des plateformes de jeux crypto utilisant les technologies Web3.",
    "Construit des interfaces réactives et intégré des portefeuilles front-end conformément aux standards ERC.",
    "Optimisé les performances de l'application et l'expérience utilisateur en utilisant des outils front-end avancés, y compris Vite."
  ],
  "fr-2": [ // Full-Stack
    "Développé et maintenu des composants full stack pour des plateformes de jeux crypto en utilisant Vue.js et Node.js.",
    "Assuré une communication transparente entre les applications côté client et les API côté serveur.",
    "Implémenté des fonctionnalités pour les marketplaces NFT et les environnements DeFi."
  ],
  "fr-3": [ // Blockchain (Role is Développeur Full Stack Javascript)
    "Développé des plateformes de jeux basées sur la blockchain, intégrant les technologies Web3.",
    "Construit des marketplaces NFT et des environnements DeFi, en utilisant des outils comme Moralis.",
    "Facilité les interactions avec les smart contracts en utilisant Ethers.js."
  ],
  "es-1": [ // Front-End
    "Desarrollé componentes front-end para plataformas de juegos cripto utilizando tecnologías Web3.",
    "Construí interfaces reactivas e integré billeteras front-end adheridas a los estándares ERC.",
    "Optimicé el rendimiento de la aplicación y la experiencia del usuario utilizando herramientas avanzadas de front-end, incluyendo Vite."
  ],
  "es-2": [ // Full-Stack
    "Desarrollé y mantuve componentes full stack para plataformas de juegos cripto utilizando Vue.js y Node.js.",
    "Aseguré comunicación fluida entre aplicaciones del lado del cliente y APIs del lado del servidor.",
    "Implementé funciones para marketplaces de NFT y entornos DeFi."
  ],
  "es-3": [ // Blockchain (Role is Développeur Full Stack Javascript in original, implies Full Stack JavaScript Developer in Spanish)
    "Desarrollé plataformas de juegos basadas en blockchain, integrando tecnologías Web3.",
    "Construí marketplaces de NFT y entornos DeFi, aprovechando herramientas como Moralis.",
    "Facilité interacciones con smart contracts utilizando Ethers.js."
  ]
};

// Specific roles, locations and date ranges if they differ by language/version
export const era2140Roles = { // Role is "Full Stack JavaScript Developer" for en. "Développeur Full Stack Javascript" for fr-3, es-3.
  "en-1": "Full Stack JavaScript Developer", "en-2": "Full Stack JavaScript Developer", "en-3": "Full Stack JavaScript Developer",
  "fr-1": "Full Stack JavaScript Developer", "fr-2": "Full Stack JavaScript Developer", "fr-3": "Développeur Full Stack Javascript",
  "es-1": "Full Stack JavaScript Developer", "es-2": "Full Stack JavaScript Developer", "es-3": "Desarrollador Full Stack Javascript" // Translated
};

export const era2140Locations = {
  "en-1": "Paris, France", "en-2": "Paris, France", "en-3": "Paris, France", // en-3 was "France" in original, harmonizing to Paris
  "fr-1": "Paris, France", "fr-2": "Paris, France", "fr-3": "France",
  "es-1": "París, Francia", "es-2": "París, Francia", "es-3": "Francia"
};

export const era2140DateRanges = {
  en: "Jan 2022 - Aug 2022",
  fr: "janvier 2022 - août 2022",
  es: "Ene 2022 - Ago 2022"
};
