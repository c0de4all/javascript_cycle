// Даны числа a и b. Выведите строку с числами от большего числа до меньшего.
//     Известно, что и a и b больше либо равно 1, но неизвестно, какое из них больше.

console.log(testCycle(3,13));
function testCycle(a, b) {
    var x="";
    if (a>b) {
        for (let i = a; i >= b; i--) {
            x += " " + i;
        }
    }
    else{
        for (let i = b; i >= a; i--) {
            x += " " + i;
        }
    }
    return x;
}