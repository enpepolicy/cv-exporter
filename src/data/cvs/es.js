// src/data/cvs/es.js

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

const es_cv_frontend = {
  id: "es-1",
  language: "es",
  version: 1,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Desarrollador Front-End",
    summary: "Soy un Desarrollador Front-End con 5 años de experiencia profesional, especializado en crear interfaces de usuario responsivas y dinámicas utilizando Vue.js, enriquecidas por Tailwind CSS para un diseño moderno y limpio con gestión de estado sofisticada. Tengo experiencia en TypeScript para una arquitectura front-end robusta, asegurando seguridad de tipos y adherencia a estándares de código mantenibles, esenciales para aplicaciones web complexas y de gran escala."
  },
  experience: [
    { ...alloyExperienceBase, date_range: "Ene 2025 - Actualidad", location: "Berlín, Alemania · Remoto", description: alloyDescriptions["es-1"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.es, location: "París, Francia", description: dispatcherProDescriptions["es-1"] },
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["es-1"], date_range: eventHorizonDateRanges.es, location: eventHorizonLocations.es, description: eventHorizonDescriptions["es-1"] },
    { ...carftExperienceBase, role: carftRoles["es-1"], date_range: carftDateRanges.es, location: "Lyon, Francia", description: carftDescriptions["es-1"] },
    { ...era2140ExperienceBase, role: era2140Roles["es-1"], location: era2140Locations["es-1"], date_range: era2140DateRanges.es, description: era2140Descriptions["es-1"] }
  ],
  skills: frontendSkills, // Assuming skills are universal, if specific es skills are needed, import them
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "Tuve la oportunidad de trabajar con Enrique, quien es un excelente desarrollador con muchas cualidades técnicas." },
    { ...commonReferencesBase[1], content: "He trabajado codo a codo con Enrique en dos proyectos de blockchain y espero muchos más. Su conocimiento en el ecosistema blockchain es impresionante; está al día con las últimas tendencias y herramientas. Trabajar con Enrique es emocionante debido a su mentalidad positiva y sus mejores prácticas de codificación." }
  ],
  honors_awards: commonHonorsAwards
};

const es_cv_fullstack = {
  id: "es-2",
  language: "es",
  version: 2,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Desarrollador Full Stack",
    summary: "Soy un Desarrollador Full Stack especializado en desarrollo de software enfocado en TypeScript dentro del ecosistema del framework Vue.js, mejorando el diseño web con interfaces de usuario responsivas y dinámicas. Soy experto en Node.js para desarrollo back-end, produciendo aplicaciones escalables y de alto rendimiento dentro del ecosistema AWS, complementadas con servicios de Firebase para funcionalidad adicional. Tengo experiencia en la gestión de flujos de trabajo CI/CD con herramientas como Jenkins, AWS CodePipeline y Netlify."
  },
  experience: [
    { ...alloyExperienceBase, date_range: "Ene 2025 - Actualidad", location: "Berlín, Alemania · Remoto", description: alloyDescriptions["es-2"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.es, location: "París, Francia", description: dispatcherProDescriptions["es-2"] },
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["es-2"], date_range: eventHorizonDateRanges.es, location: eventHorizonLocations.es, description: eventHorizonDescriptions["es-2"] },
    { ...carftExperienceBase, role: carftRoles["es-2"], date_range: carftDateRanges.es, location: "Lyon, Francia", description: carftDescriptions["es-2"] },
    { ...era2140ExperienceBase, role: era2140Roles["es-2"], location: era2140Locations["es-2"], date_range: era2140DateRanges.es, description: era2140Descriptions["es-2"] }
  ],
  skills: fullstackSkills,
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "Tuve la oportunidad de trabajar con Enrique, un excelente desarrollador con muchas habilidades técnicas y una fuerte ética de trabajo." },
    { ...commonReferencesBase[1], content: "He trabajado codo a codo con Enrique en dos proyectos de blockchain y espero muchos más. Su conocimiento en el ecosistema blockchain es impresionante; está al día con las últimas tendencias y herramientas. Trabajar con Enrique es emocionante debido a su mentalidad positiva y sus mejores prácticas de codificación." }
  ],
  honors_awards: commonHonorsAwards
};

const es_cv_blockchain = {
  id: "es-3",
  language: "es",
  version: 3,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Desarrollador Blockchain y Web3",
    summary: "Soy un Desarrollador Blockchain y Web3 con más de 5 años de experiencia profesional, incluyendo 2 años enfocado en tecnologías blockchain y Web3. Competente en el desarrollo de aplicaciones descentralizadas, programación de smart contracts y soluciones Ethereum full stack, con experiencia adicional en juegos blockchain, NFTs y plataformas DeFi."
  },
  experience: [
    { ...alloyExperienceBase, date_range: "Ene 2025 - Actualidad", location: "Berlín, Alemania · Remoto", description: alloyDescriptions["es-3"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.es, location: "París, Francia", description: dispatcherProDescriptions["es-3"] },
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["es-3"], date_range: eventHorizonDateRanges.es, location: eventHorizonLocations.es, description: eventHorizonDescriptions["es-3"] },
    { ...carftExperienceBase, role: carftRoles["es-3"], date_range: carftDateRanges.es, location: "Lyon, Francia", description: carftDescriptions["es-3"] }, // Original had "Développeur Full Stack" for CARFT role in es-3, harmonized
    { ...era2140ExperienceBase, role: era2140Roles["es-3"], location: era2140Locations["es-3"], date_range: era2140DateRanges.es, description: era2140Descriptions["es-3"] } // Original had "Développeur Full Stack Javascript" for ERA2140 role in es-3, harmonized
  ],
  skills: blockchainSkills,
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "Enrique es un excelente desarrollador con muchas habilidades técnicas. Su experiencia en tecnologías blockchain es notable." },
    { ...commonReferencesBase[1], content: "He trabajado codo a codo con Enrique en dos proyectos de blockchain y espero muchos más. Su conocimiento en el ecosistema blockchain es impresionante; está al día con las últimas tendencias y herramientas. Trabajar con Enrique es emocionante debido a su mentalidad positiva y sus mejores prácticas de codificación." }
  ],
  honors_awards: commonHonorsAwards
};

export const spanishCVs = [es_cv_frontend, es_cv_fullstack, es_cv_blockchain];
