<template>
  <section id="contacto" class="py-16 md:py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">
        <span class="highlight">{{ t('contact.title') }}</span>
      </h2>
      <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

      <div class="max-w-2xl mx-auto">
        <div class="glass-card p-6 md:p-8">
          <!-- ===== INFORMACIÓN DE CONTACTO ===== -->
          <div class="space-y-4 mb-6">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <font-awesome-icon icon="envelope" class="text-primary" />
              </div>
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">{{ t('contact.labels.email') }}</p>
                <p class="text-white font-medium">{{ t('contact.values.email') }}</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <font-awesome-icon icon="phone" class="text-primary" />
              </div>
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">{{ t('contact.labels.phone') }}</p>
                <p class="text-white font-medium">{{ t('contact.values.phone') }}</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <font-awesome-icon icon="location-dot" class="text-primary" />
              </div>
              <div>
                <p class="text-xs text-text-secondary uppercase tracking-wider">{{ t('contact.labels.location') }}</p>
                <p class="text-white font-medium">{{ t('contact.values.location') }}</p>
              </div>
            </div>
          </div>

          <!-- ===== BOTONES ===== -->
          <div class="flex flex-col gap-3">
            <a :href="'mailto:' + t('contact.values.email')" 
               class="btn-primary w-full justify-center">
              <font-awesome-icon icon="envelope" class="mr-2" />
              {{ t('contact.send_email') }}
            </a>
            <a :href="whatsappLink" 
               target="_blank"
               class="btn-whatsapp w-full justify-center">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
              {{ t('contact.open_whatsapp') }}
            </a>
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

const whatsappLink = computed(() => {
  const phone = t('contact.values.phone').replace('+', '')
  const message = encodeURIComponent('Hola! Vi tu portfolio y me gustaría hablar contigo.')
  return `https://wa.me/${phone}?text=${message}`
})
</script>