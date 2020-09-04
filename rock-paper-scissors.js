
const containter = document.querySelector('#container');
const btns = document.querySelectorAll('button');
const playerWinDiv = document.createElement('div');
const computerWinDiv = document.createElement('div');
const drawDiv = document.createElement('div');
const winner = document.createElement('div');
playerWinDiv.style.marginTop = '20px';

let playerWins = 0;
let computerWins = 0;
let draw = 0;

playerWinDiv.textContent = `Player Wins: ${playerWins}`;
computerWinDiv.textContent = `Computer Wins: ${computerWins}`;
drawDiv.textContent = `Draws: ${draw}`;
containter.appendChild(playerWinDiv);
containter.appendChild(computerWinDiv);
containter.appendChild(drawDiv);
containter.appendChild(winner);

/*btns.forEach((button) => {
  button.addEventListener('click', function(){
    playRound(button.id, computerPlay());
  });
});*/

playGame();
function playGame(){
  btns.forEach((button) => {
    button.addEventListener('click', function(){
      if(playerWins < 5 && computerWins < 5){
        let computerSelection = computerPlay();
        let playerSelection = button.id;
        let result = playRound(playerSelection, computerSelection);
        if (result == 'win'){
          playerWins +=1;
          playerWinDiv.textContent = `Player Wins: ${playerWins}`;
        }
        else if(result == 'lose'){
          computerWins +=1;
          computerWinDiv.textContent = `Computer Wins: ${computerWins}`;
        }
        else if(result == 'draw'){
          draw +=1;
          drawDiv.textContent = `Draws: ${draw}`;
        }
      }
      if (playerWins == 5){
        winner.textContent = 'You Won!';
      }
      else if (computerWins == 5){
        winner.textContent = 'You Lose!';
      }
    })
  })
}

function computerPlay(){
    let selection = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * selection.length);
    return selection[random];
  }

function playRound(playerSelection, computerSelection){
    console.log(playerSelection)
    console.log(computerSelection)
    if(playerSelection === computerSelection){
    console.log('Tie! Play this round over.');
    return 'draw';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors')
    {
        console.log('win')
        return 'win';
      } 
      else if (playerSelection == 'paper' && computerSelection == 'rock')
      {
        console.log('win')
        return 'win';
      }
      else if (playerSelection == 'scissors' && computerSelection == 'paper')
      {
        console.log('win')
        return 'win';
      }
      else{
        console.log('lose')
        return 'lose';
      }
    }
    



//const rounds = parseInt(prompt('How many rounds would you like to play?'));
//playGame(rounds);