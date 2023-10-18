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

let numA = -1;
let numB = -1;
let prevCal = -1;
let operator = "";

const calcText = document.querySelector('.cur-text');

const valOne =  document.getElementById('val-1');
valOne.onclick = () => {
    updateTextCheckPrev("1");
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
};

const equals =  document.getElementById('equals');
equals.onclick = () => {
    // equals function
};

const divideVals =  document.getElementById('divide');
divideVals.onclick = () => {
    // update operator 
};

const multiplyVals =  document.getElementById('multiply');
multiplyVals.onclick = () => {
    // update operator
};

const subtractVals =  document.getElementById('subtract');
subtractVals.onclick = () => {
    // update operator
};

const addVals =  document.getElementById('add');
addVals.onclick = () => {
    // update operator
};

const updateTextCheckPrev = (updateText) => {
    if(calcText.innerHTML == "Cur"){
        calcText.innerHTML = updateText;
    }
    else{
        calcText.innerHTML += updateText;
    }
};

function operate(params) {
    
}