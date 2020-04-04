import CardImg from "./assets/cards.png";
import css from "./styles/style.scss";
import Deck from "./js/deck";
import Hand from "./js/hand";
import Player from "./js/player";
import Poker from "./js/poker";
import Card from "./js/card";

let d = new Deck();
let h = new Hand(d.deal(), d.deal(), d.deal(), d.deal(), d.deal());
let p1 = new Player("Alex", h, 1);

//console.log(h.cards[0], h.cards[0].parsePoker(), h.cards[0]);
let dealer = document.createElement("button");
dealer.id = "butDealer";
dealer.textContent = "Deal!";
let img = document.createElement("img");
document.body.appendChild(img);
dealer.addEventListener("click", (event) => {
  let calcHand = document.createElement("p");
  calcHand.textContent = h.calcHand();
  calcHand.id = "hand-description";
  if (document.querySelector("#hand-description"))
    document.body.removeChild(document.querySelector("#hand-description"));
  document.body.appendChild(calcHand);
  for (let j = 0; j <= 4; j++) {
    if (document.querySelector("#cardHand" + j)) {
      document.body.removeChild(document.querySelector("#cardHand" + j));
    }
  }
  d = new Deck();
  h = new Hand(d.deal(), d.deal(), d.deal(), d.deal(), d.deal());
  p1 = new Player("Alex", h, 1);
  for (let i = 0; i <= 4; i++) {
    p1.hand.cards[i].parsePoker();
    let cardImg = window.Poker.getCardImage(
      100,
      p1.hand.cards[i].shape,
      p1.hand.cards[i].value
    );
    cardImg.id = "cardHand" + i;
    document.body.appendChild(cardImg);
  }
});
document.body.appendChild(dealer);

let div_table = document.createElement("div");
div_table.id = "div-table";
document.body.appendChild(div_table);
let cards_deck = window.Poker.getBackImage(100, "#2E319C", "#7A7BB8");
cards_deck.id = "cards-deck";

document.body.appendChild(cards_deck);

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
