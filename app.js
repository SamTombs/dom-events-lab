/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

const allNumbers = document.querySelectorAll('.number');
console.log(allNumbers);
const operatorButtons = document.querySelectorAll('.operator');
console.log(operatorButtons);
const equalsButton = document.querySelectorAll('.equals');
console.log(equalsButton);

// two numbers and operator are set to null as they havent taken a value yet
let firstNumber = null;
let secondNumber = null;
let operator = null;

console.log(firstNumber, secondNumber, operator);


function logWhichButton(event) {
    console.log(event);
    const theElement = event.target;
    console.log(theElement);

    // Found a way to search for a string which then can pass in a number or operator
    if(firstNumber === null && theElement.classList.contains('number')) {
        firstNumber = parseInt(event.target.textContent);
        //console logs number
        console.log(firstNumber);
        return;

    } else if (firstNumber !== null && theElement.classList.contains('number')) {
        secondNumber = parseInt(event.target.textContent);
        console.log(secondNumber);
        return;

    } else if (theElement.classList.contains('operator')) {
        operator = event.target.textContent;
        console.log(operator);
        return;
    } else if (theElement.classList.contains("equals")) {
        const calculation = doCalculation(firstNumber, secondNumber, operator);
        console.log(calculation);
          }
        
};
// Now whenever I select a button it will console log what I have clicked combined with the below

// this will look for all buttons and then add an event listener when clicked of logWhich Button function
// clicking a button does nothing without this

allNumbers.forEach((button) => {
    button.addEventListener('click', logWhichButton)
    console.log(allNumbers); 
    });

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', logWhichButton)
    console.log(operatorButtons); 
    });

equalsButton.forEach((equals) => {
    equals.addEventListener('click', logWhichButton)
    console.log(equalsButton); 
    });

// need a new function now to perform the calculation

function doCalculation(firstNum, secondNum, operator) {
    if (operator === "+") {
      return firstNum + secondNum;
    } else if (operator === "-") {
        return firstNum - secondNum;
    } else if (operator === "*") {
        return firstNum * secondNum;
    } else if (operator === "/") {
        return firstNum / secondNum;
    }
}

// As a user, I want to be able to see the output of the mathematical operation.










// As a user, I want to be able to clear all operations and start from 0.
