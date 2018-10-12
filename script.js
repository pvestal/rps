//This loads the first custom script after SP loads internal scripts
_spBodyOnLoadFunctionNames.push("runLast");

let userScore = 0;
let computerScore = 0;
let ties = 0;
let gamesPlayed = userScore + computerScore + ties;

let computerChoice = "";
let userChoice = "";

function getComputerChoice() {

    computerChoice = Math.random(); //number between 0 and 1

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}


function runLast() {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    rock.addEventListener('click', function () {
        //console.log("user selects rock.");
        userChoice = "rock";
        var pcChoice = getComputerChoice();
        //console.log("computer selects", pcChoice);
        compare(userChoice, computerChoice);

    });
    paper.addEventListener('click', function () {
        //console.log("user selects paper.");
        userChoice = "paper";
        var pcChoice = getComputerChoice();
        //console.log("computer selects", pcChoice);
        compare(userChoice, computerChoice);
    });
    scissors.addEventListener('click', function () {
        //console.log("user selects scissors.");
        userChoice = "scissors";
        var pcChoice = getComputerChoice();
        //console.log("computer selects", pcChoice);
        compare(userChoice, computerChoice);
    });
}


function compare(userChoice, computerChoice) {
    //console.log("games ", gamesPlayed);
    gamesPlayed++;
    document.getElementById('games_played').innerHTML = gamesPlayed;
    addFadeEffect();

    if (userChoice === computerChoice) {
        ties++;
        document.getElementById('tieScore').innerHTML = ties;
        document.getElementById('game').innerHTML = "";
        document.getElementById('game').innerHTML = "user and computer picked the same. It's a tie.";
        removeFadeEffect();
        //console.log("The result is a tie!");

    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            userScore++;
            document.getElementById('userScore').innerHTML = userScore;
            document.getElementById('game').innerHTML = "";
            document.getElementById('game').innerHTML = "computer picked scissors - rock crushes scissors";
            removeFadeEffect();
            //console.log("rock wins");
        } else {
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
            document.getElementById('game').innerHTML = "";
            document.getElementById('game').innerHTML = "computer picked paper - paper covers rock";
            removeFadeEffect();
            //console.log("paper wins");
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            userScore++;
            document.getElementById('userScore').innerHTML = userScore;
            document.getElementById('game').innerHTML = "";
            document.getElementById('game').innerHTML = "computer picked rock - paper covers rock";
            removeFadeEffect();
            //console.log("paper wins");
        } else {
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
            document.getElementById('game').innerHTML = "";
            document.getElementById('game').innerHTML = "computer picked scissors - scissors cut paper";
            removeFadeEffect();
            //console.log("scissors win");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
            document.getElementById('game').innerHTML = "";
            document.getElementById('game').innerHTML = "computer picked rock - rock crushes scissors";
            removeFadeEffect();
            //console.log("rock wins");
        } else {
            userScore++;
            document.getElementById('userScore').innerHTML = userScore;
            document.getElementById('game').innerHTML = "";
            document.getElementById('game').innerHTML = "computer picked paper - scissors cut paper";
            removeFadeEffect();
            //console.log("scissors wins");
        }
    }
}

function addFadeEffect() {
    var element = document.getElementById("game");
    element.classList.add("fade-in");
}

function removeFadeEffect() {
    var element = document.getElementById("game");
    element.classList.add("fade-out");
}

