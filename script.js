let button = document.getElementsByClassName('btn btn-primary')[0];
let displayField = document.getElementsByClassName('form-control')[0];
let displayNum = '';
let firstNumber = null;
let secondNumber = null;
let firstNumSet = false;
let operator = [];

function displayAndStoreNumbers(e) {
    if(firstNumber === null || firstNumSet == false) {
        displayNum = displayNum + e.target.value;
        firstNumber = parseFloat(displayNum);
        displayField.value = firstNumber;
    } else {
        displayNum = displayNum + e.target.value;
        secondNumber = parseFloat(displayNum);
        displayField.value = secondNumber;
    }
}

function displayAndStoreNumbersOnKeypress(e) {
    if(firstNumber === null || firstNumSet == false) {
        displayNum = displayNum + e.key
        firstNumber = parseFloat(displayNum);
        displayField.value = firstNumber;
    } else {
        displayNum = displayNum + e.key
        secondNumber = parseFloat(displayNum);
        displayField.value = secondNumber;
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
        operator.push('*');
    } else if(e.target.id === 'divide') {
        operator.push('/');
    } 
    if(firstNumber !== null && secondNumber !== null) {
        firstNumber = calculateNumbers();
        secondNumber = null;
        displayField.value = firstNumber;
    }
}

const handleOperatorOnKeypress = (e) => {
    firstNumSet = true;
    displayNum = '';
    displayField.value = '';

    if(e.key == '+') {
        operator.push('+');
    } else if(e.key == '-') {
        operator.push('-');
    } else if(e.key === '*') {
        operator.push('*');
    } else if(e.key === '/') {
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
        return evaluateNumbers(operator[operator.length - 1]);
    } else if(operator.length > 1) {
        return evaluateNumbers(operator[operator.length - 2]);
    }
}

const evaluateNumbers = (operation) => {
    let answer = 0;
    if(operation === "+") {
        answer = firstNumber + secondNumber;
        displayField.value = answer;
    } else if(operation === "-") {
        answer = firstNumber - secondNumber;
        displayField.value = answer;
    } else if(operation === "*") {
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

document.addEventListener('keypress', function(e) {
    if(e.key == '1') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '2') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '3') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '4') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '5') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '6') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '7') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '8') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '9') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '0') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '.') {
        displayAndStoreNumbersOnKeypress(e);
    } else if(e.key == '+') {
        handleOperatorOnKeypress(e);
    } else if(e.key == '-') {
        handleOperatorOnKeypress(e);
    } else if(e.key == '*') {
        handleOperatorOnKeypress(e);
    } else if(e.key == '/') {
        handleOperatorOnKeypress(e);
    } else if(e.key =='Enter') {
        calculateNumbers();
    }
});

