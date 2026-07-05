import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faCode, faUser, faBriefcase, faProjectDiagram, faCogs, faEnvelope,
  faArrowRight, faPaperPlane, faCheck, faLocationDot, faPhone,
  faClock, faShoppingCart, faChartBar, faRobot, faGamepad,
  faMobileAlt, faLink, faBars, faTimes, faGlobe, faArrowUp,
  faSpinner, faCheckCircle, faExclamationCircle, faRocket,
  faLaptopCode, faBrain, faUsers, faChartLine, faDatabase,
  faServer, faCloud, faShieldAlt, faTools, faPalette,
  faGear, faLightbulb, faStar, faAward, faGraduationCap,
  faSyncAlt, faCodeBranch, faFilePdf, faClipboardList,
  faCalendar, faShippingFast, faCircleInfo, faComment
} from '@fortawesome/free-solid-svg-icons'

import { 
  faGithub, faLinkedin, faTwitter, faYoutube, faWhatsapp,
  faVuejs, faReact, faNodeJs, faPython, faDocker,
  faGitAlt, faFigma, faJs, faHtml5, faCss3Alt
} from '@fortawesome/free-brands-svg-icons'

// Importar traducciones
import es from './locales/es.json'
import en from './locales/en.json'

// Agregar iconos
library.add(
  faCode, faUser, faBriefcase, faProjectDiagram, faCogs, faEnvelope,
  faArrowRight, faPaperPlane, faCheck, faLocationDot, faPhone,
  faClock, faShoppingCart, faChartBar, faRobot, faGamepad,
  faMobileAlt, faLink, faBars, faTimes, faGlobe, faArrowUp,
  faSpinner, faCheckCircle, faExclamationCircle, faRocket,
  faLaptopCode, faBrain, faUsers, faChartLine, faDatabase,
  faServer, faCloud, faShieldAlt, faTools, faPalette,
  faGear, faLightbulb, faStar, faAward, faGraduationCap,
  faSyncAlt, faCodeBranch, faFilePdf, faClipboardList,
  faCalendar, faShippingFast, faCircleInfo, faComment,
  faGithub, faLinkedin, faTwitter, faYoutube, faWhatsapp,
  faVuejs, faReact, faNodeJs, faPython, faDocker,
  faGitAlt, faFigma, faJs, faHtml5, faCss3Alt
)

// Configurar i18n
const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es,
    en
  },
  globalInjection: true,
  warnHtmlMessage: false
})

const app = createApp(App)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')