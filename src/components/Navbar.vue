<template>
  <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 
              transition-colors duration-300 dark:bg-dark-400/80 dark:backdrop-blur-glass 
              dark:border-glass-border">
    <div class="container-custom flex justify-between items-center h-20">
      <a href="home" class="text-2xl font-display font-bold">
        <span class="text-primary">&lt;</span>
        <span class="text-gradient">LuisProgramming</span>
        <span class="text-primary">/&gt;</span>
      </a>
      
      <div class="hidden md:flex items-center space-x-1">
        <a v-for="item in menuItems" :key="item.key" :href="'#' + item.key" 
           class="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors relative group
                  dark:text-gray-300">
          {{ item.label }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <!-- Selector de idioma -->
        <div class="ml-4 relative">
          <button @click="showLanguageMenu = !showLanguageMenu" 
                  class="p-2 rounded-lg bg-gray-100/50 hover:bg-gray-200/50 transition-all 
                         dark:glass-card dark:hover:border-primary flex items-center gap-2">
            <font-awesome-icon icon="globe" class="text-primary" />
            <span class="text-sm">{{ currentLocale === 'es' ? 'ES' : 'EN' }}</span>
          </button>
          <div v-if="showLanguageMenu" 
               class="absolute right-0 mt-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-2 min-w-[120px]
                      dark:glass-card dark:border-glass-border">
            <button @click="changeLanguage('es'); showLanguageMenu = false" 
                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 rounded-lg transition-colors
                           dark:hover:bg-glass"
                    :class="currentLocale === 'es' ? 'text-primary' : 'text-gray-600 dark:text-gray-300'">
              🇪🇸 Español
            </button>
            <button @click="changeLanguage('en'); showLanguageMenu = false" 
                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 rounded-lg transition-colors
                           dark:hover:bg-glass"
                    :class="currentLocale === 'en' ? 'text-primary' : 'text-gray-600 dark:text-gray-300'">
              🇬🇧 English
            </button>
          </div>
        </div>

        <!-- Botón tema -->
        <button @click="toggleTheme" class="ml-2 p-2 rounded-lg bg-gray-100/50 hover:bg-gray-200/50 transition-all
                                          dark:glass-card dark:hover:border-primary">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
      
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-2xl hover:text-primary transition-colors">
        <font-awesome-icon :icon="mobileMenuOpen ? 'times' : 'bars'" />
      </button>
    </div>
    
    <!-- Menú móvil -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-200/50 mx-4 mb-4 p-4 rounded-lg shadow-lg
                                      dark:glass-card dark:border-glass-border dark:mx-4">
      <div class="flex flex-col space-y-3">
        <a v-for="item in menuItems" :key="item.key" :href="'#' + item.key"
           class="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-all
                  dark:text-gray-300 dark:hover:bg-glass"
           @click="mobileMenuOpen = false">
          {{ item.label }}
        </a>
        <div class="border-t border-gray-200 dark:border-glass-border pt-3">
          <div class="flex gap-2">
            <button @click="changeLanguage('es')" 
                    class="flex-1 px-4 py-2 text-sm rounded-lg transition-all"
                    :class="currentLocale === 'es' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 dark:glass-card dark:text-gray-300'">
              🇪🇸 ES
            </button>
            <button @click="changeLanguage('en')" 
                    class="flex-1 px-4 py-2 text-sm rounded-lg transition-all"
                    :class="currentLocale === 'en' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 dark:glass-card dark:text-gray-300'">
              🇬🇧 EN
            </button>
          </div>
          <button @click="toggleTheme" class="w-full mt-2 px-4 py-2 text-left text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-all
                                             dark:text-gray-300 dark:hover:bg-glass">
            {{ isDark ? '☀️ ' + t('theme.light') : '🌙 ' + t('theme.dark') }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'
import { useLanguage } from '../composables/useLanguage'

const { t } = useI18n()
const { isDark, toggleTheme } = useTheme()
const { currentLocale, changeLanguage } = useLanguage()

const mobileMenuOpen = ref(false)
const showLanguageMenu = ref(false)

const menuItems = computed(() => [
  { key: 'inicio', label: t('nav.home') },
  { key: 'sobre mí', label: t('nav.about') },
  { key: 'experiencia', label: t('nav.experience') },
  { key: 'proyectos', label: t('nav.projects') },
  { key: 'habilidades', label: t('nav.skills') },
  { key: 'contacto', label: t('nav.contact') }
])
</script>