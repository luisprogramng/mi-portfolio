<template>
  <section id="contacto" style="padding: 80px 20px; background: #0A0A1A; border-top: 4px solid #00D4FF;">
    <div style="max-width: 1200px; margin: 0 auto;">
      
      <!-- TÍTULO -->
      <h2 style="text-align: center; font-size: 36px; font-weight: 700; background: linear-gradient(135deg, #00D4FF, #7B61FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 12px;">
        Contacto
      </h2>
      <p style="text-align: center; color: #94A3B8; font-size: 18px; margin-bottom: 40px;">
        ¿Tienes un proyecto? Hablemos
      </p>

      <!-- TARJETA ÚNICA -->
      <div style="max-width: 500px; margin: 0 auto; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 30px;">

        <!-- EMAIL -->
        <div style="margin-bottom: 20px;">
          <label style="display: block; color: #94A3B8; font-size: 13px; margin-bottom: 6px;">Email</label>
          <div style="display: flex; gap: 10px;">
            <input 
              v-model="email" 
              type="email" 
              placeholder="tu@email.com"
              style="flex: 1; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; font-size: 14px; outline: none;"
            >
            <button 
              @click="sendEmail"
              style="padding: 12px 24px; background: linear-gradient(135deg, #00D4FF, #7B61FF); color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: all 0.3s;">
              Enviar
            </button>
          </div>
        </div>

        <!-- WHATSAPP -->
        <div>
          <label style="display: block; color: #94A3B8; font-size: 13px; margin-bottom: 6px;">WhatsApp</label>
          <a 
            :href="whatsappLink" 
            target="_blank"
            style="display: flex; align-items: center; justify-content: center; gap: 10px; padding: 14px; background: #25D366; color: white; border-radius: 10px; text-decoration: none; font-weight: 600; transition: all 0.3s;">
            <span style="font-size: 24px;">💬</span>
            Abrir WhatsApp
            <span style="font-size: 12px; opacity: 0.7;">+53 54556198</span>
          </a>
        </div>

        <!-- TEXTO DE CONFIRMACIÓN -->
        <p style="text-align: center; margin-top: 20px; color: #00D4FF; font-size: 13px; font-weight: 500;">
          ✅ Disponible para responder en minutos
        </p>
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
