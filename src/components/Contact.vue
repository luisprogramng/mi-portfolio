<template>
  <section id="contacto" class="py-24 relative overflow-hidden">
    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 right-0 translate-x-1/3 select-none">CONTACT</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">Contáctame</span>
      </h2>
      <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Info -->
        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-4">Información</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <font-awesome-icon icon="envelope" class="text-primary text-xl" />
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">Email</p>
                <p class="text-white">luisprogramming2@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <font-awesome-icon icon="phone" class="text-primary text-xl" />
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">Teléfono</p>
                <p class="text-white">+53 54556198</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <font-awesome-icon icon="location-dot" class="text-primary text-xl" />
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">Ubicación</p>
                <p class="text-white">Matanzas, Cuba</p>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-6 border-t border-white/5">
            <a :href="whatsappLink" target="_blank" class="btn-primary w-full justify-center">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Formulario -->
        <div class="glass-card p-8">
          <h3 class="text-xl font-bold text-white mb-4">Envíame un mensaje</h3>
          <form @submit.prevent="sendEmail" class="space-y-4">
            <input type="text" v-model="emailForm.name" placeholder="Tu nombre" 
                   class="w-full px-4 py-3 bg-dark-200 border border-white/5 rounded-lg text-white placeholder-text-secondary focus:border-primary focus:outline-none transition-all">
            <input type="email" v-model="emailForm.email" placeholder="Tu email" 
                   class="w-full px-4 py-3 bg-dark-200 border border-white/5 rounded-lg text-white placeholder-text-secondary focus:border-primary focus:outline-none transition-all">
            <textarea v-model="emailForm.message" rows="4" placeholder="Tu mensaje" 
                      class="w-full px-4 py-3 bg-dark-200 border border-white/5 rounded-lg text-white placeholder-text-secondary focus:border-primary focus:outline-none transition-all resize-none"></textarea>
            <button type="submit" class="btn-primary w-full justify-center">
              <font-awesome-icon icon="paper-plane" class="mr-2" />
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'  // ✅ IMPORTAR useI18n

// ===== OBTENER FUNCIÓN t =====
const { t } = useI18n()  // ✅ OBTENER t

// ===== ESTADO =====
const emailForm = ref({ name: '', email: '', message: '' })

// ===== WHATSAPP =====
const whatsappLink = computed(() => {
  const message = 'Hola! Vi tu portfolio y me gustaría hablar contigo.'
  return `https://wa.me/5354556198?text=${encodeURIComponent(message)}`
})

// ===== ENVIAR EMAIL =====
const sendEmail = () => {
  alert(t('contact.success'))
  emailForm.value = { name: '', email: '', message: '' }
}
</script>