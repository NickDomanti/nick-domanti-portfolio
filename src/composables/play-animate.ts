import AnimateClass from '@/models/animate-class'

export function usePlayAnimate(el: HTMLElement, animation: AnimateClass, delay = '0s') {
  return new Promise<void>(resolve => {
    const classes = animation.toString().split(' ')
  
    el.style.animationDelay = delay
    el.classList.add(...classes)
  
    el.addEventListener('animationend', () => {
      el.style.animationDelay = ''
      el.classList.remove(...classes)
      resolve()
    })
  })
}