document.addEventListener('DOMContentLoaded', function() {
    const choicebtn=document.querySelectorAll('.choice');
    const resulttxt=document.getElementById('resulttxt');
    const choices=['rock','paper','scissors'];
    const compchctxt=document.getElementById('compchoice');
    function compchoice() {
            const comp = Math.floor(Math.random() * choices.length);
            return choices[comp];
        }
    function determineWinner(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                return 'tie';
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                return 'win';
            } else {
                return 'lose';
            }
        }
        function updateUI(result) {
            if (result === 'win') {
                resulttxt.textContent="YOU WON";
                document.body.style.backgroundColor = 'green';
                compchctxt.textContent=compchoice();
                
            } else if (result === 'lose') {
                resulttxt.textContent="YOU LOST";
                document.body.style.backgroundColor = 'red';
                compchctxt.textContent=compchoice();
                
            } else {
                resulttxt.textContent="ITS A TIE";
                document.body.style.backgroundColor = 'lightblue';
                compchctxt.textContent=compchoice();
               
            }
        }
        function game(playerChoice) {
            const computerChoice = compchoice();
            const result = determineWinner(playerChoice, computerChoice);
            updateUI(result);
        }
        choicebtn.forEach(button => {
            button.addEventListener('click', () => {
                /*button.style.backgroundColor = 'yellow';*/
                const playerChoice = button.id;
                game(playerChoice);
            });
        });
});