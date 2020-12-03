/*
0,1, 2,3,4,5,6,7
0,1,1,2,3,5,8,13,21...
*/

let initial = [0, 1];
let fib = (numberOfDigitsInFibArray) => {
  let acc = 0;
  let fibArr = [0, 1];
  for (let i = 0; i < numberOfDigitsInFibArray; i++) {
    fibArr.push(fibArr[acc] + fibArr[++acc]);
  }
  return fibArr;

}

console.log(fib(5));