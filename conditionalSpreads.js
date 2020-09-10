let one = 1;
let two = 2;
let target = {};
let sourceB = {
  label: "b",
  children: [1, 2]
};
let sourceC = {
  label: "c",
  children: [5, 2]
};
let sourceD = {
  label: "d"
};

let sourceE = {
  ...(two > one && {
    b: 5
  })
}

console.log("source E is: ", sourceE) //{b:5}

let sourceF = {
  ...(sourceC.children && {
    c: 5
  })
}

console.log("source F is ", sourceF) //{C:5}
let arr3 = [];
let children = ["five", "two"];
//turn children into an object with property name children
//whos value is ["five", 'two']
let childrenObj = {
  children
}

//reminder of sourceD
/*let sourceD = {
  label: "d"
};
*/
console.log(childrenObj)
arr3.push(Object.assign({}, sourceD, children.length && {
  children
}));
//add property "children", to the object and set it equal to what children is equal to
//children = {children:["five","two"]}
//if "children" exists in sourceD, replace it, because it is to the right of it
//and it takes precedence
console.log("arr3 is ", arr3) //[{label:"d", children=["five","two"}]