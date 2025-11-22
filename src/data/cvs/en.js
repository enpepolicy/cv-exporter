// src/data/cvs/en.js

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

const en_cv_frontend = {
  id: "en-1",
  language: "en",
  version: 1,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Front-End Developer",
    summary: "Front-End Developer with 5 years of professional experience specializing in crafting responsive and dynamic user interfaces using Vue.js, enriched by Tailwind CSS for modern and clean design with sophisticated state management. Expertise in TypeScript for robust front-end architecture, ensuring type safety and adherence to maintainable coding standards, essential for complex, large-scale web applications."
  },
  experience: [
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["en-1"], date_range: eventHorizonDateRanges.en, location: eventHorizonLocations.en, description: eventHorizonDescriptions["en-1"] },
    { ...alloyExperienceBase, description: alloyDescriptions["en-1"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.en, description: dispatcherProDescriptions["en-1"] },
    { ...carftExperienceBase, role: carftRoles["en-1"], date_range: carftDateRanges.en, description: carftDescriptions["en-1"] },
    { ...era2140ExperienceBase, role: era2140Roles["en-1"], location: era2140Locations["en-1"], date_range: era2140DateRanges.en, description: era2140Descriptions["en-1"] }
  ],
  skills: frontendSkills,
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "I had the chance to work with Enrique, who is an excellent developer with many technical qualities." },
    { ...commonReferencesBase[1], content: "I have worked side by side with Enrique on two blockchain projects and look forward to many more. His knowledge in the blockchain ecosystem is impressive; he's up-to-date with the latest trends and tools. Working with Enrique is exciting due to his can-do mentality and best coding practices." }
  ],
  honors_awards: commonHonorsAwards
};

const en_cv_fullstack = {
  id: "en-2",
  language: "en",
  version: 2,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Full Stack Developer",
    summary: "Full Stack Developer specializing in TypeScript-focused software development within the Vue.js framework ecosystem, enhancing web design with responsive and dynamic user interfaces. Adept in Node.js for back-end development, producing high-performance, scalable applications within the AWS ecosystem, complemented by Firebase services for added functionality. Experienced in managing CI/CD workflows with tools like Jenkins, AWS CodePipeline, and Netlify."
  },
  experience: [
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["en-2"], date_range: eventHorizonDateRanges.en, location: eventHorizonLocations.en, description: eventHorizonDescriptions["en-2"] },
    { ...alloyExperienceBase, description: alloyDescriptions["en-2"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.en, description: dispatcherProDescriptions["en-2"] },
    { ...carftExperienceBase, role: carftRoles["en-2"], date_range: carftDateRanges.en, description: carftDescriptions["en-2"] },
    { ...era2140ExperienceBase, role: era2140Roles["en-2"], location: era2140Locations["en-2"], date_range: era2140DateRanges.en, description: era2140Descriptions["en-2"] }
  ],
  skills: fullstackSkills,
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "I had the chance to work with Enrique, an excellent developer with many technical skills and a strong work ethic." },
    { ...commonReferencesBase[1], content: "I have worked side by side with Enrique on two blockchain projects and look forward to many more. His knowledge in the blockchain ecosystem is impressive; he's up-to-date with the latest trends and tools. Working with Enrique is exciting due to his can-do mentality and best coding practices." }
  ],
  honors_awards: commonHonorsAwards
};

const en_cv_blockchain = {
  id: "en-3",
  language: "en",
  version: 3,
  personal_info: {
    ...commonPersonalInfoBase,
    title: "Blockchain and Web3 Developer",
    summary: "Blockchain and Web3 Developer with over 5 years of professional experience, including 2 years focused on blockchain technologies and Web3. Competent in developing decentralized applications, smart contract programming, and full-stack Ethereum solutions, with additional expertise in blockchain gaming, NFTs, and DeFi platforms."
  },
  experience: [
    { ...eventHorizonExperienceBase, role: eventHorizonRoles["en-3"], date_range: eventHorizonDateRanges.en, location: eventHorizonLocations.en, description: eventHorizonDescriptions["en-3"] },
    { ...alloyExperienceBase, description: alloyDescriptions["en-3"] },
    { ...dispatcherProExperienceBase, date_range: dispatcherProDateRanges.en, description: dispatcherProDescriptions["en-3"] },
    { ...carftExperienceBase, role: carftRoles["en-3"], date_range: carftDateRanges.en, description: carftDescriptions["en-3"] }, // Note: Original data had "Développeur Full Stack" for CARFT in en-3, harmonizing to use carftRoles["en-3"]
    { ...era2140ExperienceBase, role: era2140Roles["en-3"], location: era2140Locations["en-3"], date_range: era2140DateRanges.en, description: era2140Descriptions["en-3"] } // Note: Original data had "Développeur Full Stack Javascript" for ERA2140 in en-3, harmonizing
  ],
  skills: blockchainSkills,
  education: commonEducation,
  references: [
    { ...commonReferencesBase[0], content: "Enrique is an excellent developer with many technical skills. His expertise in blockchain technologies is remarkable." },
    { ...commonReferencesBase[1], content: "I have worked side by side with Enrique on two blockchain projects and look forward to many more. His knowledge in the blockchain ecosystem is impressive; he's up-to-date with the latest trends and tools. Working with Enrique is exciting due to his can-do mentality and best coding practices." }
  ],
  honors_awards: commonHonorsAwards
};

export const englishCVs = [en_cv_frontend, en_cv_fullstack, en_cv_blockchain];
