<template>
  <section id="inicio" class="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <!-- Fondo decorativo -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" 
           style="animation-delay: 2s"></div>
    </div>

    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 left-1/2 -translate-x-1/2 select-none">DEV</div>

    <div class="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6 animate-slide-up">
        <!-- Saludo -->
        <div class="flex items-center gap-4">
          <span class="status-dot"></span>
          <span class="text-sm text-primary font-medium">{{ t('hero.available') }}</span>
        </div>
        
        <!-- Título principal -->
        <div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            <span class="text-text-secondary">{{ t('hero.greeting') }}</span><br>
            <span class="text-white">Luis</span><br>
            <span class="text-primary">Albalat</span>
          </h1>
          <div class="mt-4 text-xl text-text-secondary">
            {{ t('hero.title') }}
          </div>
        </div>

        <!-- Descripción -->
        <p class="text-text-secondary max-w-lg leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <!-- Botones -->
        <div class="flex flex-wrap gap-4">
          <a href="#contacto" class="btn-primary">
            {{ t('hero.cta_contact') }}
            <font-awesome-icon icon="arrow-right" class="ml-2" />
          </a>
          <a href="#proyectos" class="btn-outline">
            {{ t('hero.cta_projects') }}
          </a>
        </div>

        <!-- Stats -->
        <div class="flex gap-8 pt-4 border-t border-white/5">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-2xl font-bold text-primary">{{ stat.value }}</div>
            <div class="text-xs text-text-secondary">{{ t(`hero.${stat.key}`) }}</div>
          </div>
        </div>
      </div>

      <!-- Avatar -->
      <div class="flex justify-center animate-float">
        <div class="relative group">
          <div class="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary via-[#f5c842] to-primary p-1 shadow-gold group-hover:shadow-gold-strong transition-all duration-500">
            <div class="w-full h-full rounded-full bg-dark-400 overflow-hidden">
              <img 
                src="/src/assets/profile.png" 
                alt="Luis Albalat"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div class="absolute -inset-4 rounded-full border border-primary/10 animate-pulse"></div>
          <div class="absolute -inset-8 rounded-full border border-primary/5 animate-pulse" style="animation-delay: 1s"></div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-text-secondary tracking-widest">{{ t('hero.scroll') }}</span>
      <div class="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center relative overflow-hidden">
        <div class="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = [
  { value: '3+', key: 'years' },
  { value: '20+', key: 'projects_count' },
  { value: '10+', key: 'clients' }
]
</script>

<style scoped>
@keyframes scroll-dot {
  0% { transform: translateY(-4px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(16px); opacity: 0; }
}

.animate-scroll-dot {
  animation: scroll-dot 1.5s ease-in-out infinite;
}
</style>