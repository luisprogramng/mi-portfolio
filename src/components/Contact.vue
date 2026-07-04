<template>
  <section id="contacto" class="py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">Contacto</h2>
      <p class="section-subtitle">¿Tienes un proyecto? Hablemos</p>

      <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        
        <!-- ===== EMAIL ===== -->
        <div class="glass-card p-8 text-center">
          <div class="text-4xl mb-4">📧</div>
          <h3 class="text-xl font-bold text-white mb-3">Email</h3>
          <input 
            v-model="email" 
            type="email" 
            placeholder="tu@email.com"
            class="w-full px-4 py-3 bg-dark-400/50 border border-glass-border rounded-lg text-gray-200 placeholder-gray-500 focus:border-primary focus:outline-none transition-all mb-3"
          >
          <button 
            @click="sendEmail"
            class="w-full btn-primary"
          >
            Enviar Email
          </button>
        </div>

        <!-- ===== WHATSAPP ===== -->
        <div class="glass-card p-8 text-center">
          <div class="text-4xl mb-4">💬</div>
          <h3 class="text-xl font-bold text-white mb-3">WhatsApp</h3>
          <p class="text-sm text-gray-400 mb-4">+53 54556198</p>
          <a 
            :href="whatsappLink" 
            target="_blank"
            class="block w-full btn-whatsapp text-center"
          >
            Abrir WhatsApp
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

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
</script>
