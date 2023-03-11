let pScore = 0
let cScore = 0
function game () {
   
    function declareWinner () {
        resetBtn();
    
        if (pScore > cScore) {
            const text = document.querySelector('.intro h1');
            text.textContent = 'Victory!'
        }else {
            const text = document.querySelector('.intro h1');
            text.textContent = 'Defeat!'
        };    
    
        function resetBtn () {
            const reset = document.querySelector('.intro button');
            reset.textContent = 'Play again?';
            reset.style.backgroundColor = '#3882f6'
            reset.style.color = '#f9faf8'
            reset.style.padding = '5px';
            reset.style.paddingLeft = '15px';
            reset.style.paddingRight = '15px';
            reset.style.borderRadius = '5px';
        }
        
    }

    function start() {
        const playBtn = document.querySelector('.intro button');
    
        playBtn.addEventListener('click', () => {
            location.reload();
        });
    };
    
   function playRound() {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.playerHand');
    const computerHand = document.querySelector('.computerHand');

    const arrOfChoices = ['rock','paper','scissors'];

    options.forEach(option => {
        option.addEventListener('click', function() {
            const randomNum = Math.floor(Math.random() *           arrOfChoices.length);
            const computerChoice = (arrOfChoices[randomNum]);

            compareChoices(this.textContent, computerChoice);

            playerHand.src = `assets/${this.textContent}.png`;
            computerHand.src = `assets/${computerChoice}.png`;
            });
        });
   };
   const updateScore = () => {
    const playerScore = document.querySelector('.playerScore p');
    const computerScore = document.querySelector('.computerScore p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    
    if (pScore === 5 || cScore === 5) {
        const match = document.querySelector('.match');
        match.classList.add('fadeOut');
        declareWinner()
        };
    };
   
   const compareChoices = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');
    if (playerChoice === computerChoice) {
        winner.textContent = 'Draw!';
        return;
    }else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'rock'){
        pScore++;
        updateScore();
        winner.textContent = 'Player Win!';
        return;
    }else {
        cScore++;
        updateScore();
        winner.textContent = 'Computer Win!';
        return;
    };
   };

   start();
   playRound();
   
};
game();
