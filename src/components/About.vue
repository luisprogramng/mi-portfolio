<template>
  <section id="sobre-mi" class="py-24 relative overflow-hidden">
    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 right-0 translate-x-1/3 select-none">ABOUT</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">Sobre</span> Mí
      </h2>
      <p class="section-subtitle">{{ t('about.subtitle') }}</p>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Columna Izquierda - Foto -->
        <div class="flex justify-center">
          <div class="relative">
            <div class="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-primary/10 shadow-gold">
              <img 
                src="/src/assets/profile.png" 
                alt="Luis Albalat"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div class="absolute -bottom-4 -right-4 glass-card px-6 py-3 rounded-full">
              <span class="text-primary font-bold">3+</span>
              <span class="text-text-secondary text-sm ml-1">{{ t('about.years') }}</span>
            </div>
          </div>
        </div>

        <!-- Columna Derecha - Información -->
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">{{ t('about.story_short') }}</h3>
            <p class="text-text-secondary leading-relaxed">
              {{ t('about.story') }}
            </p>
          </div>

          <!-- Datos clave -->
          <div class="grid grid-cols-2 gap-4">
            <div class="glass-card p-4">
              <p class="text-xs text-text-secondary uppercase tracking-wider">Nombre</p>
              <p class="text-white font-medium">Luis Albalat</p>
            </div>
            <div class="glass-card p-4">
              <p class="text-xs text-text-secondary uppercase tracking-wider">Email</p>
              <p class="text-white font-medium">luisprogramming2@gmail.com</p>
            </div>
            <div class="glass-card p-4">
              <p class="text-xs text-text-secondary uppercase tracking-wider">Ubicación</p>
              <p class="text-white font-medium">Matanzas, Cuba</p>
            </div>
            <div class="glass-card p-4">
              <p class="text-xs text-text-secondary uppercase tracking-wider">Disponibilidad</p>
              <p class="text-white font-medium">Freelance</p>
            </div>
          </div>

          <!-- Botón CV -->
          <a href="#" class="btn-primary inline-flex">
            <font-awesome-icon icon="file-pdf" class="mr-2" />
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'  // ✅ IMPORTAR useI18n

// ===== OBTENER FUNCIÓN t =====
const { t } = useI18n()  // ✅ OBTENER t
</script>