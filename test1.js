// Даны два целых числа k и n. Верните из функции строку, которая состоит из чисел n,
// повторяющихся k раз, разделенных пробелом. Известно, что и k и n больше либо равно 1.

console.log(testCycle(1,2));
function testCycle(k, n) {
    var x;
    x=n;
    for (let i = 0; i < k-1; i++) {
        x+= " " + n;
    }
    return x;
}
