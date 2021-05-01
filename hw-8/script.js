//1.
if (!("a" in window)) {
    var a = 1;
}
alert(a); // выведет undefined, т.к. условие false, значит if не выполнится. 

//2.
var b = function a(x) {
    x && a(--x);
};
alert(a);// переменная а не объявлена, выведет not defined

//3.
function a(x) {
    return x * 2;
}
var a;
alert(a); // выведет undefined

//4.
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); // тут выведет 10 т.к. a==argumens[2]==10

//5.
function a() {
    alert(this);
}
a.call(null); // вызов функции a() с параметром null выведет 