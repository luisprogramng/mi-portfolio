<template>
  <section id="proyectos" class="py-24 bg-dark-300/50 relative overflow-hidden">
    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 left-0 -translate-x-1/3 select-none">PROJECTS</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">{{ t('projects.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('projects.subtitle') }}</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in projectsData" :key="index"
             class="glass-card overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-gold">
          <div class="h-48 relative overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <font-awesome-icon :icon="project.icon || 'code'" class="text-5xl text-primary/50 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div v-if="project.featured" class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-primary text-dark-400 text-xs font-bold rounded-full">{{ t('projects.featured') }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-text-secondary text-sm mt-2 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech" class="tech-chip text-xs">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projectsData = ref([
  {
    title: 'FastShip - Plataforma de Envíos',
    description: 'Plataforma completa para gestión de envíos con seguimiento en tiempo real.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Socket.io'],
    icon: 'shipping-fast',
    featured: true
  },
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con gestión de inventario y pagos integrados.',
    technologies: ['Vue 3', 'Pinia', 'Stripe', 'Tailwind'],
    icon: 'shopping-cart'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo con visualización de datos en tiempo real.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Firebase'],
    icon: 'chart-bar'
  },
  {
    title: 'AI Chat Interface',
    description: 'Interfaz conversacional con IA, integrando modelos de lenguaje avanzados.',
    technologies: ['Vue 3', 'OpenAI', 'WebSocket', 'TypeScript'],
    icon: 'robot'
  },
  {
    title: 'Game Portfolio',
    description: 'Portfolio interactivo con elementos gamificados y animaciones 3D.',
    technologies: ['Three.js', 'Vue 3', 'GSAP', 'Tailwind'],
    icon: 'gamepad'
  },
  {
    title: 'Mobile App',
    description: 'Aplicación móvil cross-platform con React Native y sincronización en tiempo real.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    icon: 'mobile-alt'
  }
])
</script>