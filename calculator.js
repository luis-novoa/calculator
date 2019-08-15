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
for (let i = 0; i < 12; i++) {
    num = document.createElement('div');
    numpad.appendChild(num);
    numBtn = document.createElement('button')
    numBtn.innerHTML = numpad.numbers[i];
    num.appendChild(numBtn)
};

let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    let numTest = Number(buttons[i].textContent);
    if (numTest >= 0 || buttons[i].textContent == '.') {
        buttons[i].addEventListener('click', () => {
            screenPlay(buttons[i].textContent)
        });
    }
}

let screen = document.querySelector('.screen');
let screenNumber = document.querySelector('p');
let number = [];
function screenPlay(value) {
    if (screenNumber.textContent == 0) { screenNumber.textContent = ''};
    screenNumber.textContent += value.toString();
    screen.appendChild(screenNumber);
    number.push(value);
}