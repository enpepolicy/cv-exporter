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
          <span class="mr-1">📄</span> Export to PDF
        </button>
        <button @click="exportImage"
          class="bg-primary-button px-3 py-1 rounded-md transition duration-300 flex items-center shadow">
          <span class="mr-1">🖼️</span> Export to Image
        </button>
      </div>
    </div>

    <!-- CV Content -->
    <div id="cv-content" class="overflow-hidden">
      <!-- Header -->
      <header class="text-center pb-3 mb-5">
        <h1 class="text-primary text-3xl font-semibold">{{ cvData.personal_info.name }}</h1>
        <h2 class="text-gray-600 text-lg mt-1">{{ cvData.personal_info.title }}</h2>
        <div class="contact mt-3 text-sm contact-info">
          <p class="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-sm contact-info">
            <span class="inline-flex items-center">
              <span class="mr-2">📧</span>
              <a :href="'mailto:' + cvData.personal_info.contact.email" class="hover:underline">
                {{ cvData.personal_info.contact.email }}
              </a>
            </span>
            <span class="mx-3">|</span>
            <span class="inline-flex items-center">
              <span class="mr-2">📞</span>
              <a :href="'tel:' + cvData.personal_info.contact.phone" class="hover:underline">
                {{ cvData.personal_info.contact.phone }}
              </a>
            </span>
            <span class="mx-3">|</span>
            <span class="inline-flex items-center">
              <span class="mr-2">📍</span>
              <span>{{ cvData.personal_info.contact.location }}</span>
            </span>
          </p>
          <p class="flex justify-center items-center space-x-2 mt-2">
            <span class="inline-flex items-center">
              <span class="mr-2">💼</span>
              <a :href="cvData.personal_info.contact.linkedin" target="_blank" class="hover:underline">
                Linkedin
              </a>
            </span>
          </p>
        </div>
      </header>

      <!-- Experience - Moved to the top for prominence -->
      <section class="experience card" v-if="cvData.experience && cvData.experience.length">
        <h2 class="section-title">{{ labels.experience }}</h2>
        <ul class="space-y-3">
          <li v-for="(job, index) in cvData.experience" class="pb-2 break-inside-avoid" :key="index">
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-semibold text-gray-800 min-w-0">{{ job.role }}</h3>
              <span class="text-gray-500 italic text-sm text-right ml-2 flex-shrink-0">{{ job.date_range }}</span>
            </div>
            <p class="text-gray-600 mt-1 text-sm"><strong class="inline-flex items-center">
                <a v-if="job.external" :href="job.external" target="_blank"
                  class="text-xs text-primary-button hover:text-opacity-90 inline-flex items-center align-middle">
                  <span class="mr-1">↗️</span>
                </a>
                {{ job.company }}</strong> - {{ job.location }}
            </p>
            <ul class="list-disc list-inside text-gray-600 mt-2 text-[0.82rem] leading-normal">
              <li v-for="(desc, i) in job.description" :key="i" class="break-inside-avoid">{{ desc }}</li>
            </ul>
          </li>
        </ul>
      </section>

      <!-- Summary -->
      <section class="summary card" v-if="cvData.personal_info && cvData.personal_info.summary">
        <h2 class="section-title">{{ labels.summary }}</h2>
        <p class="text-justify text-sm leading-relaxed">{{ cvData.personal_info.summary }}</p>
      </section>

      <!-- Education -->
      <section class="education card" v-if="cvData.education && cvData.education.length">
        <h2 class="section-title">{{ labels.education }}</h2>
        <ul class="space-y-3">
          <li v-for="(edu, index) in cvData.education" :key="index" class="break-inside-avoid">
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-semibold text-gray-800 min-w-0">{{ edu.degree }}</h3>
              <span class="text-gray-500 italic text-sm text-right ml-2 flex-shrink-0">{{ edu.years }}</span>
            </div>
            <p class="text-gray-600 text-sm">{{ edu.institution }}</p>
          </li>
        </ul>
      </section>

      <!-- Skills - Grouped into Categories for Better Clarity -->
      <section class="skills card" v-if="cvData.skills && cvData.skills.length">
        <h2 class="section-title">{{ labels.skills }}</h2>
        <div class="flex flex-wrap gap-2">
          <div class="skill-badge items-center break-words align-middle h-7" v-for="(skill, index) in cvData.skills" :key="index">
            {{ skill }}
          </div>
        </div>
      </section>

      <!-- References - Moved to the Bottom as an Optional Section -->
      <section class="references card break-inside-avoid" v-if="cvData.references && cvData.references.length">
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
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import rawCvsData from './cvs.json'; // Import the JSON data

export default {
  data() {
    return {
      cvs: [],
      selectedLanguage: 'en',
      selectedVersion: '',
      availableVersions: [],
      cvData: {
        personal_info: { name: '', title: '', summary: '', contact: { email: '', phone: '', location: '', linkedin: '' } },
        experience: [],
        education: [],
        skills: [],
        references: [],
        labels: {}
      },
      languages: {
        en: 'English',
        es: 'Español',
        fr: 'Français'
      },
      labels: { // Default labels, will be updated
        selectLanguage: 'Select Language',
        selectVersion: 'Select Version',
        experience: 'Experience',
        summary: 'Summary',
        education: 'Education',
        skills: 'Skills',
        references: 'References'
      }
    };
  },
  computed: {
    currentCV() {
      if (!this.cvs || !this.cvs.length) return null; // Check if cvs itself is defined
      const langCvs = this.cvs.find(cv => cv.language === this.selectedLanguage);
      // Add checks for langCvs and langCvs.versions
      if (!langCvs || !langCvs.versions || !langCvs.versions.length) return null;
      return langCvs.versions.find(v => v.version === this.selectedVersion) || langCvs.versions[0];
    }
  },
  watch: {
    selectedLanguage() {
      this.populateAvailableVersions();
      this.filterCVs();
    },
    currentCV(newVal) {
      if (newVal) {
        this.cvData = { ...this.cvData, ...newVal.data };
        this.updateLabels(newVal.data.labels);
        this.updateJSONLD(newVal.data);
        document.title = `${newVal.data.personal_info.name} - ${newVal.data.personal_info.title}`;
      }
    }
  },
  methods: {
    processCVs() {
      try {
        // Transform the flat rawCvsData into the nested structure
        const transformedCvs = [];
        const languages = [...new Set(rawCvsData.map(item => item.language))]; // Get unique languages

        languages.forEach(lang => {
          const langVersions = rawCvsData
            .filter(item => item.language === lang)
            .map(item => {
              // The item itself is a version, structure it into { version: ..., data: ... }
              // We need a unique 'version' key for the dropdown, let's use item.id or generate one
              // For now, let's assume item.version is a simple number like 1, 2, 3 for each language.
              // We'll use item.id as the unique key for the version property.
              // The 'data' will be the rest of the item.
              // We also need to ensure 'labels' are part of the 'data' object if they exist.
              // The original structure had labels inside data, e.g. item.personal_info.labels
              // Let's assume labels are at the root of each version for now, or we can adjust.
              // For simplicity, we'll pass the whole item as 'data' for now.
              // The original expected structure was: { version: "versionKey", data: { personal_info: ..., labels: ... } }
              // Let's make sure the 'data' property contains all necessary fields.
              // The 'version' property in the transformed structure should be a unique identifier for that version within that language.
              // We can use the original 'id' field (e.g., "en-1") as this unique version key.
              
              // Create a deep copy of the item to avoid modifying the original rawCvsData
              const versionData = JSON.parse(JSON.stringify(item));
              // Remove language and id from the data part as they are now part of the higher structure
              delete versionData.language;
              // delete versionData.id; // Keep id as the version key
              // delete versionData.version; // Keep original version number if needed, or use id

              return {
                version: item.id, // Use the original 'id' as the unique version key
                data: versionData // The rest of the item is the data for this version
              };
            });

          if (langVersions.length > 0) {
            transformedCvs.push({
              language: lang,
              versions: langVersions
            });
          }
        });

        this.cvs = transformedCvs;
        this.populateAvailableVersions();
        this.filterCVs(); // Initial filter
      } catch (error) {
        console.error("Failed to process CVs:", error);
        this.cvData.personal_info.name = "Error loading CV data";
      }
    },
    populateAvailableVersions() {
      if (!this.cvs || this.cvs.length === 0) { // Guard against undefined or empty this.cvs
        this.availableVersions = [];
        this.selectedVersion = '';
        return;
      }
      const langCvs = this.cvs.find(cv => cv.language === this.selectedLanguage);
      // Add checks for langCvs and langCvs.versions
      if (langCvs && langCvs.versions && langCvs.versions.length > 0) {
        this.availableVersions = langCvs.versions.map(v => ({ version: v.version, title: v.data.personal_info.title || v.version }));
        // This inner check for this.availableVersions.length > 0 is fine
        if (this.availableVersions.length > 0) {
          // Try to keep the selected version if it exists in the new list, otherwise default to the first
          const currentSelectedExists = this.availableVersions.some(v => v.version === this.selectedVersion);
          if (!currentSelectedExists || !this.selectedVersion) {
            this.selectedVersion = this.availableVersions[0].version;
          }
        } else {
          this.selectedVersion = '';
        }
      } else {
        this.availableVersions = [];
        this.selectedVersion = '';
      }
    },
    filterCVs() {
      if (this.currentCV) {
        this.cvData = { ...this.currentCV.data }; // Ensure all parts of cvData are updated
        this.updateLabels(this.currentCV.data.labels);
        this.updateJSONLD(this.currentCV.data);
        document.title = `${this.cvData.personal_info.name} - ${this.cvData.personal_info.title}`;
      } else {
        // Reset or show placeholder if no CV matches
        this.cvData = { personal_info: { name: 'N/A', title: 'N/A', summary: '', contact: {} }, experience: [], education: [], skills: [], references: [], labels: {} };
        this.updateLabels(this.labels); // Reset to default labels
      }
    },
    updateLabels(newLabels) {
      if (newLabels) {
        this.labels = { ...this.labels, ...newLabels };
      }
    },
    updateJSONLD(cvData) {
      const jsonLdScript = document.getElementById('jsonld-data');
      if (jsonLdScript && cvData && cvData.personal_info) {
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": cvData.personal_info.name,
          "jobTitle": cvData.personal_info.title,
          "email": `mailto:${cvData.personal_info.contact.email}`,
          "telephone": cvData.personal_info.contact.phone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": cvData.personal_info.contact.location ? cvData.personal_info.contact.location.split(',')[0].trim() : "",
            "addressCountry": cvData.personal_info.contact.location ? cvData.personal_info.contact.location.split(',').pop().trim() : ""
          },
          "url": window.location.href,
          "sameAs": [cvData.personal_info.contact.linkedin].filter(Boolean),
          "description": cvData.personal_info.summary,
          "knowsAbout": cvData.skills || [],
          "alumniOf": cvData.education ? cvData.education.map(edu => ({ "@type": "EducationalOrganization", "name": edu.institution })) : [],
          "hasOccupation": cvData.experience ? cvData.experience.map(exp => ({
            "@type": "Occupation",
            "occupationLocation": {
              "@type": "Place",
              "name": exp.location
            },
            "name": exp.role,
            "description": exp.description.join(' '),
            "worksFor": {
              "@type": "Organization",
              "name": exp.company
            },
            "startDate": exp.date_range ? exp.date_range.split(' - ')[0] : undefined,
            "endDate": exp.date_range && exp.date_range.split(' - ')[1] !== 'Present' ? exp.date_range.split(' - ')[1] : undefined
          })) : []
        };
        jsonLdScript.textContent = JSON.stringify(structuredData, null, 2);
      }
    },
    exportPDF() {
      const element = document.getElementById('cv-content');
      const opt = {
        margin: [0.5, 0.2, 0.5, 0.2], // top, left, bottom, right (inches)
        filename: `${this.cvData.personal_info.name}_CV_${this.selectedLanguage}_${this.selectedVersion}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, logging: false, useCORS: true, letterRendering: true, scrollY: 0 }, // Increased scale for better quality
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
    },
    exportImage() {
      const element = document.getElementById('cv-content');
      html2canvas(element, {
        scale: 3, // Higher scale for better resolution
        logging: false,
        useCORS: true,
        letterRendering: true,
        scrollY: -window.scrollY // Ensure it captures from the top
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${this.cvData.personal_info.name}_CV_${this.selectedLanguage}_${this.selectedVersion}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  },
  created() {
    this.processCVs(); // Call the new processing method
  }
};
</script>