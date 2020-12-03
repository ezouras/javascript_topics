/*
0,1,2,3,4,5,6,7
0,1,1,2,3,5,8,13,21...
0-1 is negative

0 = 0
1 = 1
let init = [0,1]
if 2? need to add to array up to that number
so loop till that number
2 = spot 1 + 2 = 1 add to spot 3


if 13
2 = add spot 3
3 = add spot 4
4 = add spot 5

*/
const fib = (int) => {
  let fibArr = [0, 1];
  if (int > 1) {
    for (let i = 2; i <= int; i++) {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1])
    }
  }
  return fibArr[int];
}

console.log(fib(4));
console.log(fib(8));
console.log(fib(0));
console.log(fib(1));