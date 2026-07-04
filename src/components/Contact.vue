<template>
  <section id="contacto" class="py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">{{ t('contact.title') }}</h2>
      <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <!-- ===== COLUMNA IZQUIERDA: INFO ===== -->
        <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500 group">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <font-awesome-icon icon="envelope" class="text-2xl text-primary" />
            </div>
            <h3 class="text-2xl font-display font-bold text-gradient">{{ t('contact.direct') }}</h3>
          </div>
          
          <div class="space-y-4">
            <div v-for="(contact, index) in contacts" :key="index"
                 class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50/50 transition-all group/item
                        dark:hover:bg-glass hover:scale-[1.02] duration-300 cursor-default">
              <div class="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover/item:bg-primary/10 transition-all">
                <font-awesome-icon :icon="contact.icon" class="text-lg text-primary" />
              </div>
              <div>
                <p class="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{{ t(`contact.labels.${contact.key}`) }}</p>
                <p class="text-gray-800 dark:text-gray-200 font-semibold group-hover/item:text-primary transition-colors">
                  {{ t(`contact.values.${contact.key}`) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Redes Sociales -->
          <div class="mt-6 pt-6 border-t border-gray-200 dark:border-glass-border">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
              <font-awesome-icon icon="users" class="text-primary" />
              {{ t('contact.follow') }}
            </p>
            <div class="flex gap-3">
              <a v-for="social in socials" :key="social.name"
                 :href="social.link" target="_blank"
                 class="w-12 h-12 bg-gray-100/50 hover:bg-gray-200/50 rounded-xl transition-all hover:shadow-md hover:scale-110 duration-300
                        dark:glass-card dark:hover:border-primary flex items-center justify-center">
                <font-awesome-icon :icon="['fab', social.icon]" class="text-xl text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <!-- ===== COLUMNA DERECHA: CONTACTO ===== -->
        <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <font-awesome-icon icon="paper-plane" class="text-2xl text-secondary" />
            </div>
            <h3 class="text-2xl font-display font-bold text-gradient">{{ t('contact.send') }}</h3>
          </div>
          
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
            <font-awesome-icon icon="circle-info" class="text-primary" />
            Elige cómo prefieres contactarme
          </p>

          <!-- ===== BOTONES ===== -->
          <div class="flex flex-col gap-4">
            
            <!-- Botón Email -->
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="relative flex-1">
                <font-awesome-icon icon="envelope" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  v-model="email" 
                  type="email" 
                  :placeholder="t('contact.email')"
                  class="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-xl text-gray-800 
                         focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                         dark:bg-dark-400/50 dark:border-glass-border dark:text-gray-200 dark:placeholder-gray-500"
                >
              </div>
              <button 
                @click="sendEmail"
                class="btn-primary px-6 py-3.5 rounded-xl whitespace-nowrap flex items-center justify-center gap-2"
              >
                <font-awesome-icon icon="paper-plane" />
                {{ t('contact.send_email') }}
              </button>
            </div>

            <!-- Botón WhatsApp -->
            <a 
              :href="whatsappLink" 
              target="_blank"
              class="btn-whatsapp flex items-center justify-center gap-3 w-full py-4 rounded-xl text-lg font-semibold
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
              {{ t('contact.open_whatsapp') }}
              <span class="text-sm opacity-70 font-normal">+53 54556198</span>
            </a>

            <!-- Disponibilidad -->
            <div class="flex items-center justify-center gap-3 text-sm text-gray-400 mt-3 p-3 bg-green-500/5 rounded-xl border border-green-500/10">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Disponible para responder en minutos</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ===== EMAIL =====
const email = ref('')

const sendEmail = () => {
  if (!email.value) {
    alert('Por favor, escribe tu email.')
    return
  }
  
  const subject = encodeURIComponent('Contacto desde tu portfolio')
  const body = encodeURIComponent(`Email de contacto: ${email.value}\n\nHola, me gustaría hablar contigo sobre un proyecto.`)
  window.location.href = `mailto:luisprogramming2@gmail.com?subject=${subject}&body=${body}`
  
  email.value = ''
}

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
