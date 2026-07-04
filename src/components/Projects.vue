<template>
  <section id="proyectos" class="py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">{{ t('projects.title') }}</h2>
      <p class="section-subtitle">{{ t('projects.subtitle') }}</p>

      <div v-if="projectsList.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projectsList" :key="index"
             class="glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-neon animate-on-scroll"
             :style="{ animationDelay: (index * 0.1) + 's' }">
          
          <!-- ===== CABECERA DEL PROYECTO ===== -->
          <div class="h-48 relative overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <font-awesome-icon :icon="project.icon || 'code'" class="text-6xl text-primary group-hover:scale-125 transition-transform duration-500" />
            </div>
            
            <!-- Badge Destacado -->
            <div v-if="project.featured" class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-neon">
                <font-awesome-icon icon="star" class="mr-1" />
                Destacado
              </span>
            </div>
            
            <!-- Badge Año -->
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary font-mono">
                <font-awesome-icon icon="calendar" class="mr-1" />
                {{ project.year || '2024' }}
              </span>
            </div>

            <!-- Overlay con métricas -->
            <div class="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div v-if="project.metrics" class="text-white text-sm font-mono bg-dark-400/80 backdrop-blur-sm p-3 rounded-lg w-full">
                <font-awesome-icon icon="chart-line" class="text-primary mr-2" />
                {{ project.metrics }}
              </div>
            </div>
          </div>
          
          <!-- ===== CONTENIDO ===== -->
          <div class="p-6">
            <!-- Título -->
            <h3 class="text-xl font-display font-bold text-gray-200 group-hover:text-primary transition-colors mb-2">
              {{ project.title }}
            </h3>
            
            <!-- Descripción -->
            <p class="text-gray-400 text-sm mb-3">{{ project.description }}</p>
            
            <!-- Rol (si existe) -->
            <p v-if="project.role" class="text-xs text-secondary mb-3 flex items-start gap-2">
              <font-awesome-icon icon="user" class="mt-0.5 text-primary" />
              <span>{{ project.role }}</span>
            </p>
            
            <!-- Tecnologías -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech" 
                    class="tech-chip text-xs group-hover:border-primary transition-all duration-300">
                <font-awesome-icon icon="check" class="mr-1 text-primary text-[8px]" />
                {{ tech }}
              </span>
            </div>

            <!-- Acciones -->
            <div class="flex items-center justify-between pt-4 border-t border-glass-border">
              <div class="flex gap-3">
                <!-- Botón Demo -->
                <a v-if="project.demo" :href="project.demo" target="_blank" 
                   class="btn-primary text-sm py-2 px-4 group flex items-center gap-2">
                  <font-awesome-icon icon="rocket" />
                  {{ t('projects.view') }}
                  <font-awesome-icon icon="arrow-right" class="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <!-- Botón GitHub -->
                <a v-if="project.github && project.github !== '#'" :href="project.github" target="_blank"
                   class="btn-outline text-sm py-2 px-4 group flex items-center gap-2">
                  <font-awesome-icon :icon="['fab', 'github']" />
                  Código
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- ===== MENSAJE DE CARGA ===== -->
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
import { ref, onMounted, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// ===== ESTADO =====
const projectsList = ref([])

// ===== DATOS POR DEFECTO (FALLBACK) =====
const defaultProjects = [
  {
    title: 'FastShip - Plataforma de Envíos',
    description: 'Plataforma completa para gestión de envíos con seguimiento en tiempo real. Incluye panel de administración, notificaciones y sistema de tracking.',
    problem: 'Las empresas necesitan una solución eficiente para gestionar envíos y ofrecer seguimiento en tiempo real a sus clientes.',
    role: 'Full Stack Developer - Diseñé la arquitectura, implementé el sistema de tracking en tiempo real con Socket.io y el panel administrativo.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Socket.io', 'JWT'],
    metrics: 'Procesamiento de 500+ envíos diarios con actualizaciones en tiempo real.',
    demo: 'https://fastship-sandy.vercel.app',
    github: '#',
    icon: 'shipping-fast',
    year: '2024',
    featured: true
  },
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con gestión de inventario y pagos integrados.',
    technologies: ['Vue 3', 'Pinia', 'Stripe', 'Tailwind'],
    icon: 'shopping-cart',
    year: '2024',
    featured: false
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo con visualización de datos en tiempo real y reportes.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Firebase'],
    icon: 'chart-bar',
    year: '2023',
    featured: false
  }
]

// ===== ICONOS Y AÑOS =====
const icons = ['shopping-cart', 'chart-bar', 'robot', 'gamepad', 'mobile-alt', 'link', 'shipping-fast']
const years = ['2024', '2023', '2024', '2023', '2024', '2023', '2024']

// ===== CARGAR PROYECTOS =====
const loadProjects = () => {
  try {
    const items = t('projects.items')
    if (items && Array.isArray(items) && items.length > 0) {
      projectsList.value = items.map((item, index) => ({
        ...item,
        icon: item.icon || icons[index % icons.length] || 'code',
        year: item.year || years[index % years.length] || '2024',
        demo: item.demo || '#',
        github: item.github || '#',
        featured: item.featured || false
      }))
    } else {
      projectsList.value = defaultProjects
    }
  } catch (error) {
    console.warn('Error loading projects:', error)
    projectsList.value = defaultProjects
  }
}

// ===== MONTAJE =====
onMounted(() => {
  loadProjects()
})

// ===== WATCH =====
watch(locale, () => {
  loadProjects()
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-slide-up {
  opacity: 1;
  transform: translateY(0);
}
</style>
