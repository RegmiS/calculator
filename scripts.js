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

const calcText = document.querySelector('.cur-text');

const valOne =  document.getElementById('val-1');
valOne.onclick = () => {
    calcText.innerHTML += "1";
};

const valTwo =  document.getElementById('val-2');
valTwo.onclick = () => {
    calcText.innerHTML += "2";
};

const valThree =  document.getElementById('val-3');
valThree.onclick = () => {
    calcText.innerHTML += "3";
};
const valFour =  document.getElementById('val-4');
valFour.onclick = () => {
    calcText.innerHTML += "4";
};
const valFive =  document.getElementById('val-5');
valFive.onclick = () => {
    calcText.innerHTML += "5";
};

const valSix =  document.getElementById('val-6');
valSix.onclick = () => {
    calcText.innerHTML += "6";
};

const valSeven =  document.getElementById('val-7');
valSeven.onclick = () => {
    calcText.innerHTML += "7";
};

const valEight =  document.getElementById('val-8');
valEight.onclick = () => {
    calcText.innerHTML += "8";
};

const valNine =  document.getElementById('val-9');
valNine.onclick = () => {
    calcText.innerHTML += "9";
};

const clearVals =  document.getElementById('clear');
clearVals.onclick = () => {
    calcText.innerHTML = "";
};

const equals =  document.getElementById('equals');
equals.onclick = () => {
    calcText.innerHTML += "9";
};

const divideVals =  document.getElementById('divide');
divideVals.onclick = () => {
    calcText.innerHTML += "9";
};

const multiplyVals =  document.getElementById('multiply');
multiplyVals.onclick = () => {
    calcText.innerHTML += "9";
};

const subtractVals =  document.getElementById('subtract');
subtractVals.onclick = () => {
    calcText.innerHTML += "9";
};

const addVals =  document.getElementById('add');
addVals.onclick = () => {
    calcText.innerHTML += "9";
};