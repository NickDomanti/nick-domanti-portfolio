import { AnimateClass } from '@/types/animate-class'

export function usePlayAnimate(
  el: HTMLElement,
  animation: AnimateClass,
  delay = '0s'
) {
  return new Promise<void>((resolve) => {
    const classes = animation.getClasses()

    el.style.animationDelay = delay
    el.classList.add(...classes)

    el.addEventListener('animationend', () => {
      el.style.animationDelay = ''
      el.classList.remove(...classes)
      resolve()
    })
  })
}
