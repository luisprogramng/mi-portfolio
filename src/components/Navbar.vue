<template>
  <nav class="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
    <div class="container-custom flex justify-between items-center h-20">
      <!-- Logo -->
      <a href="#inicio" class="text-2xl font-bold text-white tracking-tight">
        <span class="text-primary">.</span>Dev<span class="text-primary">/</span>
      </a>
      
      <!-- Menú Desktop -->
      <div class="hidden md:flex items-center space-x-1">
        <a v-for="item in menuItems" :key="item.key" :href="'#' + item.key" 
           class="px-4 py-2 text-sm text-text-secondary hover:text-primary transition-colors relative group">
          {{ item.label }}
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <!-- Selector de idioma -->
        <div class="ml-4 relative">
          <button @click="showLanguageMenu = !showLanguageMenu" 
                  class="p-2 rounded-lg border border-glass-border hover:border-primary transition-all flex items-center gap-2 text-text-secondary hover:text-primary">
            <font-awesome-icon icon="globe" />
            <span class="text-sm">{{ currentLocale === 'es' ? 'ES' : 'EN' }}</span>
          </button>
          <div v-if="showLanguageMenu" 
               class="absolute right-0 mt-2 bg-dark-300 border border-glass-border rounded-lg shadow-card p-2 min-w-[120px]">
            <button @click="changeLanguage('es'); showLanguageMenu = false" 
                    class="w-full px-4 py-2 text-left text-sm hover:bg-dark-200 rounded-lg transition-colors"
                    :class="currentLocale === 'es' ? 'text-primary' : 'text-text-secondary'">
              🇪🇸 Español
            </button>
            <button @click="changeLanguage('en'); showLanguageMenu = false" 
                    class="w-full px-4 py-2 text-left text-sm hover:bg-dark-200 rounded-lg transition-colors"
                    :class="currentLocale === 'en' ? 'text-primary' : 'text-text-secondary'">
              🇬🇧 English
            </button>
          </div>
        </div>

        <!-- Botón tema -->
        <button @click="toggleTheme" class="ml-2 p-2 rounded-lg border border-glass-border hover:border-primary transition-all text-text-secondary hover:text-primary">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
      
      <!-- Menú móvil -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-2xl text-text-secondary hover:text-primary transition-colors">
        <font-awesome-icon :icon="mobileMenuOpen ? 'times' : 'bars'" />
      </button>
    </div>
    
    <!-- Menú móvil desplegado -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-dark-300 border-b border-glass-border p-4">
      <div class="flex flex-col space-y-3">
        <a v-for="item in menuItems" :key="item.key" :href="'#' + item.key"
           class="px-4 py-2 text-text-secondary hover:text-primary hover:bg-dark-200 rounded-lg transition-all"
           @click="mobileMenuOpen = false">
          {{ item.label }}
        </a>
        <div class="border-t border-glass-border pt-3 flex gap-2">
          <button @click="changeLanguage('es')" 
                  class="flex-1 px-4 py-2 text-sm rounded-lg transition-all"
                  :class="currentLocale === 'es' ? 'bg-primary text-dark-400' : 'border border-glass-border text-text-secondary hover:text-primary'">
            🇪🇸 ES
          </button>
          <button @click="changeLanguage('en')" 
                  class="flex-1 px-4 py-2 text-sm rounded-lg transition-all"
                  :class="currentLocale === 'en' ? 'bg-primary text-dark-400' : 'border border-glass-border text-text-secondary hover:text-primary'">
            🇬🇧 EN
          </button>
        </div>
        <button @click="toggleTheme" class="w-full px-4 py-2 text-left text-text-secondary hover:text-primary hover:bg-dark-200 rounded-lg transition-all">
          {{ isDark ? '☀️ ' + t('theme.light') : '🌙 ' + t('theme.dark') }}
        </button>
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
  { key: 'sobre-mi', label: t('nav.about') },
  { key: 'experiencia', label: t('nav.experience') },
  { key: 'proyectos', label: t('nav.projects') },
  { key: 'habilidades', label: t('nav.skills') },
  { key: 'contacto', label: t('nav.contact') }
])
</script>