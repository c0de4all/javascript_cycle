// Дано целое число n, большее 1. Найти квадрат данного числа, используя формулу n^2 = 1 + 3 + 5 + ... + (2 * n - 1)n
//  Из функции необходимо вывести строку, состоящую из чисел, получающихся на каждом шаге при
// добавлении каждого слагаемого (таким образом, получится строка из квадратов всех чисел от 1 до n).
console.log(testCycle(8))
function testCycle(n) {
    var x="";
    var sum=0;
    for (let i = 1; i <=(2*n-1) ; i++) {
        if (i%2!=0){
            sum+=i;
            x+=sum +" ";
        }
    }
    return x;
}