import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

// ===== FONTAWESOME =====
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ===== ICONOS SOLID =====
import { 
  faCode, 
  faUser, 
  faBriefcase, 
  faProjectDiagram, 
  faEnvelope,
  faArrowRight, 
  faPaperPlane, 
  faCheck, 
  faLocationDot, 
  faPhone,
  faClock, 
  faShoppingCart, 
  faChartBar, 
  faRobot, 
  faGamepad,
  faMobileAlt, 
  faLink, 
  faBars, 
  faTimes, 
  faGlobe, 
  faArrowUp,
  faSpinner, 
  faCheckCircle, 
  faRocket,
  faLaptopCode, 
  faBrain, 
  faUsers, 
  faDatabase,
  faServer, 
  faCloud, 
  faTools, 
  faGear, 
  faStar, 
  faAward, 
  faGraduationCap,
  faFilePdf, 
  faCalendar, 
  faShippingFast, 
  faCircleInfo, 
  faComment,
  faChevronDown,
  faUserTie,
  faFire,
  faInfoCircle,
  faExternalLinkAlt,
  faArrowLeft,
  faCogs
} from '@fortawesome/free-solid-svg-icons'

// ===== ICONOS BRANDS (SOLO LOS QUE EXISTEN) =====
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faYoutube, 
  faWhatsapp,
  faVuejs, 
  faReact, 
  faNodeJs, 
  faPython, 
  faDocker,
  faGitAlt, 
  faFigma, 
  faJs, 
  faHtml5, 
  faCss3Alt,
  faAngular,
  faJava,
  faAws,
  faPhp,
  faWordpress,
  faLaravel,
  faSymfony,
  faNpm,
  faYarn,
  faLinux,
  faUbuntu,
  faDebian,
  faFedora,
  faCentos,
  faApple,
  faWindows,
  faAndroid,
  faChrome,
  faFirefox,
  faSafari,
  faEdge,
  faSlack,
  faDiscord,
  faTelegram,
  faMedium,
  faDev,
  faHashnode,
  faStackOverflow,
  faGit,
  faGithubAlt,
  faBitbucket,
  faGitlab,
  faTrello,
  faJira
} from '@fortawesome/free-brands-svg-icons'

// ===== TRADUCCIONES =====
import es from './locales/es.json'
import en from './locales/en.json'

// ===== AGREGAR ICONOS A LA LIBRERÍA =====
library.add(
  // Solid
  faCode, faUser, faBriefcase, faProjectDiagram, faEnvelope,
  faArrowRight, faPaperPlane, faCheck, faLocationDot, faPhone,
  faClock, faShoppingCart, faChartBar, faRobot, faGamepad,
  faMobileAlt, faLink, faBars, faTimes, faGlobe, faArrowUp,
  faSpinner, faCheckCircle, faRocket,
  faLaptopCode, faBrain, faUsers, faDatabase,
  faServer, faCloud, faTools, faGear, faStar, faAward, faGraduationCap,
  faFilePdf, faCalendar, faShippingFast, faCircleInfo, faComment,
  faChevronDown, faUserTie, faFire, faInfoCircle, faExternalLinkAlt,
  faArrowLeft, faCogs,
  
  // Brands
  faGithub, faLinkedin, faTwitter, faYoutube, faWhatsapp,
  faVuejs, faReact, faNodeJs, faPython, faDocker,
  faGitAlt, faFigma, faJs, faHtml5, faCss3Alt,
  faAngular, faJava, faAws,
  faPhp, faWordpress, faLaravel, faSymfony,
  faNpm, faYarn,
  faLinux, faUbuntu, faDebian, faFedora, faCentos,
  faApple, faWindows, faAndroid,
  faChrome, faFirefox, faSafari, faEdge,
  faSlack, faDiscord, faTelegram,
  faMedium, faDev, faHashnode, faStackOverflow,
  faGit, faGithubAlt, faBitbucket, faGitlab,
  faTrello, faJira
)

// ===== CONFIGURAR I18N =====
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

// ===== CREAR APP =====
const app = createApp(App)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

console.log('🚀 Portfolio de Luis Albalat')
console.log('🌍 Idiomas: Español 🇪🇸, English 🇬🇧')