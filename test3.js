// Даны числа a и b. Выведите строку с числами между а и b включая границы, отсортированными по возрастанию.
// Неизвестно,какое из чисел больше, но известно, что и a и b больше 0.
console.log(testCycle(2,4))
function testCycle(a, b) {
    var x="";
    if (a>b) {
        for (let i = b; i <= a; i++) {
            x += " " + i;
        }
    }
    else{
        for (let i = a; i <= b; i++) {
            x += " " + i;
        }
    }
    return x;
}