// Дано число n (n > 1). Выведите строку, состоящую из простых чисел, меньших n. Воспользуйтесь решетом Эратосфена.
//     Единицу не считаем простым числом.
console.log(testCycle(102))
function testCycle(n) {
    var x="";
    let arr=[];
    if (n < 3)
        return x;
    for (let i =1; i <=n ; i++) {
       arr.push(true);
    }
    for (let i = 2; i**2 <=n ; i++) {
        if (arr[i]===true){
            for (let j = i**2; j <=n ; j= j+i) {
                arr[j]=false;
            }
        }
    }
    for (let i = 2; i <= n; i++) {
        if (arr[i]===true){
            x = x + i + " ";
        }
    }
    return x;
}