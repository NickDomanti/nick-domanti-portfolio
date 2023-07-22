import AnimateClassSpeed from './animate-class-speed'

export default class AnimateClass {
  public constructor(
    public className?: string,
    public speed: AnimateClassSpeed = AnimateClassSpeed.Normal) {
  }

  public toString() {
    if (this.className == null) return '';

    const prefix = 'animate__animated animate__'

    switch (this.speed) {
      case AnimateClassSpeed.Faster:
        return `${prefix}${this.className} animate__faster`
      case AnimateClassSpeed.Fast:
        return `${prefix}${this.className} animate__fast`
      default:
        return `${prefix}${this.className}`
    }
  }
}