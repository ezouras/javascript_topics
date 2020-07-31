let cData = [{
  label: 'ontology_one',
  children: [{
      label: 'schema_one',
      children: [{
          label: 'item-1'
        },
        {
          label: 'item-2'
        },
        {
          label: "item-3"
        },
        {
          label: "item-4"
        },
        {
          label: "item-5"
        },
        {
          label: "item-6"
        },
        {
          label: "item-7"
        },
        {
          label: "item-8"
        },
        {
          label: "item-9"
        },
        {
          label: "item-10"
        },
        {
          label: "item-11"
        },
        {
          label: "item-12"
        },
        {
          label: "item-13"
        },
        {
          label: "item-14"
        },
        {
          label: "item-15"
        },
        {
          label: "item-16"
        },
        {
          label: "item-17"
        },
        {
          label: "item-18"
        },
        {
          label: "item-19"
        },
        {
          label: "item-20"
        },
        {
          label: "item-21"
        },
        {
          label: "item-22"
        },
        {
          label: "item-23"
        },
        {
          label: "item-24"
        },
        {
          label: "item-25"
        },
        {
          label: "item-26"
        },
        {
          label: "item-27"
        },
        {
          label: "item-28"
        },
        {
          label: "item-29"
        },
        {
          label: "item-30"
        },
        {
          label: "item-31"
        },
        {
          label: "item-32"
        },
        {
          label: "item-33"
        }
      ]
    },
    {
      label: 'schema_two',
      children: [{
          label: "item-1"
        },
        {
          label: "item-2"
        },
        {
          label: "item-3"
        },
        {
          label: "item-4"
        },
        {
          label: "item-5"
        },
        {
          label: "item-6"
        },
        {
          label: "item-7"
        },
        {
          label: "item-8"
        },
        {
          label: "item-9"
        },
        {
          label: "item-10"
        },
        {
          label: "item-11"
        },
        {
          label: "item-12"
        },
        {
          label: "item-13"
        },
        {
          label: "item-14"
        },
        {
          label: "item-15"
        },
        {
          label: "item-16"
        },
        {
          label: "item-17"
        },
        {
          label: "item-19"
        },
        {
          label: "item-20"
        },
        {
          label: "item-21"
        },
        {
          label: "item-22"
        },
        {
          label: "item-23"
        },
        {
          label: "item-24"
        },
        {
          label: "item-25"
        },
        {
          label: "item-26"
        },
        {
          label: "item-27"
        },
        {
          label: "item-28"
        },
        {
          label: "item-29"
        },
        {
          label: "item-30"
        },
        {
          label: "item-31"
        },
        {
          label: "item-32"
        },
        {
          label: "item-33"
        },
        {
          label: "item-34"
        },
        {
          label: "item-35"
        },
        {
          label: "item-36"
        },
        {
          label: "item-37"
        },
        {
          label: "item-38"
        },
        {
          label: "item-39"
        },
        {
          label: "item-40"
        }
      ]
    },
    {
      label: 'schema_three',
      children: [{
          label: "item-"
        },
        {
          label: "item-"
        },
        {
          label: "item-"
        },
        {
          label: "item-"
        },
        {
          label: "item-"
        },
        {
          label: "item-"
        }
      ]
    },
    {
      label: "schema_four",
      children: [{
        label: "item-1"
      }]
    },
    {
      label: "schema_five",
      children: [{
        label: "item-1"
      }]
    },
    {
      label: "schema_six",
      children: [{
          label: "item-1"
        },
        {
          label: "item-2"
        },
        {
          label: "item-3"
        }
      ]
    }
  ]
}];

let filteredText = "imm";

/********* this does not work **********/
let rootNode = cData[0].children.filter(function cb(node) {
  if (node.children && (node.children.length > 0)) {
    node.children.filter(cb)
  }
  if (node.label.indexOf(filteredText) > -1)
    return true
  return false;

})

/********** this works **********/
function filter(array, isMatch) { //is match returns either tru or false
  return array.reduce((acc, nV) => { //r is the acc, o is the next value
    //first call the filter function again on the children
    var children = filter(nV.children || [], isMatch);
    //passing "nV" pulls out the label and does a compare that results
    //in either tru or false
    if (isMatch(nV) || children.length) {
      //object.assign can have multiple sources. the rightmost has the most precendence
      //first two arguments make a copy of nV (the node )
      //last argument replaces the children with the filtered children in this functino
      acc.push(Object.assign({}, nV, children.length && {
        children
      }))
    };
    return acc;
  }, []);
}
result = filter(cData, ({
  label
}) => label.toLowerCase().indexOf(filteredText.toLowerCase()) > -1);

console.log("result is ", result);
console.log("orig data", cData);
//console.log("rootNode ", rootNode)