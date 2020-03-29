import Deck from "./deck.js";
import Hand from "./hand.js";
import Player from "./player.js";
import Card from "./card.js";
import { value } from "./deck.js";

let d = new Deck();
const h = new Hand(
  new Card("♥", value.ACE),
  new Card("♦", value.ACE),
  new Card("♣", value.ACE),
  new Card("♠", value.K),
  new Card("♥", value.K)
);

/*ESCALERA REAL DE COLOR
  new Card("♥", value.TEN),
  new Card("♥", value.J),
  new Card("♥", value.Q),
  new Card("♥", value.K),
  new Card("♥", value.ACE)
*/

/*ESCALERA DE COLOR
  new Card("♥", value.ACE),
  new Card("♥", value.TWO),
  new Card("♥", value.THREE),
  new Card("♥", value.FOUR),
  new Card("♥", value.FIVE)
*/

/* POKER  
  new Card("♥", value.ACE),
  new Card("♦", value.ACE),
  new Card("♣", value.ACE),
  new Card("♠", value.ACE),
  new Card("♥", value.K) 
*/
const p1 = new Player("Alex", h, 1);

p1.hand.calcHand();
