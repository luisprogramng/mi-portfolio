<template>
  <footer class="border-t border-gray-200 dark:border-glass-border bg-white/80 dark:bg-dark-400 transition-colors duration-300">
    <div class="container-custom py-12">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-2">
          <font-awesome-icon icon="code" class="text-primary" />
          <span class="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Dev Portfolio — {{ t('footer.built') }}
            <span class="text-primary">Vue 3</span> {{ t('footer.and') }} 
            <span class="text-secondary">Tailwind</span>
          </span>
        </div>
        
        <div class="flex gap-6">
          <a v-for="link in footerLinks" :key="link.key" :href="'#' + link.key"
             class="text-sm text-gray-500 hover:text-primary transition-colors dark:text-gray-400">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const footerLinks = computed(() => [
  { key: 'inicio', label: t('nav.home') },
  { key: 'proyectos', label: t('nav.projects') },
  { key: 'contacto', label: t('nav.contact') }
])
</script>