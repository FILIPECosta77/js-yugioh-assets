const state = {
  button: document.getElementById("nex-duel"),
  score: {
    playerScore: {},
    computerScore: {},
    getPlayerScore: document.getElementsByClassName("score_victory"),
    getComputerScore: document.getElementsByClassName("score_defeat"),
  },
  cardSprite: {
    card: document.getElementById("card-image"),
    name: document.getElementById("cardName"),
    type: document.getElementById("cardType"),
  },
  fieldCards: {
    playerCards: document.getElementById("computerCards"),
    computerCards: document.getElementById("playerCards"),
  },
};

const playerSides = {
  player: "player-field-card",
  computer: "computer-field-card",
};

const cardsPath = ".src/assets/icons/";

const cardsData = [
  {
    id: 0,
    name: "Dragão Branco Dos Zoi Azul",
    type: "papel",
    img: `${cardsPath}dragon.png`,
    winOf: 1,
    loseOf: 2,
  },
  {
    id: 1,
    name: "Mago Afro-dessendente",
    type: "pedra",
    img: `${cardsPath}magician.png`,
    winOf: 2,
    loseOf: 0,
  },
  {
    id: 2,
    name: "Cabeça Do Exodia",
    type: "Tesoura",
    img: `${cardsPath}exodia.png`,
    winOf: 0,
    loseOf: 1,
  },
];

async function drawCards(quantity, owner) {
  for (let i = 0; i < quantity; i++) {
    const ramdomId = parseInt(Math.random() * 3);
    const cardImage = await createCardImage(cardsData[ramdomId].id, owner);

    document.getElementById(playerSides).appendChild(cardImage);
  }
}

function createCardImage(cardId, CardOwner) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", ".src/assets/icons/card-back.png");
  cardImage.setAttribute("data-id", cardId);
  cardImage.classList.add("card");

  if (CardOwner === playerSides.player) {
    cardImage.addEventListener("click", () => {
      setCardsField(cardImage.getAttribute("data-id"));
    });
  }

  cardImage.addEventListener("mouseover", () => {
    drawSelectedCard(cardId);
  });

  return cardImage;
}

function main() {
  drawCards(5, playerSides.player);
  drawCards(5, playerSides.player);
}

main();
