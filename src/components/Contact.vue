<template>
  <!-- ===== SECCIÓN DE CONTACTO - VERSIÓN MÍNIMA ===== -->
  <section id="contacto" style="padding: 80px 20px; background: #0A0A1A; border-top: 4px solid #00D4FF;">
    <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
      
      <!-- TÍTULO -->
      <h1 style="font-size: 48px; font-weight: 900; background: linear-gradient(135deg, #00D4FF, #7B61FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 16px;">
        📞 CONTACTO
      </h1>
      
      <p style="font-size: 20px; color: #94A3B8; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">
        ¿Tienes un proyecto? Hablemos.
      </p>

      <!-- TARJETA DE CONTACTO -->
      <div style="max-width: 400px; margin: 0 auto; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 30px;">
        
        <!-- Email -->
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 24px;">📧</span>
          <span style="color: #E2E8F0; font-size: 16px;">luisprogramming2@gmail.com</span>
        </div>

        <!-- Teléfono -->
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 24px;">📱</span>
          <span style="color: #E2E8F0; font-size: 16px;">+53 54556198</span>
        </div>

        <!-- Ubicación -->
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0;">
          <span style="font-size: 24px;">📍</span>
          <span style="color: #E2E8F0; font-size: 16px;">Matanzas, Cuba</span>
        </div>

        <!-- Botón WhatsApp -->
        <a href="https://wa.me/5354556198" target="_blank" 
           style="display: inline-block; margin-top: 20px; padding: 14px 40px; background: #25D366; color: white; font-weight: 600; border-radius: 12px; text-decoration: none; transition: all 0.3s;">
          💬 Enviar WhatsApp
        </a>
      </div>

      <!-- 🔥 TEXTO DE CONFIRMACIÓN -->
      <p style="margin-top: 30px; color: #00D4FF; font-size: 14px; font-weight: 600;">
        ✅ Contacto cargado correctamente
      </p>
    </div>
  </section>
</template>

<script setup>
console.log('🔥 Contact component loaded successfully!')
</script>
