<template>
  <section id="habilidades" class="py-24 bg-dark-300/50 relative overflow-hidden">
    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 left-0 -translate-x-1/3 select-none">SKILLS</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">Mis</span> Habilidades
      </h2>
      <p class="section-subtitle">{{ t('skills.subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="(category, index) in skillCategories" :key="index" class="glass-card p-6">
          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <font-awesome-icon :icon="category.icon" class="text-primary" />
            {{ category.name }}
          </h3>
          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex justify-between text-sm mb-1">
                <span class="text-text-secondary">{{ skill.name }}</span>
                <span class="text-primary font-mono">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'  // ✅ IMPORTAR useI18n

// ===== OBTENER FUNCIÓN t =====
const { t } = useI18n()  // ✅ OBTENER t

// ===== DATOS DE SKILLS =====
const skillCategories = [
  {
    name: 'Frontend',
    icon: 'code',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ]
  },
  {
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'GraphQL', level: 80 },
      { name: 'PostgreSQL', level: 80 },
    ]
  },
  {
    name: 'Herramientas',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Figma', level: 85 },
    ]
  }
]
</script>