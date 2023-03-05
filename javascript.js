let playerScore = 0
let computerScore = 0

function computerPlay() {
    const arrOfChoices = ['rock','paper','scissor']
    const randomNum = Math.floor(Math.random() * 3)
    const computerChoice = (arrOfChoices[randomNum])
    return computerChoice
   
}


const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection ) {
        return'Tie'    
    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return'You lose'
    }else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++
        return'You lose'

    }else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++
        return'You lose'

    }else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++
        return'You win'

    }else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++
        return'You win'

    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return'You win'
    }
}


function game() {
    
    for (let i = 0; i<5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt('Type: rock, paper, scissor');
       playerSelection = playerSelection.toLowerCase();
       console.log(playRound(playerSelection, computerSelection))
            
    }
    if (playerScore > computerScore){
        console.log('You beat the computer')
    }else if (playerScore < computerScore) {
        console.log('Game Over')
    }else {
        console.log('You tied')
        
    }

    console.log(`Your score ${playerScore}`)
        console.log(`Computer score ${computerScore}`)
}

game()