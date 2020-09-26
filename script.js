let button = document.getElementsByClassName('btn btn-primary')[0];
let displayField = document.getElementsByClassName('form-control')[0];
let displayNum = '';
let firstNumber = null;
let secondNumber = null;
let firstNumSet = false;
let secondNumSet = false;
let operator = [];

function displayAndStoreNumbers(e) {
    if(firstNumber === null || firstNumSet == false) {
        displayNum = displayNum + e.target.value;
        firstNumber = parseFloat(displayNum);
        displayField.value = firstNumber;
        console.log('firstNumber', firstNumber);
    } else {
        displayNum = displayNum + e.target.value;
        secondNumber = parseFloat(displayNum);
        displayField.value = secondNumber;
        console.log('secondNumber', secondNumber);
    }
}
document.querySelectorAll('.btn-primary').forEach(item => {
    item.addEventListener('click', displayAndStoreNumbers);
  })

const handleOperator = (e) => {
    firstNumSet = true;
    displayNum = '';
    displayField.value = '';

    if(e.target.id === 'plus') {
        operator.push('+');
    } else if(e.target.id === 'minus') {
        operator.push('-');
    } else if(e.target.id === 'multiply') {
        operator.push('x');
    } else if(e.target.id === 'divide') {
        operator.push('/');
    } 
    if(firstNumber !== null && secondNumber !== null) {
        firstNumber = calculateNumbers();
        secondNumber = null;
        displayField.value = firstNumber;
    }
}
document.getElementById('plus').addEventListener('click', handleOperator);
document.getElementById('minus').addEventListener('click', handleOperator);
document.getElementById('multiply').addEventListener('click', handleOperator);
document.getElementById('divide').addEventListener('click', handleOperator);

const calculateNumbers = () => {
    if(operator.length === 1) {
        console.log('operator length is 1');
        return evaluateNumbers(operator[operator.length - 1]);
    } else if(operator.length > 1) {
        console.log('operator length is more than 1');
        return evaluateNumbers(operator[operator.length - 2]);
    }
}

const evaluateNumbers = (operation) => {
    console.log(operation)
    let answer = 0;
    if(operation === "+") {
        answer = firstNumber + secondNumber;
        displayField.value = answer;
    } else if(operation === "-") {
        answer = firstNumber - secondNumber;
        displayField.value = answer;
    } else if(operation === "x") {
        answer = firstNumber * secondNumber;
        displayField.value = answer;
    } else if(operation === "/") {
        answer = firstNumber / secondNumber;
        displayField.value = answer;  
    }
    return answer;
}
document.getElementById('equal').addEventListener('click', calculateNumbers);

const clearEquation = () => {
    firstNumber = null;
    secondNumber = null;
    displayField.value ='';
    displayNum = '';
    operator = [];
    firstNumSet = false;
}
document.getElementById('addon-wrapping').addEventListener('click', clearEquation);

