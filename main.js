import Deck from "./deck.js";
import Hand from "./hand.js";
import Player from "./player.js";
import Card from "./card.js";

let d = new Deck();
const h = new Hand(
  new Card("♥", "A"),
  new Card("♥", "K"),
  new Card("♥", "Q"),
  new Card("♥", "J"),
  new Card("♥", "10")
);
const p1 = new Player("Alex", h, 1);

// console.log(p1);
// console.log(p1.hand);

// p1.hand.calcHand();

function royalStraightFlush(cards) {
  // Para escalera Real de color, 2 condiciones: Tener todas el mismo palo, formar una escalera al As.

  // Todas del mismo palo ?
  if (
    cards.every(
      c => c.shape == "♦" || c.shape == "♠" || c.shape == "♣" || c.shape == "♥"
    )
  ) {
    //Forman escalera?
  }
}

console.log(p1.hand.cards);

royalStraightFlush(p1.hand.cards);
