const computerchoicedisplay = document.querySelector("#computer_choice")

const userchoicedisplay = document.querySelector("#user_choice")

const resultDisplay = document.querySelector("#result")

const buttons = document.querySelectorAll("button")

let userchoice 

let computerchoice

buttons.forEach(function(button){
    button.addEventListener("click",(e)=>{
        userchoice = e.target.id 
        userchoicedisplay.innerHTML=userchoice
        generatecomputerchoice();
        getResult();
    })
})

function generatecomputerchoice() {
    const randomNumber = Math.floor(Math.random()*3)+1

    if(randomNumber === 1){
        computerchoice ="rock"
    }else if(randomNumber === 2){
        computerchoice ="scissors"
    }else if(randomNumber===3){
        computerchoice = "paper"
    }
    computerchoicedisplay.innerHTML=computerchoice
}

function getResult(){
    if (userchoice === computerchoice) {
        resultDisplay.innerHTML = "It's a tie!";
    } else if (
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissors" && computerchoice === "paper")
    ) {
        resultDisplay.innerHTML = "You win!";
    } else {
        resultDisplay.innerHTML = "You lose!";
    }
}
