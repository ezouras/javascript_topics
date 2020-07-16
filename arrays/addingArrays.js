let arrayOne = [];
pushToArray(arrayOne);
console.log("array one after pusing is ", arrayOne);
concatToArray(arrayOne);
console.log("after concating to array: ", arrayOne);
arrayOne = [...arrayOne, ...passBackArrayAfterConcat()];
console.log("finally array one is ", arrayOne)

function pushToArray(arr) {
  arr = arr.slice();
  arr.push("1");
  arr.push("2");
  arr.push("3");
  //arr = arr.slice();
  console.log("in push method and does array passed equal X3 array?", arr === arrayOne)
}

function concatToArray(arr) {
  let newArr = [];
  newArr.push("one");
  newArr.push("two");
  newArr.push("three");
  console.log("before concating and array equal passed? ", arr === arrayOne)
  arr = arr.concat(newArr);
  console.log("after concat array and arra triple equal passed arr?", arr === arrayOne)
}

function passBackArrayAfterConcat() {
  let newArr = [];
  newArr.push("one");
  newArr.push("two");
  newArr.push("three");
  return newArr;
}