//This loads the first custom script after SP loads internal scripts
_spBodyOnLoadFunctionNames.push("runLast");

let userScore = 0;
let computerScore = 0;

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
        console.log("user selects rock.");
        userChoice = "rock";
        var pcChoice = getComputerChoice();
        console.log("computer selects", pcChoice);
        compare(userChoice, computerChoice);
    });
    paper.addEventListener('click', function () {
        console.log("user selects paper.");
        userChoice = "paper";
        var pcChoice = getComputerChoice();
        console.log("computer selects", pcChoice);
        compare(userChoice, computerChoice);
    });
    scissors.addEventListener('click', function () {
        console.log("user selects scissors.");
        userChoice = "scissors";
        var pcChoice = getComputerChoice();
        console.log("computer selects", pcChoice);
        compare(userChoice, computerChoice);
    });
}


function compare(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        console.log("The result is a tie!");

    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            userScore++;
            document.getElementById('userScore').innerHTML = userChoice;
            console.log("rock wins");
        } else {
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
            console.log("paper wins");
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            userScore++;
            document.getElementById('userScore').innerHTML = userScore;
            console.log("paper wins");
        } else {
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
            console.log("scissors win");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            document.getElementById('computerScore').innerHTML = computerScore;
            console.log("rock wins");
        } else {
            userScore++;
            document.getElementById('userScore').innerHTML = userScore;
            console.log("scissors wins");
        }
    }
};