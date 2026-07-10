<template>
  <footer class="border-t border-white/5 bg-dark-400 py-8">
    <div class="container-custom">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-primary font-bold">.Dev/</span>
          <span class="text-text-secondary text-sm">
            © 2026 Luis Albalat — {{ t('footer.rights') }}
          </span>
        </div>
        <div class="flex gap-6">
          <a href="#inicio" class="text-text-secondary text-sm hover:text-primary transition-colors">{{ t('nav.home') }}</a>
          <a href="#proyectos" class="text-text-secondary text-sm hover:text-primary transition-colors">{{ t('nav.projects') }}</a>
          <a href="#contacto" class="text-text-secondary text-sm hover:text-primary transition-colors">{{ t('nav.contact') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>