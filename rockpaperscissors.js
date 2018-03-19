const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
      } else {
      console.log('This is not a valid choice!');
      }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2: 
      return 'scissors';
  };
};

const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'The game was a tie!';
  }
  if (userChoice === 'bomb'){
    return 'User wins!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won 1!';
    } else {
      return 'User won 1!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer won 2!';
    } else {
      return 'User won 2!';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won 3!';
    } else {
      return 'User won 3!';
    }
  }
};

const playGame = () =>{
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('User chooses: ' + userChoice);
  console.log('Computer chooses: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
