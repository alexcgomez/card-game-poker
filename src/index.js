//import Deck, { value } from "./deck.js";
const { Deck, value } = require("./js/deck");
//import Hand from "./hand.js";
const Hand = require("./js/hand");
//import Player from "./player.js";
const Player = require("./js/player");
//import Card from "./card.js";

let d = new Deck();
const h = new Hand(d.deal(), d.deal(), d.deal(), d.deal(), d.deal());
const p1 = new Player("Alex", h, 1);
console.log(p1.hand);
p1.hand.calcHand();

const greeting = document.createElement("h1");
greeting.textContent = `Hola que tal`;

document.body.appendChild(greeting);

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
