import AnimateClassSpeed from "./animate-class-speed"

export default class AnimateClass {
  constructor(
    public className: string,
    public speed: AnimateClassSpeed = AnimateClassSpeed.Normal) {
  }

  toString() {
    switch (this.speed) {
      case AnimateClassSpeed.Faster:
        return `${this.className} animate__faster`
      case AnimateClassSpeed.Fast:
        return `${this.className} animate__fast`
      default:
        return this.className
    }
  }
}