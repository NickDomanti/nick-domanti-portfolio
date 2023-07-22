import AnimateClassSpeed from './animate-class-speed'

export default class AnimateClass {
  public constructor(
    public animation?: string,
    public speed: AnimateClassSpeed = AnimateClassSpeed.Normal) {
  }

  public toString() {
    if (this.animation == null) return ''

    let ret = `animate__animated animate__${this.animation}`

    switch (this.speed) {
      case AnimateClassSpeed.Slower:
        ret += ' animate__slower'
        break
      case AnimateClassSpeed.Slow:
        ret += ' animate__slow'
        break
      case AnimateClassSpeed.Fast:
        ret += ' animate__fast'
        break
      case AnimateClassSpeed.Faster:
        ret += ' animate__faster'
        break
    }

    return ret
  }
}