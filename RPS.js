console.log("test");

const body = document.querySelector('body');

const resultsDiv = document.createElement('div');
resultsDiv.classList.add('container');
const singleResultText=document.createElement('p');
singleResultText.classList.add("insideContainer");
singleResultText.textContent="Click a button to play a round (game continues until 5 wins or 5 losses)."
const runningWins = document.createElement('p');const runningLosses = document.createElement('p');const runningTies = document.createElement('p');
runningWins.classList.add("insideContainer");runningLosses.classList.add("insideContainer");runningTies.classList.add("insideContainer");
runningWins.textContent = `Wins: 0`;runningLosses.textContent=`Losses: 0`;runningTies.textContent=`Ties: 0`;
resultsDiv.appendChild(singleResultText);
resultsDiv.appendChild(runningWins);resultsDiv.appendChild(runningLosses);resultsDiv.appendChild(runningTies);

body.append(resultsDiv);
let wins = 0; let losses = 0; let ties = 0; let roundArray; let gameReport;
let scoreDict=new Object();
scoreDict = {"wins": wins, "losses": losses, "ties": ties};

//const finalResultDiv = document.createElement('div');
//finalResultDiv.classList.add('finalResult');

function getComputerChoice(choicesArray=["Rock", "Paper", "Scissors"]) {
    //const choices = ["Rock", "Paper", "Scissors"]
    return choicesArray[Math.floor(Math.random()*choicesArray.length)];
}

function getPlayerChoice() {
    undefined;
    let rawInput = "Rock";
    rawInput = window.prompt("Enter one of the following 3 values: Rock; Paper; Scissors (or just enter r, p, or s)")
    playerSelection = rawInput[0].toUpperCase() + rawInput.substring(1).toLowerCase()
    if (playerSelection === "R") {playerSelection="Rock"}; if (playerSelection === "P") {playerSelection="Paper"}; if (playerSelection === "S") {playerSelection="Scissors"};
    return playerSelection;
}


//console.log(getComputerChoice())
function playSingleRound(inputString = "noUI", scopedScoreDict={}) {
    let origDict = {...scopedScoreDict};
    let outcome; let finalReport; let playerSelection; let computerSelection;
    let win = "win"; let loss = "loss"; let tie = "tie";
    computerSelection = getComputerChoice();
    if (inputString === "noUI") {
        undefined;
        //playerSelection = getPlayerChoice();
    }
    else {
        playerSelection = inputString;
    }
    
    if (computerSelection === playerSelection) {
        finalReport = `It\'s a tie. Both players selected ${computerSelection}`;
        outcome = tie; scopedScoreDict["ties"]+=1;
        return scopedScoreDict;
    }
    else if (computerSelection === "Rock") {
        if (playerSelection === "Paper") {outcome = win; scopedScoreDict["wins"]+=1}
        else if (playerSelection=== "Scissors") {outcome = loss; scopedScoreDict['losses']+=1}
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "Scissors") {outcome = win; scopedScoreDict["wins"]+=1}
        else if (playerSelection=== "Rock") {outcome = loss; scopedScoreDict['losses']+=1}
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {outcome = win; scopedScoreDict["wins"]+=1}
        else if (playerSelection=== "Paper") {outcome = loss; scopedScoreDict['losses']+=1}
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else {
        finalReport = "The computer is not playing Rock-Paper-Scissors.";
        return origDict;
    }

    if (outcome === win) {finalReport = `You win. ${playerSelection} beats ${computerSelection}.`; wins+=1}
    else if (outcome === loss) {finalReport = `You lose. ${computerSelection} beats ${playerSelection}.`;losses+=1}
    else {finalReport = "Someone is not playing Rock-Paper-Scissors (unknown logic error happened)."}

    //console.log(outcome);
    singleResultText.textContent=`${finalReport}`;
    console.log(finalReport);
    return scopedScoreDict;
    //need to also 
}

function game() {
    let wins = 0; let losses = 0; let ties = 0; let roundArray; let gameReport;
    //create the buttons
    const btnR=document.querySelector("#R");const btnP=document.querySelector("#P");const btnS=document.querySelector("#S");
    btnR.addEventListener('click', function (e) {
        scoreDict = playSingleRound("Rock",scoreArray)
    });
    btnP.addEventListener('click', function (e) {
        scoreDict = playSingleRound("Paper",scoreArray)
    });
    btnS.addEventListener('click', function (e) {
        scoreDict = playSingleRound("Scissors",scoreArray)
    });
    //while True; THIS DID NOT WORK, it just broke the webpage instead
    //Keep a tally 
    //if Wins >= 5 or Losses >= 5:
    //Remove and deactivate the buttons
    // Announce a winner
    
    while (true) {
        if (losses >= 5 || wins >= 5) {
            break;
        }
        
    }

    if (wins > losses) {gameReport = "YOU WIN. The player has beaten the computer overall."}
    else if (wins < losses) {gameReport = "YOU LOSE. The player has lost to the computer overall."}
    else {gameReport = "TIE. The player has tied the computer overall."}
    
    let outcomes = [wins, losses, ties];
    console.log(gameReport);
    return [gameReport, outcomes];
}

//game()
//console.log(game()[0])

