import Player from "./player";
import Hand from "./hand";
import Deck from "./deck";
// DOM Elements

// Construct table of hands
// Royal flush
let sizeCard = 30;
let rften = window.Poker.getCardImage(sizeCard, "h", "10");
let rfj = window.Poker.getCardImage(sizeCard, "h", "J");
let rfq = window.Poker.getCardImage(sizeCard, "h", "Q");
let rfk = window.Poker.getCardImage(sizeCard, "h", "K");
let rfa = window.Poker.getCardImage(sizeCard, "h", "A");
// Straight flush
let sten = window.Poker.getCardImage(sizeCard, "s", "10");
let sj = window.Poker.getCardImage(sizeCard, "s", "J");
let sq = window.Poker.getCardImage(sizeCard, "s", "Q");
let sk = window.Poker.getCardImage(sizeCard, "s", "K");
let sa = window.Poker.getCardImage(sizeCard, "s", "A");
// poker
let pa1 = window.Poker.getCardImage(sizeCard, "s", "10");
let pa2 = window.Poker.getCardImage(sizeCard, "c", "10");
let pa3 = window.Poker.getCardImage(sizeCard, "d", "10");
let pa4 = window.Poker.getCardImage(sizeCard, "h", "10");
let pk = window.Poker.getCardImage(sizeCard, "h", "A");
//full
let fah = window.Poker.getCardImage(sizeCard, "h", "A");
let fac = window.Poker.getCardImage(sizeCard, "c", "A");
let fad = window.Poker.getCardImage(sizeCard, "d", "A");
let fks = window.Poker.getCardImage(sizeCard, "s", "K");
let fkh = window.Poker.getCardImage(sizeCard, "h", "K");
//flush
let flush9 = window.Poker.getCardImage(sizeCard, "h", "9");
let flush2 = window.Poker.getCardImage(sizeCard, "h", "2");
let flush7 = window.Poker.getCardImage(sizeCard, "h", "7");
let flushJ = window.Poker.getCardImage(sizeCard, "h", "J");
let flushK = window.Poker.getCardImage(sizeCard, "h", "K");
//straight
let straight2 = window.Poker.getCardImage(sizeCard, "h", "2");
let straight3 = window.Poker.getCardImage(sizeCard, "h", "3");
let straight4 = window.Poker.getCardImage(sizeCard, "s", "4");
let straight5 = window.Poker.getCardImage(sizeCard, "c", "5");
let straight6 = window.Poker.getCardImage(sizeCard, "d", "6");
//tree
let threeh = window.Poker.getCardImage(sizeCard, "h", "10");
let threes = window.Poker.getCardImage(sizeCard, "s", "10");
let threed = window.Poker.getCardImage(sizeCard, "d", "10");
let three2 = window.Poker.getCardImage(sizeCard, "c", "2");
let three5 = window.Poker.getCardImage(sizeCard, "c", "5");
//twopair
let pair2Jh = window.Poker.getCardImage(sizeCard, "h", "J");
let pair2Jc = window.Poker.getCardImage(sizeCard, "c", "J");
let pair2sK = window.Poker.getCardImage(sizeCard, "s", "K");
let pair2hK = window.Poker.getCardImage(sizeCard, "h", "K");
let pair2h10 = window.Poker.getCardImage(sizeCard, "h", "10");
//pair
let pairAh = window.Poker.getCardImage(sizeCard, "h", "A");
let pairAd = window.Poker.getCardImage(sizeCard, "d", "A");
let pairc2 = window.Poker.getCardImage(sizeCard, "c", "2");
let pairsj = window.Poker.getCardImage(sizeCard, "s", "J");
let pairs8 = window.Poker.getCardImage(sizeCard, "s", "8");
//highCrd
let highCardA = window.Poker.getCardImage(sizeCard, "h", "A");
let highCard5 = window.Poker.getCardImage(sizeCard, "d", "5");
let highCard2 = window.Poker.getCardImage(sizeCard, "s", "2");
let highCard7 = window.Poker.getCardImage(sizeCard, "c", "7");
let highCard3 = window.Poker.getCardImage(sizeCard, "d", "3");

const tableHands = document.querySelector("#tabHands");
tableHands.innerHTML = `
<tr>
  <th></th>
  <th>HAND</th>
  <th>%</th>
  <th>Points</th>
</tr>
<tr>
  <td>
  <img src=${rften.src}>
  <img src=${rfj.src}>
  <img src=${rfq.src}>
  <img src=${rfk.src}>
  <img src=${rfa.src}>
  </td>
  <td>Royal Flush</td>
  <td>0.000154</td>
  <td>100</td>
</tr>
<tr>
  <td>
  <img src=${sten.src}>
  <img src=${sj.src}>
  <img src=${sq.src}>
  <img src=${sk.src}>
  <img src=${sa.src}>
  </td>
  <td>Straight Flush</td>
  <td>0.00139</td>
  <td>90</td>
</tr>
<tr>
  <td>
  <img src=${pa1.src}>
  <img src=${pa2.src}>
  <img src=${pa3.src}>
  <img src=${pa4.src}>
  <img src=${pk.src}>
  </td>
  <td>Poker</td>
  <td>0.024</td>
  <td>80</td>
</tr>
<tr>
  <td>
  <img src=${fah.src}>
  <img src=${fac.src}>
  <img src=${fad.src}>
  <img src=${fks.src}>
  <img src=${fkh.src}>
  </td>
  <td>Full House</td>
  <td>0.1441</td>
  <td>70</td>
</tr>
<tr>
  <td>
  <img src=${flush9.src}>
  <img src=${flush2.src}>
  <img src=${flush7.src}>
  <img src=${flushJ.src}>
  <img src=${flushK.src}>
  </td>
  <td>Flush</td>
  <td>0.1965</td>
  <td>50</td>
</tr>
<tr>
  <td>
  <img src=${straight2.src}>
  <img src=${straight3.src}>
  <img src=${straight4.src}>
  <img src=${straight5.src}>
  <img src=${straight6.src}>
  </td>
  <td>Straight</td>
  <td>0.3925</td>
  <td>40</td>
</tr>
<tr>
  <td>
  <img src=${threeh.src}>
  <img src=${threes.src}>
  <img src=${threed.src}>
  <img src=${three2.src}>
  <img src=${three5.src}>
  </td>
  <td>Trhee of a kind</td>
  <td>2.1128</td>
  <td>30</td>
</tr>
<tr>
  <td>
  <img src=${pair2Jh.src}>
  <img src=${pair2Jc.src}>
  <img src=${pair2sK.src}>
  <img src=${pair2hK.src}>
  <img src=${pair2h10.src}>
  </td>
  <td>Two pair</td>
  <td>4.7539</td>
  <td>30</td>
</tr>
<tr>
  <td>
  <img src=${pairAh.src}>
  <img src=${pairAd.src}>
  <img src=${pairc2.src}>
  <img src=${pairsj.src}>
  <img src=${pairs8.src}>
  </td>
  <td>One pair</td>
  <td>42.2569</td>
  <td>20</td>
</tr>
<tr>
  <td>
  <img src=${highCard2.src}>
  <img src=${highCard3.src}>
  <img src=${highCard5.src}>
  <img src=${highCard7.src}>
  <img src=${highCardA.src}>
  </td>
  <td>High Card</td>
  <td>100</td>
  <td>10</td>
</tr>

`;

let player1 = controller.newPlayer();
const dealButton = document.querySelector(".deal");
dealButton.addEventListener("click", () => {
  controller.dealCards(player1);
});

// Buttons
const dealButton = document.querySelector(".deal");
const allinButton = document.querySelector(".allin");
const foldButton = document.querySelector(".fold");
const showButton = document.querySelector(".show");
// Displays
const container = document.querySelector("#container");
const imgDeck = document.querySelector("#imgDeck");
const playerHand = document.querySelector("#cardsTable");
const textScore = document.querySelector("#textScore");
const textBox = document.querySelector("#textBox");

const controller = {
  newPlayer: () => {
    // let playerName = prompt("Your name:");
    // return new Player(playerName);
    imgDeck.append(window.Poker.getBackImage(100, "#2E319C", "#7A7BB8"));
    return new Player("Alex");
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
