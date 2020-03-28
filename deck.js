import Card from "./card.js";

export default class Deck {
  constructor() {
    this.ace_Pikes = new Card("♠", "A");
    this.two_Pikes = new Card("♠", "2");
    this.three_Pikes = new Card("♠", "3");
    this.four_Pikes = new Card("♠", "4");
    this.five_Pikes = new Card("♠", "5");
    this.six_Pikes = new Card("♠", "6");
    this.seven_Pikes = new Card("♠", "7");
    this.eight_Pikes = new Card("♠", "8");
    this.nine_Pikes = new Card("♠", "9");
    this.ten_Pikes = new Card("♠", "10");
    this.J_Pikes = new Card("♠", "J");
    this.Q_Pikes = new Card("♠", "Q");
    this.K_Pikes = new Card("♠", "K");

    this.ace_Clovers = new Card("♣", "A");
    this.two_Clovers = new Card("♣", "2");
    this.three_Clovers = new Card("♣", "3");
    this.four_Clovers = new Card("♣", "4");
    this.five_Clovers = new Card("♣", "5");
    this.six_Clovers = new Card("♣", "6");
    this.seven_Clovers = new Card("♣", "7");
    this.eight_Clovers = new Card("♣", "8");
    this.nine_Clovers = new Card("♣", "9");
    this.ten_Clovers = new Card("♣", "10");
    this.J_Clovers = new Card("♣", "J");
    this.Q_Clovers = new Card("♣", "Q");
    this.K_Clovers = new Card("♣", "K");

    this.ace_Hearts = new Card("♥", "A");
    this.two_Hearts = new Card("♥", "2");
    this.three_Hearts = new Card("♥", "3");
    this.four_Hearts = new Card("♥", "4");
    this.five_Hearts = new Card("♥", "5");
    this.six_Hearts = new Card("♥", "6");
    this.seven_Hearts = new Card("♥", "7");
    this.eight_Hearts = new Card("♥", "8");
    this.nine_Hearts = new Card("♥", "9");
    this.ten_Hearts = new Card("♥", "10");
    this.J_Hearts = new Card("♥", "J");
    this.Q_Hearts = new Card("♥", "Q");
    this.K_Hearts = new Card("♥", "K");

    this.ace_Tiles = new Card("♦", "A");
    this.two_Tiles = new Card("♦", "2");
    this.three_Tiles = new Card("♦", "3");
    this.four_Tiles = new Card("♦", "4");
    this.five_Tiles = new Card("♦", "5");
    this.six_Tiles = new Card("♦", "6");
    this.seven_Tiles = new Card("♦", "7");
    this.eight_Tiles = new Card("♦", "8");
    this.nine_Tiles = new Card("♦", "9");
    this.ten_Tiles = new Card("♦", "10");
    this.J_Tiles = new Card("♦", "J");
    this.Q_Tiles = new Card("♦", "Q");
    this.K_Tiles = new Card("♦", "K");
  }

  deal() {
    // Guardo los valores del objeto en un array de cartas (un mazo)
    const deck = Object.values(this);
    // Saco una carta aleatoria
    const card = deck[getRandomInt(0, 51)];
    // Elimino esa carta del mazo
    deck.splice(deck.indexOf(card), 1);
    // La reparto
    return card;
  }
}

// Obtengo numero entero aleatorio
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
