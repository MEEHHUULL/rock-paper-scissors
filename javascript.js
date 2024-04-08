// computer turn
compchoice = ['rock', 'paper', 'scissors']
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
}
else if (humanselection == 'paper' && compselection == 'rock') {
    result = 'you win, play again!';
}
else if (humanselection == 'scissors' && compselection == 'paper'){
    result = 'you win, play again!';
}
else if (humanselection == 'rock' && compselection == 'paper'){
    result = 'you lose, try again!';
}
else if (humanselection == 'paper' && compselection == 'scissors'){
    result = 'you lose, try again!';
} 
else {
    result = 'you lose, try again!';
}

 const displayResult = document.createElement("div"); 
 displayResult.classList.add("displayResult");
 displayResult.textContent = result;
 document.body.append(displayResult);

}

