const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const dotBtn = document.querySelector('#dot');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#subtract');
const mulBtn = document.querySelector('#multiply');
const divBtn = document.querySelector('#divide');
const perBtn = document.querySelector('#percent');
const delBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('.btn');
const currentOperation = document.querySelector('#main-result');
const prevOperation = document.querySelector('#prev-result');
let operand = '';
let operation = [];
const operators = ['+', '-', '*', '/', '%'];


oneBtn.addEventListener('click', () => {
    operand += '1';
    currentOperation.textContent += '1';
})

twoBtn.addEventListener('click', () => {
    operand += '2';
    currentOperation.textContent += '2';
})

threeBtn.addEventListener('click', () => {
    operand += '3';
    currentOperation.textContent += '3';
})

fourBtn.addEventListener('click', () => {
    operand += '4';
    currentOperation.textContent += '4';
})

fiveBtn.addEventListener('click', () => {
    operand += '5';
    currentOperation.textContent += '5';
})

sixBtn.addEventListener('click', () => {
    operand += '6';
    currentOperation.textContent += '6';
})

sevenBtn.addEventListener('click', () => {
    operand += '7';
    currentOperation.textContent += '7';
})

eightBtn.addEventListener('click', () => {
    operand += '8';
    currentOperation.textContent += '8';
})

nineBtn.addEventListener('click', () => {
    operand += '9';
    currentOperation.textContent += '9';
})

zeroBtn.addEventListener('click', () => {
    operand += '0';
    currentOperation.textContent += '0';
})

dotBtn.addEventListener('click', () => {
    if (operand.includes('.')  == false) {
        operand += '.';
        currentOperation.textContent += '.';
        }
})

addBtn.addEventListener('click', () => {
    if ((operand === '') && (prevOperation.textContent !== '')) {
        operand = prevOperation.textContent.replace('=', '');
        currentOperation.textContent = operand;
        operation[operation.length] = operand;
        operation[operation.length] = '+';
        currentOperation.textContent += '+';
        operand = '';
    }
    if (operation.length === 0) {
        if (operand === '')
            operand = '0';
        operation[operation.length] = operand;
        operation[operation.length] = '+';
        currentOperation.textContent += '+';
        operand = '';
    } else {
        if (operand !== '')
            operation[operation.length] = operand;
            
        if (operators.includes(operation[operation.length - 1]) === false) {
            operation[operation.length] = '+';
            currentOperation.textContent += '+';
            operand = '';
        }
    }
});


subBtn.addEventListener('click', () => {
    if ((operand === '') && (prevOperation.textContent !== '')) {
        operand = prevOperation.textContent.replace('=', '');
        currentOperation.textContent = operand;
        operation[operation.length] = operand;
        operation[operation.length] = '-';
        currentOperation.textContent += '-';
        operand = '';
    }

    if (operation.length === 0) {
        if (operand === '')
            operand = '0';
        operation[operation.length] = operand;
        operation[operation.length] = '-';
        currentOperation.textContent += '-';
        operand = '';
    } else {
        if (operand !== '')
            operation[operation.length] = operand;
            
        if (operators.includes(operation[operation.length - 1]) === false) {
            operation[operation.length] = '-';
            currentOperation.textContent += '-';
            operand = '';
        }
    }
});

mulBtn.addEventListener('click', () => {
    if ((operand === '') && (prevOperation.textContent !== '')) {
        operand = prevOperation.textContent.replace('=', '');
        currentOperation.textContent = operand;
        operation[operation.length] = operand;
        operation[operation.length] = '*';
        currentOperation.textContent += '*';
        operand = '';
    }

    if (operation.length === 0) {
        if (operand === '')
            operand = '0';
        operation[operation.length] = operand;
        operation[operation.length] = '*';
        currentOperation.textContent += 'x';
        operand = '';
    } else {
        if (operand !== '')
            operation[operation.length] = operand;
            
        if (operators.includes(operation[operation.length - 1]) === false) {
            operation[operation.length] = '*';
            currentOperation.textContent += 'x';
            operand = '';
        }
    }
});


divBtn.addEventListener('click', () => {
    if ((operand === '') && (prevOperation.textContent !== '')) {
        operand = prevOperation.textContent.replace('=', '');
        currentOperation.textContent = operand;
        operation[operation.length] = operand;
        operation[operation.length] = '/';
        currentOperation.textContent += '/';
        operand = '';
    }

    if (operation.length === 0) {
        if (operand === '')
            operand = '0';
        operation[operation.length] = operand;
        operation[operation.length] = '/';
        currentOperation.textContent += '/';
        operand = '';
    } else {
        if (operand !== '')
            operation[operation.length] = operand;
            
        if (operators.includes(operation[operation.length - 1]) === false) {
            operation[operation.length] = '/';
            currentOperation.textContent += '/';
            operand = '';
        }
    }
});

perBtn.addEventListener('click', () => {
    if ((operand === '') && (prevOperation.textContent !== '')) {
        operand = prevOperation.textContent.replace('=', '');
        currentOperation.textContent = operand;
        operation[operation.length] = operand;
        operation[operation.length] = '%';
        currentOperation.textContent += '%';
        operand = '';
    }

    if (operation.length === 0) {
        if (operand === '')
            operand = '0';
        operation[operation.length] = operand;
        operation[operation.length] = '%';
        currentOperation.textContent += '%';
        operand = '';
    } else {
        if (operand !== '')
            operation[operation.length] = operand;
            
        if (operators.includes(operation[operation.length - 1]) === false) {
            operation[operation.length] = '%';
            currentOperation.textContent += '%';
            operand = '';
        }
    }
});


clearBtn.addEventListener('click', () => {
    currentOperation.textContent = '0';
    prevOperation.textContent = '';
    operation = [];
});

equalBtn.addEventListener('click', () => {
    if ((operation.length === 0) && (operand != ''))
    {
        prevOperation.textContent = '= ';
        prevOperation.textContent += currentOperation.textContent.replace('0', '');
        operand = '';
        operation = [];
    } else if ((operation.length === 0) && (operand === '')) {
        if ((prevOperation.textContent === '') || (prevOperation.textContent === '= NaN')) {
            operand = ''
            currentOperation.textContent = '0';
            prevOperation.textContent = '0';
            operation = []
        }
        else {
            operand = '';
            currentOperation.textContent = prevOperation.textContent;
        }
    } else {
        let result = Number(operation[0]);
        let count = 0;

        if (operand != '')
            operation[operation.length] = operand;
        const numOfIterations = Math.round(operation.length / 3);
        for (let i = 0; i <= numOfIterations; i++) {
            if (operation[count+1] === '+') {
                result += Number(operation[count+2]);
            } else if (operation[count+1] === '-') {
                result -= Number(operation[count+2]);
            } else if (operation[count+1] === '*') {
                result *= Number(operation[count+2]);
            } else if (operation[count+1] === '/') {
                result = result / Number(operation[count+2]);
            } else if (operation[count+1] === '%') {
                result = result % Number(operation[count+2]);
            }
            count += 2;
        }
        prevOperation.textContent = '= ';
        prevOperation.textContent += result;
        operand = '';
        operation = [];
        currentOperation.textContent = '0';
    }
});

























