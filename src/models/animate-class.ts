export default class AnimateClass {
  constructor(
    public className: string,
    public speed: AnimateClassSpeed = AnimateClassSpeed.Normal) {
  }

  toString() {

  }
}

enum AnimateClassSpeed {
  Normal,
  Fast,
  Faster
}