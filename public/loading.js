// Set loading theme
let theme = localStorage.getItem('nd-uiSettings-theme') || 'auto'
if (theme === 'auto') theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
document.querySelector('.nd-loading').classList.add('nd-loading--' + theme)

// Handle loading smoothly
function handleAnimationIteration() {
  if (!window.VUE_IS_READY) return
  console.log('[ND] Website has loaded')
  this.classList.remove('nd-rotating')
  setTimeout(() => {
    this.classList.add('animate__animated', 'animate__fadeOutUp')
    this.addEventListener('animationend', startVueApp)
  }, 500)
}

function startVueApp() {
  document.dispatchEvent(new Event('nd-start-vue-app'))
}

window.VUE_IS_READY = false

document.querySelector('.nd-loading img').addEventListener('animationiteration', handleAnimationIteration)