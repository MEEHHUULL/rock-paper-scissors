// computer turn
compchoice = ['rock', 'paper', 'scissors']
let cScore = 0;
let hScore = 0;

function getComputerChoice(compchoice) {
    let compselection = compchoice[Math.floor(Math.random()*compchoice.length)];
    return compselection
}

// human turn 

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

humanselection = "";
 
rock.addEventListener("click", () => {
    humanselection = "rock";
    game();
});

paper.addEventListener("click", () => {
    humanselection = "paper";
    game();
});

scissors.addEventListener("click",() => {
    humanselection = "scissors";
    game();
});


// the actual game
function game() {

let compselection = getComputerChoice(compchoice); 

let result = "";

if (humanselection == compselection) {
    result = "draw! try again";    
}
else if (humanselection == 'rock' && compselection == 'scissors') {
    result = 'you win, play again!';
    hScore++;
}
else if (humanselection == 'paper' && compselection == 'rock') {
    result = 'you win, play again!';
    hScore++;
}
else if (humanselection == 'scissors' && compselection == 'paper'){
    result = 'you win, play again!';
    hScore++;
}
else if (humanselection == 'rock' && compselection == 'paper'){
    result = 'you lose, try again!';
    cScore++;
}
else if (humanselection == 'paper' && compselection == 'scissors'){
    result = 'you lose, try again!';
    cScore++;
} 
else {
    result = 'you lose, try again!';
    cScore++;
}

const displayResult = document.createElement("div"); 
displayResult.classList.add("displayResult");
displayResult.textContent = result;
document.body.append(displayResult);

const score = document.createElement("div");
score.classList.add("score");
score.textContent = "SCORE"; 
document.body.append(score);

const humanScore = document.createElement("div");
humanScore.classList.add("humanScore"); 
humanScore.textContent = "your score = " + hScore
document.body.append(humanScore);

const compScore = document.createElement("div");
compScore.classList.add("compScore"); 
compScore.textContent = "computer score = " + cScore;  
document.body.append(compScore);

if (hScore == cScore) {
    outcome = "it's a draw!"
}
else if (hScore > cScore){
    outcome = "you win!"
}
else {
    outcome = "you lose!"
}
}