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
    numpad.appendChild(num);
    numBtn = document.createElement('button')
    numBtn.classList.add('i');
    numBtn.innerHTML = i;
    num.appendChild(numBtn)
};