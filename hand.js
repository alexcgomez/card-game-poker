const hands = [
  "royal_straight_flush",
  "straight_flush",
  "four_of_a_kind",
  "full_house",
  "flush",
  "straight",
  "three_of_a_kind",
  "two_pair",
  "one_pair",
  "hi_card"
];

function royalStraightFlush(cards) {
  cards.every(card => card.shape != null);
}

export default class Hand {
  constructor(...cards) {
    this.cards = cards;
  }

  calcHand() {
    //Estas funciones devuelven booleano, a partir de ahi, se calcula la puntuación
    console.log(royalStraightFlush(this.cards));
    // straightFlush(this.cards);
    // fourOfaKind(this.cards);
    // fullHouse(this.cards);
    // flush(this.cards);
    // straight(this.cards);
    // threeOfaKind(this.cards);
    // twoPair(this.cards);
    // onePair(this.cards);
    // highCard(this.cards);
  }
}
