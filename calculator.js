//grab the display and buttons. 
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

//create and set variables
let currentInput = "";
let firstNumber = null;
let operator = null;
let shouldResetInput = false; 

//update display function, updates the screen, if 'currentInput'is empty, it shows 0
function updateDisplay(){
    display.textContent = currentInput || "0";
}

//appendNumber: adds a digit or decimal to currentInput, blocks multiple '.'
function appendNumber (num) {
    if (shouldResetInput) {
        currentInput = "";
        shouldResetInput = false;       
    }
    if (num === "." && currentInput.includes(".")) return;
    currentInput += num;
    updateDisplay();
}

//handleOperator: if theres already an operator, it makes it so you can chain them.
//saves 'first number' saves the operator 
// tells the calulator to reset for nect number
function handleOperator(op) {
    if (operator !== null) computeResult();
    firstNumber = parseFloat(currentInput); //turn the currentInput str to an int
    operator = op;
    shouldResetInput = true;
}

//computeResult:
function computeResult() {
    if (operator === null || shouldResetInput) return; 
    const secondNumber = parseFloat(currentInput); //turn currentInput to an int
    let result; // create result variable?
    switch (operator) {
        case "+": result = firstNumber + secondNumber; break; 
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = secondNumber !== 0 ? firstNumber / secondNumber : "Err"; break;
    }
    currentInput = result.toString(); //turn the result into a string
    operator = null; //reset operator
    updateDisplay();
}

//attach event listeners
buttons.forEach(button => {
    button.addEventListener("click", () => {        
        const value = button.textContent;

        if (!isNaN(value) || value === ".") { //if its a number or a '.', it calls appendNumber
            appendNumber(value);
        }else if (value === "=") { //if they enter '=' calls computeResult
            computeResult();
        }else { //if else, that means its an operator, call the handleOperator func
            handleOperator (value);
        }
    });
});