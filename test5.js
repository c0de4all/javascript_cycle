//Даны числа a и b. Найдите сумму квадратов чисел между a и b включительно. Неизвестно, какое из чисел a или b больше.
console.log(testCycle(2,7))
function testCycle(a, b) {
    var x=0;
    if (a>b) {
        for (let i = b; i <= a; i++) {
            x +=i**2;
        }
    }
    else{
        for (let i = a; i <= b; i++) {
            x +=i**2;
        }
    }
    return x;
}