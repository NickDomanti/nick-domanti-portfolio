import AnimateClassSpeed from './animate-class-speed'

export default class AnimateClass {
  private noAnimation: boolean;

  public constructor(
    public className?: string,
    public speed: AnimateClassSpeed = AnimateClassSpeed.Normal) {
      this.noAnimation = className == null;
  }

  public toString() {
    if (this.noAnimation) return '';

    const prefix = 'animate__animated'

    switch (this.speed) {
      case AnimateClassSpeed.Faster:
        return `${prefix} ${this.className} animate__faster`
      case AnimateClassSpeed.Fast:
        return `${prefix} ${this.className} animate__fast`
      default:
        return `${prefix} ${this.className}`
    }
  }
}