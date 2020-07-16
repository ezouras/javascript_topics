let arrayOne = ["I'm global"];
let functionVar = function(arr2) {
  //arr2 is a new variable. it is no longer the one passed.
  //IF you just push it , but don't slice, it works. why?
  //there is no "="
  //arr2 = arr2.slice();
  arr2.push("1");
  arr2.push("2");
  arr2.push("3");
}
pushToArray(arrayOne);
console.log("array one after pusing is ", arrayOne);
//below results in error. arr is not a global.
//console.log("arr defined in the method is ", arr)
functionVar(arrayOne);

console.log("after calling function var ", arrayOne);



function pushToArray(arr) {
  //creates a LOCAL variable "arr". it pushes it
  //to local variable NOT global.
  arr = arr.slice();
  arr.push("1");
  arr.push("2");
  arr.push("3");
  console.log("in function and local arr is ", arr)
}