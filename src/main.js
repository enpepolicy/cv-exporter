import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Import global CSS

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFilePdf, faFileImage, faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFilePdf, faFileImage, faEnvelope, faPhone, faMapMarkerAlt, faLinkedin, faExternalLinkAlt)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Register FontAwesomeIcon component globally

app.mount('#app')
