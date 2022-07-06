// Дано число n (n > 1). Верните из функции n-ное число Фибоначчи
console.log(testCycle(3))
function testCycle(n) {
    var x;
    let a = 1;
    let b = 1;
    if (n==1)
        return 1;
    if (n==2)
        return 1;
    for (let i = 3; i <= n; i++) {
        x = a+b;
        a=b;
        b=x;
    }
    return x;
}