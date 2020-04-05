import Card from "./card";
import Poker from "./poker";

// Para facilitar el codigo se ha hecho la siguiente asignación:
const value = {
  ACE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  J: 11,
  Q: 12,
  K: 13,
};

class Deck {
  constructor() {
    let imgDeck = "";

    // Elemento HTML para mostrar mazo
    this.imgDeck = window.Poker.getBackImage(100, "#2E319C", "#7A7BB8");
    this.imgDeck.className = "imgDeck";

    // Inicializo Cartas
    this.ace_Pikes = new Card("♠", value.ACE);
    this.two_Pikes = new Card("♠", value.TWO);
    this.three_Pikes = new Card("♠", value.THREE);
    this.four_Pikes = new Card("♠", value.FOUR);
    this.five_Pikes = new Card("♠", value.FIVE);
    this.six_Pikes = new Card("♠", value.SIX);
    this.seven_Pikes = new Card("♠", value.SEVEN);
    this.eight_Pikes = new Card("♠", value.EIGHT);
    this.nine_Pikes = new Card("♠", value.NINE);
    this.ten_Pikes = new Card("♠", value.TEN);
    this.J_Pikes = new Card("♠", value.J);
    this.Q_Pikes = new Card("♠", value.Q);
    this.K_Pikes = new Card("♠", value.K);
    this.ace_Clovers = new Card("♣", value.ACE);
    this.two_Clovers = new Card("♣", value.TWO);
    this.three_Clovers = new Card("♣", value.THREE);
    this.four_Clovers = new Card("♣", value.FOUR);
    this.five_Clovers = new Card("♣", value.FIVE);
    this.six_Clovers = new Card("♣", value.SIX);
    this.seven_Clovers = new Card("♣", value.SEVEN);
    this.eight_Clovers = new Card("♣", value.EIGHT);
    this.nine_Clovers = new Card("♣", value.NINE);
    this.ten_Clovers = new Card("♣", value.TEN);
    this.J_Clovers = new Card("♣", value.J);
    this.Q_Clovers = new Card("♣", value.Q);
    this.K_Clovers = new Card("♣", value.K);
    this.ace_Hearts = new Card("♥", value.ACE);
    this.two_Hearts = new Card("♥", value.TWO);
    this.three_Hearts = new Card("♥", value.THREE);
    this.four_Hearts = new Card("♥", value.FOUR);
    this.five_Hearts = new Card("♥", value.FIVE);
    this.six_Hearts = new Card("♥", value.SIX);
    this.seven_Hearts = new Card("♥", value.SEVEN);
    this.eight_Hearts = new Card("♥", value.EIGHT);
    this.nine_Hearts = new Card("♥", value.NINE);
    this.ten_Hearts = new Card("♥", value.TEN);
    this.J_Hearts = new Card("♥", value.J);
    this.Q_Hearts = new Card("♥", value.Q);
    this.K_Hearts = new Card("♥", value.K);
    this.ace_Tiles = new Card("♦", value.ACE);
    this.two_Tiles = new Card("♦", value.TWO);
    this.three_Tiles = new Card("♦", value.THREE);
    this.four_Tiles = new Card("♦", value.FOUR);
    this.five_Tiles = new Card("♦", value.FIVE);
    this.six_Tiles = new Card("♦", value.SIX);
    this.seven_Tiles = new Card("♦", value.SEVEN);
    this.eight_Tiles = new Card("♦", value.EIGHT);
    this.nine_Tiles = new Card("♦", value.NINE);
    this.ten_Tiles = new Card("♦", value.TEN);
    this.J_Tiles = new Card("♦", value.J);
    this.Q_Tiles = new Card("♦", value.Q);
    this.K_Tiles = new Card("♦", value.K);
  }

  deal() {
    let size = Object.keys(this).length;
    console.log(size);

    // Guardo los valores del objeto en un array de cartas (un mazo)
    const deck = Object.values(this);

    // Saco una carta aleatoria
    const card = deck[getRandomInt(0, size)];
    let a = card.toString();
    // Elimino esa carta del mazo
    delete this[a];
    // La reparto
    return card;
  }
}

// Obtengo numero entero aleatorio
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default Deck;
