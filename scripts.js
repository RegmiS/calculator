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

const valOne =  document.getElementById('val-1');
valOne.onclick = () => {
    checkText("1");
};

const valTwo =  document.getElementById('val-2');
valTwo.onclick = () => {
    updateTextCheckPrev("2");
};

const valThree =  document.getElementById('val-3');
valThree.onclick = () => {
    updateTextCheckPrev("3");
};
const valFour =  document.getElementById('val-4');
valFour.onclick = () => {
    updateTextCheckPrev("4");
};
const valFive =  document.getElementById('val-5');
valFive.onclick = () => {
    updateTextCheckPrev("5");
};

const valSix =  document.getElementById('val-6');
valSix.onclick = () => {
    updateTextCheckPrev("6");
};

const valSeven =  document.getElementById('val-7');
valSeven.onclick = () => {
    updateTextCheckPrev("7");
};

const valEight =  document.getElementById('val-8');
valEight.onclick = () => {
    updateTextCheckPrev("8");
};

const valNine =  document.getElementById('val-9');
valNine.onclick = () => {
    updateTextCheckPrev("9");
};

const clearVals =  document.getElementById('clear');
clearVals.onclick = () => {
    calcText.innerHTML = "";
    numA = "None";
    numB = "None";
    prevCalc = "None";
};

const divideVals =  document.getElementById('divide');
divideVals.onclick = () => {
    // update operator
    operator = "/";
};

const multiplyVals =  document.getElementById('multiply');
multiplyVals.onclick = () => {
    // update operator
    operator = "/";
};

const subtractVals =  document.getElementById('subtract');
subtractVals.onclick = () => {
    // update operator
    operator = "-";
};

const equals =  document.getElementById('equals');
equals.onclick = () => {
    operate();
};


