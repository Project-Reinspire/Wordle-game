const WORD_LENGTH = 5;
const WORD_TO_GUESS = 'apple'.toUpperCase(); // Example word

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');

    function createBoard() {
        for (let i = 0; i < WORD_LENGTH; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            board.appendChild(cell);
        }
    }

    function displayGuess(guess) {
        const cells = board.getElementsByClassName('cell');
        for (let i = 0; i < WORD_LENGTH; i++) {
            cells[i].textContent = guess[i] || '';
            cells[i].style.backgroundColor = guess[i] === WORD_TO_GUESS[i] ? 'green' : 'gray';
        }
    }

    guessButton.addEventListener('click', () => {
        const guess = guessInput.value.toUpperCase();
        if (guess.length !== WORD_LENGTH) {
            message.textContent = `Guess must be ${WORD_LENGTH} letters long.`;
            return;
        }
        if (guess === WORD_TO_GUESS) {
            message.textContent = 'Congratulations! You guessed the word!';
            displayGuess(guess);
        } else {
            message.textContent = 'Try again.';
            displayGuess(guess);
        }
    });

    createBoard();
});
