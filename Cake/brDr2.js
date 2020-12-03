// pick random number 1-100
//remoe from arr2
//find with a method what that number inspect

let arr1 = [];
let arr2 = [];
let addHundredToArray = (arr) => {
  for (let i = 1; i <= 100; i++) {
    arr.push(i)
  }
}

let pickRandomNumberOneToHundred = () => {
  return Math.floor(Math.random() * 100) + 1;
}

addHundredToArray(arr1);
addHundredToArray(arr2);
let missingNumber = pickRandomNumberOneToHundred();
console.log("randomly piccked number is ", missingNumber)
let arrayWithMissingNumber = arr2.filter(number => number !== missingNumber);



let findMissingNumberFromONeToHundred = (arrWithMissingNumber) => {
  let missingNumber = 0;
  for (let i = 1; i <= 100; i++) {
    if (arrWithMissingNumber.indexOf(i) === -1)
      missingNumber = i;
  }
  let logString = missingNumber ? `Missing number is ${missingNumber}` : "cannot find missing number";
  console.log(logString);
}

findMissingNumberFromONeToHundred(arrayWithMissingNumber);