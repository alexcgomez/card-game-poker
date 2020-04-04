class Card {
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
  parsePoker() {
    let suit = "";
    switch (true) {
      case this.shape == "♠":
        suit = "spades";
        break;
      case this.shape == "♣":
        suit = "clubs";
        break;
      case this.shape == "♥":
        suit = "hearts";
        break;
      case this.shape == "♦":
        suit = "diamonds";
        break;
      default:
        suit = this.shape;
        console.log("no se parsea suit es un:" + this.shape);
        break;
    }
    let point = 0;
    switch (true) {
      case this.value == "1":
        point = "A";
        break;
      case this.value == "11":
        point = "J";
        break;
      case this.value == "12":
        point = "Q";
        break;
      case this.value == "13":
        point = "K";
        break;
      default:
        point = this.value;
        console.log("no se parsea point es un:" + this.value);
        break;
    }
    this.shape = suit;
    this.value = point;
  }
}

export default Card;
