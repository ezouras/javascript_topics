/*
arr.sort([compareFunction])
Array is sorted IN PLACE. there is no copy made

If a comparison function si not used, the data is
converted into strings and sorted in order of their
unicode point value
*/
//unicode explained
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
//output: "The character code 113 is equal to q"

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]