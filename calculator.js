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

let postEquals = 0;
let postOperator = 0;

let numpad = document.querySelector('.numpad');
numpad.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, '=', 0, '.'];

for (let i = 0; i < 12; i++) {
    let num = document.createElement('div');
    numpad.appendChild(num);
    let numBtn = document.createElement('button');
    numBtn.innerHTML = numpad.numbers[i];
    if (Number(numpad.numbers[i]) >= 0){
        numBtn.classList.add('btn' + numpad.numbers[i]);
    } else {
        numBtn.classList.add('brightWeirdo');
    }
    num.appendChild(numBtn);
};

let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    let numTest = Number(buttons[i].textContent);
    if (numTest >= 0 || buttons[i].textContent == '.') {
        buttons[i].addEventListener('click', () => {
            screenPlay(buttons[i].textContent);
        });
        buttons[i].addEventListener('mouseover', (e) => {
            buttons[i].classList.add('mouseoverBright');
        });
        buttons[i].addEventListener('mouseout', (e) => {
            buttons[i].classList.remove('mouseoverBright');
        });
        buttons[i].addEventListener('mousedown', (e) => {
            buttons[i].classList.add('mouseclickBright');
        });
        buttons[i].addEventListener('mouseup', (e) => {
            buttons[i].classList.remove('mouseclickBright');
        });
    } else if (buttons[i].textContent == '=') {
        buttons[i].addEventListener('click', () => {
            postEquals = 1;
            equals();
            //console.log(postEquals);
        });
        buttons[i].addEventListener('mouseover', (e) => {
            buttons[i].classList.add('mouseoverBright');
        });
        buttons[i].addEventListener('mouseout', (e) => {
            buttons[i].classList.remove('mouseoverBright');
        });
        buttons[i].addEventListener('mousedown', (e) => {
            buttons[i].classList.add('mouseclickBright');
        });
        buttons[i].addEventListener('mouseup', (e) => {
            buttons[i].classList.remove('mouseclickBright');
        });
    } else {
        buttons[i].addEventListener('mouseover', (e) => {
            buttons[i].classList.add('mouseoverDark');
        });
        buttons[i].addEventListener('mouseout', (e) => {
            buttons[i].classList.remove('mouseoverDark');
        });
        buttons[i].addEventListener('mousedown', (e) => {
            buttons[i].classList.add('mouseclickDark');
        });
        buttons[i].addEventListener('mouseup', (e) => {
            buttons[i].classList.remove('mouseclickDark');
        });
    }
};

document.addEventListener('keydown', (e) => {
    let callClass = 0;
    if (e.key >= 0){
        callClass = '.btn' + e.key;
    }
    let callBtn;
    if ((e.key >=0 && e.key <= 9)) {
        callBtn = document.querySelector(callClass);
        callBtn.classList.add('mouseclickBright');
        screenPlay(e.key);
    } else {
        callBtn = document.querySelectorAll('.dark button');
        switch (e.key) {
            case '.':
                callBtn = document.querySelectorAll('.brightWeirdo');
                callBtn[1].classList.add('mouseclickBright');
                screenPlay(e.key);
                break;

            case 'Backspace':
                callBtn[0].classList.add('mouseclickDark');
                backspace();
                break;

            case 'Enter':
                callBtn = document.querySelectorAll('.brightWeirdo');
                callBtn[0].classList.add('mouseclickBright');
                postEquals = 1;
                equals();
                break;

            case 'Delete':
                callBtn[1].classList.add('mouseclickDark');
                clear();
                break;
            
            case '/':
                callBtn[2].classList.add('mouseclickDark');
                storeDiv();
                break;
            
            case '*':
                callBtn[3].classList.add('mouseclickDark');
                storeMult();
                break;

            case '-':
                callBtn[4].classList.add('mouseclickDark');
                storeSub();
                break;
            
            case '+':
                callBtn[5].classList.add('mouseclickDark');
                storeAdd();
                break;
        }
    }
});

document.addEventListener('keyup', (e) => {
    let callClass = 0;
    if (e.key >= 0){
        callClass = '.btn' + e.key;
    }
    let callBtn;
    if ((e.key >=0 && e.key <= 9)) {
        callBtn = document.querySelector(callClass);
        callBtn.classList.remove('mouseclickBright');
    } else {
        callBtn = document.querySelectorAll('.dark button');
        switch (e.key) {
            case '.':
                callBtn = document.querySelectorAll('.brightWeirdo');
                callBtn[1].classList.remove('mouseclickBright');
                break;

            case 'Backspace':
                callBtn[0].classList.remove('mouseclickDark');
                break;

            case 'Enter':
                callBtn = document.querySelectorAll('.brightWeirdo');
                callBtn[0].classList.remove('mouseclickBright');
                break;

            case 'Delete':
                callBtn[1].classList.remove('mouseclickDark');
                break;
            
            case '/':
                callBtn[2].classList.remove('mouseclickDark');
                break;
            
            case '*':
                callBtn[3].classList.remove('mouseclickDark');
                break;

            case '-':
                callBtn[4].classList.remove('mouseclickDark');
                break;
            
            case '+':
                callBtn[5].classList.remove('mouseclickDark');
                break;
        }
    }
});

let screen = document.querySelector('.screen');
let screenNumber = document.querySelector('p');
let number = []; //max: 24

 function numberPushInput(x) {
    if (number.length < 25) {
        number.push(x);
    } else {
        alert('Number cap reached!');
    };
}; 

// arredondamento de resultados!
/* function numberPushResult(x) {
    if (x.length <= 25)
    number.forEach((element, index) => {
        if (element == '.') {
            if (index == 23) {
                
                
            }
            for (i = number.length; i >= index; i-- ) {
                let dec = number[i - 1] + '.' + number[i];
                dec = Number(dec);
                dec = Math.round(dec);
                if (dec < 10) {
                    number.pop();
                    number.pop();
                    dec.toString();
                    number.push(dec);
                    break;
                } else {
                    number.pop();
                }
            }
        }
    });
} */
function screenPlay(value) {
    for (i = 0; i < screenNumber.textContent.length; i++){
        if (value == '.' && screenNumber.textContent[i] == '.') {
            return value = '';
        } else if (value == 0 && number == '') {
            return value = '';
        };
    };
    if (value == '.' && screenNumber.textContent == 0) { 
        value = ['0', '.'];
        value = value.join('');
        screenNumber.textContent = '';
    } else if ( screenNumber.textContent == 0 && screenNumber.textContent[1] != '.') {
        screenNumber.textContent = '';
    } else if (postEquals == 1) {
        postEquals = 0;
        screenNumber.textContent = '';
    } else if (postOperator == 1) {
        postOperator = 0;
        screenNumber.textContent = '';
    };
    //console.log(postEquals);
    value = Array.from(value);
    value.forEach(element => {
        numberPushInput(element);
    });
    if (number.length == 25) {
        value = '';
    }
    screenNumber.textContent += value.join('');
    screen.appendChild(screenNumber);
    console.log(number)
}

function clear(){
    number = [];
    screenNumber.textContent = '0';
    screen.appendChild(screenNumber);
    postEquals = 0;
    postOperator = 0;
    storedNumber1 = 0;
    storedNumber2 = 0;
    storedOperationClick = 0;
    storedOperation = 0;
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
    postOperator = 1;
    if (storedOperation == 0){
        storedNumber1 = Number(number.join(''));
        number=[];
        console.log(storedNumber1);
        storedOperation = storedOperationClick;;
    } else {
        equals();
        storedOperation = storedOperationClick;
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
    console.log(storedNumber2);
    number = [];
    if (storedOperation == 0) {
        storedOperation = 0;
        storedNumber1 = 0;
        storedNumber2 = 0;
        number = [];     
        screenNumber.textContent = '0';
    } else {
        let result = storedOperation(storedNumber1, storedNumber2);
        result = result.toString();
        screenNumber.textContent = result;
        screen.appendChild(screenNumber);
        if (postOperator == 0) {
            number.push(result);
            storedOperation = 0;
            storedNumber1 = 0;
            storedNumber2 = 0;
        } else {
            storedOperation = 0;
            storedNumber1 = 0;
            storedNumber2 = 0;    
            number.push(result);
        }
    }
    console.log(number);
};


