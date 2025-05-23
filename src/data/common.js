// src/data/common.js

export const commonContact = {
  email: "enriquep36@hotmail.com",
  phone: "+33 0782708654",
  location: "Marseille, France",
  linkedin: "https://www.linkedin.com/in/enpepolicy"
};

export const commonPersonalInfoBase = {
  name: "Enrique Peña",
  contact: commonContact
};

export const commonEducation = [
  {
    degree: "Political Scientist, Political Science and Government", // Base English, may need translation handling
    institution: "Universidad Nacional de Colombia",
    location: "Colombia",
    years: "2012 - 2017"
  }
];

export const commonHonorsAwards = [
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

export const commonReferencesBase = [
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
