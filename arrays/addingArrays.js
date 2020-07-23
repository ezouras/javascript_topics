let arrayOne = [];
pushToArray(arrayOne);
// arr becomes a new array that has nothing to do with "arr"
//passed in even though they have the same name
console.log("array one after pusing is ", arrayOne); //[] see below
concatToArray(arrayOne);
console.log("After returning from function, arr is  ", arrayOne);
arrayOne = [...arrayOne, ...passBackArrayAfterConcat()];
console.log("finally array one is ", arrayOne)

function pushToArray(arr) {
  arr = arr.slice();
  arr.push("1");
  arr.push("2");
  arr.push("3");

}

function concatToArray(arr) {
  let newArr = [];
  newArr.push("one");
  newArr.push("two");
  newArr.push("three");
  arr = arr.concat(newArr); //"arr" creates a new array that has nothing to do with
  //the passed in value of "arr"
  console.log(`arr after concating newARr is  ${arr} and newArr is ${newArr}`);
  newArr.push("four");
  console.log(`arr after pushing to newArr is  ${arr} and newArr is ${newArr}`);

}

function passBackArrayAfterConcat() {
  let newArr = [];
  newArr.push("one");
  newArr.push("two");
  newArr.push("three");
  return newArr;
}