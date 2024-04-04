compchoice = ['rock', 'paper', 'scissors']
function getComputerChoice(compchoice) {
    let compselection = compchoice[Math.floor(Math.random()*compchoice.length)];
    return compselection
}

// okay, so this gives a random output out of rock paper scissors for the computer
// i did this by making an array with r/p/s 
// next i took a random number between 0-1 but scaled by the length of my array so actually between 0-3
// next i needed this to make an integer so i used math.floor to round down to the nearest integer 0/1/2 as my array consists of r/p/s
// not bad at all, so far so good. 


// next i need to allow the human to enter a r/p/s value. 
// i guess i also need to worry about how the human will type this in .. Rock, rock, ROCK.. 
// i guess i will need to convert the input all to either lower/uppercase 
//then later i will need to compare human input vs computer input but let's not get ahead of ourselves. 

function humanturn(){
return prompt('Select Rock/Paper/Scissors').toLowerCase();
}

//ok, so i think i've got the above done. it was actually pretty simple. i just used the prompt to allow the human to enter 


function game() {

let compselection = getComputerChoice(compchoice); //edefines output from getComputerChoice as game function does not store this

let humanselection = humanturn(); // redefines output from humanturn as game function does not store this

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

game()

// functions are all independent of each other. 
// all a function does is return a value in a given data type 
// you then need to define this returned value in other functions in order for it to be used by the other functions 
// OR you can simply use the function name to give you the value 
// but i prefer redefining the function.. i think it's continuity or something like that 
