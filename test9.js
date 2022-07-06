// Найдите наибольший общий делитель чисел a и b. (Подсказка: вам поможет алгоритм Евклида и цикл while).
console.log(testCycle(13,182))

function testCycle(a, b) {

    if (b===0){
       return a;}

    return testCycle(b, a % b);
}