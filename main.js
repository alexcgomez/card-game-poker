import Deck, { value } from "./deck.js";
import Hand from "./hand.js";
import Player from "./player.js";
import Card from "./card.js";

let d = new Deck();
const h = new Hand(d.deal(), d.deal(), d.deal(), d.deal(), d.deal());

const p1 = new Player("Alex", h, 1);
console.log(p1.hand);
p1.hand.calcHand();

/*

const h = new Hand(
  new Card("♠", value.ACE),
  new Card("♠", value.TWO),
  new Card("♠", value.THREE),
  new Card("♣", value.FOUR),
  new Card("♥", value.FIVE)
);

const h = new Hand(
  new Card("♠", value.ACE),
  new Card("♠", value.K),
  new Card("♠", value.Q),
  new Card("♣", value.J),
  new Card("♥", value.TEN)
);

*/
