import Player from "./player";
import Hand from "./hand";
import Deck from "./deck";
// DOM Elements

let player1 = controller.newPlayer();
const dealButton = document.querySelector(".deal");
dealButton.addEventListener("click", () => {
  controller.dealCards(player1);
});
const newPlayerButton = document.querySelector(".newplayer");
newPlayerButton.addEventListener("click", () => {
  controller.newPlayer();
});

// Buttons
const dealButton = document.querySelector(".deal");
// Displays
const container = document.querySelector("#container");
const imgDeck = document.querySelector("#imgDeck");
const playerHand = document.querySelector("#cardsTable");
const textScore = document.querySelector("#textScore");
const textBox = document.querySelector("#textBox");

const controller = {
  newPlayer: () => {
    let playerName = document.querySelector("#pname").value;
    imgDeck.append(window.Poker.getBackImage(100, "#2E319C", "#7A7BB8"));
    return new Player(playerName);
  },
  updateScore: (player) => {},
  dealCards: (player) => {
    let deck = new Deck();
    playerHand.innerHTML = "";
    let hand = new Hand(
      deck.deal(),
      deck.deal(),
      deck.deal(),
      deck.deal(),
      deck.deal()
    );
    player.hand = hand;

    for (let i = 0; i <= 4; i++) {
      player.hand.cards[i].parsePoker();
      let cardImg = window.Poker.getCardImage(
        100,
        player.hand.cards[i].shape,
        player.hand.cards[i].value
      );

      playerHand.appendChild(cardImg);
    }
    textScore.innerHTML = `
     ${player.hand.calcHand(player)}
     <br>
     Score:    
    ${player.score}`;
  },
};

export default controller;
