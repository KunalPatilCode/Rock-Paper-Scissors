let  userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() => {
    const options =[" rock", "paper","scissors"];
     const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
    };

    const drawGame =() =>{
        console.log(" game was draw.");
        msg.innerText ="Game was draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    };
    const showWinner =(userWin , userChoice , compChoice) =>{
        if(userWin) {
            console.log("you win!");
            msg.innerText =`You win!  Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "#1BC74F";
        }else{
            console.log("you Lose");
            msg.innerText =`You lose.  ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "#cf1717";
        }
    };
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);
    
    if (userChoice === compChoice) {
        drawGame();
        console.log(`Both chose ${userChoice}. It's a draw!`);
    } else {
        let userWin;
        switch (userChoice) {
            case "rock":
                userWin = (compChoice === "scissors");
                break;
            case "paper":
                userWin = (compChoice === "rock");
                break;
            case "scissors":
                userWin = (compChoice === "paper");
                break;
        }
        showWinner(userWin , userChoice , compChoice);
        if (userWin) {
            userScore++;
            console.log("Current Score - You: " + userScore + " | Computer: " + comScore);
            userScorePara.innerText = userScore;
        } else {
            comScore++;
            console.log("Current Score - You: " + userScore + " | Computer: " + comScore);
            compScorePara.innerText = comScore;
        }
    }
};
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});

});