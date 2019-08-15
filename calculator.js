function add (num1, num2) {
    return num1 + num2;
};

function substract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operation) {
    return operation(num1, num2);
};

let numpad = document.querySelector('.numpad');
numpad.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, '=', 0, '.'];
for (i = 0; i < 12; i++) {
    num = document.createElement('div');
    numpad.appendChild(num);
    numBtn = document.createElement('button')
    numBtn.innerHTML = numpad.numbers[i];
    num.appendChild(numBtn)
};