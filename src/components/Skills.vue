<template>
  <section id="habilidades" class="py-16 md:py-24 bg-dark-300/50 relative overflow-hidden">
    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">{{ t('skills.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('skills.subtitle') }}</p>

      <!-- ===== SKILLS CON DISEÑO MEJORADO ===== -->
      <div class="flex flex-col gap-8 max-w-2xl mx-auto">
        <div v-for="(group, groupIndex) in groupedSkills" :key="groupIndex">
          <!-- Título del grupo -->
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <font-awesome-icon :icon="group.icon" class="text-primary text-sm" />
            </div>
            <span class="text-white text-sm font-medium tracking-wider">
              {{ group.name }}
            </span>
            <span class="flex-1 h-px bg-white/5"></span>
            <span class="text-text-secondary text-[10px]">{{ group.skills.length }}</span>
          </div>

          <!-- Skills del grupo -->
          <div class="flex flex-wrap gap-2.5">
            <div v-for="skill in group.skills" :key="skill.name"
                 class="skill-chip group transition-all duration-300 hover:-translate-y-1 active:scale-95"
                 :style="{ 
                   backgroundColor: skill.bgColor || 'rgba(255,255,255,0.03)',
                   borderColor: skill.color + '30'
                 }">
              
              <!-- Icono -->
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                   :style="{ backgroundColor: skill.color + '20' }">
                <font-awesome-icon :icon="skill.icon" class="text-base" :style="{ color: skill.color }" />
              </div>
              
              <!-- Info -->
              <div class="flex-1 min-w-0">
                <span class="text-white text-sm font-medium truncate block">{{ skill.name }}</span>
                <div class="flex items-center gap-2">
                  <div class="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-1000"
                         :style="{ width: skill.level + '%', backgroundColor: skill.color }"></div>
                  </div>
                  <span class="text-primary text-[10px] font-mono font-bold tabular-nums">{{ skill.level }}%</span>
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

// ===== SKILLS ORGANIZADAS POR GRUPOS =====
const groupedSkills = [
  {
    name: 'Frontend',
    icon: 'code',
    skills: [
      { name: 'Vue.js', level: 95, icon: ['fab', 'vuejs'], color: '#41B883', bgColor: 'rgba(65, 184, 131, 0.08)' },
      { name: 'React', level: 85, icon: ['fab', 'react'], color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.08)' },
      { name: 'Angular', level: 80, icon: ['fab', 'angular'], color: '#DD0031', bgColor: 'rgba(221, 0, 49, 0.08)' },
      { name: 'TypeScript', level: 90, icon: ['fab', 'js'], color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.08)' },
    ]
  },
  {
    name: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 85, icon: ['fab', 'node-js'], color: '#339933', bgColor: 'rgba(51, 153, 51, 0.08)' },
      { name: 'Java', level: 80, icon: ['fab', 'java'], color: '#007396', bgColor: 'rgba(0, 115, 150, 0.08)' },
      { name: 'Python', level: 75, icon: ['fab', 'python'], color: '#3776AB', bgColor: 'rgba(55, 118, 171, 0.08)' },
      { name: 'PostgreSQL', level: 80, icon: 'database', color: '#336791', bgColor: 'rgba(51, 103, 145, 0.08)' },
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 95, icon: ['fab', 'git-alt'], color: '#F05032', bgColor: 'rgba(240, 80, 50, 0.08)' },
      { name: 'Docker', level: 80, icon: ['fab', 'docker'], color: '#2496ED', bgColor: 'rgba(36, 150, 237, 0.08)' },
      { name: 'Figma', level: 85, icon: ['fab', 'figma'], color: '#F24E1E', bgColor: 'rgba(242, 78, 30, 0.08)' },
    ]
  },
  {
    name: 'Mobile',
    icon: 'mobile-alt',
    skills: [
      { name: 'React Native', level: 80, icon: ['fab', 'react'], color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.08)' },
      { name: 'Flutter', level: 65, icon: 'mobile-alt', color: '#02569B', bgColor: 'rgba(2, 86, 155, 0.08)' },
      { name: 'Supabase', level: 70, icon: 'database', color: '#3ECF8E', bgColor: 'rgba(62, 207, 142, 0.08)' },
    ]
  }
]
</script>

<style scoped>
.skill-chip {
  @apply flex items-center gap-3 px-3 py-2 rounded-xl border backdrop-blur-sm min-w-[140px] flex-1 sm:flex-none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-chip:hover {
  @apply shadow-gold;
  border-color: rgba(241, 178, 74, 0.2);
}

/* Para que en móvil ocupen el ancho completo */
@media (max-width: 480px) {
  .skill-chip {
    min-width: 100%;
    flex: 1 1 100%;
  }
}

/* Para tablets y desktop */
@media (min-width: 481px) and (max-width: 768px) {
  .skill-chip {
    min-width: calc(50% - 0.5rem);
    flex: 1 1 calc(50% - 0.5rem);
  }
}

@media (min-width: 769px) {
  .skill-chip {
    min-width: 200px;
    flex: 0 0 auto;
  }
}
</style>