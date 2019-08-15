function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    if (num2 == 0){
        alert('Dividing by zero is still impossible :(');
        return 0;
    } else {
        return num1 / num2;
    }
};

let pastEquals = 0;
// 48 - 57
let numpad = document.querySelector('.numpad');
numpad.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, '=', 0, '.'];
for (let i = 0; i < 12; i++) {
    let num = document.createElement('div');
    numpad.appendChild(num);
    let numBtn = document.createElement('button')
    numBtn.innerHTML = numpad.numbers[i];
    num.appendChild(numBtn)
};

let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    let numTest = Number(buttons[i].textContent);
    if (numTest >= 0 || buttons[i].textContent == '.') {
        buttons[i].addEventListener('click', () => {
            screenPlay(buttons[i].textContent);
        });

    } else if (buttons[i].textContent == '=') {
        buttons[i].addEventListener('click', equals);
    }
};

document.addEventListener('keydown', (e) => {
    if ((e.key >=0 && e.key <= 9) || e.key == '.') {
        screenPlay(e.key);
    } else {
        switch (e.key) {
            case 'Backspace':
                backspace();
                break;

            case 'Enter':
                equals();
                break;

            case 'Delete':
                clear();
                break;
            
            case '/':
                storeDiv();
                break;
            
            case '*':
                storeMult();
                break;

            case '-':
                storeSub();
                break;
            
            case '+':
                storeAdd();
                break;
        }
    }
});

let screen = document.querySelector('.screen');
let screenNumber = document.querySelector('p');
let number = [];
function screenPlay(value) {
    for (i = 0; i < screenNumber.textContent.length; i++){
        if (value == '.' && screenNumber.textContent[i] == '.') {
            return value = '';
        } 
    };
    if (value == '.' && screenNumber.textContent == 0) { 
        value = ['0', '.'];
        value = value.join('');
        screenNumber.textContent = '';
    } else if ( screenNumber.textContent == 0 && screenNumber.textContent[1] != '.') {
        screenNumber.textContent = '';
    } else if (pastEquals == 1) {
        clear();
        screenNumber.textContent = '';
    };
    screenNumber.textContent += value.toString();
    screen.appendChild(screenNumber);
    number.push(value);
}

function clear(){
    number = [];
    screenNumber.textContent = 0;
    screen.appendChild(screenNumber);
}

function backspace() {
    number.pop();
    let array = screenNumber.textContent;
    array = Array.from(array);
    array.pop();
    screenNumber.textContent = array.join('');
    screen.appendChild(screenNumber);
};

let clearBtn = document.querySelector('.clear button');
clearBtn.addEventListener('click', clear);

let backspaceBtn = document.querySelector('.backspace button');
backspaceBtn.addEventListener('click', backspace);

let storedNumber1 = 0;
let storedNumber2 = 0;
let storedOperationClick = 0;
let storedOperation = 0;

function accumulator() {
    if (storedOperation == 0){
        storedNumber1 = Number(number.join(''));
        storedOperation = storedOperationClick;
        console.log(storedOperation);
        console.log(storedNumber1);
        clear();
    } else {
        equals();
    }
};

let aditionBtn = document.querySelector('.sum button');
let subtrBtn = document.querySelector('.subtraction button');
let divideBtn = document.querySelector('.division button');
let multBtn = document.querySelector('.multiplication button');

aditionBtn.addEventListener('click', storeAdd);

function storeAdd() {
    storedOperationClick = add;
    accumulator();
};

subtrBtn.addEventListener('click', storeSub);

function storeSub() {
    storedOperationClick = subtract;
    accumulator();
};

divideBtn.addEventListener('click', storeDiv);

function storeDiv() {
    storedOperationClick = divide;
    accumulator();
};

multBtn.addEventListener('click', storeMult);

function storeMult() {
    storedOperationClick = multiply;
    accumulator();
};

function equals() {
    storedNumber2 = Number(number.join(''));
    number = [];
    if (storedOperation == 0) {
        storedOperation = 0;
        storedNumber1 = 0;
        storedNumber2 = 0;
        clear();
    } else {
        let result = storedOperation(storedNumber1, storedNumber2);
        result = result.toString();
        number.push(result);
        console.log(number);
        screenNumber.textContent = result;
        screen.appendChild(screenNumber);
        pastEquals = 1;
        storedOperation = 0;
        storedNumber1 = 0;
        storedNumber2 = 0;
    }
}

