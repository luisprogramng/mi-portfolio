<template>
  <section id="proyectos" class="py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">{{ t('projects.title') }}</h2>
      <p class="section-subtitle">{{ t('projects.subtitle') }}</p>

      <div v-if="projectsList.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projectsList" :key="index"
             class="glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-neon">
          <div class="h-48 relative overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <font-awesome-icon :icon="project.icon" class="text-6xl text-primary group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary font-mono">
                <font-awesome-icon icon="star" class="mr-1" />
                {{ project.year }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-xl font-display font-bold text-gray-200 group-hover:text-primary transition-colors flex items-center gap-2">
                <font-awesome-icon icon="code" class="text-primary text-sm" />
                {{ project.title }}
              </h3>
            </div>
            <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech" class="tech-chip text-xs group-hover:border-primary transition-all duration-300">
                <font-awesome-icon icon="check" class="mr-1 text-primary text-[8px]" />
                {{ tech }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <a :href="project.link || '#'" target="_blank" 
                 class="text-sm text-primary hover:text-secondary transition-all duration-300 group-hover:translate-x-1 inline-block">
                {{ t('projects.view') || 'Ver proyecto' }} 
                <font-awesome-icon icon="arrow-right" class="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <span v-if="project.github" class="text-gray-500 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110 inline-block">
                <font-awesome-icon :icon="['fab', 'github']" />
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mensaje de carga o sin datos -->
      <div v-else class="text-center py-12">
        <div class="glass-card p-8">
          <font-awesome-icon icon="spinner" class="text-4xl text-primary animate-spin mb-4" />
          <p class="text-gray-400">Cargando proyectos...</p>
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
const projectsList = ref([])

// Datos por defecto
const defaultProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con gestión de inventario y pagos integrados.',
    technologies: ['Vue 3', 'Pinia', 'Stripe', 'Tailwind'],
    icon: 'shopping-cart',
    year: '2024',
    link: '#',
    github: true
  },
]

const icons = ['shopping-cart', 'chart-bar', 'robot', 'gamepad', 'mobile-alt', 'link']
const years = ['2024', '2023', '2024', '2023', '2024', '2023']

const loadProjects = () => {
  try {
    const items = t('projects.items')
    if (items && Array.isArray(items) && items.length > 0) {
      projectsList.value = items.map((item, index) => ({
        ...item,
        icon: icons[index % icons.length] || 'code',
        year: years[index % years.length] || '2024',
        link: '#',
        github: index % 2 === 0
      }))
    } else {
      projectsList.value = defaultProjects
    }
  } catch (error) {
    console.warn('Error loading projects:', error)
    projectsList.value = defaultProjects
  }
}

onMounted(() => {
  loadProjects()
})

watch(locale, () => {
  loadProjects()
})
</script>