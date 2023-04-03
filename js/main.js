const overlay = document.querySelector(".overlay");
const rulesModal = document.getElementById("rules-modal");
const imageRules = document.querySelector(".image-rules");
const rulesBtn = document.querySelector(".rules");
const closeModal = document.querySelector(".icon-close");
const readTheRules = document.querySelector(".read-the-rules");

const yourScore = document.querySelector(".your-score-number");
const computerScore = document.querySelector(".computer-score-number");
const step1 = document.querySelector(".step-1");
const picksBasicMode = document.querySelectorAll(".pick-basic-mode");
const picksAdvancedMode = document.querySelectorAll(".pick-advanced-mode");
const paperBasic = document.querySelector(".icon-paper-basic");
const scissorsBasic = document.querySelector(".icon-scissors-basic");
const rockBasic = document.querySelector(".icon-rock-basic");
const paperAdvanced = document.querySelector(".icon-paper-advanced");
const scissorsAdvanced = document.querySelector(".icon-scissors-advanced");
const rockAdvanced = document.querySelector(".icon-rock-advanced");
const spock = document.querySelector(".icon-spock");
const lizard = document.querySelector(".icon-lizard");

const step2 = document.querySelector(".step-2");
const youPickedContainer = document.querySelector(".icon-you-picked");
const youPickedImg = document.querySelector(".icon-you-picked img");
const housePickedContainer = document.querySelector(".icon-house-picked");
const housePickedIcon = document.querySelector(".house-picked .icon");
const housePickedImg = document.querySelector(".icon-house-picked img");

const resultContainer = document.querySelector(".result-container");
const resultContainerMobile = document.querySelector(
  ".result-container-mobile"
);
const result = document.querySelector(".result");
const resultMobile = document.querySelector(".result-mobile");
const pickAgain = document.querySelector(".play-again");
const pickAgainMobile = document.querySelector(".play-again-mobile");

const finishGameContainer = document.querySelector(".finish-game");
const announcement = document.querySelector(".announcement");
const startAgain = document.querySelector(".finish-game .play-again");

const gameMode = document.querySelector(".game-mode");
const basicMode = document.querySelector(".basic-mode");
const advancedMode = document.querySelector(".advanced-mode");

rulesBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  rulesModal.style.display = "block";
  readTheRules.style.display = "none";
});

closeModal.addEventListener("click", () => {
  overlay.style.display = "none";
  rulesModal.style.display = "none";
});

picksBasicMode.forEach((pick) => {
  pick.addEventListener("click", () => {
    step1.style.display = "none";
    step2.style.display = "flex";
  });
});

picksAdvancedMode.forEach((pick) => {
  pick.addEventListener("click", () => {
    step1.style.display = "none";
    step2.style.display = "flex";
  });
});

let pickIndex;
let yourScoreIndex = 0;
let computerScoreIndex = 0;

let randomBasic = Math.floor(Math.random() * picksBasicMode.length);
let randomAdvanced = Math.floor(Math.random() * picksAdvancedMode.length);

function housePickedBg() {
  housePickedIcon.style.background = "#fff";
  housePickedIcon.style.border = "25px solid";
}

function youWin() {
  result.innerText = "You Win";
  resultMobile.innerText = "You Win";
  result.style.color = "hsl(229, 64%, 55%)";
  resultMobile.style.color = "hsl(229, 64%, 55%)";
}

function youLose() {
  result.innerText = "You Lose";
  resultMobile.innerText = "You Lose";
  result.style.color = "hsl(349, 70%, 56%)";
  resultMobile.style.color = "hsl(349, 70%, 56%)";
}

function draw() {
  result.innerText = "Draw";
  resultMobile.innerText = "Draw";
  result.style.color = "#fff";
  resultMobile.style.color = "#fff";
}

function displayResult() {
  if (window.innerWidth < 850) {
    resultContainer.style.display = "none";
    resultContainerMobile.style.display = "block";
  } else if (window.innerWidth >= 850) {
    resultContainer.style.display = "block";
    resultContainerMobile.style.display = "none";
  }
}

function updateScore() {
  yourScore.innerText = `${yourScoreIndex}`;
  computerScore.innerText = `${computerScoreIndex}`;
}

function finishGameRemove() {
  step1.style.display = "none";
  step2.style.display = "none";
  resultContainerMobile.style.display = "none";
  finishGameContainer.style.display = "block";
  window.addEventListener("resize", () => {
    resultContainer.style.display = "none";
    resultContainerMobile.style.display = "none";
  });
}

function finishGame() {
  if (yourScoreIndex === 5) {
    finishGameRemove();
    announcement.innerHTML = "Congratulations!!! <br> You won the game!";
    announcement.style.color = "#fff";
    confetti();
  } else if (computerScoreIndex === 5) {
    finishGameRemove();
    announcement.innerHTML = "Too Bad! <br> You Lost The Game!";
    announcement.style.color = "hsl(349, 70%, 56%)";
  }
}

function playAgain() {
  housePickedContainer.style.boxShadow = "none";
  housePickedIcon.style.border = "none";
  housePickedIcon.style.background = "hsl(214, 47%, 23%)";
  housePickedImg.src = "";
  resultContainer.style.display = "none";
  resultContainerMobile.style.display = "none";
  step2.style.display = "none";
  step1.style.display = "block";
  randomBasic = Math.floor(Math.random() * picksBasicMode.length);
  randomAdvanced = Math.floor(Math.random() * picksAdvancedMode.length);

  window.addEventListener("resize", () => {
    resultContainer.style.display = "none";
    resultContainerMobile.style.display = "none";
  });
  paperBasic.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
  scissorsBasic.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
  rockBasic.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
  paperAdvanced.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
  scissorsAdvanced.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
  rockAdvanced.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
  spock.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
  lizard.addEventListener("click", () => {
    window.addEventListener("resize", () => {
      displayResult();
    });
  });
}

pickAgain.addEventListener("click", () => {
  playAgain();
});

pickAgainMobile.addEventListener("click", () => {
  playAgain();
});

startAgain.addEventListener("click", () => {
  playAgain();
  finishGameContainer.style.display = "none";
  yourScore.innerText = "0";
  computerScore.innerText = "0";
  yourScoreIndex = 0;
  computerScoreIndex = 0;
});

let gameModeIdx = 0;

function changeGameMode() {
  if (gameModeIdx > 1) {
    gameModeIdx = 0;
  }
  switch (gameModeIdx) {
    case 0:
      gameMode.innerText = "ADVANCED MODE";
      basicMode.style.display = "block";
      advancedMode.style.display = "none";
      imageRules.src = "images/image-rules.svg";
      break;
    case 1:
      gameMode.innerText = "BASIC MODE";
      basicMode.style.display = "none";
      advancedMode.style.display = "block";
      imageRules.src = "images/image-rules-bonus.svg";
      break;
  }
}

gameMode.addEventListener("click", () => {
  gameModeIdx++;
  changeGameMode();
  console.log(gameModeIdx);
});

function confetti() {
  const jsConfetti = new JSConfetti();
  setTimeout(async () => {
    await jsConfetti.addConfetti({
      emojis: ["🎉", "🥳", "👏", "⚡", "🎈"],
      emojiSize: 100,
      confettiNumber: 300,
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
    });
  }, 500);
}
