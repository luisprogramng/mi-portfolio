<template>
  <section id="experiencia" class="py-24 relative overflow-hidden">
    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 right-0 translate-x-1/3 select-none">EXPERIENCE</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">{{ t('experience.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('experience.subtitle') }}</p>

      <div class="relative max-w-4xl mx-auto">
        <!-- Línea de tiempo -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

        <div v-for="(item, index) in experienceItems" :key="index"
             class="relative mb-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <!-- Punto -->
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-gold">
            <div class="w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div :class="[
            'glass-card p-6 w-full md:w-5/12 transition-all duration-500 hover:shadow-gold',
            index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
          ]">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-xl font-bold text-white">{{ item.company }}</h3>
              <span class="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">{{ item.period }}</span>
            </div>
            <p class="text-sm text-text-secondary mb-3">{{ item.position }}</p>
            <p class="text-text-secondary text-sm mb-4 leading-relaxed">{{ item.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in item.technologies" :key="tech" class="tech-chip text-xs">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const experienceItems = ref([])

const defaultExperience = [
  {
    company: 'TechCorp Inc.',
    position: 'Senior Frontend Developer',
    period: '2023 - Presente',
    description: 'Liderando el desarrollo de aplicaciones Vue.js de misión crítica para clientes enterprise.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind', 'Pinia']
  },
  {
    company: 'StartupX',
    position: 'Full Stack Developer',
    period: '2021 - 2023',
    description: 'Desarrollo full stack con Node.js y React para plataforma de análisis de datos en tiempo real.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker']
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: '2020 - 2021',
    description: 'Desarrollo de proyectos web para diversos clientes.',
    technologies: ['Vue 2', 'Firebase', 'WordPress', 'SCSS']
  }
]

const loadExperience = () => {
  try {
    const items = t('experience.items')
    if (items && Array.isArray(items) && items.length > 0) {
      experienceItems.value = items
    } else {
      experienceItems.value = defaultExperience
    }
  } catch {
    experienceItems.value = defaultExperience
  }
}

onMounted(() => loadExperience())
watch(locale, () => loadExperience())
</script>