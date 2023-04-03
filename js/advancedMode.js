function housePickedAdvanced() {
  switch (randomAdvanced) {
    case 0:
      housePickedContainer.style.borderColor = "hsl(230, 89%, 62%)";
      housePickedContainer.style.boxShadow =
        "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px blue";
      housePickedBg();
      housePickedIcon.style.borderColor = "hsl(230, 89%, 62%)";
      housePickedImg.src = "images/icon-paper.svg";
      break;
    case 1:
      housePickedContainer.style.borderColor = "hsl(40, 84%, 53%)";
      housePickedContainer.style.boxShadow =
        "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px #ba9004";
      housePickedBg();
      housePickedIcon.style.borderColor = "hsl(40, 84%, 53%)";
      housePickedImg.src = "images/icon-scissors.svg";
      break;
    case 2:
      housePickedContainer.style.borderColor = "hsl(349, 70%, 56%)";
      housePickedContainer.style.boxShadow =
        "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px #990825";
      housePickedBg();
      housePickedIcon.style.borderColor = "hsl(349, 70%, 56%)";
      housePickedImg.src = "images/icon-rock.svg";
      break;
    case 3:
      housePickedContainer.style.borderColor = "hsl(189, 59%, 53%)";
      housePickedContainer.style.boxShadow =
        "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px hsl(189, 58%, 57%)";
      housePickedBg();
      housePickedIcon.style.borderColor = "hsl(189, 59%, 53%)";
      housePickedImg.src = "images/icon-spock.svg";
      break;
    case 4:
      housePickedContainer.style.borderColor = "hsl(261, 73%, 60%)";
      housePickedContainer.style.boxShadow =
        "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px hsl(261, 72%, 63%)";
      housePickedBg();
      housePickedIcon.style.borderColor = "hsl(261, 73%, 60%)";
      housePickedImg.src = "images/icon-lizard.svg";
      break;
  }
}

paperAdvanced.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(230, 89%, 62%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px blue";
  youPickedImg.src = "images/icon-paper.svg";
  setTimeout(() => {
    housePickedAdvanced();
  }, 2000);
  pickIndex = 0;
  if (pickIndex === 0 && randomAdvanced === 0) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  } else if (pickIndex === 0 && randomAdvanced === 1) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 0 && randomAdvanced === 2) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 0 && randomAdvanced === 3) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 0 && randomAdvanced === 4) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  }
});

scissorsAdvanced.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(40, 84%, 53%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px #ba9004";
  youPickedImg.src = "images/icon-scissors.svg";
  setTimeout(() => {
    housePickedAdvanced();
  }, 2000);
  pickIndex = 1;
  if (pickIndex === 1 && randomAdvanced === 0) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 1 && randomAdvanced === 1) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  } else if (pickIndex === 1 && randomAdvanced === 2) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 1 && randomAdvanced === 3) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 1 && randomAdvanced === 4) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  }
  window.addEventListener("resize", displayResult);
});

rockAdvanced.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(349, 70%, 56%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px #990825";
  youPickedImg.src = "images/icon-rock.svg";
  setTimeout(() => {
    housePickedAdvanced();
  }, 2000);
  pickIndex = 2;
  if (pickIndex === 2 && randomAdvanced === 0) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 2 && randomAdvanced === 1) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 2 && randomAdvanced === 2) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  } else if (pickIndex === 2 && randomAdvanced === 3) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 2 && randomAdvanced === 4) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  }
  window.addEventListener("resize", displayResult);
});

spock.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(189, 59%, 53%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px hsl(189, 58%, 57%)";
  youPickedImg.src = "images/icon-spock.svg";
  setTimeout(() => {
    housePickedAdvanced();
  }, 2000);
  pickIndex = 3;
  if (pickIndex === 3 && randomAdvanced === 0) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 3 && randomAdvanced === 1) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 3 && randomAdvanced === 2) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 3 && randomAdvanced === 3) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  } else if (pickIndex === 3 && randomAdvanced === 4) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  }
  window.addEventListener("resize", displayResult);
});

lizard.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(261, 73%, 60%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px hsl(261, 72%, 63%)";
  youPickedImg.src = "images/icon-lizard.svg";
  setTimeout(() => {
    housePickedAdvanced();
  }, 2000);
  pickIndex = 4;
  if (pickIndex === 4 && randomAdvanced === 0) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 4 && randomAdvanced === 1) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 4 && randomAdvanced === 2) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 4 && randomAdvanced === 3) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 4 && randomAdvanced === 4) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  }
  window.addEventListener("resize", displayResult);
});
