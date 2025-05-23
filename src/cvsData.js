// src/cvsData.js

import { englishCVs } from './data/cvs/en.js';
import { frenchCVs } from './data/cvs/fr.js';
import { spanishCVs } from './data/cvs/es.js';

const cvsCollection = [
  ...englishCVs,
  ...frenchCVs,
  ...spanishCVs
];

export default cvsCollection;
