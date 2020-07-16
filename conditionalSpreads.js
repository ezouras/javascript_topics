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

console.log(sourceE)

let sourceF = {
  ...(sourceC.children && {
    c: 5
  })
}

console.log("source F is ", sourceF)
let arr3 = [];
let children = ["five", "two"];
arr3.push(Object.assign({}, sourceD, children.length && {
  children
}));
//add property "children", to the object and set it equal to what children is equal to
//children = {children:["five","two"]}
//if "children" exists in sourceD, replace it, because it is to the right of it
//and it takes precedence
console.log("arr3 is ", arr3)