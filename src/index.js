import CardImg from "./assets/cards.png";
import css from "./styles/style.scss";
import Deck from "./js/deck";
import Hand from "./js/hand";
import Player from "./js/player";
import Poker from "./js/poker";
import Card from "./js/card";
let deck = window.Poker.getBackImage(100, "#2E319C", "#7A7BB8");
deck.className = "imgDeck";
console.log(deck);

document.body.appendChild(deck);
