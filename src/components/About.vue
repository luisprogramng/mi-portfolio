<template>
  <section id="sobre mí" class="py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">{{ t('about.title') }}</h2>
      <p class="section-subtitle">{{ t('about.subtitle') }}</p>
      
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <div class="space-y-6">
          <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500">
            <h3 class="text-2xl font-display font-bold text-gradient mb-4 flex items-center gap-3">
              <font-awesome-icon icon="user" class="text-primary" />
              {{ t('about.story_short') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ t('about.story') }}
            </p>
            <div class="mt-6 grid grid-cols-3 gap-4">
              <div class="text-center group hover:scale-110 transition-transform duration-300">
                <div class="text-3xl font-bold text-primary flex items-center justify-center gap-2">
                  <font-awesome-icon icon="award" class="text-xl" />
                  3+
                </div>
                <div class="text-xs text-gray-500">{{ t('about.years') }}</div>
              </div>
              <div class="text-center group hover:scale-110 transition-transform duration-300">
                <div class="text-3xl font-bold text-secondary flex items-center justify-center gap-2">
                  <font-awesome-icon icon="project-diagram" class="text-xl" />
                  20+
                </div>
                <div class="text-xs text-gray-500">{{ t('about.projects') }}</div>
              </div>
              <div class="text-center group hover:scale-110 transition-transform duration-300">
                <div class="text-3xl font-bold text-accent flex items-center justify-center gap-2">
                  <font-awesome-icon icon="users" class="text-xl" />
                  10+
                </div>
                <div class="text-xs text-gray-500">{{ t('about.clients') }}</div>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500">
            <h3 class="text-2xl font-display font-bold text-gradient mb-4 flex items-center gap-3">
              <font-awesome-icon icon="laptop-code" class="text-primary" />
              {{ t('about.stack') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <span v-for="tech in mainTech" :key="tech" class="tech-chip group hover:scale-105 transition-all duration-300">
                <font-awesome-icon :icon="getTechIcon(tech)" class="mr-2 text-primary" />
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500">
            <h3 class="text-2xl font-display font-bold text-gradient mb-4 flex items-center gap-3">
              <font-awesome-icon icon="brain" class="text-primary" />
              {{ t('about.methodology') }}
            </h3>
            <div class="space-y-4">
              <div v-for="(item, index) in methodology" :key="index" 
                   class="flex items-start gap-4 group hover:bg-gray-50/50 p-3 rounded-lg transition-all cursor-default
                          dark:hover:bg-glass hover:scale-[1.02] duration-300">
                <font-awesome-icon :icon="item.icon" class="text-2xl text-primary" />
                <div>
                  <h4 class="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                    {{ t(`about.methodologies.${item.key}.title`) }}
                  </h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t(`about.methodologies.${item.key}.description`) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const mainTech = ['Vue.js', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'GraphQL']

const getTechIcon = (tech) => {
  const icons = {
    'Vue.js': ['fab', 'vuejs'],
    'React': ['fab', 'react'],
    'TypeScript': ['fab', 'js'],
    'Node.js': ['fab', 'node-js'],
    'Tailwind': ['fab', 'css3-alt'],
    'GraphQL': ['fab', 'react']
  }
  return icons[tech] || 'code'
}

const methodology = [
  { icon: 'rocket', key: 'results' },
  { icon: 'sync-alt', key: 'agile' },
  { icon: 'mobile-alt', key: 'mobile' },
]
</script>