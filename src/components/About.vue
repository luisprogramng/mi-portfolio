<template>
  <section id="sobre-mi" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Texto decorativo gigante (oculto en móvil) -->
    <div class="giant-text top-1/4 right-0 translate-x-1/3 select-none hidden md:block">ABOUT</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">{{ t('about.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('about.subtitle') }}</p>

      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center lg:items-start">
        
        <!-- ===== COLUMNA IZQUIERDA - FOTO ===== -->
        <div class="flex justify-center w-full">
          <div class="relative">
            <!-- Foto -->
            <div class="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-primary/10 shadow-gold mx-auto">
              <img 
                src="/src/assets/profile.png" 
                alt="Luis Albalat"
                class="w-full h-full object-cover object-center"
              />
            </div>
            
            <!-- Badge de años (más pequeño en móvil) -->
            <div class="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass-card px-4 py-2 sm:px-6 sm:py-3 rounded-full">
              <span class="text-primary font-bold text-sm sm:text-base">3+</span>
              <span class="text-text-secondary text-xs sm:text-sm ml-1">{{ t('about.years') }}</span>
            </div>
          </div>
        </div>

        <!-- ===== COLUMNA DERECHA - INFORMACIÓN ===== -->
        <div class="space-y-5 md:space-y-6 w-full">
          <!-- Título e historia -->
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">{{ t('about.story_short') }}</h3>
            <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
              {{ t('about.story') }}
            </p>
          </div>

          <!-- Datos clave (2 columnas en móvil) -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div v-for="info in aboutInfo" :key="info.key" class="glass-card p-3 sm:p-4">
              <p class="text-[10px] sm:text-xs text-text-secondary uppercase tracking-wider">{{ t(`about.info.${info.key}`) }}</p>
              <p class="text-white font-medium text-sm sm:text-base truncate">{{ info.value }}</p>
            </div>
          </div>

          <!-- Botón CV -->
          <a href="#" class="btn-primary inline-flex w-full sm:w-auto justify-center">
            <font-awesome-icon icon="file-pdf" class="mr-2" />
            {{ t('about.download_cv') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const aboutInfo = [
  { key: 'name', value: 'Luis Albalat' },
  { key: 'email', value: 'luisprogramming2@gmail.com' },
  { key: 'location', value: 'Matanzas, Cuba' },
  { key: 'availability', value: t('about.info.freelance') }
]
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>