// --- Common Data Definitions ---

const commonContact = {
  email: "enriquep36@hotmail.com",
  phone: "+33 0782708654",
  location: "Marseille, France",
  linkedin: "https://www.linkedin.com/in/enpepolicy"
};

const commonPersonalInfoBase = {
  name: "Enrique Peña",
  contact: commonContact
};

const commonEducation = [
  {
    degree: "Political Scientist, Political Science and Government", // Base English, may need translation handling
    institution: "Universidad Nacional de Colombia",
    location: "Colombia",
    years: "2012 - 2017"
  }
];

const commonHonorsAwards = [
  {
    title: "BCN HACK - Aüt protocol [2nd prize] - ETH BCN",
    date: "Jul 2022",
    description: "Drug Duck, 'Foursquare' for drugs to save thousands of lives annually.",
    link: "https://taikai.network/en/datanatives/hackathons/bcn-hack/projects/cl5e0nc539095610108tojenn07/idea"
  },
  {
    title: "ETHCC HACK 2022 - Polygon [Best Tooling / Infra Project IRL]",
    date: "Aug 2022",
    description: "Red Packet aims to gamify and simplify sending gifts to friends and family across multiple blockchains.",
    link: "https://devpost.com/software/red-pocket"
  }
];

// Base references, content might be overridden per language
const commonReferencesBase = [
  {
    name: "Yanis Aissani",
    title: "Full Stack / Blockchain Engineer",
    company: "ERA 2140",
    // content will be language-specific
  },
  {
    name: "Juan David Polanco Rojas",
    title: "Blockchain Developer",
    company: "BSM - Universitat Pompeu Fabra",
    // content will be language-specific
  }
];

// --- Skill Set Definitions ---
const frontendSkills = [
  "Vue.js", "TypeScript", "JavaScript (ES6)", "Tailwind CSS", "Responsive UI Design",
  "HTML5 & CSS3", "Vite", "Playwright", "CI/CD Workflows (Jenkins, AWS CodePipeline, Netlify)",
  "Docker", "Web3 Integration", "Firebase Services", "AWS Ecosystem", "Websockets",
  "Agile Methodologies", "User Experience (UX) Design", "Mentoring New Web Developers"
];

const fullstackSkills = [
  "Vue.js", "Node.js", "TypeScript", "JavaScript (ES6)", "Express & Nest.js", "PHP & Laravel",
  "AWS Ecosystem", "Firebase Services", "CI/CD Workflows (Git, Jenkins, AWS CodePipeline, Netlify)",
  "Docker", "HTML5 & CSS3", "Tailwind CSS", "MySQL and MongoDB", "API Integration",
  "Websockets", "Agile Methodologies", "Mentoring New Web Developers"
];

const blockchainSkills = [
  "Blockchain Development", "Web3 Technologies", "Smart Contracts", "Ethereum & EVM", "Solidity",
  "Web3.js & Ethers.js", "Vue.js", "Node.js", "TypeScript",
  "CI/CD Workflows (Git, Jenkins, AWS CodePipeline, Netlify)", "Docker", "NFT Marketplaces",
  "DeFi Protocols", "Moralis", "Infura", "MetaMask Integration", "AWS Ecosystem",
  "Firebase Services", "Mentoring New Web Developers"
];

// --- CV Collection (to be refactored to use common data) ---
const cvsCollection = [
  {
    "id": "en-1",
    "language": "en",
    "version": 1,
    "personal_info": {
      ...commonPersonalInfoBase, // Use common base
      "title": "Front-End Developer", // Version-specific
      "summary": "Front-End Developer with 5 years of professional experience specializing in crafting responsive and dynamic user interfaces using Vue.js, enriched by Tailwind CSS for modern and clean design with sophisticated state management. Expertise in TypeScript for robust front-end architecture, ensuring type safety and adherence to maintainable coding standards, essential for complex, large-scale web applications." // Version-specific
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "Paris, France",
        "date_range": "Jun 2024 - Dec 2024",
        "description": [
          "Developed new features and maintained an enterprise dashboard application for construction companies using Vue.js",
          "Implemented an end-to-end testing suite using Playwright, enhancing application reliability.",
          "Worked in a Dockerized environment with CI/CD pipelines in GitLab."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Front-End Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "America and Europe",
        "date_range": "Dec 2023 - Jun 2024",
        "description": [
          "Managed and consolidated freelance projects and tech initiatives under Event Horizon Tech EU.",
          "Delivered over 35 projects across America and Europe with high client retention and 95% positive ratings.",
          "Led front-end development efforts, providing tailored solutions that enhanced user engagement."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Full Stack Developer",
        "company": "CARFT",
        "location": "Lyon, France",
        "date_range": "Aug 2022 - May 2023",
        "description": [
          "Spearheaded front-end development and Web3 architecture design for a blockchain-based collectible car card game.",
          "Enhanced gameplay with real-world prizes, backed by Ubisoft and other investors.",
          "Integrated Web3 technologies with Google Cloud platforms to ensure scalability and robust performance."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Full Stack JavaScript Developer",
        "company": "ERA 2140",
        "location": "Paris, France",
        "date_range": "Jan 2022 - Aug 2022",
        "description": [
          "Developed front-end components for crypto gaming platforms utilizing Web3 technologies.",
          "Built reactive interfaces and integrated front-end wallets adhering to ERC standards.",
          "Optimized application performance and user experience using advanced front-end tools including Vite."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": frontendSkills,
    "education": commonEducation, // Use common education
    "references": [ // Combine common base with specific content
      {
        ...commonReferencesBase[0],
        "content": "I had the chance to work with Enrique, who is an excellent developer with many technical qualities."
      },
      {
        ...commonReferencesBase[1],
        "content": "I have worked side by side with Enrique on two blockchain projects and look forward to many more. His knowledge in the blockchain ecosystem is impressive; he's up-to-date with the latest trends and tools. Working with Enrique is exciting due to his can-do mentality and best coding practices."
      }
    ],
    "honors_awards": commonHonorsAwards // Use common honors_awards
  },
  {
    "id": "en-2",
    "language": "en",
    "version": 2,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Full Stack Developer",
      "summary": "Full Stack Developer specializing in TypeScript-focused software development within the Vue.js framework ecosystem, enhancing web design with responsive and dynamic user interfaces. Adept in Node.js for back-end development, producing high-performance, scalable applications within the AWS ecosystem, complemented by Firebase services for added functionality. Experienced in managing CI/CD workflows with tools like Jenkins, AWS CodePipeline, and Netlify."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "Paris, France",
        "date_range": "Jun 2024 - Dec 2024",
        "description": [
          "Developed and maintained an enterprise dashboard application for construction companies using Vue.js",
          "Implemented end-to-end testing with Playwright in a Dockerized environment with GitLab CI/CD.",
          "Collaborated with back-end teams to optimize API integrations."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Full Stack Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "America and Europe",
        "date_range": "Dec 2023 - Jun 2024",
        "description": [
          "Managed and consolidated freelance projects and tech initiatives under Event Horizon Tech EU.",
          "Delivered over 35 projects across America and Europe with high client retention and 95% positive ratings.",
          "Managed full stack development, ensuring seamless integration between front-end applications and back-end services."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Full Stack Developer",
        "company": "CARFT",
        "location": "Lyon, France",
        "date_range": "Aug 2022 - May 2023",
        "description": [
          "Managed both front-end and back-end development for a blockchain-based collectible car card game.",
          "Integrated Node.js services with Vue.js front-end to enhance game functionality and user experience.",
          "Ensured scalability and robust performance through integration with Google Cloud platforms."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Full Stack JavaScript Developer",
        "company": "ERA 2140",
        "location": "Paris, France",
        "date_range": "Jan 2022 - Aug 2022",
        "description": [
          "Developed and maintained full stack components for crypto gaming platforms using Vue.js and Node.js.",
          "Ensured seamless communication between client-side applications and server-side APIs.",
          "Implemented features for NFT marketplaces and DeFi environments."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": fullstackSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "I had the chance to work with Enrique, an excellent developer with many technical skills and a strong work ethic."
      },
      {
        ...commonReferencesBase[1],
        "content": "I have worked side by side with Enrique on two blockchain projects and look forward to many more. His knowledge in the blockchain ecosystem is impressive; he's up-to-date with the latest trends and tools. Working with Enrique is exciting due to his can-do mentality and best coding practices."
      }
    ],
    "honors_awards": commonHonorsAwards
  },
  {
    "id": "en-3",
    "language": "en",
    "version": 3,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Blockchain and Web3 Developer",
      "summary": "Blockchain and Web3 Developer with over 5 years of professional experience, including 2 years focused on blockchain technologies and Web3. Competent in developing decentralized applications, smart contract programming, and full-stack Ethereum solutions, with additional expertise in blockchain gaming, NFTs, and DeFi platforms."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "Paris, France",
        "date_range": "Jun 2024 - Dec 2024",
        "description": [
          "Developed and maintained front-end components for enterprise applications using Vue.js.",
          "Implemented end-to-end testing suites using Playwright.",
          "Worked with Dockerized environments and GitLab CI/CD."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Full Stack Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "America and Europe",
        "date_range": "Dec 2023 - Jun 2024",
        "description": [
          "Managed and consolidated freelance projects and tech initiatives under Event Horizon Tech EU.",
          "Delivered over 35 projects with high client retention and 95% positive ratings.",
          "Led the development of blockchain-integrated applications, ensuring security and scalability."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Développeur Full Stack",
        "company": "CARFT",
        "location": "Lyon, France",
        "date_range": "Aug 2022 - May 2023",
        "description": [
          "Designed and implemented Web3 architecture for a blockchain-based collectible car card game.",
          "Integrated smart contracts and ensured compliance with blockchain standards.",
          "Collaborated with cross-functional teams to deliver a seamless gaming experience."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Développeur Full Stack Javascript",
        "company": "ERA 2140",
        "location": "France",
        "date_range": "Jan 2022 - Aug 2022",
        "description": [
          "Developed blockchain-based gaming platforms, integrating Web3 technologies.",
          "Built NFT marketplaces and DeFi environments, leveraging tools like Moralis.",
          "Facilitated smart contract interactions using Ethers.js."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": blockchainSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "Enrique is an excellent developer with many technical skills. His expertise in blockchain technologies is remarkable."
      },
      {
        ...commonReferencesBase[1],
        "content": "I have worked side by side with Enrique on two blockchain projects and look forward to many more. His knowledge in the blockchain ecosystem is impressive; he's up-to-date with the latest trends and tools. Working with Enrique is exciting due to his can-do mentality and best coding practices."
      }
    ],
    "honors_awards": commonHonorsAwards
  },
  {
    "id": "fr-1",
    "language": "fr",
    "version": 1,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Développeur Front-End",
      "summary": "Développeur Front-End avec 5 ans d'expérience professionnelle, spécialisé dans la création d'interfaces utilisateur réactives et dynamiques en utilisant Vue.js, enrichi par Tailwind CSS pour un design moderne et épuré avec une gestion d'état sophistiquée. Expertise en TypeScript pour une architecture front-end robuste, garantissant la sécurité des types et le respect des normes de codage maintenables, essentiels pour des applications web complexes et à grande échelle."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "Paris, France",
        "date_range": "juin 2024 - decembre 2024",
        "description": [
          "Développé de nouvelles fonctionnalités et maintenu une application de tableau de bord d'entreprise pour les sociétés de construction en utilisant Vue.js.",
          "Implémenté une suite de tests end-to-end avec Playwright, améliorant la fiabilité de l'application.",
          "Travaillé dans un environnement Dockerisé avec des pipelines CI/CD sur GitLab."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Front-End Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "Amerique et Europe",
        "date_range": "décembre 2023 - juin 2024",
        "description": [
          "Géré et consolidé des projets freelance et des initiatives technologiques sous Event Horizon Tech EU.",
          "Livré plus de 35 projets à travers l'Amérique et l'Europe avec une forte rétention de clients et 95% d'évaluations positives.",
          "Dirigé les efforts de développement front-end, fournissant des solutions sur mesure qui ont amélioré l'engagement des utilisateurs."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Full Stack Developer",
        "company": "CARFT",
        "location": "Lyon, France",
        "date_range": "août 2022 - mai 2023",
        "description": [
          "Dirigé le développement front-end et la conception de l'architecture Web3 pour un jeu de cartes de voitures de collection basé sur la blockchain.",
          "Amélioré le gameplay avec des prix réels, soutenu par Ubisoft et d'autres investisseurs.",
          "Intégré des technologies Web3 avec les plateformes Google Cloud pour assurer évolutivité et performances robustes."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Full Stack JavaScript Developer",
        "company": "ERA 2140",
        "location": "Paris, France",
        "date_range": "janvier 2022 - août 2022",
        "description": [
          "Développé des composants front-end pour des plateformes de jeux crypto utilisant les technologies Web3.",
          "Construit des interfaces réactives et intégré des portefeuilles front-end conformément aux standards ERC.",
          "Optimisé les performances de l'application et l'expérience utilisateur en utilisant des outils front-end avancés, y compris Vite."
        ],
        "external": "https://www.era2140.com/"
      },
      {
        "role": "Full-Stack Web Developer",
        "company": "Workana",
        "location": "Remote (Colombia | Mexico | France)",
        "date_range": "mai 2020 - décembre 2021",
        "description": [
          "Développé plus de 35 projets web avec Vue.js et Node.js, atteignant une satisfaction client de 95%.",
          "Créé des interfaces utilisateur réactives avec Vue.js et intégré des API RESTful.",
          "Optimisé les performances des applications et implémenté des solutions cloud scalables."
        ],
        "external": "https://www.workana.com/en/freelancer/c80a7f10d19f37c3f0bcad4aa103aa9f"
      },
      {
        "role": "Full-Stack Web Developer",
        "company": "Taste",
        "location": "Mexico City, Mexique",
        "date_range": "septembre 2019 - juin 2020",
        "description": [
          "Développé des applications SPA avec Vue.js pour le secteur financier.",
          "Conçu et maintenu des architectures front-end modulaires et réutilisables.",
          "Implémenté des intégrations tierces et optimisé les performances des applications."
        ],
        "external": "https://taste-mkt.com/"
      }
    ],
    "skills": frontendSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "J'ai eu la chance de travailler avec Enrique, qui est un excellent développeur avec de nombreuses qualités techniques."
      },
      {
        ...commonReferencesBase[1],
        "content": "J'ai travaillé aux côtés d'Enrique sur deux projets blockchain et j'attends avec impatience d'en réaliser beaucoup d'autres. Sa connaissance de l'écosystème blockchain est impressionnante; il est à jour avec les dernières tendances et outils. Travailler avec Enrique est passionnant grâce à sa mentalité positive et ses meilleures pratiques de codage."
      }
    ],
    "honors_awards": commonHonorsAwards
  },
  {
    "id": "fr-2",
    "language": "fr",
    "version": 2,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Développeur Full Stack",
      "summary": "Développeur Full Stack spécialisé dans le développement logiciel axé sur TypeScript au sein de l'écosystème du framework Vue.js, améliorant la conception web avec des interfaces utilisateur réactives et dynamiques. Compétent en Node.js pour le développement back-end, produisant des applications performantes et évolutives au sein de l'écosystème AWS, complétées par les services Firebase pour une fonctionnalité accrue. Expérimenté dans la gestion des workflows CI/CD avec des outils comme Jenkins, AWS CodePipeline et Netlify."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "Paris, France",
        "date_range": "juin 2024 - decembre 2024",
        "description": [
          "Développé et maintenu une application de tableau de bord d'entreprise pour les sociétés de construction en utilisant Vue.js 2.7.",
          "Implémenté des tests end-to-end avec Playwright dans un environnement Dockerisé avec GitLab CI/CD.",
          "Collaboré avec les équipes back-end pour optimiser les intégrations API."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Full Stack Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "Amerique et Europe",
        "date_range": "décembre 2023 - juin 2024",
        "description": [
          "Géré et consolidé des projets freelance et des initiatives technologiques sous Event Horizon Tech EU.",
          "Livré plus de 35 projets à travers l'Amérique et l'Europe avec une forte rétention de clients et 95% d'évaluations positives.",
          "Géré le développement full stack, assurant une intégration transparente entre les applications front-end et les services back-end."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Full Stack Developer",
        "company": "CARFT",
        "location": "Lyon, France",
        "date_range": "août 2022 - mai 2023",
        "description": [
          "Géré le développement front-end et back-end pour un jeu de cartes de voitures de collection basé sur la blockchain.",
          "Intégré des services Node.js avec le front-end Vue.js pour améliorer la fonctionnalité du jeu et l'expérience utilisateur.",
          "Assuré l'évolutivité et des performances robustes grâce à l'intégration avec les plateformes Google Cloud."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Full Stack JavaScript Developer",
        "company": "ERA 2140",
        "location": "Paris, France",
        "date_range": "janvier 2022 - août 2022",
        "description": [
          "Développé et maintenu des composants full stack pour des plateformes de jeux crypto en utilisant Vue.js et Node.js.",
          "Assuré une communication transparente entre les applications côté client et les API côté serveur.",
          "Implémenté des fonctionnalités pour les marketplaces NFT et les environnements DeFi."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": fullstackSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "J'ai eu la chance de travailler avec Enrique, un excellent développeur avec de nombreuses compétences techniques et une solide éthique de travail."
      },
      {
        ...commonReferencesBase[1],
        "content": "J'ai travaillé aux côtés d'Enrique sur deux projets blockchain et j'attends avec impatience d'en réaliser beaucoup d'autres. Sa connaissance de l'écosystème blockchain est impressionnante; il est à jour avec les dernières tendances et outils. Travailler avec Enrique est passionnant grâce à sa mentalité positive et ses meilleures pratiques de codage."
      }
    ],
    "honors_awards": commonHonorsAwards
  },
  {
    "id": "fr-3",
    "language": "fr",
    "version": 3,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Développeur Blockchain et Web3",
      "summary": "Développeur Blockchain et Web3 avec plus de 5 ans d'expérience professionnelle, dont 2 ans axés sur les technologies blockchain et Web3. Compétent dans le développement d'applications décentralisées, la programmation de smart contracts et les solutions Ethereum full stack, avec une expertise supplémentaire dans le gaming blockchain, les NFT et les plateformes DeFi."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "Paris, France",
        "date_range": "juin 2024 - decembre 2024",
        "description": [
          "Développé et maintenu des composants front-end pour des applications d'entreprise en utilisant Vue.js.",
          "Implémenté des suites e2e de tests et collaboré à l'intégration des differents fonctionnalités.",
          "Travaillé avec des environnements Dockerisés et GitLab CI/CD."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Full Stack Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "Amerique et Europe",
        "date_range": "décembre 2023 - juin 2024",
        "description": [
          "Géré et consolidé des projets freelance et des initiatives technologiques sous Event Horizon Tech EU.",
          "Livré plus de 35 projets avec une forte rétention de clients et 95% d'évaluations positives.",
          "Dirigé le développement d'applications intégrées à la blockchain, en assurant sécurité et évolutivité."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Développeur Full Stack",
        "company": "CARFT",
        "location": "Lyon, France",
        "date_range": "août 2022 - mai 2023",
        "description": [
          "Conçu et implémenté l'architecture Web3 pour un jeu de cartes de voitures de collection basé sur la blockchain.",
          "Intégré des smart contracts et assuré la conformité avec les standards blockchain.",
          "Collaboré avec des équipes multifonctionnelles pour offrir une expérience de jeu fluide."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Développeur Full Stack Javascript",
        "company": "ERA 2140",
        "location": "France",
        "date_range": "janvier 2022 - août 2022",
        "description": [
          "Développé des plateformes de jeux basées sur la blockchain, intégrant les technologies Web3.",
          "Construit des marketplaces NFT et des environnements DeFi, en utilisant des outils comme Moralis.",
          "Facilité les interactions avec les smart contracts en utilisant Ethers.js."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": blockchainSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "Enrique est un excellent développeur avec de nombreuses compétences techniques. Son expertise dans les technologies blockchain est remarquable."
      },
      {
        ...commonReferencesBase[1],
        "content": "J'ai travaillé aux côtés d'Enrique sur deux projets blockchain et j'attends avec impatience d'en réaliser beaucoup d'autres. Sa connaissance de l'écosystème blockchain est impressionnante; il est à jour avec les dernières tendances et outils. Travailler avec Enrique est passionnant grâce à sa mentalité positive et ses meilleures pratiques de codage."
      }
    ],
    "honors_awards": commonHonorsAwards
  },
  {
    "id": "es-1",
    "language": "es",
    "version": 1,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Desarrollador Front-End",
      "summary": "Soy un Desarrollador Front-End con 5 años de experiencia profesional, especializado en crear interfaces de usuario responsivas y dinámicas utilizando Vue.js, enriquecidas por Tailwind CSS para un diseño moderno y limpio con gestión de estado sofisticada. Tengo experiencia en TypeScript para una arquitectura front-end robusta, asegurando seguridad de tipos y adherencia a estándares de código mantenibles, esenciales para aplicaciones web complexas y de gran escala."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "París, Francia",
        "date_range": "Jun 2024 - Dic 2024",
        "description": [
          "Desarrollé nuevas características y mantuve una aplicación de panel de control empresarial para empresas de construcción utilizando Vue.js.",
          "Implementé una suite de pruebas end-to-end usando Playwright, mejorando la confiabilidad de la aplicación.",
          "Trabajé en un entorno Dockerizado con pipelines CI/CD en GitLab."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Front-End Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "América y Europa",
        "date_range": "Dic 2023 - Jun 2024",
        "description": [
          "Gestioné y consolidé proyectos freelance e iniciativas tecnológicas bajo Event Horizon Tech EU.",
          "Entregué más de 35 proyectos a través de América y Europa con alta retención de clientes y 95% de valoraciones positivas.",
          "Lideré esfuerzos de desarrollo front-end, proporcionando soluciones a medida que mejoraron el compromiso de los usuarios."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Full Stack Developer",
        "company": "CARFT",
        "location": "Lyon, Francia",
        "date_range": "Ago 2022 - May 2023",
        "description": [
          "Dirigí el desarrollo front-end y el diseño de la arquitectura Web3 para un juego de cartas coleccionables de autos basado en blockchain.",
          "Mejoré la jugabilidad con premios del mundo real, respaldado por Ubisoft y otros inversores.",
          "Integré tecnologías Web3 con plataformas de Google Cloud para asegurar escalabilidad y rendimiento robusto."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Full Stack JavaScript Developer",
        "company": "ERA 2140",
        "location": "París, Francia",
        "date_range": "Ene 2022 - Ago 2022",
        "description": [
          "Desarrollé componentes front-end para plataformas de juegos cripto utilizando tecnologías Web3.",
          "Construí interfaces reactivas e integré billeteras front-end adheridas a los estándares ERC.",
          "Optimicé el rendimiento de la aplicación y la experiencia del usuario utilizando herramientas avanzadas de front-end, incluyendo Vite."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": [
      "Vue.js",
      "TypeScript",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "Responsive UI Design",
      "HTML5 & CSS3",
      "Vite",
      "Playwright",
      "CI/CD Workflows (Jenkins, AWS CodePipeline, Netlify)",
      "Docker",
      "Web3 Integration",
      "Firebase Services",
      "AWS Ecosystem",
      "Websockets",
      "Metodologías Ágiles",
      "User Experience (UX) Design",
      "Mentoría de nuevos desarrolladores web"
    ],
    "skills": frontendSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "Tuve la oportunidad de trabajar con Enrique, quien es un excelente desarrollador con muchas cualidades técnicas."
      },
      {
        ...commonReferencesBase[1],
        "content": "He trabajado codo a codo con Enrique en dos proyectos de blockchain y espero muchos más. Su conocimiento en el ecosistema blockchain es impresionante; está al día con las últimas tendencias y herramientas. Trabajar con Enrique es emocionante debido a su mentalidad positiva y sus mejores prácticas de codificación."
      }
    ],
    "honors_awards": commonHonorsAwards
  },
  {
    "id": "es-2",
    "language": "es",
    "version": 2,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Desarrollador Full Stack",
      "summary": "Soy un Desarrollador Full Stack especializado en desarrollo de software enfocado en TypeScript dentro del ecosistema del framework Vue.js, mejorando el diseño web con interfaces de usuario responsivas y dinámicas. Soy experto en Node.js para desarrollo back-end, produciendo aplicaciones escalables y de alto rendimiento dentro del ecosistema AWS, complementadas con servicios de Firebase para funcionalidad adicional. Tengo experiencia en la gestión de flujos de trabajo CI/CD con herramientas como Jenkins, AWS CodePipeline y Netlify."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "París, Francia",
        "date_range": "Jun 2024 - Dic 2024",
        "description": [
          "Desarrollé y mantuve una aplicación de panel de control empresarial para empresas de construcción utilizando Vue.js.",
          "Implementé pruebas end-to-end con Playwright en un entorno Dockerizado con GitLab CI/CD.",
          "Colaboré con equipos back-end para optimizar integraciones API."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Full Stack Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "América y Europa",
        "date_range": "Dic 2023 - Jun 2024",
        "description": [
          "Gestioné y consolidé proyectos freelance e iniciativas tecnológicas bajo Event Horizon Tech EU.",
          "Entregué más de 35 proyectos a través de América y Europa con alta retención de clientes y 95% de valoraciones positivas.",
          "Gestioné el desarrollo full stack, asegurando una integración fluida entre aplicaciones front-end y servicios back-end."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Full Stack Developer",
        "company": "CARFT",
        "location": "Lyon, Francia",
        "date_range": "Ago 2022 - May 2023",
        "description": [
          "Gestioné el desarrollo front-end y back-end para un juego de cartas coleccionables de autos basado en blockchain.",
          "Integré servicios de Node.js con front-end de Vue.js para mejorar la funcionalidad del juego y la experiencia del usuario.",
          "Aseguré escalabilidad y rendimiento robusto a través de la integración con plataformas de Google Cloud."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Full Stack JavaScript Developer",
        "company": "ERA 2140",
        "location": "París, Francia",
        "date_range": "Ene 2022 - Ago 2022",
        "description": [
          "Desarrollé y mantuve componentes full stack para plataformas de juegos cripto utilizando Vue.js y Node.js.",
          "Aseguré comunicación fluida entre aplicaciones del lado del cliente y APIs del lado del servidor.",
          "Implementé funciones para marketplaces de NFT y entornos DeFi."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": [
      "Vue.js",
      "Node.js",
      "TypeScript",
      "JavaScript (ES6)",
      "Express & Nest.js",
      "PHP & Laravel",
      "AWS Ecosystem",
      "Firebase Services",
      "CI/CD Workflows (Git, Jenkins, AWS CodePipeline, Netlify)",
      "Docker",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "MySQL y MongoDB",
      "API Integration",
      "Websockets",
      "Metodologías Ágiles",
      "Mentoría de nuevos desarrolladores web"
    ],
    "skills": fullstackSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "Tuve la oportunidad de trabajar con Enrique, un excelente desarrollador con muchas habilidades técnicas y una fuerte ética de trabajo."
      },
      {
        ...commonReferencesBase[1],
        "content": "He trabajado codo a codo con Enrique en dos proyectos de blockchain y espero muchos más. Su conocimiento en el ecosistema blockchain es impresionante; está al día con las últimas tendencias y herramientas. Trabajar con Enrique es emocionante debido a su mentalidad positiva y sus mejores prácticas de codificación."
      }
    ],
    "honors_awards": commonHonorsAwards
  },
  {
    "id": "es-3",
    "language": "es",
    "version": 3,
    "personal_info": {
      ...commonPersonalInfoBase,
      "title": "Desarrollador Blockchain y Web3",
      "summary": "Soy un Desarrollador Blockchain y Web3 con más de 5 años de experiencia profesional, incluyendo 2 años enfocado en tecnologías blockchain y Web3. Competente en el desarrollo de aplicaciones descentralizadas, programación de smart contracts y soluciones Ethereum full stack, con experiencia adicional en juegos blockchain, NFTs y plataformas DeFi."
    },
    "experience": [
      {
        "role": "Senior Front-End Developer",
        "company": "Dispatcher-pro",
        "location": "París, Francia",
        "date_range": "Jun 2024 - Dic 2024",
        "description": [
          "Desarrollé y mantuve componentes front-end para aplicaciones empresariales utilizando Vue.js.",
          "Implementé suites de pruebas end-to-end utilizando Playwright.",
          "Trabajé con entornos Dockerizados y GitLab CI/CD."
        ],
        "external": "https://dispatcher-pro.com/"
      },
      {
        "role": "Full Stack Developer",
        "company": "Event Horizon Tech EU [Contractor]",
        "location": "América y Europa",
        "date_range": "Dic 2023 - Jun 2024",
        "description": [
          "Gestioné y consolidé proyectos freelance e iniciativas tecnológicas bajo Event Horizon Tech EU.",
          "Entregué más de 35 proyectos con alta retención de clientes y 95% de valoraciones positivas.",
          "Lideré el desarrollo de aplicaciones integradas con blockchain, asegurando seguridad y escalabilidad."
        ],
        "external": "https://eventhorizontech.eu/"
      },
      {
        "role": "Développeur Full Stack",
        "company": "CARFT",
        "location": "Lyon, Francia",
        "date_range": "Ago 2022 - May 2023",
        "description": [
          "Diseñé e implementé la arquitectura Web3 para un juego de cartas coleccionables de autos basado en blockchain.",
          "Integré smart contracts y aseguré el cumplimiento con estándares blockchain.",
          "Colaboré con equipos multifuncionales para ofrecer una experiencia de juego fluida."
        ],
        "external": "https://www.forbes.fr/entrepreneurs/rencontre-avec-morgan-pezzo-ceo-de-carft-quand-la-passion-automobile-investit-le-web3/"
      },
      {
        "role": "Développeur Full Stack Javascript",
        "company": "ERA 2140",
        "location": "Francia",
        "date_range": "Ene 2022 - Ago 2022",
        "description": [
          "Desarrollé plataformas de juegos basadas en blockchain, integrando tecnologías Web3.",
          "Construí marketplaces de NFT y entornos DeFi, aprovechando herramientas como Moralis.",
          "Facilité interacciones con smart contracts utilizando Ethers.js."
        ],
        "external": "https://www.era2140.com/"
      }
    ],
    "skills": [
      "Blockchain Development",
      "Web3 Technologies",
      "Smart Contracts",
      "Ethereum & EVM",
      "Solidity",
      "Web3.js & Ethers.js",
      "Vue.js",
      "Node.js",
      "TypeScript",
      "CI/CD Workflows (Git, Jenkins, AWS CodePipeline, Netlify)",
      "Docker",
      "NFT Marketplaces",
      "DeFi Protocols",
      "Moralis",
      "Infura",
      "MetaMask Integration",
      "AWS Ecosystem",
      "Firebase Services",
      "Mentoría de nuevos desarrolladores web"
    ],
    "skills": blockchainSkills,
    "education": commonEducation,
    "references": [
      {
        ...commonReferencesBase[0],
        "content": "Enrique es un excelente desarrollador con muchas habilidades técnicas. Su experiencia en tecnologías blockchain es notable."
      },
      {
        ...commonReferencesBase[1],
        "content": "He trabajado codo a codo con Enrique en dos proyectos de blockchain y espero muchos más. Su conocimiento en el ecosistema blockchain es impresionante; está al día con las últimas tendencias y herramientas. Trabajar con Enrique es emocionante debido a su mentalidad positiva y sus mejores prácticas de codificación."
      }
    ],
    "honors_awards": commonHonorsAwards
  }  
];

export default cvsCollection;
