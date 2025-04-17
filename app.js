/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// As a user, I want to be able to select numbers so that I can perform operations with them.

const allButtons = document.querySelectorAll('.button');
const isFirstNumber = true;
// two numbers are set to null as they havent taken a value yet
let firstNumber = null;
let secondNumber = null;
const add = document.querySelector('.button operator add')
const equals = document.querySelector(".button equals");

function logWhichButton(event) {
    console.log(event);
    //what is event.target
    const theElement = event.target;
    console.log(theElement);

    // learn what this is parse INT?
    if(firstNumber === null) {
        firstNumber = parseInt(event.target.textContent);
        return;
    }
//what is event.target?? They are the elements (button or so)
    secondNumber = parseInt(event.target.textContent);

}

// As a user, I want to be able to add two numbers together.

// this will look for all buttons and then add an event listener when clicked of logWhich Button function
allButtons.forEach((button) => {
    button.addEventListener('click', logWhichButton) 
    });

    // this function is where we are actually going to add 
    add.addEventListener('click', () => {
        console.log('you are trying to add');
        if (firstNumber && secondNumber) {
            console.log(firstNumber + secondNumber);
        } else {
            console.log("not enough numbers");
        }
    });
















// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.
