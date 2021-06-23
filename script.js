//declare variables
var userInput
var computerInput
var RPS = "RPS"

//function for what the user inputs
function userGivesInput() {
    var userInput2 = prompt("Pick R, P, or S");
    userInput = userInput2.toUpperCase()
    return userInput
}
//function for what the computer imputs
function computerGivesInput () {
    var computerInput = "";
    while (computerInput.length < 1) {
        computerInput += RPS[Math.floor(Math.random() * RPS.length)];
    }
    return computerInput
}

// object that keeps track of user's scores
var scoreBoard = {
    wins: 0,
    losses: 0,
    ties: 0,
}

// do if conditions for 
// RvR, RvP, RvS, 
// PvR, PvP, PvS, 
// SvR, SvP, SvS,
function playRPS () {
    userInput = userGivesInput();
    computerInput = computerGivesInput();
    alert('Computer picked: ' + computerInput)
    if (userInput === 'R' && computerInput === "R") { //user picked R && //computer picked R
        alert('You tie!');
        scoreBoard.ties += 1;
    } else if (userInput === 'R' && computerInput === "P") { //RVP
        alert('You lose!');
        scoreBoard.losses += 1;
    } else if (userInput === 'R' && computerInput === "S") { //RVS
        alert('You win!');
        scoreBoard.wins += 1;
    } else if (userInput === 'P' && computerInput === "R") { //PVR
        alert('You win!');
        scoreBoard.wins += 1;
    } else if (userInput === 'P' && computerInput === "P") { //PVP
        alert('You tie!'); 
        scoreBoard.ties += 1;  
    } else if (userInput === 'P' && computerInput === "S") { //PVS
        alert('You lose!');;
        scoreBoard.losses += 1;
    } else if (userInput === 'S' && computerInput === "R") { //SVR
        alert('You lose!');
        scoreBoard.losses += 1;
    } else if (userInput === 'S' && computerInput === "P") { //SVP
        alert('You win!')
        scoreBoard.wins += 1;
    } else if (userInput === 'S' && computerInput === "S") { //SVS
        alert('You tie!')
        scoreBoard.ties += 1
    } else {alert('Bad input, please enter R, P, or S')}

    alert(
        'Current scores: \n' +
        'Wins: ' + scoreBoard.wins + '\n' +
        'Losses: ' + scoreBoard.losses + '\n' +
        'Ties: ' + scoreBoard.ties
        // 'hello please say somethign'
    )

    var playAgain = confirm('Would you like to play again?')

    if (playAgain === true) {
        playRPS();
    } else {
        document.write('Thanks for playing!')
    }

}

playRPS();