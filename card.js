export default class Card {
  constructor(shape, color, value) {
    this.shape = shape;
    this.color = color;
    this.value = value;
  }

  get getshapes() {
    return this.shape;
  }

  set setshapes(s) {
    this.shape = s;
  }
  get color() {
    return this.shape;
  }

  set color(s) {
    this.shape = s;
  }
  get shapes() {
    return this.shape;
  }

  set shapes(s) {
    this.shape = s;
  }
}
