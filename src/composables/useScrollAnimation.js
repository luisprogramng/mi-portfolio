import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation() {
  let observer = null

  const observeElements = () => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up')
          entry.target.style.opacity = '1'
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => {
      el.style.opacity = '0'
      observer.observe(el)
    })
  }

  onMounted(() => {
    // Esperar un momento para que los componentes se monten
    setTimeout(() => {
      observeElements()
    }, 100)
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}