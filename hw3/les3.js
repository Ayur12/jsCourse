// задание 1
var n = 100;
var i = 0;
while (i <= n) {
    console.log(i++);
}

var n = 100;
var i = 0;
do {
    console.log(i++)
} while (i <= n);


for (var count = 0; count <= 100; count++) {
    console.log(count);
}

// задание 2,3
var arr = [3215.12, 562.01, 25, 999.99]
function countBasketPrice(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum);
}
countBasketPrice(arr);

// задание 4
for (var count = 0; count <= 9; console.log(count++)) {

}

// задание 5

var n = 'xxxxxxxxxxxxxxxxxxxx';
var i = '';
while (i != n) {
    console.log(i += 'x');
}