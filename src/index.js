import css from "./styles/style.scss";
import Deck from "./js/deck";
import Hand from "./js/hand";
import Player from "./js/player";
import Poker from "./js/poker";
import Card from "./js/card";
import controller from "./js/controller";

// MODEL
const deck = new Deck();
let player1 = controller.newPlayer();
player1.score = 100;

const dealButton = document.querySelector(".deal");
dealButton.addEventListener("click", () => {
  controller.dealCards(player1, deck);
});

controller.updateScore(player1);
