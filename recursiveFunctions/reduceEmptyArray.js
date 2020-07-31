let nestedChildren = [{
  label: "root",
  children: [{
      label: "rootChildOneHasChildren",
      children: [{
        label: "rchildOnegrandNoKids"
      }, {
        label: "rchildTwograndkids",
        children: [{
          label: "greatGrandChild"
        }]
      }]
    },
    {
      label: "rootChildTwoNOChildren"
    }
  ]
}];

let filteredText = "grand"
//return object if "grand" is in child

let emptyArray = [];

let emptyArrayResult = emptyArray.reduce((acc, nV) => {
  console.log("i'm in the reduce method of an empty array!")
  let numb = 1;
  return acc.push(numb);
}, []);
console.log(emptyArrayResult) //result is []; an empty array

/*
let noStartValue = emptyArray.reduce((acc, nV) => {
  let arr = [];
  return arr[1]
})
*/
//console.log(noStartValue) //ERROR - no start value

//example: //[{l:1,children[{l:2 children:[{l:3}]}]}]
//asume isMatch is if it's a number
function filter(array, isMatch) {
  return array.reduce((acc, nV) => {
    //children returns an array of objects.
    //it is essentually acc from a finished reduce
    var children = filter(nV.children || [], isMatch); //acc from previous reduce
    if (isMatch(nV) || children.length) {
      //either teh current value is a match, or a child is a match
      //so you need everything UP the chain
      acc.push(Object.assign({}, nV, children.length && {
        children
      }))
    };
    return acc;
  }, []);
}

/* using the example from above. remember -it is an array with ONE value
/* we are saying that if the value is a number 
reduce 1 = nv = {l:1, children: ..}
  children = ? //[{l:2},children:[{l:3}]]
  ///after returning from reduce 2 //
  {l:1,[{l:2},children:[{l:3}]}]} -> this returns from the functino
           reduce 2 = nv = {L:2, children:..}
           children = ? //[{l:3}]
           ///after reduce 3 returns //
            {L:2, children:[{l:3}]} //old children are replaced by new children passed back
            return to reduce1 acc = [{l:2}, children:[{l:3}]]
                reduce 3 - nv = {l:3}
                childre = ? //[] returned so continue
                //////after reduce 4 returns ////
                isMatch//no chidren
                acc for REDUCE3 is empty, so push new object
                there are no children, so it is exactly the object you passed
                so the nv object is returned [{l:3}] = acc
                    reduce 4  -no nv, empty array is starting value, return acc=[]

*/


//pass into the filter function a functin that checks the label and
//identifies if the filtered text is in the label and if so returns it
result = filter(nestedChildren, ({
  label
}) => label.toLowerCase().indexOf(filteredText.toLowerCase()) > -1);

console.log(`result of function using reduce recursively checking for label with word ${filteredText} is ${result}`)



//