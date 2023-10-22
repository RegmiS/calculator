const add = (a, b) => {
	return a+b;
};

const subtract = (a,b) => {
	return a-b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (arr) => {
    return a/b;
};

let numA = "";
let numB = "";
let prevCalc = "";
let operator = "";

const calcText = document.querySelector('.cur-text');
const prevText = document.querySelector('.prev-text');

function checkText(value) {
    // if no operator, append to 1st value
    // if operator, append to 2nd value
    if(operator == ""){
        numA += value;
    }
    else {
        numB += value;
    }
    updateDisplayText();
}

function updateDisplayText(){
    if(numB == ""){
        calcText.innerHTML = numA + operator;
    }
    else {
        calcText.innerHTML = numB;
    }
}

function operate() {
    let result;
    if(operator == "+"){
        result = add(Number(numA), Number(numB));
    }
    else if(operator == "-"){
        result = subtract(Number(numA), Number(numB));
    }
    else if(operator == "x"){
        result = multiply(Number(numA), Number(numB));
    }
    else if(operator == "/"){
        result = divide(Number(numA), Number(numB));
    }
    prevCalc = result;
    calcText.innerHTML = prevCalc;
    prevText.innerHTML = prevCalc;
    numA = "";
    numB = "";
    operator = "";
}

const addVals =  document.getElementById('add');
addVals.onclick = () => {
    if(numA == "" && prevCalc != ""){
        numA = Number(prevCalc);
        operator = "+";
    }
    if(numA != ""){
        operator = "+";
    }
    updateDisplayText();
};

const divideVals =  document.getElementById('divide');
divideVals.onclick = () => {
    if(numA == "" && prevCalc != ""){
        numA = Number(prevCalc);
        operator = "/";
    }
    if(numA != ""){
        operator = "/";
    }
    updateDisplayText();
};

const multiplyVals =  document.getElementById('multiply');
multiplyVals.onclick = () => {
    if(numA == "" && prevCalc != ""){
        numA = Number(prevCalc);
        operator = "x";
    }
    if(numA != ""){
        operator = "x";
    }
    updateDisplayText();
};

const subtractVals =  document.getElementById('subtract');
subtractVals.onclick = () => {
    if(numA == "" && prevCalc != ""){
        numA = Number(prevCalc);
        operator = "-";
    }
    if(numA != ""){
        operator = "-";
    }
    updateDisplayText();
};

const allNumButtons = document.querySelectorAll('.test');
console.table(allNumButtons);
for(let i = 0; i < allNumButtons.length; i++){
    allNumButtons[i].addEventListener('click', () => {
        checkText(allNumButtons[i].innerHTML);
    });
}

const clearVals =  document.getElementById('clear');
clearVals.onclick = () => {
    calcText.innerHTML = "";
    numA = "None";
    numB = "None";
    prevCalc = "None";
};

const equals =  document.getElementById('equals');
equals.onclick = () => {
    operate();
};


