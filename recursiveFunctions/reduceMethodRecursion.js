//https://victoria.dev/blog/understanding-array.prototype.reduce-and-recursion-using-apple-pie/
var arr = [1, [2],
  [3, [
    [4]
  ]]
];

var flat = arr.reduce((done, curr) => {
  let newValue = done.concat(curr);
  return newValue;
}, [])

console.log(flat());
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
  if (Array.isArray(arr)) {
    //only apply the reduce IF the argument is an array
    return arr.reduce(function(done, curr) {
      return done.concat(flatten(curr));
    }, []);
  } else {
    return arr;
  }
}

//we want [1,2,3,4]