function housePickedBasic() {
  switch (randomBasic) {
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
  }
}

paperBasic.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(230, 89%, 62%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px blue";
  youPickedImg.src = "images/icon-paper.svg";
  setTimeout(() => {
    housePickedBasic();
  }, 2000);
  pickIndex = 0;
  if (pickIndex === 0 && randomBasic === 0) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  } else if (pickIndex === 0 && randomBasic === 1) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 0 && randomBasic === 2) {
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

scissorsBasic.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(40, 84%, 53%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px #ba9004";
  youPickedImg.src = "images/icon-scissors.svg";
  setTimeout(() => {
    housePickedBasic();
  }, 2000);
  pickIndex = 1;
  if (pickIndex === 1 && randomBasic === 0) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 1 && randomBasic === 1) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  } else if (pickIndex === 1 && randomBasic === 2) {
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

rockBasic.addEventListener("click", () => {
  youPickedContainer.style.borderColor = "hsl(349, 70%, 56%)";
  youPickedContainer.style.boxShadow =
    "inset 0px 7px 0px 0px #cbc8c8, 0px 7px 0px 0px #990825";
  youPickedImg.src = "images/icon-rock.svg";
  setTimeout(() => {
    housePickedBasic();
  }, 2000);
  pickIndex = 2;
  if (pickIndex === 2 && randomBasic === 0) {
    youLose();
    setTimeout(() => {
      displayResult();
    }, 3000);
    computerScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 2 && randomBasic === 1) {
    youWin();
    setTimeout(() => {
      displayResult();
    }, 3000);
    yourScoreIndex++;
    setTimeout(() => {
      updateScore();
      finishGame();
    }, 3500);
  } else if (pickIndex === 2 && randomBasic === 2) {
    draw();
    setTimeout(() => {
      displayResult();
    }, 3000);
  }
  window.addEventListener("resize", displayResult);
});
