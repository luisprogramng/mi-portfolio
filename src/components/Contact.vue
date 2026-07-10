<template>
  <section id="contacto" class="py-16 md:py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">
        <span class="highlight">{{ t('contact.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

      <div class="max-w-2xl mx-auto">
        <div class="glass-card p-6 md:p-8">
          <!-- ===== INFORMACIÓN DE CONTACTO (TEXTO FIJO) ===== -->
          <div class="space-y-4 mb-6">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <font-awesome-icon icon="envelope" class="text-primary" />
              </div>
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">Email</p>
                <p class="text-white font-medium">luisprogramming2@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <font-awesome-icon icon="phone" class="text-primary" />
              </div>
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">Teléfono</p>
                <p class="text-white font-medium">+53 54556198</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <font-awesome-icon icon="location-dot" class="text-primary" />
              </div>
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">Ubicación</p>
                <p class="text-white font-medium">Matanzas, Cuba</p>
              </div>
            </div>
          </div>

          <!-- ===== BOTONES ===== -->
          <div class="flex flex-col gap-3">
            <!-- Botón Email (TRADUCIDO) -->
            <a href="mailto:luisprogramming2@gmail.com" 
               class="btn-primary w-full justify-center">
              <font-awesome-icon icon="envelope" class="mr-2" />
              {{ t('contact.send_email') }}
            </a>
            
            <!-- Botón WhatsApp (TEXTO FIJO) -->
            <a href="https://wa.me/5354556198?text=Hola%21%20Vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo." 
               target="_blank"
               class="btn-whatsapp w-full justify-center">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>