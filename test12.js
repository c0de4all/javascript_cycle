//Дано число n. Найдите сумму его цифр.

console.log(testCycle(749));
function testCycle(n) {
    var x=0;
    let array = (""+n).split("").map(Number)
    for (let i = 0; i < array.length; i++) {
        x+=array[i];
    }
    return x;
}