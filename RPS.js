console.log("test");

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
function playSingleRound() {
    let outcome; let finalReport;
    let win = "win"; let loss = "loss"; let tie = "tie";
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    if (computerSelection === playerSelection) {
        finalReport = `It\'s a tie. Both players selected ${computerSelection}`;
        outcome = tie;
        return [finalReport, outcome];
    }
    else if (computerSelection === "Rock") {
        if (playerSelection === "Paper") {outcome = win}
        else if (playerSelection=== "Scissors") {outcome = loss}
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "Scissors") {outcome = win}
        else if (playerSelection=== "Rock") {outcome = loss}
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {outcome = win}
        else if (playerSelection=== "Paper") {outcome = loss}
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else {
        finalReport = "The computer is not playing Rock-Paper-Scissors.";
        return [finalReport, outcome];
    }

    if (outcome === win) {finalReport = `You win. ${playerSelection} beats ${computerSelection}.`}
    else if (outcome === loss) {finalReport = `You lose. ${computerSelection} beats ${playerSelection}.`}
    else {finalReport = "Someone is not playing Rock-Paper-Scissors (unknown logic error happened)."}

    return [finalReport, outcome];
    //need to also 
}

function game() {
    let wins = 0; let losses = 0; let ties = 0; let roundArray; let gameReport;
    for(let i=0; i < 5; i++){
        roundArray = playSingleRound();
        if (roundArray[1] === "win") {wins+=1}
        else if (roundArray[1] === "loss") {losses+=1}
        else if (roundArray[1] === "tie") {ties+=1}
        else {console.log("Bad output from that round. Outcome (win/loss/tie) not added to running total.")}

        console.log(roundArray[0])
    }
    if (wins > losses) {gameReport = "YOU WIN. The player has beaten the computer overall."}
    else if (wins < losses) {gameReport = "YOU LOSE. The player has lost to the computer overall."}
    else {gameReport = "TIE. The player has tied the computer overall."}
    
    let outcomes = [wins, losses, ties];
    return [gameReport, outcomes];
}

console.log(game()[0])