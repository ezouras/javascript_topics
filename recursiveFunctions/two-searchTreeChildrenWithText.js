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
      ]
    },
    {
      label: 'schema_three',
      children: [{
          label: "item-3-1"
        },
        {
          label: "item--3-2"
        },
        {
          label: "item--3-3"
        },
        {
          label: "item--3-4"
        },
        {
          label: "item--3-5"
        },
        {
          label: "item--3-6"
        }
      ]
    },
    {
      label: "schema_four",
      children: [{
        label: "item-4-1"
      }]
    },
    {
      label: "schema_five",
      children: [{
        label: "item-5-1"
      }]
    },
    {
      label: "schema_six",
      children: [{
          label: "item-6-1"
        },
        {
          label: "item-6-2",
          children: [{
              label: "item-6-2-1"
            },
            {
              label: "item-6-2-2",
              children: [{
                label: "item-6-2-2-1"
              }]
            }
          ]
        },
        {
          label: "item-6-3"
        }
      ]
    }
  ]
}];

let filteredText = "item-6-3";

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