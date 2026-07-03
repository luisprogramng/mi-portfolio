<template>
  <section id="habilidades" class="py-24 bg-white dark:bg-dark-400 relative transition-colors duration-300">
    <div class="container-custom">
      <h2 class="section-title">{{ t('skills.title') }}</h2>
      <p class="section-subtitle">{{ t('skills.subtitle') }}</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(category, index) in skillCategories" :key="index"
             class="glass-card p-6 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 
                    dark:hover:shadow-neon">
          <div class="flex items-center gap-3 mb-4">
            <font-awesome-icon :icon="category.icon" class="text-3xl text-primary" />
            <h3 class="text-lg font-display font-bold text-gray-800 dark:text-gray-200">
              {{ getCategoryTranslation(category.key) }}
            </h3>
          </div>
          
          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name" 
                 class="group hover:scale-[1.02] transition-all duration-300">
              <div class="flex justify-between text-sm mb-1">
                <span class="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                  <font-awesome-icon icon="check-circle" class="text-primary text-xs opacity-60" />
                  {{ skill.name }}
                </span>
                <span class="text-primary font-mono font-semibold">{{ skill.level }}%</span>
              </div>
              <div class="w-full h-2 bg-gray-200 dark:bg-glass rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                     :style="{ width: skill.level + '%' }">
                  <div class="w-full h-full bg-gradient-to-r from-primary/50 to-secondary/50 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <div class="inline-flex flex-wrap justify-center gap-3 p-6 glass-card hover:shadow-card-hover transition-all duration-500">
          <span class="text-sm text-gray-600 dark:text-gray-400 font-medium mr-2 flex items-center gap-2">
            <font-awesome-icon icon="tools" class="text-primary" />
            +
          </span>
          <span v-for="extra in extraTools" :key="extra" 
                class="px-4 py-2 bg-gray-100/80 dark:bg-glass border border-gray-200 dark:border-glass-border rounded-full 
                       text-sm text-gray-700 dark:text-gray-300 hover:border-primary hover:shadow-neon 
                       transition-all duration-300 cursor-default hover:scale-105">
            <font-awesome-icon icon="gear" class="mr-1 text-primary text-xs" />
            {{ extra }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const getCategoryTranslation = (key) => {
  try {
    return t(`skills.categories.${key}`)
  } catch {
    return key.charAt(0).toUpperCase() + key.slice(1)
  }
}

const skillCategories = [
  {
    icon: ['fab', 'vuejs'],
    key: 'frontend',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Next.js', level: 80 },
    ]
  },
  {
    icon: 'server',
    key: 'backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'GraphQL', level: 80 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ]
  },
  {
    icon: 'tools',
    key: 'tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'CI/CD', level: 75 },
    ]
  },
  {
    icon: 'mobile-alt',
    key: 'mobile',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 65 },
      { name: 'Web3', level: 70 },
      { name: 'Firebase', level: 85 },
      { name: 'Supabase', level: 70 },
    ]
  }
]

const extraTools = [
  'Jest', 'Cypress', 'Webpack', 'Vite', 
  'ESLint', 'Prettier', 'Storybook', 'Sass'
]
</script>