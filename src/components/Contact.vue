<template>
  <section id="contacto" class="py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">{{ t('contact.title') }}</h2>
      <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Información de contacto -->
        <div class="space-y-6">
          <div class="glass-card p-8">
            <h3 class="text-2xl font-display font-bold text-gradient mb-6">{{ t('contact.direct') }}</h3>
            
            <div class="space-y-4">
              <div v-for="(contact, index) in contacts" :key="index"
                   class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50/50 transition-all group
                          dark:hover:bg-glass">
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
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ t('contact.follow') }}</p>
              <div class="flex gap-4">
                <a v-for="social in socials" :key="social.name"
                   :href="social.link" target="_blank"
                   class="p-3 bg-gray-100/50 hover:bg-gray-200/50 rounded-lg transition-all hover:shadow-md
                          dark:glass-card dark:hover:border-primary">
                  <font-awesome-icon :icon="['fab', social.icon]" class="text-xl text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div class="glass-card p-8">
          <div class="mb-6">
            <h3 class="text-xl font-display font-bold text-gradient mb-2">{{ t('contact.send') }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('contact.choose') }}</p>
          </div>

          <div class="flex gap-3 mb-6">
            <button @click="contactMethod = 'email'" 
                    :class="[
                      'flex-1 px-4 py-2 rounded-lg font-medium transition-all',
                      contactMethod === 'email' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100/50 text-gray-600 hover:bg-gray-200/50 dark:glass-card dark:text-gray-400 dark:hover:border-primary'
                    ]">
              <font-awesome-icon icon="envelope" class="mr-2" />
              {{ t('contact.email') }}
            </button>
            <button @click="contactMethod = 'whatsapp'" 
                    :class="[
                      'flex-1 px-4 py-2 rounded-lg font-medium transition-all',
                      contactMethod === 'whatsapp' 
                        ? 'bg-[#25D366] text-white' 
                        : 'bg-gray-100/50 text-gray-600 hover:bg-gray-200/50 dark:glass-card dark:text-gray-400 dark:hover:border-[#25D366]'
                    ]">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
              {{ t('contact.whatsapp') }}
            </button>
          </div>

          <!-- Formulario Email -->
          <form v-if="contactMethod === 'email'" @submit.prevent="handleEmailSubmit" class="space-y-6">
            <div>
              <label class="block text-sm text-gray-500 dark:text-gray-400 mb-2">{{ t('contact.name') }}</label>
              <input 
                type="text" 
                v-model="emailForm.name" 
                :placeholder="t('contact.name')" 
                required
                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg text-gray-800 
                       focus:border-primary focus:outline-none transition-all
                       dark:bg-dark-400/50 dark:border-glass-border dark:text-gray-200"
              >
            </div>

            <div>
              <label class="block text-sm text-gray-500 dark:text-gray-400 mb-2">{{ t('contact.email_label') }}</label>
              <input 
                type="email" 
                v-model="emailForm.email" 
                placeholder="tu@email.com" 
                required
                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg text-gray-800 
                       focus:border-primary focus:outline-none transition-all
                       dark:bg-dark-400/50 dark:border-glass-border dark:text-gray-200"
              >
            </div>

            <div>
              <label class="block text-sm text-gray-500 dark:text-gray-400 mb-2">{{ t('contact.message') }}</label>
              <textarea 
                v-model="emailForm.message" 
                :placeholder="t('contact.message')" 
                required 
                rows="5"
                class="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-lg text-gray-800 
                       focus:border-primary focus:outline-none transition-all resize-none
                       dark:bg-dark-400/50 dark:border-glass-border dark:text-gray-200"
              ></textarea>
            </div>

            <button type="submit" class="btn-primary w-full group">
              <font-awesome-icon icon="paper-plane" class="mr-2" />
              {{ t('contact.send_email') }}
              <font-awesome-icon icon="arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <!-- WhatsApp -->
          <div v-else class="space-y-6">
            <div class="bg-[#25D366]/5 border border-[#25D366]/20 rounded-lg p-6 text-center
                        dark:bg-[#25D366]/10">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-6xl text-[#25D366] mb-4" />
              <h4 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{{ t('contact.prefer_whatsapp') }}</h4>
              <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {{ t('contact.whatsapp_description') }}
              </p>
              <a :href="whatsappLink" target="_blank" class="btn-whatsapp inline-block">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
                {{ t('contact.open_whatsapp') }}
              </a>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-3">
                {{ t('contact.number') }}
              </p>
            </div>

            <div class="text-center text-gray-500 dark:text-gray-400 text-sm">
              <p>O si prefieres, también puedes enviarme un email</p>
              <button @click="contactMethod = 'email'" class="text-primary hover:underline mt-1">
                {{ t('contact.back_to_email') }}
              </button>
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

const contactMethod = ref('email')

const emailForm = ref({
  name: '',
  email: '',
  message: ''
})

const whatsappNumber = '+5354556198'
const whatsappLink = computed(() => {
  const message = 'Hola! Vi tu portfolio y me gustaría hablar contigo sobre un proyecto.'
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
})

const contacts = [
  { icon: 'envelope', key: 'email' },
  { icon: 'phone', key: 'phone' },
  { icon: 'location-dot', key: 'location' },
  { icon: 'clock', key: 'availability' },
]

const socials = [
  { name: 'Twitter', icon: 'twitter', link: '#' },
  { name: 'LinkedIn', icon: 'linkedin', link: '#' },
  { name: 'GitHub', icon: 'github', link: '#' },
  { name: 'YouTube', icon: 'youtube', link: '#' },
]

const handleEmailSubmit = () => {
  alert(t('contact.success'))
  emailForm.value = { name: '', email: '', message: '' }
}
</script>