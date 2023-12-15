const contentComputerChoice = document.getElementById('computer-choice');
const contentUserChoice = document.getElementById('user-choice');
const contentResult = document.getElementById('result');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');

// Click Event on the Button
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let result;
let computerChoice;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) => 
possibleChoice.addEventListener('click', () => {
     userChoice = possibleChoice.id;

    genererate_choice_computer();
    verify();
    updateScore();
  })
);

// function to generate computer choice
function genererate_choice_computer() {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    computerChoice = 'rock';
  } else if (random === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  contentUserChoice.innerHTML = `<img src="img/${userChoice}.png">`;
  contentComputerChoice.innerHTML = `<img src="img/${computerChoice}.png">`;
}

// function verify if the user wins or not
function verify() {
  if (userChoice == computerChoice) {
    result = 'Draw';
  } else if (
    (userChoice == 'rock' && computerChoice == 'scissors') ||
    (userChoice == 'scissors' && computerChoice == 'paper') ||
    (userChoice == 'paper' && computerChoice == 'rock')
  ) {
    result = 'You Win !';
    userScore++;
  } else {
    result = 'You Lost !';
    computerScore++;
  }

  contentResult.innerHTML = result;
}

// function to update scores
function updateScore() {
  userScoreElement.innerHTML =`User : ${userScore}`;
  computerScoreElement.innerHTML = `Computer : ${computerScore}`;
}





