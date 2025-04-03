let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateMoveIcons(playerChoice, computerChoice) {
    const playerIcon = document.getElementById('player-move');
    const computerIcon = document.getElementById('computer-move');
    
    playerIcon.className = `fas fa-hand-${playerChoice}`;
    computerIcon.className = `fas fa-hand-${computerChoice}`;
}

function updateScore() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    updateMoveIcons(playerChoice, computerChoice);
    
    if (playerChoice === computerChoice) {
        document.getElementById('result-text').textContent = "It's a tie!";
        return;
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        document.getElementById('result-text').textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        document.getElementById('result-text').textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    
    updateScore();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('result-text').textContent = 'Choose your move!';
    document.getElementById('player-move').className = 'fas fa-question';
    document.getElementById('computer-move').className = 'fas fa-question';
}

// Event Listeners
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
document.getElementById('reset-btn').addEventListener('click', resetGame);
