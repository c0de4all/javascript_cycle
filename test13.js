//Дано положительное число n. Переведите его в двоичную систему счисления.

console.log(testCycle(19))
function testCycle(n) {
    var x = "";
    do{
        x =n%2 +x;
        n=Math.floor(n/2);
    }
    while (n>0);
    return x;
}