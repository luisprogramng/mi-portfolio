<template>
  <div>
    <iframe ref="cvIframe" style="position: absolute; left: -9999px; top: 0; width: 794px; height: 1123px; border: none;"></iframe>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const { t } = useI18n()
const cvIframe = ref(null)
const isGenerating = ref(false)

// ========== DATOS ==========
const aboutText = computed(() => {
  try {
    return t('about.story')
  } catch {
    return 'Desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web modernas y escalables.'
  }
})

const experienceData = computed(() => {
  try {
    const items = t('experience.items')
    return Array.isArray(items) && items.length > 0 ? items : []
  } catch {
    return []
  }
})

const projectsData = computed(() => {
  try {
    const items = t('projects.items')
    return Array.isArray(items) && items.length > 0 ? items : []
  } catch {
    return []
  }
})

const contactData = computed(() => {
  try {
    return {
      email: t('contact.values.email'),
      phone: t('contact.values.phone'),
      location: t('contact.values.location')
    }
  } catch {
    return {
      email: 'luisprogramming2@gmail.com',
      phone: '+53 54556198',
      location: 'Matanzas, Cuba'
    }
  }
})

const skillCategories = [
  {
    key: 'frontend',
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Next.js', level: 80 },
    ]
  },
  {
    key: 'backend',
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'GraphQL', level: 80 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ]
  },
  {
    key: 'tools',
    name: 'Herramientas',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'CI/CD', level: 75 },
    ]
  },
  {
    key: 'mobile',
    name: 'Móvil & Otros',
    icon: '📱',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 65 },
      { name: 'Web3', level: 70 },
      { name: 'Firebase', level: 85 },
      { name: 'Supabase', level: 70 },
    ]
  }
]

const softSkills = [
  { name: 'Metodologías Ágiles', icon: '🔄' },
  { name: 'Code Review', icon: '📝' },
  { name: 'Documentación Técnica', icon: '📄' },
  { name: 'Trabajo en Equipo', icon: '👥' },
  { name: 'Comunicación Efectiva', icon: '💬' },
  { name: 'Resolución de Problemas', icon: '🧩' }
]

// ========== GENERAR HTML DEL CV ==========
const generateCVHTML = () => {
  // Generar experiencia
  let experienceHTML = ''
  experienceData.value.forEach(exp => {
    experienceHTML += `
      <div class="exp-item">
        <div class="exp-header">
          <div>
            <h3>${exp.position}</h3>
            <p class="company">${exp.company}</p>
          </div>
          <span class="period">${exp.period}</span>
        </div>
        <p class="exp-description">${exp.description}</p>
        <div class="tech-tags">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `
  })

  // Generar proyectos
  let projectsHTML = ''
  projectsData.value.forEach(project => {
    projectsHTML += `
      <div class="project-item">
        <div class="project-header">
          <h3>${project.title}</h3>
          <span class="project-year">${project.year || '2024'}</span>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        ${project.metrics ? `<p class="metrics">📊 ${project.metrics}</p>` : ''}
      </div>
    `
  })

  // Generar habilidades con barras
  let skillsHTML = ''
  skillCategories.forEach(cat => {
    skillsHTML += `
      <div class="skill-category">
        <h4>${cat.icon} ${cat.name}</h4>
        <ul>
          ${cat.skills.map(skill => `
            <li>
              <span class="skill-name">${skill.name}</span>
              <div class="skill-bar-container">
                <div class="skill-bar">
                  <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
                </div>
                <span class="skill-percent">${skill.level}%</span>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `
  })

  // Generar soft skills
  let softSkillsHTML = softSkills.map(skill => 
    `<span class="soft-skill">${skill.icon} ${skill.name}</span>`
  ).join('')

  // URL de la foto - usando base64 para evitar problemas de CORS
  const photoUrl = '/src/assets/profile.png'

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CV - Luis Albalat</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0A0A1A;
          padding: 20px;
          color: #E2E8F0;
          line-height: 1.6;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
        }
        
        .cv-container {
          max-width: 794px;
          width: 100%;
          margin: 0 auto;
          background: linear-gradient(145deg, #0A0A1A 0%, #12122A 100%);
          padding: 35px 30px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 60px rgba(0, 212, 255, 0.04);
          position: relative;
          overflow: hidden;
        }
        
        .cv-container::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -20%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .cv-container::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -20%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(123, 97, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        
        /* ===== ENCABEZADO ===== */
        .header {
          display: flex;
          align-items: center;
          gap: 25px;
          padding-bottom: 25px;
          border-bottom: 2px solid rgba(0, 212, 255, 0.1);
          margin-bottom: 25px;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }
        
        .header-avatar {
          flex-shrink: 0;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 3px solid #00D4FF;
          box-shadow: 0 0 35px rgba(0, 212, 255, 0.12), inset 0 0 35px rgba(0, 212, 255, 0.05);
          overflow: hidden;
          background: #1a1a2e;
          position: relative;
        }
        
        .header-avatar::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(123, 97, 255, 0.05));
          pointer-events: none;
        }
        
        .header-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .header-info {
          flex: 1;
          min-width: 200px;
        }
        
        .header-info h1 {
          font-size: 32px;
          font-weight: 900;
          background: linear-gradient(135deg, #00D4FF 0%, #7B61FF 40%, #FF6B9D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2px;
          letter-spacing: -0.5px;
        }
        
        .header-info .subtitle {
          font-size: 16px;
          color: #7B61FF;
          font-weight: 500;
          margin-bottom: 6px;
          letter-spacing: 0.3px;
        }
        
        .header-info .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 11.5px;
          color: #94A3B8;
        }
        
        .header-info .contact-info span {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.03);
          padding: 3px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 11px;
        }
        
        .header-info .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
          font-size: 10.5px;
        }
        
        .header-info .social-links span {
          color: #00D4FF;
          opacity: 0.7;
          background: rgba(0, 212, 255, 0.04);
          padding: 2px 10px;
          border-radius: 6px;
          border: 1px solid rgba(0, 212, 255, 0.05);
        }
        
        .available-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.12);
          color: #00D4FF;
          padding: 3px 14px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 600;
          margin-top: 4px;
          letter-spacing: 0.5px;
        }
        
        /* ===== SECCIONES ===== */
        .section {
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        
        .section-title {
          font-size: 13px;
          font-weight: 700;
          color: #00D4FF;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 6px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .section-title::before {
          content: '';
          width: 3px;
          height: 16px;
          background: linear-gradient(to bottom, #00D4FF, #7B61FF);
          border-radius: 2px;
        }
        
        .profile-text {
          font-size: 12px;
          color: #CBD5E0;
          line-height: 1.8;
          padding: 0 2px;
        }
        
        /* ===== EXPERIENCIA ===== */
        .exp-item {
          margin-bottom: 10px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          position: relative;
          transition: all 0.3s ease;
        }
        
        .exp-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #00D4FF, #7B61FF);
          border-radius: 2px;
          opacity: 0.25;
        }
        
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 2px;
        }
        
        .exp-header h3 {
          font-size: 13px;
          font-weight: 600;
          color: #E2E8F0;
        }
        
        .exp-header .company {
          font-size: 11.5px;
          color: #7B61FF;
          font-weight: 500;
        }
        
        .exp-header .period {
          font-size: 10px;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.04);
          padding: 2px 10px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          white-space: nowrap;
        }
        
        .exp-description {
          font-size: 11px;
          color: #94A3B8;
          margin-top: 2px;
          line-height: 1.6;
        }
        
        /* ===== PROYECTOS ===== */
        .project-item {
          margin-bottom: 8px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          position: relative;
        }
        
        .project-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #7B61FF, #FF6B9D);
          border-radius: 2px;
          opacity: 0.25;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }
        
        .project-header h3 {
          font-size: 12.5px;
          font-weight: 600;
          color: #E2E8F0;
        }
        
        .project-year {
          font-size: 9px;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.04);
          padding: 2px 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          white-space: nowrap;
        }
        
        .project-description {
          font-size: 10.5px;
          color: #94A3B8;
          margin-top: 2px;
          line-height: 1.5;
        }
        
        .metrics {
          font-size: 10px;
          color: #FF6B9D;
          margin-top: 3px;
          font-weight: 500;
          background: rgba(255, 107, 157, 0.05);
          padding: 2px 10px;
          border-radius: 6px;
          display: inline-block;
          border: 1px solid rgba(255, 107, 157, 0.06);
        }
        
        /* ===== TECH TAGS ===== */
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 4px;
        }
        
        .tech-tag {
          background: rgba(0, 212, 255, 0.05);
          padding: 1px 10px;
          border-radius: 10px;
          font-size: 8.5px;
          color: #00D4FF;
          border: 1px solid rgba(0, 212, 255, 0.05);
          font-weight: 500;
        }
        
        /* ===== SKILLS CON BARRAS ===== */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        
        .skill-category {
          background: rgba(255, 255, 255, 0.02);
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        
        .skill-category h4 {
          font-size: 11px;
          font-weight: 600;
          color: #7B61FF;
          margin-bottom: 6px;
          letter-spacing: 0.3px;
        }
        
        .skill-category ul {
          list-style: none;
          padding: 0;
        }
        
        .skill-category ul li {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 3px;
        }
        
        .skill-name {
          min-width: 60px;
          font-size: 9.5px;
          font-weight: 500;
          color: #E2E8F0;
        }
        
        .skill-bar-container {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .skill-bar {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          background: linear-gradient(90deg, #00D4FF, #7B61FF);
          transition: width 1s ease;
        }
        
        .skill-percent {
          font-size: 9px;
          color: #94A3B8;
          min-width: 28px;
          text-align: right;
          font-weight: 600;
        }
        
        /* ===== SOFT SKILLS ===== */
        .soft-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        
        .soft-skill {
          background: rgba(123, 97, 255, 0.05);
          padding: 3px 12px;
          border-radius: 14px;
          font-size: 9.5px;
          color: #CBD5E0;
          border: 1px solid rgba(123, 97, 255, 0.05);
          font-weight: 500;
        }
        
        /* ===== IDIOMAS ===== */
        .languages {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 11px;
          color: #CBD5E0;
        }
        
        .languages strong {
          color: #E2E8F0;
        }
        
        .language-item {
          background: rgba(255, 255, 255, 0.02);
          padding: 3px 12px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        
        /* ===== FOOTER ===== */
        .footer {
          margin-top: 20px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          font-size: 8.5px;
          color: #4A5568;
          position: relative;
          z-index: 1;
          letter-spacing: 0.3px;
        }
        
        .footer p {
          margin-bottom: 1px;
        }
        
        .footer .highlight {
          color: #00D4FF;
          font-weight: 500;
        }
        
        /* ===== RESPONSIVE ===== */
        @media (max-width: 600px) {
          .header {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          .header-info .contact-info {
            justify-content: center;
          }
          .header-info .social-links {
            justify-content: center;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .cv-container {
            padding: 20px 16px;
          }
          .header-avatar {
            width: 90px;
            height: 90px;
          }
          .header-info h1 {
            font-size: 26px;
          }
        }
        
        /* ===== PRINT ===== */
        @media print {
          body {
            background: #0A0A1A;
            padding: 0;
            margin: 0;
          }
          .cv-container {
            border-radius: 0;
            box-shadow: none;
            padding: 25px 20px;
            background: #0A0A1A;
          }
          .cv-container::before,
          .cv-container::after {
            display: none;
          }
          .header-avatar {
            border-color: #00D4FF;
          }
          .header-info h1 {
            -webkit-text-fill-color: #00D4FF;
            color: #00D4FF;
          }
          .exp-item, .project-item, .skill-category {
            background: rgba(255, 255, 255, 0.02);
            border-color: rgba(255, 255, 255, 0.04);
          }
          .tech-tag {
            background: rgba(0, 212, 255, 0.06);
            color: #00D4FF;
          }
          .soft-skill {
            background: rgba(123, 97, 255, 0.05);
            color: #CBD5E0;
          }
          .section-title {
            color: #00D4FF;
          }
          .skill-bar-fill {
            background: linear-gradient(90deg, #00D4FF, #7B61FF);
          }
          .skill-bar {
            background: rgba(255, 255, 255, 0.05);
          }
          .available-badge {
            background: rgba(0, 212, 255, 0.08);
            border-color: rgba(0, 212, 255, 0.12);
          }
        }
      </style>
    </head>
    <body>
      <div class="cv-container">
        <!-- ===== ENCABEZADO ===== -->
        <div class="header">
          <div class="header-avatar">
            <img src="${photoUrl}" alt="Luis Albalat" />
          </div>
          <div class="header-info">
            <h1>Luis Albalat</h1>
            <p class="subtitle">Desarrollador Full Stack</p>
            <div class="contact-info">
              <span>📧 ${contactData.value.email}</span>
              <span>📱 ${contactData.value.phone}</span>
              <span>📍 ${contactData.value.location}</span>
            </div>
            <div class="social-links">
              <span>🐙 github.com/tuusuario</span>
              <span>💼 linkedin.com/in/tuusuario</span>
            </div>
            <div class="available-badge">✅ Disponible para trabajar</div>
          </div>
        </div>

        <!-- ===== PERFIL PROFESIONAL ===== -->
        <div class="section">
          <h2 class="section-title">Perfil Profesional</h2>
          <p class="profile-text">${aboutText.value}</p>
        </div>

        <!-- ===== EXPERIENCIA ===== -->
        <div class="section">
          <h2 class="section-title">Experiencia Profesional</h2>
          ${experienceHTML}
        </div>

        <!-- ===== PROYECTOS ===== -->
        <div class="section">
          <h2 class="section-title">Proyectos Destacados</h2>
          ${projectsHTML}
        </div>

        <!-- ===== HABILIDADES ===== -->
        <div class="section">
          <h2 class="section-title">Habilidades Técnicas</h2>
          <div class="skills-grid">${skillsHTML}</div>
        </div>

        <!-- ===== SOFT SKILLS ===== -->
        <div class="section">
          <h2 class="section-title">Soft Skills</h2>
          <div class="soft-skills">${softSkillsHTML}</div>
        </div>

        <!-- ===== IDIOMAS ===== -->
        <div class="section">
          <h2 class="section-title">Idiomas</h2>
          <div class="languages">
            <span class="language-item"><strong>🇪🇸 Español:</strong> Nativo</span>
            <span class="language-item"><strong>🇬🇧 Inglés:</strong> Intermedio - Avanzado (B2)</span>
          </div>
        </div>

        <!-- ===== FOOTER ===== -->
        <div class="footer">
          <p>📄 Referencias disponibles bajo solicitud</p>
          <p>🔗 <span class="highlight">GitHub:</span> github.com/tuusuario | <span class="highlight">LinkedIn:</span> linkedin.com/in/tuusuario</p>
          <p>📅 CV generado automáticamente desde mi portfolio</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// ========== GENERAR PDF ==========
const generateCV = async () => {
  if (isGenerating.value) return
  isGenerating.value = true

  try {
    await nextTick()
    
    const iframe = cvIframe.value
    if (!iframe) {
      console.error('Iframe no encontrado')
      isGenerating.value = false
      return
    }

    // Escribir el HTML en el iframe
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(generateCVHTML())
    doc.close()

    // Esperar a que cargue la imagen
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Capturar el contenido del iframe
    const element = iframe.contentDocument.body
    if (!element) {
      console.error('Elemento no encontrado en iframe')
      isGenerating.value = false
      return
    }

    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#0A0A1A',
      logging: false,
      width: 794,
      height: element.scrollHeight,
      windowWidth: 794,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        // Asegurar que las imágenes se carguen
        const images = clonedDoc.querySelectorAll('img')
        images.forEach(img => {
          img.crossOrigin = 'anonymous'
        })
      }
    })

    // Crear PDF
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = 210
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('cv-luis-albalat.pdf')

  } catch (error) {
    console.error('Error al generar el CV:', error)
    alert('Hubo un error al generar el CV. Por favor, intenta de nuevo.')
  } finally {
    isGenerating.value = false
  }
}

defineExpose({ generateCV, isGenerating })
</script>