export default class Card {
  constructor(shape, value) {
    this.shape = shape;
    this.value = value;
  }

  toString() {
    let suit = "";
    let number = "";
    switch (this.shape) {
      case "♦":
        suit = "Tiles";
        break;
      case "♥":
        suit = "Hearts";
        break;
      case "♣":
        suit = "Clovers";
        break;
      case "♠":
        suit = "Pikes";
        break;
      default:
        break;
    }
    switch (this.value) {
      case 1:
        number = "ace";
        break;
      case 2:
        number = "two";
        break;
      case 3:
        number = "three";
        break;
      case 4:
        number = "four";
        break;
      case 5:
        number = "five";
        break;
      case 6:
        number = "six";
        break;
      case 7:
        number = "seven";
        break;
      case 8:
        number = "eight";
        break;
      case 9:
        number = "nine";
        break;
      case 10:
        number = "ten";
        break;
      case 11:
        number = "J";
        break;
      case 12:
        number = "Q";
        break;
      case 13:
        number = "K";
        break;

      default:
        break;
    }
    return number + "_" + suit;
  }
}
