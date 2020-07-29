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

let obj1 = {
  label: "obj1",
  children: [{
    label: "obj2"
  }]
}

let arrWithObj = [{
  label: "obj1",
  children: [{
    label: "obj2"
  }]
}];

let arrObj1 = [
  obj1
]

let obj2 = {
  label: "no_children_object"
}

class NodeObject {
  constructor(label, children = null) {
    this.label = label;
    this.children = children;
  }
}

let classOneIns = new NodeObject("obj2", ["obj3", "obj4"]);
console.log("instance of node object is ", classOneIns)

function replaceObj(obj) {
  let newNodeObj = new NodeObject(obj.label, obj.children)
  return newNodeObj;

}

function replaceChildren(obj) {
  let newObjArray = obj.children.map(_ => {
    let nObj = new NodeObject(_.label)
    return nObj;
  })
  let newNodeObj = new NodeObject(obj.label, newObjArray)
  return newNodeObj;
}

console.log("Using replace function, object is ", replaceObj(obj1))
console.log("using replaceREcurse some without kids: ", replaceChildren(obj1))

function replaceRecurseWithNodeObjects(arr) {
  let replaced = arr.reduce((acc, nV) => {
    let nodeObj = new NodeObject(nV.label);
    let childrenObjs = replaceRecurseWithNodeObjects(nV.children || [])
    if (childrenObjs) {
      nodeObj.children = childrenObjs
      acc.push(nodeObj);
    } else {
      acc.push(nodeObj)
    }
    return acc;
  }, []);
  return replaced;
}

let newObjs2 = replaceRecurseWithNodeObjects(arrObj1);
console.log("using recurse, new objects are: ")
console.dir(newObjs2)
console.dir(newObjs2[0].children)
let newObjs3 = replaceRecurseWithNodeObjects(arrWithObj);
console.log("with some nested stuff: ");
console.dir(newObjs3);
console.log("the children are ");
console.dir(newObjs3[0].children)