//https://victoria.dev/blog/understanding-array.prototype.reduce-and-recursion-using-apple-pie/
var anArr = [1, [2],
  [3, [
    [4]
  ]]
];

//flat equals the result of the reduce functino
var flat = anArr.reduce((done, curr) => {
  let newValue = done.concat(curr); //concat acts as a spread to arrays
  return newValue;
}, [])

console.log(flat);
//1. first value is "1", add it to the array [1]
//2. second value is [2], take 2 out of the box and add it [1,2]
//3. third value is [3,[[4]]]
//  a/ tale 3,Array in an array out of the box and add it or 3,[[4]]
//  b/ so the value is [1,2,3,[[4]]]

//we get this
//// [ 1, 2, 3, [ [ 4 ] ] ]
/*
If the pile of apples is a pile of apples, take an apple from the pile.
If the apple is an apple, polish it, put it in the basket.
If the apple is a box, open the box. If the box contains an apple, go to step 2.
When the pile is no more, give us the basket of shiny apples.
If the pile of apples is not a pile of apples, give back whatever it is.
*/
function flatten(arr) {
  if (Array.isArray(arr)) { //initial is always an array
    //only apply the reduce IF the argument is an array
    return arr.reduce(function(done, curr) { //return the result of reduce
      return done.concat(flatten(curr)); //return the accumulator
    }, []);
  } else {
    return arr; //if its not an array you need to recurse, just return
    //the number to the reduce functino to add to the accumulator
  }
}

console.log("using recursion: ", flatten(anArr))

//we want [1,2,3,4]