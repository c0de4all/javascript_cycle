//Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами. Известно, что b больше a.
console.log(testCycle(6,24))
function testCycle(a, b) {
    var x;
    x=a;
    for (let i = a+1; i <=b; i++) {
        x+=" " + i;
    }
    return x;
}