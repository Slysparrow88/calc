const res = document.getElementById('res');
const clear = document.getElementById('clear');
const hiddenRes = document.getElementById('hiddenRes');
const proc = document.getElementById('proc');
const procRes = document.getElementById('procRes');
const funRes = document.getElementById('funRes');
const reserv = document.getElementById('reserv');

proc.hidden = true;
procRes.hidden = true;
reserv.hidden = true;

// ЦИФРЫ=======================================================================================
const one = document.getElementById('1');

one.onclick = () => {
    res.textContent += one.textContent;
    hiddenRes.textContent += one.textContent;
    reserv.textContent += one.textContent;
}
const two = document.getElementById('2');

two.onclick = () => {
    res.textContent += two.textContent;
    hiddenRes.textContent += two.textContent;
    reserv.textContent += two.textContent;
}
const three = document.getElementById('3');

three.onclick = () => {
    res.textContent += three.textContent;
    hiddenRes.textContent += three.textContent;
    reserv.textContent += three.textContent;
}
const four = document.getElementById('4');

four.onclick = () => {
    res.textContent += four.textContent;
    hiddenRes.textContent += four.textContent;
    reserv.textContent += four.textContent;
}
const five = document.getElementById('5');

five.onclick = () => {
    res.textContent += five.textContent;
    hiddenRes.textContent += five.textContent;
    reserv.textContent += five.textContent;
}
const six = document.getElementById('6');

six.onclick = () => {
    res.textContent += six.textContent;
    hiddenRes.textContent += six.textContent;
    reserv.textContent += six.textContent;
}
const seven = document.getElementById('7');

seven.onclick = () => {
    res.textContent += seven.textContent;
    hiddenRes.textContent += seven.textContent;
    reserv.textContent += seven.textContent;
}
const eight = document.getElementById('8');

eight.onclick = () => {
    res.textContent += eight.textContent;
    hiddenRes.textContent += eight.textContent;
    reserv.textContent += eight.textContent;
}
const nine = document.getElementById('9');

nine.onclick = () => {
    res.textContent += nine.textContent;
    hiddenRes.textContent += nine.textContent;
    reserv.textContent += nine.textContent;
}
const ziro = document.getElementById('0');

ziro.onclick = () => {
    res.textContent += ziro.textContent;
    hiddenRes.textContent += ziro.textContent;
    reserv.textContent += ziro.textContent;
}
//ЗНАКИ========================================================================================
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const shere = document.getElementById('shere');
const procent = document.getElementById('procent');
const multiply = document.getElementById('multiply');
const sqrt = document.getElementById('sqrt');
const point = document.getElementById('point');
const result = document.getElementById('result');
const oneX = document.getElementById('oneX');
const X2 = document.getElementById('X2');
const XY = document.getElementById('XY');

clear.onclick = () => {
    window.location.reload();
}
X2.onclick = () => {
    res.textContent = Math.pow(res.textContent, 2);
    hiddenRes.textContent = res.textContent;
    funRes.textContent = 'sqr' + "(" + reserv.textContent + ")";
    console.log(funRes.textContent)
}
XY.onclick = () => {
    hiddenRes.textContent += '**';
    setTimeout(function () {
        res.textContent = '';
    })
}
oneX.onclick = () => {
    res.textContent = eval(1/hiddenRes.textContent);
    hiddenRes.textContent = res.textContent;
    funRes.textContent = 'reciproc' + "(" + reserv.textContent + ")";
}

plus.onclick = () => {
    hiddenRes.textContent += plus.textContent;
    proc.textContent = res.textContent;
    procRes.textContent = res.textContent + '+';
    setTimeout(function () {
        res.textContent = '';
    })
}
minus.onclick = () => {
    hiddenRes.textContent += minus.textContent;
    proc.textContent = res.textContent;
    procRes.textContent = res.textContent + '-';
    setTimeout(function () {
        res.textContent = '';
    })
}
shere.onclick = () => {
    hiddenRes.textContent += '/';
    proc.textContent = res.textContent;
    procRes.textContent = res.textContent + '/';
    setTimeout(function () {
        res.textContent = '';
    })
}
multiply.onclick = () => {
    hiddenRes.textContent += '*';
    proc.textContent = res.textContent;
    procRes.textContent = res.textContent + '*';
    setTimeout(function () {
        res.textContent = '';
    })
}
procent.onclick = () => {
    res.textContent = eval((proc.textContent * res.textContent) / 100);
    hiddenRes.textContent = procRes.textContent + res.textContent;
}
sqrt.onclick = () => {
    res.textContent = Math.sqrt(res.textContent);
    hiddenRes.textContent = res.textContent;
    funRes.textContent = 'sqrt' + "(" + reserv.textContent + ")";
}
point.onclick = () => {
    res.textContent += '.';
    hiddenRes.textContent += '.';
}
result.onclick = () => {
    res.textContent = eval(hiddenRes.textContent);
    hiddenRes.textContent = '';
}
