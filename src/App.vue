<template>
  <div class="max-w-[800px] mx-auto my-8 bg-white p-5 shadow-md rounded-lg">
    <!-- Language and Version Controls -->
    <div class="controls flex justify-between mb-5 flex-wrap items-center">
      <div class="mb-3 flex items-center">
        <label for="language" class="mr-2 font-semibold text-base">{{ labels.selectLanguage }}</label>
        <select v-model="selectedLanguage" @change="filterCVs"
          class="p-2 px-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <option v-for="(langName, langCode) in languages" :key="langCode" :value="langCode">{{ langName }}</option>
        </select>
      </div>
      <div class="mb-3 flex items-center">
        <label for="version" class="mr-2 font-semibold text-base">{{ labels.selectVersion }}</label>
        <select v-model="selectedVersion" @change="filterCVs"
          class="p-2 px-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <option v-for="ver in availableVersions" :key="ver.version" :value="ver.version">{{ ver.title }}</option>
        </select>
      </div>
      <div class="mb-3 flex space-x-3">
        <button @click="exportPDF"
          class="bg-primary-button px-3 py-1 rounded-md transition duration-300 flex items-center shadow">
          <i class="fas fa-file-pdf mr-1"></i> Export to PDF
        </button>
        <button @click="exportImage"
          class="bg-primary-button px-3 py-1 rounded-md transition duration-300 flex items-center shadow">
          <i class="fas fa-file-image mr-1"></i> Export to Image
        </button>
      </div>
    </div>

    <!-- CV Content -->
    <div id="cv-content">
      <!-- Header -->
      <header class="text-center pb-3 mb-5">
        <h1 class="text-primary text-3xl font-semibold">{{ cvData.personal_info.name }}</h1>
        <h2 class="text-gray-600 text-lg mt-1">{{ cvData.personal_info.title }}</h2>
        <div class="contact mt-3 text-sm contact-info">
          <p class="flex justify-center items-center space-x-3">
            <i class="fas fa-envelope text-gray-600"></i>
            <a :href="'mailto:' + cvData.personal_info.contact.email" class="hover:underline">
              {{ cvData.personal_info.contact.email }}
            </a>
            <span class="mx-3">|</span>
            <i class="fas fa-phone text-gray-600"></i>
            <a :href="'tel:' + cvData.personal_info.contact.phone" class="hover:underline">
              {{ cvData.personal_info.contact.phone }}
            </a>
            <span class="mx-3">|</span>
            <i class="fas fa-map-marker-alt text-gray-600"></i>
            <span>{{ cvData.personal_info.contact.location }}</span>
          </p>
          <p class="flex justify-center items-center space-x-2 mt-2">
            <i class="fab fa-linkedin text-gray-600"></i>
            <a :href="cvData.personal_info.contact.linkedin" target="_blank" class="hover:underline">
              Linkedin
            </a>
          </p>
        </div>
      </header>

      <!-- Experience - Moved to the top for prominence -->
      <section class="experience card" v-if="cvData.experience && cvData.experience.length">
        <h2 class="section-title">{{ labels.experience }}</h2>
        <ul class="space-y-3">
          <li v-for="(job, index) in cvData.experience" class="pb-2" :key="index">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">{{ job.role }}</h3>
              <span class="text-gray-500 italic text-sm">{{ job.date_range }}</span>
            </div>
            <p class="text-gray-600 mt-1 text-sm"><strong>      
              <a 
                v-if="job.external"
                :href="job.external" 
                target="_blank" 
                class="text-xs bg-primary-button p-[0.35rem] text-white hover:bg-opacity-90 inline-flex items-center rounded-full opacity-80 mr-1">
                <!-- <span>View More</span> -->
                <i class="fas fa-external-link-alt"></i>
              </a>
              {{ job.company }}</strong> - {{ job.location }}      
            </p>
            <ul class="list-disc list-inside text-gray-600 mt-2 text-[0.82rem]">
              <li v-for="(desc, i) in job.description" :key="i">{{ desc }}</li>
            </ul>
          </li>
        </ul>
      </section>

      <!-- Summary -->
      <section class="summary card" v-if="cvData.personal_info && cvData.personal_info.summary">
        <h2 class="section-title">{{ labels.summary }}</h2>
        <p class="text-justify text-sm">{{ cvData.personal_info.summary }}</p>
      </section>

      <!-- Education -->
      <section class="education card" v-if="cvData.education && cvData.education.length">
        <h2 class="section-title">{{ labels.education }}</h2>
        <ul class="space-y-3">
          <li v-for="(edu, index) in cvData.education" :key="index">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">{{ edu.degree }}</h3>
              <span class="text-gray-500 italic text-sm">{{ edu.years }}</span>
            </div>
            <p class="text-gray-600 text-sm">{{ edu.institution }}</p>
          </li>
        </ul>
      </section>

      <!-- Skills - Grouped into Categories for Better Clarity -->
      <section class="skills card" v-if="cvData.skills && cvData.skills.length">
        <h2 class="section-title">{{ labels.skills }}</h2>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge" v-for="(skill, index) in cvData.skills" :key="index">
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- References - Moved to the Bottom as an Optional Section -->
      <section class="references card" v-if="cvData.references && cvData.references.length">
        <h2 class="section-title">{{ labels.references }}</h2>
        <ul class="space-y-3">
          <li v-for="(ref, index) in cvData.references" :key="index">
            <p class="text-gray-800 font-semibold text-sm">{{ ref.name }}, {{ ref.title }} at {{ ref.company }}</p>
            <p class="text-gray-600 mt-1 text-sm">"{{ ref.content }}"</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cvs: [],            
      languages: {
        en: 'English',
        es: 'Español',
        fr: 'Français'
      },
      selectedLanguage: 'en', // Default language
      selectedVersion: 1,     // Default version
      availableVersions: [],
      cvData: {
        personal_info: {
          name: '',
          title: '',
          contact: { email: '', phone: '', location: '', linkedin: '' },
          summary: ''
        },
        experience: [],
        education: [],
        skills: [],
        references: []
      },
      labels: {}
    };
  },
  methods: {
    exportPDF() {
      const element = document.getElementById('cv-content');
      const opt = {
        margin: 0.3,
        filename: `${this.cvData.personal_info.name.replace(/ /g, '_')}_${this.cvData.personal_info.title.replace(/ /g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 3 }, // eslint-disable-line no-undef
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save(); // eslint-disable-line no-undef
    },
    exportImage() {
      const element = document.getElementById('cv-content');
      html2canvas(element).then(canvas => { // eslint-disable-line no-undef
        const link = document.createElement('a');
        link.download = `${this.cvData.personal_info.name.replace(/ /g, '_')}_CV.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    },
    fetchCVs() {
      // Assuming cvs.json is in the public directory or root, accessible via this path
      fetch('./cvs.json?timestamp=' + new Date().getTime()) 
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          this.cvs = data;
          this.populateAvailableVersions(); // Call this before filterCVs
          this.filterCVs(); // Initial filter
        })
        .catch(error => {
          console.error('Error loading cvs.json:', error);
          // Handle error appropriately in UI, e.g., show a message
        });
    },
    filterCVs() {
      const filtered = this.cvs.filter(
        cv => cv.language === this.selectedLanguage && cv.version === this.selectedVersion
      );
      if (filtered.length > 0) {
        this.cvData = filtered[0];
        this.updateLabels();
        this.updateJSONLD();
      } else {
        // Reset cvData if no match is found to avoid displaying stale data
        this.cvData = {
          personal_info: { name: 'N/A', title: 'N/A', contact: {}, summary: 'No CV data found for selection.' },
          experience: [], education: [], skills: [], references: []
        };
        this.updateLabels(); // Update labels to show "N/A" or similar if needed
        this.clearJSONLD();
      }
    },
    updateLabels() {
      // Default to English labels if selected language is not found or cvData is empty
      let langLabels = {
        summary: 'Summary', experience: 'Experience', education: 'Education',
        skills: 'Skills', references: 'References', selectLanguage: 'Language', selectVersion: 'Version'
      };
      if (this.selectedLanguage === 'es') {
        langLabels = {
          summary: 'Resumen', experience: 'Experiencia', education: 'Educación',
          skills: 'Habilidades', references: 'Referencias', selectLanguage: 'Idioma', selectVersion: 'Versión'
        };
      } else if (this.selectedLanguage === 'fr') {
        langLabels = {
          summary: 'Résumé', experience: 'Expérience', education: 'Éducation',
          skills: 'Compétences', references: 'Références', selectLanguage: 'Langue', selectVersion: 'Version'
        };
      }
      this.labels = langLabels;
    },
    updateJSONLD() {
      if (!this.cvData || !this.cvData.personal_info || !this.cvData.personal_info.name) {
        this.clearJSONLD();
        return;
      }
      const cv = this.cvData;
      const jsonld = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": cv.personal_info.name,
        "jobTitle": cv.personal_info.title,
        "email": cv.personal_info.contact.email,
        "telephone": cv.personal_info.contact.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": cv.personal_info.contact.location
        },
        "url": cv.personal_info.contact.linkedin,
        "description": cv.personal_info.summary,
        "worksFor": (cv.experience || []).map(job => ({
          "@type": "Organization",
          "name": job.company,
          "jobTitle": job.role,
          "startDate": job.date_range ? job.date_range.split(' - ')[0] : '',
          "endDate": job.date_range ? (job.date_range.includes('Present') || job.date_range.includes('Presente') || job.date_range.includes('Présent') ? "Present" : job.date_range.split(' - ')[1]) : '',
          "description": (job.description || []).join(' ')
        })),
        "alumniOf": (cv.education || []).map(edu => ({
          "@type": "EducationalOrganization",
          "name": edu.institution,
          "degree": edu.degree,
          "startDate": edu.years ? edu.years.split('-')[0] : '',
          "endDate": edu.years ? edu.years.split('-')[1] : ''
        })),
        "skills": cv.skills || [],
        "references": (cv.references || []).map(ref => ({
          "@type": "Person",
          "name": ref.name,
          "jobTitle": ref.title,
          "worksFor": ref.company,
          "description": ref.content
        }))
      };
      const scriptTag = document.getElementById('jsonld-data');
      if (scriptTag) {
        scriptTag.textContent = JSON.stringify(jsonld, null, 2);
      }
    },
    clearJSONLD() {
      const scriptTag = document.getElementById('jsonld-data');
      if (scriptTag) {
        scriptTag.textContent = '';
      }
    },
    populateAvailableVersions() {
      const versions = this.cvs
        .filter(cv => cv.language === this.selectedLanguage)
        .map(cv => ({ version: cv.version, title: cv.personal_info.title }));
      
      const uniqueVersions = [];
      const versionSet = new Set();
      versions.forEach(v => {
        if (!versionSet.has(v.version)) {
          versionSet.add(v.version);
          uniqueVersions.push(v);
        }
      });
      this.availableVersions = uniqueVersions.sort((a, b) => a.version - b.version);

      if (!this.availableVersions.some(v => v.version === this.selectedVersion)) {
        this.selectedVersion = this.availableVersions.length ? this.availableVersions[0].version : 1; // Default to 1 if no versions
      }
    }
  },
  computed: {
    // currentRole was removed as it was not directly used in the template and cvData.personal_info.title is used instead.
    // If needed, it can be re-added:
    // currentRole() {
    //   const cv = this.cvs.find(cv => cv.language === this.selectedLanguage && cv.version === this.selectedVersion);
    //   return cv ? cv.personal_info.title : '';
    // }
  },
  watch: {
    selectedLanguage() {
      this.populateAvailableVersions();
      // filterCVs will be called by selectedVersion watcher if it changes, or directly if it doesn't
      // To ensure it's always called after language change:
      this.filterCVs(); 
    },
    selectedVersion() {
      this.filterCVs();
    }
  },
  mounted() {
    this.fetchCVs();
    // Initial label setup based on default language
    this.updateLabels(); 
  }
}
</script>

<style>
/* Styles moved from index.html */
.font-roboto {
  font-family: 'Roboto', sans-serif;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #4a4a4a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3b3b3b;
}

/* Card Effect for Sections */
.card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 10px;
  border-left: 4px solid #4b0082; /* Indigo was suggested, this is a deep purple */
}

/* Section Titles */
.section-title {
  font-family: 'Montserrat', sans-serif;
  color: #4b0082; /* Indigo */
  text-align: left;
  font-size: 1.25rem; /* Tailwind's text-xl */
  margin-bottom: 8px; /* Tailwind's mb-2 */
  font-weight: 600; /* Tailwind's font-semibold */
}

/* Overall Style Changes for a More Professional Look */
.text-primary {
  color: #4b0082; /* Indigo */
}

.contact-info {
  color: #4b0082; /* Indigo */
}

.card ul {
  margin-left: 1rem; /* Tailwind's ml-4 */
}

.skill-badge {
  background-color: #f3e8ff; /* Lighter shade of Indigo/Purple */
  color: #4b0082; /* Indigo */
  padding: 0.15rem 0.5rem;
  border-radius: 9999px; /* pill shape */
  font-size: 0.7rem; 
  margin-bottom: 4px; /* Tailwind's mb-1 */
}

/* Button Styles for a Consistent Color Theme */
.bg-primary-button {
  background-color: #4b0082; /* Indigo */
  color: white;
}

.bg-primary-button:hover {
  background-color: #3a006b; /* Darker Indigo */
}

/* Ensure body takes full viewport height for sticky footer if ever needed, and for scrollbar styling */
/* html, body {
  height: 100%;
  margin: 0;
} */

/* General body styling from original index.html, if not covered by Tailwind on body tag itself */
body {
  font-family: 'Montserrat', sans-serif; /* Already on body tag in index.html */
  color: #374151; /* text-gray-700, slightly different from original text-gray-800 */
  background-color: #f3f4f6; /* bg-gray-100 */
  margin: 0; /* Already on body tag in index.html */
  padding: 0; /* Already on body tag in index.html */
}
</style>
