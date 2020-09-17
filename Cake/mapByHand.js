//https: //medium.com/javascript-in-plain-english/i-use-these-4-questions-to-find-outstanding-javascript-developers-4a468ea17155
let arr1 = [1, 2, 3, 4, 0, 10]
//for each does not return anything. simply performs an action
//on each item
arr1.forEach((item) => {
  console.log("traditional forEach does not return anything", item)
});
//map returns a new array
traditionalMapArray = arr1.map(item => item * 2);
console.log("traditional returned map is ", traditionalMapArray)
Array.prototype._forEach = function(callback) {
  //callback is a function
  let archiveArr = [...this];
  let newArr = [];
  for (let i = 0; i < archiveArr.length; i++) {
    callback(archiveArr[i]);
  }
  console.log("archive arr is ", archiveArr)
}

arr1._map(function(arrayItem) {
  console.log(`array item is ${arrayItem}`);
  //arrayItem

});