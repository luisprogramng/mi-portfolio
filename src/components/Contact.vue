<template>
  <section id="contacto" class="py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">{{ t('contact.title') }}</h2>
      <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- ===== INFORMACIÓN DE CONTACTO ===== -->
        <div class="space-y-6">
          <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500">
            <h3 class="text-2xl font-display font-bold text-gradient mb-6 flex items-center gap-3">
              <font-awesome-icon icon="envelope" class="text-primary" />
              {{ t('contact.direct') }}
            </h3>
            
            <div class="space-y-4">
              <div v-for="(contact, index) in contacts" :key="index"
                   class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50/50 transition-all group
                          dark:hover:bg-glass hover:scale-[1.02] duration-300">
                <font-awesome-icon :icon="contact.icon" class="text-2xl text-primary" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t(`contact.labels.${contact.key}`) }}</p>
                  <p class="text-gray-800 dark:text-gray-200 font-medium group-hover:text-primary transition-colors">
                    {{ t(`contact.values.${contact.key}`) }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-glass-border">
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                <font-awesome-icon icon="users" class="text-primary" />
                {{ t('contact.follow') }}
              </p>
              <div class="flex gap-4">
                <a v-for="social in socials" :key="social.name"
                   :href="social.link" target="_blank"
                   class="p-3 bg-gray-100/50 hover:bg-gray-200/50 rounded-lg transition-all hover:shadow-md hover:scale-110 duration-300
                          dark:glass-card dark:hover:border-primary">
                  <font-awesome-icon :icon="['fab', social.icon]" class="text-xl text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== WHATSAPP ===== -->
        <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500">
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="w-24 h-24 rounded-full bg-[#25D366]/10 flex items-center justify-center border-2 border-[#25D366]/20">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-6xl text-[#25D366]" />
              </div>
            </div>

            <h3 class="text-2xl font-display font-bold text-gradient mb-2">
              {{ t('contact.prefer_whatsapp') }}
            </h3>

            <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">
              {{ t('contact.whatsapp_description') }}
            </p>

            <!-- Número de WhatsApp -->
            <div class="bg-gray-50/50 dark:bg-glass rounded-lg p-4 mb-6 border border-gray-200 dark:border-glass-border">
              <p class="text-sm text-gray-500 dark:text-gray-400">📱 {{ t('contact.number') }}</p>
              <p class="text-xl font-bold text-[#25D366]">+53 54556198</p>
            </div>

            <!-- Botón WhatsApp -->
            <a :href="whatsappLink" target="_blank" 
               class="btn-whatsapp w-full group inline-flex items-center justify-center gap-3">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
              <span>{{ t('contact.open_whatsapp') }}</span>
              <font-awesome-icon icon="arrow-right" class="group-hover:translate-x-1 transition-transform" />
            </a>

            <!-- Disponibilidad -->
            <div class="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Disponible para responder en minutos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ===== WHATSAPP =====
const whatsappNumber = '+5354556198'
const whatsappLink = computed(() => {
  const message = 'Hola! Vi tu portfolio y me gustaría hablar contigo sobre un proyecto.'
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
})

// ===== DATOS DE CONTACTO =====
const contacts = [
  { icon: 'envelope', key: 'email' },
  { icon: 'phone', key: 'phone' },
  { icon: 'location-dot', key: 'location' },
  { icon: 'clock', key: 'availability' },
]

// ===== REDES SOCIALES =====
const socials = [
  { name: 'Twitter', icon: 'twitter', link: 'https://twitter.com/tuusuario' },
  { name: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/tuusuario' },
  { name: 'GitHub', icon: 'github', link: 'https://github.com/tuusuario' },
  { name: 'YouTube', icon: 'youtube', link: 'https://youtube.com/@tuusuario' },
]
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
