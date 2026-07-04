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

        <!-- ===== FORMULARIO Y BOTONES ===== -->
        <div class="glass-card p-8 hover:shadow-card-hover transition-all duration-500">
          <div class="mb-6">
            <h3 class="text-xl font-display font-bold text-gradient mb-2 flex items-center gap-2">
              <font-awesome-icon icon="paper-plane" class="text-primary" />
              {{ t('contact.send') }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Elige cómo quieres contactarme</p>
          </div>

          <!-- ===== BOTONES DE ACCIÓN ===== -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <!-- Botón Email -->
            <button @click="openEmail" 
                    class="flex-1 px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium 
                           transition-all duration-300 hover:shadow-neon hover:scale-105 flex items-center justify-center gap-3">
              <font-awesome-icon icon="envelope" class="text-xl" />
              <span>Enviar Email</span>
              <font-awesome-icon icon="arrow-right" class="group-hover:translate-x-1 transition-transform" />
            </button>

            <!-- Botón WhatsApp -->
            <a :href="whatsappLink" target="_blank" 
               class="flex-1 px-6 py-4 bg-[#25D366] text-white rounded-lg font-medium 
                      transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-xl" />
              <span>WhatsApp</span>
              <font-awesome-icon icon="arrow-right" class="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <!-- ===== FORMULARIO EMAIL ===== -->
          <form @submit.prevent="handleEmailSubmit" class="space-y-5">
            <div>
              <label class="block text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                <font-awesome-icon icon="user" class="mr-1 text-primary" />
                {{ t('contact.name') }}
              </label>
              <input 
                type="text" 
                v-model="emailForm.name" 
                :placeholder="t('contact.name')" 
                required
                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg text-gray-800 
                       focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                       dark:bg-dark-400/50 dark:border-glass-border dark:text-gray-200"
              >
            </div>

            <div>
              <label class="block text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                <font-awesome-icon icon="envelope" class="mr-1 text-primary" />
                {{ t('contact.email_label') }}
              </label>
              <input 
                type="email" 
                v-model="emailForm.email" 
                placeholder="tu@email.com" 
                required
                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg text-gray-800 
                       focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
                       dark:bg-dark-400/50 dark:border-glass-border dark:text-gray-200"
              >
            </div>

            <div>
              <label class="block text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                <font-awesome-icon icon="comment" class="mr-1 text-primary" />
                {{ t('contact.message') }}
              </label>
              <textarea 
                v-model="emailForm.message" 
                :placeholder="t('contact.message')" 
                required 
                rows="4"
                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg text-gray-800 
                       focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none
                       dark:bg-dark-400/50 dark:border-glass-border dark:text-gray-200"
              ></textarea>
            </div>

            <button type="submit" class="btn-primary w-full group">
              <font-awesome-icon icon="paper-plane" class="mr-2" />
              {{ t('contact.send_email') }}
              <font-awesome-icon icon="arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <!-- ===== WHATSAPP DIRECTO ===== -->
          <div class="mt-6 pt-6 border-t border-gray-200 dark:border-glass-border text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
              <font-awesome-icon icon="clock" class="text-primary mr-1" />
              Disponible para responder en menos de 24 horas
            </p>
            <a :href="whatsappLink" target="_blank" 
               class="inline-flex items-center gap-2 text-[#25D366] hover:text-[#1da851] transition-colors font-medium">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
              <span>+53 54556198</span>
            </a>
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

// ===== ESTADO =====
const emailForm = ref({
  name: '',
  email: '',
  message: ''
})

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

// ===== ABRIR EMAIL =====
const openEmail = () => {
  const { name, email, message } = emailForm.value
  if (!name || !email || !message) {
    alert('Por favor, completa todos los campos del formulario primero.')
    return
  }
  
  const subject = encodeURIComponent('Contacto desde tu portfolio')
  const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)
  window.location.href = `mailto:luisprogramming2@gmail.com?subject=${subject}&body=${body}`
}

// ===== ENVIAR EMAIL =====
const handleEmailSubmit = () => {
  // Abrir el cliente de email con los datos del formulario
  openEmail()
  
  // Mostrar mensaje de éxito
  alert('📧 ¡Tu mensaje está listo para enviar! Se abrirá tu cliente de correo.')
  
  // Resetear formulario
  emailForm.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
