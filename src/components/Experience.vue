<template>
  <section id="experiencia" class="py-24 bg-gray-50/80 dark:bg-dark-200/50 relative transition-colors duration-300">
    <div class="container-custom">
      <h2 class="section-title">Experiencia Profesional</h2>
      <p class="section-subtitle">Trayectoria y proyectos destacados</p>

      <div class="relative">
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

        <div v-for="(item, index) in experienceData" :key="index"
             class="relative mb-12 flex flex-col md:flex-row items-start md:items-center gap-8">
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ===== DATOS DIRECTOS (FALLBACK) =====
const experienceData = ref([
  {
    company: 'TechCorp Inc.',
    position: 'Senior Frontend Developer',
    period: '2023 - Presente',
    description: 'Liderando el desarrollo de aplicaciones Vue.js de misión crítica para clientes enterprise. Implementación de micro-frontends y optimización de rendimiento.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Pinia', 'Vitest']
  },
  {
    company: 'StartupX',
    position: 'Full Stack Developer',
    period: '2021 - 2023',
    description: 'Desarrollo full stack con Node.js y React para plataforma de análisis de datos en tiempo real. Arquitectura de microservicios y migración a la nube.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS']
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: '2020 - 2021',
    description: 'Desarrollo de proyectos web para diversos clientes, desde landing pages hasta aplicaciones completas. Enfoque en experiencia de usuario y diseño responsive.',
    technologies: ['Vue 2', 'Firebase', 'WordPress', 'SCSS', 'jQuery']
  }
])

onMounted(() => {
  console.log('💼 Experiencia cargada:', experienceData.value.length)
})
</script>

<style scoped>
/* Estilos adicionales */
</style>