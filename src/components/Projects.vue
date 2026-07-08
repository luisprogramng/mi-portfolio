<template>
  <section id="proyectos" class="py-24 bg-dark-300/50 relative overflow-hidden">
    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 left-0 -translate-x-1/3 select-none">PROJECTS</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">{{ t('projects.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('projects.subtitle') }}</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div v-for="(project, index) in projectsData" :key="index"
             class="glass-card overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-gold">
          <div class="h-40 md:h-48 relative overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <font-awesome-icon :icon="project.icon || 'code'" class="text-4xl md:text-5xl text-primary/50 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div v-if="project.featured" class="absolute top-3 left-3">
              <span class="px-2 py-0.5 md:px-3 md:py-1 bg-primary text-dark-400 text-[10px] md:text-xs font-bold rounded-full">{{ t('projects.featured') }}</span>
            </div>
          </div>
          <div class="p-4 md:p-6">
            <h3 class="text-base md:text-xl font-bold text-white group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-text-secondary text-xs md:text-sm mt-1 md:mt-2 mb-3 md:mb-4 line-clamp-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1 md:gap-2">
              <span v-for="tech in project.technologies" :key="tech" class="tech-chip text-[10px] md:text-xs">{{ tech }}</span>
            </div>
            <!-- ✅ LINK DEL PROYECTO -->
            <div class="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/5">
              <a 
                v-if="project.demo" 
                :href="project.demo" 
                target="_blank" 
                class="text-primary text-sm hover:text-[#f5c842] transition-colors flex items-center gap-2"
              >
                <font-awesome-icon icon="external-link-alt" />
                {{ t('projects.view') }}
                <font-awesome-icon icon="arrow-right" class="text-xs" />
              </a>
              <span v-else class="text-text-secondary text-sm">Próximamente</span>
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
    featured: true,
    demo: 'https://fastship-sandy.vercel.app'  // ✅ LINK DE FASTSHIP
  },
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con gestión de inventario y pagos integrados.',
    technologies: ['Vue 3', 'Pinia', 'Stripe', 'Tailwind'],
    icon: 'shopping-cart',
    demo: '#'  // ✅ LINK
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo con visualización de datos en tiempo real.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Firebase'],
    icon: 'chart-bar',
    demo: '#'  // ✅ LINK
  },
  {
    title: 'AI Chat Interface',
    description: 'Interfaz conversacional con IA, integrando modelos de lenguaje avanzados.',
    technologies: ['Vue 3', 'OpenAI', 'WebSocket', 'TypeScript'],
    icon: 'robot',
    demo: '#'  // ✅ LINK
  },
  {
    title: 'Game Portfolio',
    description: 'Portfolio interactivo con elementos gamificados y animaciones 3D.',
    technologies: ['Three.js', 'Vue 3', 'GSAP', 'Tailwind'],
    icon: 'gamepad',
    demo: '#'  // ✅ LINK
  },
  {
    title: 'Mobile App',
    description: 'Aplicación móvil cross-platform con React Native y sincronización en tiempo real.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    icon: 'mobile-alt',
    demo: '#'  // ✅ LINK
  }
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>