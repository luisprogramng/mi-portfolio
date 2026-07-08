<template>
  <div class="min-h-screen bg-dark-400">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />  <!-- ✅ CONTACT ESTÁ AQUÍ -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'  // ✅ IMPORTADO
import Footer from './components/Footer.vue'
</script>