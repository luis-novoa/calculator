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

numpad = document.querySelector('.numpad');
for (i = 0; i < 12; i++) {
    num = document.createElement('div');
    num.classList.add('i');
    num.textContent = i;
    numpad.appendChild(num);
};