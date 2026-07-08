import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()
  const currentLocale = ref(locale.value || 'es')
  
  const changeLanguage = (lang) => {
    if (lang === 'es' || lang === 'en') {
      currentLocale.value = lang
      locale.value = lang
      localStorage.setItem('locale', lang)
    }
  }

  const loadLanguage = () => {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      currentLocale.value = savedLocale
      locale.value = savedLocale
    }
  }

  loadLanguage()

  return {
    currentLocale,
    changeLanguage,
    loadLanguage
  }
}