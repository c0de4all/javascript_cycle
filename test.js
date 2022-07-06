//Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат.

console.log(testCycle(3));
function testCycle(n) {
    var x;
    if (n==1)
        return 1;
    x=testCycle(n-1)+n;
    return x;
}
