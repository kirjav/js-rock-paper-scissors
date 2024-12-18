let humanScore = 0;
let computerScore = 0;

// Generated Random Integer between the numbers 1 and 3 using floor / ceiling to constrain the numbers generated to spit out whole integers.
function getRandomInt(){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    var result = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return result;
}

// Randomly generate the Computer's Choice
function getComputerChoice() {

    var computerChoice = ""
    switch(getRandomInt()){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        case 3:
            computerChoice = "Paper";
            break;
        default:
            console.log("Random Number given did not match pre-set case");
            break;
    }
    return computerChoice;
}

// Get the Human choice via a button click value window. 
function getHumanChoice(humanChoice){

    playRound(humanChoice);
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    console.log("Human chooses " + humanChoice);
    console.log("Computer chooses " + computerChoice);

    // Paper beats Rock
    // Scissors beats Paper
    // Rock beats Scissors

    switch(humanChoice.toLowerCase()){
        case "scissors":
            switch(computerChoice.toLowerCase()){
                case "scissors":
                    console.log("It's a draw! Try again.")
                    break;
                case "rock":
                    console.log("You lose! Rock beats Scissors!");
                    computerScore += 1;
                    break;
                case "paper":
                    console.log("You win! Scissors beats Paper!");
                    humanScore += 1
                    break;
                default:
                    console.log("Invalid Computer Input");
            }
            break;
        case "rock":
            switch(computerChoice.toLowerCase()){
                case "scissors":
                    console.log("You win! Rock beats Scissors!");
                    humanScore +=1;
                    break;
                case "rock":
                    console.log("It's a draw! Try again.");
                    break;
                case "paper":
                    console.log("You lose! Paper beats Rock!");
                    computerScore += 1
                    break;
                default:
                    console.log("Invalid Computer Input");
            }
            break;
        case "paper":
            switch(computerChoice.toLowerCase()){
                case "scissors":
                    console.log("You lose! Scissors beat Paper!");
                    computerScore +=1;
                    break;
                case "rock":
                    console.log("You win! Paper beats Rock!");
                    humanScore += 1;
                    break;
                case "paper":
                    console.log("It's a draw! Try again.");
                    break;
                default:
                    console.log("Invalid Computer Input");
            }
            break;
        default:
            console.log("invalid human input");
    }

    document.getElementById("Player_Score").innerHTML = "Player Score: " + humanScore;
    document.getElementById("Computer_Score").innerHTML = "Computer Score: " + computerScore;

}

// Function to Play a Game of RPS with a max Rounds of 5
function playGame(){
    let maxRounds = 5;
    let currentRound = 1;

    while (currentRound <= maxRounds){
        playRound();
        currentRound +=1;
    }

    console.log("Final results:");
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if (humanScore > computerScore){
        console.log("Congratulations! You won!");
    } else if (humanScore < computerScore) {
        console.log("Oh no! You lost! Better luck next time");
    } else {
        console.log("It's a draw!");
    }
}



