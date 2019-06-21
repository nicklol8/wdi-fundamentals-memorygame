let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamons.png:"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];
let cardsInPlay = [];
function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === [cardsInPlay[1]]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}
function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank + "  " + cards[cardId].cardImage + "  " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}
flipCard(0);
flipCard(2);
