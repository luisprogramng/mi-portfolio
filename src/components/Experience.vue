<template>
  <section id="experiencia" class="py-24 bg-gray-50/80 dark:bg-dark-200/50 relative transition-colors duration-300">
    <div class="container-custom">
      <h2 class="section-title">{{ t('experience.title') }}</h2>
      <p class="section-subtitle">{{ t('experience.subtitle') }}</p>

      <div class="relative" v-if="experienceItems.length > 0">
        <!-- Línea de tiempo central -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

        <div v-for="(item, index) in experienceItems" :key="index"
             class="relative mb-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <!-- Punto central -->
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-neon 
                      flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          <div :class="[
            'glass-card p-6 w-full md:w-5/12 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1',
            index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
          ]">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-xl font-display font-bold text-gradient flex items-center gap-2">
                <font-awesome-icon icon="briefcase" class="text-primary text-sm" />
                {{ item.company }}
              </h3>
              <span class="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                <font-awesome-icon icon="clock" class="mr-1" />
                {{ item.period }}
              </span>
            </div>
            <p class="text-sm text-secondary font-medium mb-3 flex items-center gap-2">
              <font-awesome-icon icon="user" class="text-xs" />
              {{ item.position }}
            </p>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{{ item.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in item.technologies" :key="tech" class="tech-chip text-xs group hover:scale-105 transition-all duration-300">
                <font-awesome-icon icon="code" class="mr-1 text-primary" />
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mensaje de carga o sin datos -->
      <div v-else class="text-center py-12">
        <div class="glass-card p-8">
          <font-awesome-icon icon="spinner" class="text-4xl text-primary animate-spin mb-4" />
          <p class="text-gray-400">Cargando experiencia...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Estado
const experienceItems = ref([])

// Datos por defecto (fallback)
const defaultExperience = [
  {
    company: 'TechCorp Inc.',
    position: 'Senior Frontend Developer',
    period: '2023 - Presente',
    description: 'Liderando el desarrollo de aplicaciones Vue.js de misión crítica para clientes enterprise.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Pinia']
  }
]

// Función para cargar datos
const loadExperience = () => {
  try {
    const items = t('experience.items')
    if (items && Array.isArray(items) && items.length > 0) {
      experienceItems.value = items
    } else {
      experienceItems.value = defaultExperience
    }
  } catch (error) {
    console.warn('Error loading experience:', error)
    experienceItems.value = defaultExperience
  }
}

// Cargar al montar
onMounted(() => {
  loadExperience()
})

// Recargar cuando cambie el idioma
watch(locale, () => {
  loadExperience()
})
</script>