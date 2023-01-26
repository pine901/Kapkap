import Vue from 'vue'

const loadImage = (el: HTMLElement) => {
  const imageElement = el.nextElementSibling as HTMLImageElement

  imageElement.addEventListener('load', () => {
    setTimeout(() => imageElement.classList.add('loaded'), 100)
  })
  imageElement.addEventListener('error', () => {
    // @ts-ignore
    imageElement.src = el.dataset.src
    // @ts-ignore
    el.srcset = el.dataset.src
  })

  // @ts-ignore
  el.srcset = el.dataset.srcset
  // @ts-ignore
  imageElement.src = el.dataset.srcset
  // @ts-ignore
  imageElement.alt = el.dataset.alt
}

Vue.directive('lazy-image', {
  update (val) {
    loadImage(val)
  },

  inserted (el, binding) {
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(el)
          observer.unobserve(el)
        }
      })
    }
    const createObserver = () => {
      const options = {
        root: null,
        threshold: 0,
        rootMargin: binding.value ? String(binding.value) : '0px'
      }
      const imageObserver = new IntersectionObserver(handleIntersect, options)
      imageObserver.observe(el)
    }

    if (window.IntersectionObserver) {
      createObserver()
    } else {
      loadImage(el)
    }
  }
})
