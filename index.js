

let a = '0'; // first number
let b = ''; // second number
let c = ''; // finish number
let sign = ''; // знак операции
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%','+/-'];

// экран
const out = document.querySelector('.calc-screen p');
out.textContent = a;

function clearAll () {
    a = '0'; // first number and result
    b = ''; // second number
    sign = ''; // знак
    finish = false;
    out.textContent = a;
}


document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    if(event.target.classList.contains(''))


    out.textContent = a;
    // получаю нажатую кнопку
    const key = event.target.textContent;
    // если нажата клавиша 0-9 или.
    if (digit.includes(key)) {
        if(b === '' && sign === ''){
            if(a === '.'){
                a += key;
                out.textContent = a;
            }
            else{
                a = key;
                out.textContent = a;
            }
        }
        else if(a !== '0' && b !== '' && finish ){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else{
            b += key
            out.textContent = b;
        }
    }
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        return;

    }

    if (key === '='){
        if(b === '') b = a;
        switch (sign){
            case '+':
                c = (+a) + (+b);
                break
            case '-':
                c = a - b;
                break
            case 'X':
                c= a * b;
                break
            case '/':
                if(b === '0'){
                    out.textContent = 'Ошибка';
                    a = '0'; // first number and result
                    b = ''; // second number
                    c = ""
                    sign = ''; // знак
                    return
                }
                c = (a / b).toFixed(6);

                break
            case '%':
                if(b !== '' && sign !=='%'){
                    out.textContent = 'Ошибка';
                    a = ''; // first number and result
                    b = ''; // second number
                    c = ""
                    sign = ''; // знак
                    return
                }
                c = ((a/b)*100).toFixed(6)
                break
        }
        finish = true
        out.textContent = c;

    }

}
