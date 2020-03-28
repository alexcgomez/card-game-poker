import Deck from "./deck.js";
import Hand from "./hand.js";
import Player from "./player.js";





const d = new Deck();
const h = new Hand(d.deal(),d.deal(),d.deal(),d.deal(),d.deal());
const p1 = new Player("Alex", h, 1);


console.log(JSON.stringify(p1));




