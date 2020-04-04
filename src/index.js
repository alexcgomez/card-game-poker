import CardImg from "./assets/cards.png";
import css from "./styles/style.scss";
import { Deck, value } from "./js/deck";
import Hand from "./js/hand";
import Player from "./js/player";
import Poker from "./js/poker";

//insert a <img> to the end of body
console.log(window.Poker.getCardImage(260, "hearts", "q"));

/*
let d = new Deck();
const h = new Hand(d.deal(), d.deal(), d.deal(), d.deal(), d.deal());
const p1 = new Player("Alex", h, 1);
console.log(p1.hand);
p1.hand.calcHand();

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
