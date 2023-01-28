const game = document.querySelector(".game");
const player = document.querySelector(".player");
const timer = document.querySelector(".time");

const characters = [
  "bob-esponja",
  "caverna-do-dragao",
  "corrida-maluca",
  "padrinhos-mágico",
  "shrek",
  "tom-and-jerry",
  "x-man-evolution",
  "power-rangers",
  "ben-10",
];

let firstCard = "";
let secondCard = "";

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const checkEndGame = () => {
  const disabledCard = document.querySelectorAll(".disabled-card");
  if (disabledCard.length === 18) {
    clearInterval(this.loop);
    alert(`Parabéns ${player.innerHTML}, Seu tempo foi de: ${timer.innerHTML}`);
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }
  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../img/${character}.png')`;
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
};

//carregar o jogo
const loadGame = () => {
  const duplicateCharactere = [...characters, ...characters];
  const shuffledArray = duplicateCharactere.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    game.appendChild(card);
  });
};

const time = () => {
  this.loop = setInterval(() => {
    const timerNow = +timer.innerHTML;
    timer.innerHTML = timerNow + 1;
  }, 1000);
};

window.onload = () => {
  const playernName = localStorage.getItem("player");
  player.innerHTML = playernName;

  time();
  loadGame();
};
