// src/data/cvs/fr.js

import {
  commonPersonalInfoBase,
  commonEducation,
  commonHonorsAwards,
  commonReferencesBase
} from '../common.js';
import {
  frontendSkills,
  fullstackSkills,
  blockchainSkills
} from '../skills.js';
import { alloyExperienceBase, alloyDescriptions } from '../experiences/alloy.js';
import { dispatcherProExperienceBase, dispatcherProDescriptions, dispatcherProDateRanges } from '../experiences/dispatcherPro.js';
import { eventHorizonExperienceBase, eventHorizonDescriptions, eventHorizonRoles, eventHorizonDateRanges, eventHorizonLocations } from '../experiences/eventHorizon.js';
import { carftExperienceBase, carftDescriptions, carftRoles, carftDateRanges } from '../experiences/carft.js';
import { era2140ExperienceBase, era2140Descriptions, era2140Roles, era2140Locations, era2140DateRanges } from '../experiences/era2140.js';
import { workanaExperienceBase, workanaDescriptions } from '../experiences/workana.js';
import { tasteExperienceBase, tasteDescriptions } from '../experiences/taste.js';

const fr_cv_frontend = {
  id: "fr-1",
  language: "fr",
  version: 1,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Développeur Front-End",
    summary: "Développeur Front-End avec 5 ans d'expérience professionnelle, spécialisé dans la création d'interfaces utilisateur réactives et dynamiques en utilisant Vue.js, enrichi par Tailwind CSS pour un design moderne et épuré avec une gestion d'état sophistiquée. Expertise en TypeScript pour une architecture front-end robuste, garantissant la sécurité des types et le respect des normes de codage maintenables, essentiels pour des applications web complexes et à grande échelle."
  },
  experience: [
    { ...alloyExperienceBase, date_range: "Janv 2025 - Présent", location: "Berlin, Allemagne · À distance", description: alloyDescriptions["fr-1"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.fr, description: dispatcherProDescriptions["fr-1"] },
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["fr-1"], date_range: eventHorizonDateRanges.fr, location: eventHorizonLocations.fr, description: eventHorizonDescriptions["fr-1"] },
    { ...carftExperienceBase, role: carftRoles["fr-1"], date_range: carftDateRanges.fr, description: carftDescriptions["fr-1"] },
    { ...era2140ExperienceBase, role: era2140Roles["fr-1"], location: era2140Locations["fr-1"], date_range: era2140DateRanges.fr, description: era2140Descriptions["fr-1"] },
    { ...workanaExperienceBase, description: workanaDescriptions["fr-1"] },
    { ...tasteExperienceBase, description: tasteDescriptions["fr-1"] }
  ],
  skills: frontendSkills, // Assuming skills lists are universal and don't need translation for now
  education: commonEducation, // Assuming education structure is universal
  references: [
    { ...commonReferencesBase[0], content: "J'ai eu la chance de travailler avec Enrique, qui est un excellent développeur avec de nombreuses qualités techniques." },
    { ...commonReferencesBase[1], content: "J'ai travaillé aux côtés d'Enrique sur deux projets blockchain et j'attends avec impatience d'en réaliser beaucoup d'autres. Sa connaissance de l'écosystème blockchain est impressionnante; il est à jour avec les dernières tendances et outils. Travailler avec Enrique est passionnant grâce à sa mentalité positive et ses meilleures pratiques de codage." }
  ],
  honors_awards: commonHonorsAwards
};

const fr_cv_fullstack = {
  id: "fr-2",
  language: "fr",
  version: 2,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Développeur Full Stack",
    summary: "Développeur Full Stack spécialisé dans le développement logiciel axé sur TypeScript au sein de l'écosystème du framework Vue.js, améliorant la conception web avec des interfaces utilisateur réactives et dynamiques. Compétent en Node.js pour le développement back-end, produisant des applications performantes et évolutives au sein de l'écosystème AWS, complétées par les services Firebase pour une fonctionnalité accrue. Expérimenté dans la gestion des workflows CI/CD avec des outils comme Jenkins, AWS CodePipeline et Netlify."
  },
  experience: [
    { ...alloyExperienceBase, date_range: "Janv 2025 - Présent", location: "Berlin, Allemagne · À distance", description: alloyDescriptions["fr-2"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.fr, description: dispatcherProDescriptions["fr-2"] },
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["fr-2"], date_range: eventHorizonDateRanges.fr, location: eventHorizonLocations.fr, description: eventHorizonDescriptions["fr-2"] },
    { ...carftExperienceBase, role: carftRoles["fr-2"], date_range: carftDateRanges.fr, description: carftDescriptions["fr-2"] },
    { ...era2140ExperienceBase, role: era2140Roles["fr-2"], location: era2140Locations["fr-2"], date_range: era2140DateRanges.fr, description: era2140Descriptions["fr-2"] }
  ],
  skills: fullstackSkills,
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "J'ai eu la chance de travailler avec Enrique, un excellent développeur avec de nombreuses compétences techniques et une solide éthique de travail." },
    { ...commonReferencesBase[1], content: "J'ai travaillé aux côtés d'Enrique sur deux projets blockchain et j'attends avec impatience d'en réaliser beaucoup d'autres. Sa connaissance de l'écosystème blockchain est impressionnante; il est à jour avec les dernières tendances et outils. Travailler avec Enrique est passionnant grâce à sa mentalité positive et ses meilleures pratiques de codage." }
  ],
  honors_awards: commonHonorsAwards
};

const fr_cv_blockchain = {
  id: "fr-3",
  language: "fr",
  version: 3,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Développeur Blockchain et Web3",
    summary: "Développeur Blockchain et Web3 avec plus de 5 ans d'expérience professionnelle, dont 2 ans axés sur les technologies blockchain et Web3. Compétent dans le développement d'applications décentralisées, la programmation de smart contracts et les solutions Ethereum full stack, avec une expertise supplémentaire dans le gaming blockchain, les NFT et les plateformes DeFi."
  },
  experience: [
    { ...alloyExperienceBase, date_range: "Janv 2025 - Présent", location: "Berlin, Allemagne · À distance", description: alloyDescriptions["fr-3"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.fr, description: dispatcherProDescriptions["fr-3"] },
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["fr-3"], date_range: eventHorizonDateRanges.fr, location: eventHorizonLocations.fr, description: eventHorizonDescriptions["fr-3"] },
    { ...carftExperienceBase, role: carftRoles["fr-3"], date_range: carftDateRanges.fr, description: carftDescriptions["fr-3"] },
    { ...era2140ExperienceBase, role: era2140Roles["fr-3"], location: era2140Locations["fr-3"], date_range: era2140DateRanges.fr, description: era2140Descriptions["fr-3"] }
  ],
  skills: blockchainSkills,
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "Enrique est un excellent développeur avec de nombreuses compétences techniques. Son expertise dans les technologies blockchain est remarquable." },
    { ...commonReferencesBase[1], content: "J'ai travaillé aux côtés d'Enrique sur deux projets blockchain et j'attends avec impatience d'en réaliser beaucoup d'autres. Sa connaissance de l'écosystème blockchain est impressionnante; il est à jour avec les dernières tendances et outils. Travailler avec Enrique est passionnant grâce à sa mentalité positive et ses meilleures pratiques de codage." }
  ],
  honors_awards: commonHonorsAwards
};

export const frenchCVs = [fr_cv_frontend, fr_cv_fullstack, fr_cv_blockchain];
