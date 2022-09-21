
function getRandomChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber === 1){
        return "rock";
    }
    else if (randomNumber === 2){
        return "paper";
    }
    else if (randomNumber === 3){
        return "scissors";
    }
}

let computerScore = 0;
let playerScore = 0;

document.getElementById("playagainbtn").style.display = 'none';

let isGameOver = (score) => {
    if (playerScore < 5 && computerScore < 5){
        return true;
    }
    return false;
};


function playRound(playerSelection) {
    const computerSelection = getRandomChoice();
    const score = document.querySelector('#score');
    const computerSelDisplay = document.querySelector('#cselection');

    if (isGameOver()){
        computerSelDisplay.innerHTML = `Computer chose: ${computerSelection}`;
        if (playerSelection === 'rock' && computerSelection === 'rock'){
            playerScore ++;
            computerScore ++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper'){
            computerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }


        else if (playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }
        else if (playerSelection === 'paper' && computerSelection === 'paper'){
            playerScore++;
            computerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            computerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }


        else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
            playerScore++;
            computerScore++;
            score.textContent = `You | ${playerScore} : ${computerScore} | Computer`;}
        
        endScores();
    }
}

function endScores(){
    const scoremsg = document.querySelector('#scoremsg');
    if (playerScore === 5 && computerScore === 5){
        scoremsg.textContent = 'DRAW!';
        playagainbtn.style.display = '';
    }
    else if (playerScore === 5){
        scoremsg.textContent = 'You won!';
        playagainbtn.style.display = '';
    }
    else if (computerScore === 5){
        scoremsg.textContent = 'Computer won!';
        playagainbtn.style.display = '';
    }
}

function resetGame(){
    const computerSelDisplay = document.querySelector('#cselection');
    playerScore = 0;
    computerScore = 0;
    score.textContent = 'You | 0 : 0 | Computer';
    scoremsg.textContent = '';
    computerSelDisplay.innerHTML = 'Computer chose: ?';
    playagainbtn.style.display = 'none';
}