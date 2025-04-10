let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const rockButton= document.getElementById("rock");
const scissorButton= document.getElementById("scissors");
const paperButton=document.getElementById("paper");
const resetButton=document.getElementById("reset-btn");
const resultText=document.getElementsByClassName('result');
const computerMove=document.getElementById("computer-move");
const playerMove=document.getElementById("player-move");



function playRound(playerChoice) {
    let ComputerChoice=getComputerChoice();
    console.log("ComputerChocie is:" + ComputerChoice);
    
    // Comparison for the Scores 
    if (playerChoice == ComputerChoice) {
        console.log("it's a tie");
        const tieAlert = document.createElement("p");
        tieAlert.textContent = "it's a Tie";
        resultText[0].appendChild(tieAlert);

        // Remove the tie alert after 2 seconds
        setTimeout(() => {
            resultText[0].removeChild(tieAlert);
        }, 2000);
    }
if (playerChoice=='rock' && ComputerChoice=="paper"){
    computerScore++;}
    else if (playerChoice=='rock' && ComputerChoice=="scissors"){
        playerScore++;
    }
if (playerChoice=='paper' && ComputerChoice=="rock"){
        playerScore++;
    }
    else if(playerChoice=='paper' && ComputerChoice=='scissors'){
        computerScore++;
    }
if (playerChoice=='scissors' && ComputerChoice=="rock"){
    computerScore++;}
    else if (playerChoice=='scissors' && ComputerChoice=="paper"){
        playerScore++;
    }
UpdateScore();
updateIcons(playerChoice,ComputerChoice);
}

function updateIcons(playerChoice, ComputerChoice){
    // Making the playericonUpdate 
    if (playerChoice=="rock"){
        playerMove.className= "fas fa-hand-rock";
    }
    else if (playerChoice=="paper"){
        playerMove.className="fas fa-hand-paper" ;
    }
    else {
        playerMove.className="fas fa-hand-scissors";
    }
    //Making the Computer pdateIcon


    if (ComputerChoice=="rock"){
        computerMove.className="fas fa-hand-rock";
    }
    else if (ComputerChoice=="paper"){
        computerMove.className="fas fa-hand-paper";
    }
    else {
        computerMove.className="fas fa-hand-scissors";
    }
}
function UpdateScore(){

    const playerScoreboard=document.getElementById("player-score");
    const computerScoreboard=document.getElementById("computer-score");
    playerScoreboard.textContent=playerScore;
    computerScoreboard.textContent=computerScore;

}


resetButton.addEventListener("click", () =>{
    playerScore=0;
    computerScore=0;
    UpdateScore();
    computerMove.className="fas fa-question";
    playerMove.className="fas fa-question";

})

rockButton.addEventListener("click", () =>{
let playerChoice="rock";
console.log("Player choose:", playerChoice);
playRound(playerChoice);
});

scissorButton.addEventListener("click", () =>{
    let playerChoice="scissors";
    console.log("Player choose:", playerChoice);
    playRound(playerChoice);
    });

paperButton.addEventListener("click", () =>{
let playerChoice="paper";
console.log("Player choose:", playerChoice);
playRound(playerChoice);
});