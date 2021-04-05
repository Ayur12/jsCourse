// 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 "префиксная форма инкрементирование производится сразу, а возврат — уже с обновленным значением"
d = b++; alert(d);           // 1 "постфиксная форма сначала происходит возвращение значения, а потом выполняется инкрементирование"
c = (2 + ++a); alert(c);      // 5 "(2+ (1+2)) a=2" 
d = (2 + b++); alert(d);      // 4 "(2+ (2+1)) b=2 - после возвращения значения b произошло инкрементирование"
alert(a);                    // 3 "инкрементирование а 2 раза"
alert(b);                    // 3 "инкрементирование b 2 раза"


//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
x = 1 + (2 * 2);
alert(x)

/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

var a = -3, b = -7;
if (a > 0 && b > 0)
    alert(a - b);
else if (a < 0 && b < 0)
    alert(a * b);
else if (a < 0 && b > 0)
    alert(a + b);
else {
    alert(a + b);
}

/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */

var a = 12;
switch (a) {
    case 1:
        alert('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 2:
        alert('2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 3:
        alert('3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 4:
        alert('4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 5:
        alert('5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 6:
        alert('6,7,8,9,10,11,12,13,14,15');
        break;
    case 7:
        alert('7,8,9,10,11,12,13,14,15');
        break;
    case 8:
        alert('8,9,10,11,12,13,14,15');
        break;
    case 9:
        alert('9,10,11,12,13,14,15');
        break;
    case 10:
        alert('10,11,12,13,14,15');
        break;
    case 11:
        alert('11,12,13,14,15');
        break;
    case 12:
        alert('12,13,14,15');
        break;
    case 13:
        alert('13,14,15');
        break;
    case 14:
        alert('14,15');
        break;
    case 15:
        alert('15');
        break;

    default:
        alert('число должно быть в диапазоне от 1 до 15');
        break;
}


/* 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

function summation(x, y) {
    return (x + y);
}
sum = summation(5, 62);
alert(sum);


function subtraction(x, y) {
    return (x - y);
}
sub = subtraction(5, 62);
alert(sub);


function multiplication(x, y) {
    return (x * y);
}
mul = multiplication(5, 62);
alert(mul);


function division(x, y) {
    return (x / y);
}
div = division(5, 62);
alert(div);


/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'multiplication':
            mul = arg1 * arg2;
            alert(mul);
            break;

        case 'division':
            div = arg1 / arg2;
            alert(div);
            break;
        case 'summation':
            sum = arg1 + arg2;
            alert(sum);
            break;

        case 'subtraction':
            sub = arg1 - arg2;
            alert(sub);
            break;
    }
}
mathOperation(3, 5, 'multiplication');
mathOperation(3, 5, 'division');
mathOperation(3, 5, 'summation');
mathOperation(3, 5, 'subtraction');

/* 7. *Сравнить null и 0. Попробуйте объяснить результат. */

/* 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.*/

function power(val, pow) {

    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
alert(power(2, 5));