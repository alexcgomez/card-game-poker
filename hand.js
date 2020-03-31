import { value } from "./deck.js";
import _ from "lodash";

export default class Hand {
  constructor(...cards) {
    this.cards = cards;
  }

  calcHand() {
    /*Estas funciones devuelven booleano, a partir de ahi, se calcula la puntuación. Las Manos que se pueden combinar formando puntuación, son mutuamente excluyentes, es decir:
        - P.e.  No puedes tener doble pareja del mismo valor ( Mano -> 2(♥), 2(♠), 2(♣), 2(♦) , x(x)) , esto, es un Póker.
        - Siempre tendrás la combinación de mayor puntuación. P.e. da igual que tengas una pareja de Ases, si ademas tienes un trio, pasas a tener un full.
      El siguiente switch-case, conmuta entre la mejor mano para seleccionarla.
    */
    switch (true) {
      case royalStraightFlush(this.cards):
        console.log("Tienes una escalera real de color!");
        break;

      case straightFlush(this.cards):
        console.log("Tienes una escalera de color!");
        break;

      case fourOfaKind(this.cards):
        console.log("Tienes un póker!");
        break;

      default:
        console.log("no tienes nada...");
        break;
    }

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
function royalStraightFlush(cards) {
  // Para escalera Real de color, 2 condiciones: Tener todas el mismo PALO, formar una ESCALERA al As.

  // Compruebo PALO
  if (
    cards.every(
      c => c.shape == "♦" || c.shape == "♠" || c.shape == "♣" || c.shape == "♥"
    )
  ) {
    // Compruebo ESCALERA
    // Primero ordeno la mano
    cards.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    // ¿Forman escalera?
    // En este caso, como solo hay un posible resultado (escalera real) no compruebo si forma escalera compruebo directamente si es una escalera real.

    // ¿Escalera al As?
    // Como el As juega un papel especial, ira al final de la escalera únicamente si se cumple: As, 10, J, Q, K  -----> 10, J, Q, K, As
    if (
      cards[0].value == value.ACE &&
      cards[1].value == value.TEN &&
      cards[2].value == value.J &&
      cards[3].value == value.Q &&
      cards[4].value == value.K
    ) {
      // Pongo el As al final, se ha formado la escalera real
      let ace = cards.shift();
      cards.push(ace);
      cards;
      return true;
    }
  }
  return false;
  // Cualquier otro caso NO es una escalera real de color: false
}

function straightFlush(cards) {
  // Primero ordeno la mano
  cards.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  // Compruebo si forman escalera
  let values = [];
  cards.forEach(c => {
    values.push(c.value);
  });
  //console.log(values);
  let straight = values.reduce((acum, item) => item - acum - 1, values[0]);
  if (straight == 1) return true;
  return false;
}

function fourOfaKind(cards) {
  let values = [];
  cards.forEach(c => {
    values.push(c.value);
  });
  let counter = 0;
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (values[i] === values[j]) counter++;
      if (counter === 4) return true;
    }
    counter = 0;
  }
  return false;
  // console.log(counter);
  // console.log(values);
  //  if (values.length - _.uniq(values).length === 3) return true;
}
