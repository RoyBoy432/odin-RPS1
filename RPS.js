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
        finalReport = `It\'s a tie this round. Both players selected ${computerSelection}`;
        outcome = tie;
        scopedScoreDict["ties"]+=1;
        runningTies.textContent="Ties :"+String(scopedScoreDict["ties"]);
        singleResultText.textContent=`${finalReport}`;
        return scopedScoreDict;
    }
    else if (computerSelection === "Rock") {
        if (playerSelection === "Paper") {
            outcome = win;
            scopedScoreDict["wins"]+=1;
            runningWins.textContent="Wins: "+String(scopedScoreDict['wins'])
        }
        else if (playerSelection=== "Scissors") {
            outcome = loss;
            scopedScoreDict['losses']+=1;
            runningLosses.textContent="Losses: "+String(scopedScoreDict['losses']);
        }
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "Scissors") {
            outcome = win;
            scopedScoreDict["wins"]+=1;
            runningWins.textContent="Wins: "+String(scopedScoreDict['wins']);
        }
        else if (playerSelection=== "Rock") {
            outcome = loss;
            scopedScoreDict['losses']+=1;
            runningLosses.textContent="Losses: "+String(scopedScoreDict['losses'])}
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {
            outcome = win;
            scopedScoreDict["wins"]+=1;
            runningWins.textContent="Wins: "+String(scopedScoreDict['wins'])
        }
        else if (playerSelection=== "Paper") {
            outcome = loss;
            scopedScoreDict['losses']+=1;
            runningLosses.textContent="Losses: "+String(scopedScoreDict['losses'])
        }
        else {finalReport = "The player is not playing Rock-Paper-Scissors."}
    }
    else {
        finalReport = "The computer is not playing Rock-Paper-Scissors.";
        return origDict;
    }

    if (outcome === win) {finalReport = `You win the round. ${playerSelection} beats ${computerSelection}.`}
    else if (outcome === loss) {finalReport = `You lose the round. ${computerSelection} beats ${playerSelection}.`}
    else {finalReport = "Someone is not playing Rock-Paper-Scissors (unknown logic error happened)."}

    //console.log(outcome);
    singleResultText.textContent=`${finalReport}`;
    console.log(finalReport);

    if (scopedScoreDict['wins']>=5 || scopedScoreDict['losses']>=5) {
        const btnR=document.querySelector("#R");const btnP=document.querySelector("#P");const btnS=document.querySelector("#S");
        btnR.style.display='none';btnP.style.display='none';btnS.style.display='none';
        if (scopedScoreDict['wins']>=5) {
            singleResultText.textContent=`Max score reached. You won!`;
        }
        else if (scopedScoreDict['losses']>=5) {
            singleResultText.textContent=`Max score reached. You lost.`;
        }

        //end the game
        //make the buttons stop working

    }
    return scopedScoreDict;
    //need to also 
}

function game() {
    //let wins = 0; let losses = 0; let ties = 0; let roundArray; let gameReport;
    //create the buttons
    const btnR=document.querySelector("#R");const btnP=document.querySelector("#P");const btnS=document.querySelector("#S");
    btnR.addEventListener('click', function (e) {
        scoreDict = playSingleRound("Rock",scoreDict)
    });
    btnP.addEventListener('click', function (e) {
        scoreDict = playSingleRound("Paper",scoreDict)
    });
    btnS.addEventListener('click', function (e) {
        scoreDict = playSingleRound("Scissors",scoreDict)
    });
    //while True; THIS DID NOT WORK, it just broke the webpage instead
    //Keep a tally 
    //if Wins >= 5 or Losses >= 5:
    //Remove and deactivate the buttons
    // Announce a winner
    
    
    return;
}

game()
//console.log(game()[0])

