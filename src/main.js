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
  faCogs, 
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
  faExclamationCircle, 
  faRocket,
  faLaptopCode, 
  faBrain, 
  faUsers, 
  faChartLine, 
  faDatabase,
  faServer, 
  faCloud, 
  faShieldAlt, 
  faTools, 
  faPalette,
  faGear, 
  faLightbulb, 
  faStar, 
  faAward, 
  faGraduationCap,
  faSyncAlt, 
  faCodeBranch, 
  faFilePdf, 
  faClipboardList,
  faCalendar, 
  faShippingFast, 
  faCircleInfo, 
  faComment,
  faChevronDown,
  faUserTie,
  faSearch,
  faFilter,
  faInfoCircle,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'

// ===== ICONOS BRANDS =====
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
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons'

// ===== TRADUCCIONES =====
import es from './locales/es.json'
import en from './locales/en.json'

// ===== AGREGAR TODOS LOS ICONOS A LA LIBRERÍA =====
library.add(
  // Solid
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
  faChevronDown, faUserTie, faSearch, faFilter,  faInfoCircle,
  faExternalLinkAlt,
  // Brands
  faGithub, faLinkedin, faTwitter, faYoutube, faWhatsapp,
  faVuejs, faReact, faNodeJs, faPython, faDocker,
  faGitAlt, faFigma, faJs, faHtml5, faCss3Alt
)

// ===== CONFIGURAR I18N =====
const i18n = createI18n({
  legacy: false,
  locale: 'es', // idioma por defecto
  fallbackLocale: 'en',
  messages: {
    es,
    en
  },
  globalInjection: true, // Permite usar $t en templates
  warnHtmlMessage: false
})

// ===== CREAR APP =====
const app = createApp(App)

// ===== USAR PLUGINS =====
app.use(i18n)

// ===== REGISTRAR COMPONENTE FONTAWESOME =====
app.component('font-awesome-icon', FontAwesomeIcon)

// ===== MONTAR APP =====
app.mount('#app')

// ===== CONSOLA DE BIENVENIDA =====
console.log('🚀 Portfolio de Luis Albalat')
console.log('📦 Versión:', '1.0.0')
console.log('🌍 Idiomas disponibles: Español 🇪🇸, English 🇬🇧')
console.log('✨ Modo oscuro activado por defecto')