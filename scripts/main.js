const ROCK = 'rock',
    PAPER = 'paper',
    SCISSORS = 'scissors';
const POSSIBLE_MOVES = [ROCK, PAPER, SCISSORS];
const PLAYER = 'Player',
    COMPUTER = 'Computer';
const DRAW = 'Draw';

function computerPlay() {
    return POSSIBLE_MOVES[Math.floor(Math.random() * POSSIBLE_MOVES.length)];
}

function checkPlayerSelection(playerSelection) {
    let stdPlayerSelection = playerSelection;
    stdPlayerSelection = stdPlayerSelection.toLowerCase();
    if (POSSIBLE_MOVES.indexOf(stdPlayerSelection) === -1) {
        console.warn('Your move is not a rock-paper-scissors move!.');
        return true;
    }

    return false;
}

//console.log(checkPlayerSelection("ROcK"))

function decideRoundWinner(playerSelection, computerSelection) {
    let roundWinnerMove;
    let roundWinner;

    if (playerSelection === computerSelection) {
        return DRAW;
    } else {
        if (
            (playerSelection == ROCK && computerSelection == PAPER) ||
            (playerSelection == PAPER && computerSelection == ROCK)
        ) {
            roundWinnerMove = PAPER;
        }
        if (
            (playerSelection == SCISSORS && computerSelection == PAPER) ||
            (playerSelection == PAPER && computerSelection == SCISSORS)
        ) {
            roundWinnerMove = SCISSORS;
        }
        if (
            (playerSelection == ROCK && computerSelection == SCISSORS) ||
            (playerSelection == SCISSORS && computerSelection == ROCK)
        ) {
            roundWinnerMove = ROCK;
        }
    }

    roundWinner = playerSelection === roundWinnerMove ? PLAYER : COMPUTER;
    console.log(`This round's winner is ${roundWinner}`);
    return roundWinner;
}

function playRound() {
    let computerSelection = computerPlay();

    let playerSelection = prompt('Please choose your move:');

    while (checkPlayerSelection(playerSelection) == true) {
        playerSelection = prompt(
            'Please choose a correct move!! (rock or paper or scissors)'
        );
    }

    console.log(`You choose ${playerSelection}`);
    console.log(`Computer choose ${computerSelection}`);

    let roundwinner = decideRoundWinner(playerSelection, computerSelection);

    if (roundwinner === PLAYER) {
        console.log(
            `You Win this round! ${playerSelection} beats ${computerSelection}`
        );
        return PLAYER;
    } else if (roundwinner === COMPUTER) {
        console.log(
            `You Lose this round! ${computerSelection} beats ${playerSelection}`
        );
        return COMPUTER;
    } else if (roundwinner === DRAW) {
        console.log(`This round is a Draw!! \n you get both a point`);
    }
}

function playGame() {
    let playerScore = 0,
        computerScore = 0,
        roundResult;

    for (let round = 1; round < 6; round++) {
        console.log(`Round ${round}`);

        roundResult = playRound();

        if (roundResult === PLAYER) {
            playerScore++;
        } else if (roundResult === COMPUTER) {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }

        console.log(
            `The current game score is \n You : ${playerScore} vs COMPUTER : ${computerScore}`
        );
    }

    if (playerScore > computerScore) {
        console.log('CONGRATULATIONS !!! \n You won this game :D');
    } else if (playerScore < computerScore) {
        console.log('SORRY, you lost this time :(');
    } else {
        console.log('This game was a DRAW. Better luck next time');
    }
}

console.log(playGame());
