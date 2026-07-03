<template>
  <section id="inicio" class="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <!-- Fondo animado -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" 
           style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8 animate-slide-up">
        <div class="flex items-center gap-4">
          <span class="status-dot"></span>
          <span class="text-sm text-primary font-medium flex items-center gap-2">
            <font-awesome-icon icon="check-circle" class="text-primary" />
            {{ t('hero.available') }}
          </span>
        </div>
        
        <div>
          <h1 class="text-5xl md:text-7xl font-display font-bold leading-tight">
            <span class="text-gray-700 dark:text-gray-300">{{ t('hero.greeting') }}</span><br>
            <span class="text-gradient glow-text">Luis Albalat</span>
          </h1>
          <div class="mt-4 text-xl text-primary flex items-center gap-2">
            <span class="text-gray-400">//</span>
            <span class="typing-effect">{{ t('hero.title') }}</span>
          </div>
        </div>

        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#proyectos" class="btn-primary group">
            {{ t('hero.cta_projects') }}
            <font-awesome-icon icon="arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contacto" class="btn-outline group">
            {{ t('hero.cta_contact') }}
          </a>
          
          <button @click="downloadCV" 
                  :disabled="isGenerating"
                  class="px-6 py-3 border-2 border-secondary text-secondary rounded-lg font-medium 
                         transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-neon hover:scale-105
                         flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            <font-awesome-icon :icon="isGenerating ? 'spinner' : 'file-pdf'" 
                               :class="isGenerating ? 'animate-spin' : ''" />
            {{ isGenerating ? 'Generando...' : 'Descargar CV' }}
          </button>
        </div>

        <div class="flex gap-8 pt-4 border-t border-gray-200 dark:border-glass-border">
          <div v-for="stat in stats" :key="stat.label" class="text-center group hover:scale-110 transition-transform duration-300">
            <div class="text-2xl font-bold text-primary flex items-center justify-center gap-2">
              <font-awesome-icon :icon="stat.icon" class="text-sm" />
              {{ stat.value }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-500">{{ stat.label }}</div>
          </div>
        </div>

        <div class="flex gap-4 text-2xl">
          <a href="#" target="_blank" class="text-gray-400 hover:text-primary transition-all hover:scale-110 duration-300 inline-block">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="#" target="_blank" class="text-gray-400 hover:text-primary transition-all hover:scale-110 duration-300 inline-block">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a href="#" target="_blank" class="text-gray-400 hover:text-primary transition-all hover:scale-110 duration-300 inline-block">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="#" target="_blank" class="text-gray-400 hover:text-primary transition-all hover:scale-110 duration-300 inline-block">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </div>
      </div>

      <!-- Avatar con foto de perfil -->
      <div class="flex justify-center animate-float">
        <div class="relative group">
          <div class="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 group-hover:scale-105 transition-transform duration-500">
            <div class="w-full h-full rounded-full bg-white dark:bg-dark-400 overflow-hidden transition-colors duration-300 relative">
              <img 
                src="/src/assets/profile.png" 
                alt="Luis Albalat - Desarrollador Full Stack"
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
          </div>
          
          <div class="absolute -inset-4 rounded-full border border-primary/20 animate-pulse"></div>
          <div class="absolute -inset-8 rounded-full border border-secondary/10 animate-pulse" style="animation-delay: 1s"></div>
          
          <div class="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm text-primary animate-float hover:scale-110 transition-transform duration-300" 
               style="animation-delay: 1s">
            <font-awesome-icon :icon="['fab', 'vuejs']" class="mr-2" />
            Vue 3
          </div>
          <div class="absolute -bottom-4 -left-4 glass-card px-4 py-2 text-sm text-secondary animate-float hover:scale-110 transition-transform duration-300" 
               style="animation-delay: 2s">
            <font-awesome-icon icon="code" class="mr-2" />
            Full Stack
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-gray-400 dark:text-gray-500">{{ t('hero.scroll') }}</span>
      <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center relative overflow-hidden">
        <div class="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-dot"></div>
      </div>
    </div>

    <!-- Generador de CV -->
    <CVGenerator ref="cvGeneratorRef" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CVGenerator from './CVGenerator.vue'

const { t } = useI18n()
const cvGeneratorRef = ref(null)
const isGenerating = ref(false)

const stats = [
  { value: '3+', label: 'Años', icon: 'award' },
  { value: '20+', label: 'Proyectos', icon: 'project-diagram' },
  { value: '10+', label: 'Clientes', icon: 'users' }
]

const downloadCV = async () => {
  if (cvGeneratorRef.value && !isGenerating.value) {
    isGenerating.value = true
    await cvGeneratorRef.value.generateCV()
    isGenerating.value = false
  }
}
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

.typing-effect {
  display: inline-block;
  border-right: 2px solid #00D4FF;
  animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
  overflow: hidden;
  white-space: nowrap;
  max-width: fit-content;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: #00D4FF }
}
</style>