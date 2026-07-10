<template>
  <section id="contacto" class="py-16 md:py-24 relative">
    <div class="container-custom">
      <h2 class="section-title">
        <span class="highlight">Contáctame</span>
      </h2>
      <p class="section-subtitle">¿Tienes un proyecto? Hablemos</p>

      <div class="max-w-2xl mx-auto">
        <div class="glass-card p-6 md:p-8">
          <!-- Información de contacto -->
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

          <!-- Botones -->
          <div class="flex flex-col gap-3">
            <a href="mailto:luisprogramming2@gmail.com" 
               class="btn-primary w-full justify-center">
              <font-awesome-icon icon="envelope" class="mr-2" />
              Enviar Email
            </a>
            <a href="https://wa.me/5354556198?text=Hola%21%20Vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo." 
               target="_blank"
               class="btn-whatsapp w-full justify-center">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Componente simplificado para prueba
console.log('📞 Contact component loaded!')
</script>