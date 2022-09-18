const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') 
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice // What is innerHTML in JS?
                                            // The innerHTML property returns: 
                                            // The text content of the element,
                                            // including all spacing and inner HTML tags
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // from 1 to 3
    switch(randomNumber) {
        case 1:
            computerChoice = 'rock'
            break
        case 2:
            computerChoice = 'scissors'
            break
        case 3:
            computerChoice = 'paper'
            break
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'its a draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost'
    }
    resultDisplay.innerHTML = result
}
