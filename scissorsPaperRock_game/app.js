const output = document.querySelector('#output');
const button = document.querySelectorAll('button');
let scorePlayer = 0;
let scoreComputer = 0;
let msgWin = '';

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', game);

}

function game(e) {
    // Recover choice player
    let player = e.target.innerText;

    // calculate choice computer
    const arrayComputer = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * arrayComputer.length);
    let computer = arrayComputer[randomChoice];

    if (player === 'Rock' && computer === 'Scissors') {
        scorePlayer++;
        msgWin = 'Player Wins !';

    } else if (player === 'Paper' && computer === 'Rock') {
        scorePlayer++;
        msgWin = 'Player Wins !';

    } else if (player === 'Scissors' && computer === 'Paper') {
        scorePlayer++;
        msgWin = 'Player Wins !';

    } else if (computer === 'Rock' && player === 'Scissors') {
        scoreComputer++;
        msgWin = 'Computer Wins !';

    } else if (computer === 'Paper' && player === 'Rock') {
        scoreComputer++;
        msgWin = 'Computer Wins !';

    } else if (computer === 'Scissors' && player === 'Paper') {
        scoreComputer++;
        msgWin = 'Computer Wins !';

    } else {
        msgWin = 'Draw result in a tie match';
    }

    output.innerHTML = `Player ${scorePlayer} - Computer ${scoreComputer}<br> ${player} VS ${computer}<br> <b>${msgWin}</b>`;
}






