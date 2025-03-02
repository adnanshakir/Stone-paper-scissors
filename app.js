let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score")
const botScorepara = document.querySelector("#bot-score")

const genBotChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "Game was a Draw!";
  msg.style.backgroundColor = "#081b31";
  msg.style.color = "wheat";
};

const showWinner = (userWin, userChoice, botChoice) => {
  if (userWin) {

    msg.innerText = `You Won! The Bot chose ${botChoice} `;
    msg.style.backgroundColor = "gold";
    msg.style.color = "black";
    userScore++;
    userScorepara.innerText = userScore
  } else {

    msg.innerText = `You Lose! The Bot chose ${botChoice} `;
    msg.style.backgroundColor = "red";
    msg.style.color = "wheat";
    botScore++;
    botScorepara.innerText = botScore;
  }
};

const playGame = (userChoice) => {
  console.log("You =", userChoice);
  const botChoice = genBotChoice();
  console.log("bot =", botChoice);

  if (userChoice === botChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = botChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = botChoice === "scissors" ? false : true;
    } else {
      userWin = botChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, botChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
