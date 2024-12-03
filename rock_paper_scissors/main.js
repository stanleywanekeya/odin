const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const display = document.createElement('div');
let resetButton;

let humanScore = 0;
let computerScore = 0;
const maxRound = 5;

const getComputerChoice = () => {
  const game = ['rock', 'paper', 'scissors'];
  return game[Math.floor(Math.random() * game.length)];
}

const updateResultDisplay = (message) => {
  display.textContent = message;
  document.body.appendChild(display);
};

const disableButtons = () => {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
};

const resetGame = () => {
  computerScore = 0;
  humanScore = 0;
  display.textContent = '';
  if(resetButton) resetButton.remove();
  enableButtons();
};

const enableButtons = () => {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
};

const endGame = () => {
  disableButtons();
  const winner = 
	humanScore > computerScore ? 'You win the game!' : 'You lose the game!';
  updateResultDisplay(`${winner} Final score: You ${humanScore} - Computer ${computerScore}`);
  resetButton = document.createElement('button');
  resetButton.textContent = 'reset'
  resetButton.classList = 'reset'
  resetButton.addEventListener('click', resetGame);
  document.body.appendChild(resetButton);
};

const playRound = (choice) => {
  const computerChoice = getComputerChoice();
  const humanChoice = choice.toLowerCase();

  if(humanChoice === computerChoice) {
	updateResultDisplay(`It's a draw. You chose ${humanChoice}, computer chose ${computerChoice}.`);
  } else if(
	(humanChoice === 'rock' && computerChoice === 'scissors') ||
	(humanChoice === 'paper' && computerChoice === 'rock') ||
	(humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
	humanScore++;
	updateResultDisplay(`You win ${humanChoice} beats ${computerChoice}.`);
  } else {
	computerScore++;
	updateResultDisplay(`You lose ${computerChoice} beats ${humanChoice}.`);
  }

  if((computerScore === maxRound) || (humanScore === maxRound)) {
	endGame();
  }
};

rockButton.addEventListener('click', (event) => playRound(event.target.textContent));
paperButton.addEventListener('click', (event) => playRound(event.target.textContent));
scissorsButton.addEventListener('click', (event) => playRound(event.target.textContent));
