<template>
  <section id="contacto" class="py-24 relative overflow-hidden">
    <!-- Texto decorativo gigante -->
    <div class="giant-text top-1/4 right-0 translate-x-1/3 select-none">CONTACT</div>

    <div class="container-custom relative z-10">
      <h2 class="section-title">
        <span class="highlight">{{ t('contact.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <!-- ===== INFO ===== -->
        <div class="glass-card p-6 md:p-8">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <font-awesome-icon icon="info-circle" class="text-primary" />
            {{ t('contact.info') }}
          </h3>
          <div class="space-y-4">
            <div v-for="contact in contacts" :key="contact.key" class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <font-awesome-icon :icon="contact.icon" class="text-primary text-lg" />
              </div>
              <div class="min-w-0">
                <p class="text-xs text-text-secondary uppercase tracking-wider">{{ t(`contact.labels.${contact.key}`) }}</p>
                <p class="text-white font-medium truncate">{{ t(`contact.values.${contact.key}`) }}</p>
              </div>
            </div>
          </div>
          
          <div class="mt-6 pt-6 border-t border-white/5">
            <a :href="whatsappLink" target="_blank" 
               class="btn-primary w-full justify-center flex items-center gap-2">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
              {{ t('contact.whatsapp') }}
            </a>
          </div>
        </div>

        <!-- ===== FORMULARIO ===== -->
        <div class="glass-card p-6 md:p-8">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <font-awesome-icon icon="paper-plane" class="text-primary" />
            {{ t('contact.send_message') }}
          </h3>
          <form @submit.prevent="sendEmail" class="space-y-4">
            <input 
              type="text" 
              v-model="emailForm.name" 
              :placeholder="t('contact.your_name')" 
              class="w-full px-4 py-3 bg-dark-200 border border-white/5 rounded-lg text-white placeholder-text-secondary focus:border-primary focus:outline-none transition-all"
            >
            <input 
              type="email" 
              v-model="emailForm.email" 
              :placeholder="t('contact.your_email')" 
              class="w-full px-4 py-3 bg-dark-200 border border-white/5 rounded-lg text-white placeholder-text-secondary focus:border-primary focus:outline-none transition-all"
            >
            <textarea 
              v-model="emailForm.message" 
              rows="4" 
              :placeholder="t('contact.your_message')" 
              class="w-full px-4 py-3 bg-dark-200 border border-white/5 rounded-lg text-white placeholder-text-secondary focus:border-primary focus:outline-none transition-all resize-none"
            ></textarea>
            <button type="submit" class="btn-primary w-full justify-center flex items-center gap-2">
              <font-awesome-icon icon="paper-plane" />
              {{ t('contact.send') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emailForm = ref({ name: '', email: '', message: '' })

const contacts = [
  { key: 'email', icon: 'envelope' },
  { key: 'phone', icon: 'phone' },
  { key: 'location', icon: 'location-dot' }
]

const whatsappLink = computed(() => {
  const message = 'Hola! Vi tu portfolio y me gustaría hablar contigo.'
  return `https://wa.me/5354556198?text=${encodeURIComponent(message)}`
})

const sendEmail = () => {
  alert(t('contact.success'))
  emailForm.value = { name: '', email: '', message: '' }
}
</script>