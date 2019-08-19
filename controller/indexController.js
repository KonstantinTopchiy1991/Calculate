let display = document.querySelector('.elem__display');
let calculate = document.querySelector('.calculate');

const handler = new Calculate(display);

window.onload = function () {
    calculate.addEventListener('click', function (event) {
        let element = event.target;
        let classList = Array.from(element.classList);
        if (!classList.includes('elem__button')) {
            return;
        }
        let operationBtn = element.textContent;
        display.innerHTML = handler.operation(operationBtn);
    });

    document.addEventListener('keydown', (event) => {
        let keyName = event.key;
        if (keyName === 'Backspace') {
            keyName = 'ce';
        }
        if (keyName === 'Enter')  {
            keyName = '=';
        }
        if (keyName === 'Escape')  {
            keyName = 'c';
        }

        const allovedSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '+', '-', '.', 'ce', 'c', '='];
        if (!allovedSymbols.includes(keyName)){
            return;
        }

        display.innerHTML = handler.operation(keyName);
        // console.log('keypress event\n\n' + 'key: ' + keyName);

    });
};


