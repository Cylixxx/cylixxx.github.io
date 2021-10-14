/*
  Author: 		Ryan Gilchrist
  File name: 	rpsls_javascript.js
  Date Created:	10/10/2021
  Date Updated: 10/10/2021
  Version: 		0.1

  Copyright: 
      *********************************************************************** 
      ***********************************************************************
      ***********************************************************************

  Description:
      JavaScript used for rpsls_game.html.
*/

/*
 * RPSLS Game
 */

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

const userText = document.getElementById("userText");
const compText = document.getElementById("compText");
const resultText = document.getElementById("resultText");
const userImg = document.getElementById("userSelection");
const compImg = document.getElementById("compSelection");

const resetButton = document.getElementById("reset");
const scoreboardButton = document.getElementById("scoreboard");
const playAgainButton = document.getElementById("playAgain");
const goBackButton = document.getElementById("goBack");

const startBoard = document.getElementById("start_content");
const resultBoard = document.getElementById("rpsls_results");
const gameScore = document.getElementById("gameScore");

const currentUserScore = document.getElementById("userScore");
const currentCompScore = document.getElementById("compScore");

let userScore = 0;
let compScore = 0;

function userSelection() {
    console.log("Welcome to the game of Rock Paper Scissos Lizard Spock!");
    console.log("Please choose your move...");

    rock.addEventListener('click', function () {
        playGame("ROCK");
        userImg.src = "../images/rock1.png";
        userText.innerHTML = "You selected: ROCK";
    })
    paper.addEventListener('click', function () {
        playGame("PAPER");
        userImg.src = "../images/paper1.png";
        userText.innerHTML = "You selected: PAPER";
    })
    scissors.addEventListener('click', function () {
        playGame("SCISSORS");
        userChoice = scissors;
        userImg.src = "../images/scissors1.png";
        userText.innerHTML = "You selected: SCISSORS";
    })
    lizard.addEventListener('click', function () {
        playGame("LIZARD");
        userImg.src = "../images/lizard1.png";
        userText.innerHTML = "You selected: LIZARD";
    })
    spock.addEventListener('click', function () {
        playGame("SPOCK");
        userImg.src = "../images/spock1.png";
        userText.innerHTML = "You selected: SPOCK";
    })
}

function playGame(userSelection) {
    console.log("You chose: " + userSelection);
    const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
    const randomSelection = Math.floor(Math.random() * 5);
    const computerSelection = choices[randomSelection];

    if (computerSelection == "ROCK") {
        compImg.src = "../images/rock1.png";
    } else if (computerSelection == "PAPER") {
        compImg.src = "../images/paper1.png";
    } else if (computerSelection == "SCISSORS") {
        compImg.src = "../images/scissors1.png";
    } else if (computerSelection == "LIZARD") {
        compImg.src = "../images/lizard1.png";
    } else {
        compImg.src = "../images/spock1.png";
    }
    console.log("Computer chose: " + computerSelection)
    compText.innerHTML = "Computer selected: " + computerSelection;


    switch (userSelection + " " + computerSelection) {
        case "ROCK SCISSORS":
        case "ROCK LIZARD":
        case "PAPER ROCK":
        case "PAPER SPOCK":
        case "SCISSORS PAPER":
        case "SCISSORS LIZARD":
        case "LIZARD SPOCK":
        case "LIZARD PAPER":
        case "SPOCK SCISSORS":
        case "SPOCK ROCK":
            resultText.innerHTML = "<b>YOU WIN!</b>";
            console.log("YOU WIN!");
            userScore++;
            startBoard.style.display = 'none';
            resultBoard.style.display = 'block';
            break;
        case "SCISSORS ROCK":
        case "LIZARD ROCK":
        case "ROCK PAPER":
        case "SPOCK PAPER":
        case "PAPER SCISSORS":
        case "LIZARD SCISSORS":
        case "SPOCK LIZARD":
        case "PAPER LIZARD":
        case "SCISSORS SPOCK":
        case "ROCK SPOCK":
            resultText.innerHTML = "<b>COMPUTER WINS!</b>";
            console.log("COMPUTER WINS!");
            compScore++;
            startBoard.style.display = 'none';
            resultBoard.style.display = 'block';
            break;
        case "ROCK ROCK":
        case "PAPER PAPER":
        case "SCISSORS SCISSORS":
        case "LIZARD LIZARD":
        case "SPOCK SPOCK":
            resultText.innerHTML = "<b>IT'S A DRAW!</b>";
            console.log("IT'S A DRAW!");
            startBoard.style.display = 'none';
            resultBoard.style.display = 'block';
            break;
    }
    console.log("~~Current Score~~");
    console.log("User: " + userScore + " -- Comp: " + compScore);

    resetButton.onclick = function resetGame() {
        userScore = 0;
        compScore = 0;
        console.log("Score has been reset!");
        console.log("Please choose your move...");
        resultBoard.style.display = 'none';
        startBoard.style.display = 'block';
        gameScore.style.display = 'none';
    }
    scoreboardButton.onclick = function scoreboard() {
        console.log("Here is the scoreboard...");
        resultBoard.style.display = 'none';
        gameScore.style.display = 'block';
        currentUserScore.innerHTML = userScore;
        currentCompScore.innerHTML = compScore;
    }
    goBackButton.onclick = function goBack() {
        console.log("Back to results...");
        resultBoard.style.display = 'block';
        gameScore.style.display = 'none';
    }
    playAgainButton.onclick = function playAgain() {
        console.log("We're playing again!");
        console.log("Please choose your move...");
        resultBoard.style.display = 'none';
        startBoard.style.display = 'block';
        gameScore.style.display = 'none';
    }
}
userSelection();
