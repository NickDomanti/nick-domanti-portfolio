import AnimateClassSpeed from './animate-class-speed'

export default class AnimateClass {
  public constructor(
    public animation?: string,
    public speed = AnimateClassSpeed.Normal,
    public infinite = false) {
  }

  public getClasses() {
    if (this.animation == null) return []

    const ret = ['animate__animated', 'animate__' + this.animation]

    switch (this.speed) {
      case AnimateClassSpeed.Slower:
        ret.push('animate__slower')
        break
      case AnimateClassSpeed.Slow:
        ret.push('animate__slow')
        break
      case AnimateClassSpeed.Fast:
        ret.push('animate__fast')
        break
      case AnimateClassSpeed.Faster:
        ret.push('animate__faster')
        break
    }

    if (this.infinite) ret.push('animate__infinite')

    return ret
  }

  public toString() {
    return this.getClasses().join(' ')
  }
}