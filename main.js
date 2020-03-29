import Deck from "./deck.js";
import Hand from "./hand.js";
import Player from "./player.js";
import Card from "./card.js";
import { value } from "./deck.js";

let d = new Deck();
const h = new Hand(
  new Card("♥", value.ACE),
  new Card("♥", value.TWO),
  new Card("♥", value.FOUR),
  new Card("♥", value.SIX),
  new Card("♥", value.FIVE)
);
const p1 = new Player("Alex", h, 1);

console.log(p1.hand);

p1.hand.calcHand();
