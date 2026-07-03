import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()
  const currentLocale = ref('es')
  
  const changeLanguage = (lang) => {
    if (lang === 'es' || lang === 'en') {
      currentLocale.value = lang
      locale.value = lang
      localStorage.setItem('locale', lang)
      // No recargamos la página, los cambios son reactivos
    }
  }

  const loadLanguage = () => {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      currentLocale.value = savedLocale
      locale.value = savedLocale
    }
  }

  // Cargar idioma guardado
  loadLanguage()

  // Guardar cambios en localStorage cuando cambie el idioma
  watch(locale, (newLocale) => {
    if (newLocale === 'es' || newLocale === 'en') {
      localStorage.setItem('locale', newLocale)
      currentLocale.value = newLocale
    }
  })

  return {
    currentLocale,
    changeLanguage,
    loadLanguage
  }
}