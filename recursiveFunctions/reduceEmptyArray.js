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

function filter(array, isMatch) {
  return array.reduce((acc, nV) => {
    //an empty array just returns the start value
    //which is an empty array
    console.log("next value before calling recursive fnc ", nV)
    var children = filter(nV.children || [], isMatch);
    console.log("next value after calling children is ", nV)
    console.log("and the childre are : ");
    console.dir(children)
    if (isMatch(nV) || children.length) {
      console.log(`pushing the next value: `)
      console.dir(nV);
      console.log("and acc is: ")
      console.dir(acc)
      acc.push(Object.assign({}, nV, children.length && {
        children
      }))
    };
    return acc;
  }, []);
}
//pass into the filter function a functin that checks the label and
//identifies if the filtered text is in the label and if so returns it
result = filter(nestedChildren, ({
  label
}) => label.toLowerCase().indexOf(filteredText.toLowerCase()) > -1);

console.log(`result of function using reduce recursively checking for label with word ${filteredText} is ${result}`)



//