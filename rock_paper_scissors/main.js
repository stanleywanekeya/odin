let humanScore;
let computerScore;

function getComputerChoice() {
  const choice = "rock paper scissors";
  const randomNumber = Math.floor(Math.random() * 3);
  return choice.split(" ")[randomNumber];
}

function getHumanChoice() {
  let choice;
  do {
	choice = prompt("Enter choice(rock paper or scissors): ");
  } while(choice !== "rock" && choice !== "paper" && choice !== "scissors");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
	console.log('Draw');
  } else if(
	humanChoice === 'rock' && computerChoice === 'scissors' ||
	humanChoice === 'paper' && computerChoice === 'rock' ||
	humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
	console.log(`You win ${humanChoice} beats ${computerChoice}`);
	console.log('human', humanChoice);
	console.log('computer', computerChoice);
	humanScore++;
  } else {
	console.log(`You lose ${computerChoice} beats ${humanChoice}`);
	console.log('human', humanChoice);
	console.log('computer', computerChoice);
	computerScore++;
  }
}

function playGame() {
  let humanSelection;
  let computerSelection;
  humanScore = 0;
  computerScore = 0;
  for(let i = 0; i < 5; i++) {
	humanSelection = getHumanChoice();
	computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection)
  }

  if(humanScore > computerScore) {
	console.log(`You win by ${humanScore} rounds.`);
  } else {
	console.log(`You lost! Computer won by ${computerScore} rounds.`);
  }
}

playGame();
