let cData = [{
  label: 'AbbVie Drugs Regulatory',
  children: [{
      label: 'AbbVie Drugs',
      children: [{
          label: '5-Desosaminyl-6-0-Methyl Erythronolide'
        },
        {
          label: 'A-1007742'
        },
        {
          label: "ABBV-011"
        },
        {
          label: "bifeprunox"
        },
        {
          label: "calcitriol"
        },
        {
          label: "carbidopa"
        },
        {
          label: "cethromycin"
        },
        {
          label: "ciclosporin"
        },
        {
          label: "daunorubicin"
        },
        {
          label: "DC-1476469"
        },
        {
          label: "DC-1577248"
        },
        {
          label: "DC-1633903"
        },
        {
          label: "DC-1904769"
        },
        {
          label: "losatuxizumab"
        },
        {
          label: "melpoerone"
        },
        {
          label: "memantine"
        },
        {
          label: "nicotinic acid"
        },
        {
          label: "nicotinic acid and simvastatin"
        },
        {
          label: "PR-1241600"
        },
        {
          label: "PR-1241600"
        },
        {
          label: "remifentanil"
        },
        {
          label: "remtolumab"
        },
        {
          label: "rthrombin"
        },
        {
          label: "SC-002"
        },
        {
          label: "selegiline"
        },
        {
          label: "trandolapril"
        },
        {
          label: "upadacitinib"
        },
        {
          label: "vedolizumab"
        },
        {
          label: "warfarin"
        },
        {
          label: "veliparib"
        },
        {
          label: "zidovudine"
        },
        {
          label: "zolpidem"
        },
        {
          label: "zotepine"
        }
      ]
    },
    {
      label: 'AbbVie Trade Names',
      children: [{
          label: "Abbosynagis"
        },
        {
          label: "Biaxin"
        },
        {
          label: "CADD-Legacy Duodopa Pump"
        },
        {
          label: "CADD-Pump Batter Door"
        },
        {
          label: "Cadd Pump Protective Cassette"
        },
        {
          label: "Depakene"
        },
        {
          label: "Daxim"
        },
        {
          label: "Depakote"
        },
        {
          label: "Etoposide"
        },
        {
          label: "Febuxostat"
        },
        {
          label: "Fenofibrate"
        },
        {
          label: "Fenofibric Acide"
        },
        {
          label: "Gengraf"
        },
        {
          label: "Holkira Pak"
        },
        {
          label: "Humira"
        },
        {
          label: "Imbruvica"
        },
        {
          label: "isofulrane"
        },
        {
          label: "K-Tab"
        },
        {
          label: "Kaletra"
        },
        {
          label: "Lucrine"
        },
        {
          label: "Mavik"
        },
        {
          label: "Lupron"
        },
        {
          label: "Mivacron"
        },
        {
          label: "Nimbex"
        },
        {
          label: "Norvir"
        },
        {
          label: "Omiicelf"
        },
        {
          label: "Procren"
        },
        {
          label: "Qurevo"
        },
        {
          label: "Prometrium"
        },
        {
          label: "Ribavirin"
        },
        {
          label: "Sevoflurane"
        },
        {
          label: "Synagis"
        },
        {
          label: "Targa"
        },
        {
          label: "Vylvio"
        },
        {
          label: "Technivie"
        },
        {
          label: "Y-Connector for PEG 15"
        },
        {
          label: "Y-Connector for PEG 20"
        },
        {
          label: "Zemplar"
        },
        {
          label: "Zinbryta"
        }
      ]
    },
    {
      label: 'Therapeutic Area',
      children: [{
          label: "Cardiovascular"
        },
        {
          label: "General Medicine"
        },
        {
          label: "Immunology"
        },
        {
          label: "Neuroscience"
        },
        {
          label: "Oncology"
        },
        {
          label: "virology"
        }
      ]
    },
    {
      label: "5-Desosaminyl-6-0-Methyl Erythronolide",
      children: [{
        label: "diltiazem"
      }]
    },
    {
      label: "General Medicine",
      children: [{
        label: "General Medicine-Women's Health"
      }]
    },
    {
      label: "Immunology",
      children: [{
          label: "Immunology-Dermatology"
        },
        {
          label: "Immun-Gastron"
        },
        {
          label: "Immunology-Rheum"
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
function filter(array, isMatch) { //fn returns either tru or false
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

/
result = filter(cData, ({
  label
}) => label.toLowerCase().indexOf(filteredText.toLowerCase()) > -1);

console.log("result is ", result);
console.log("orig data", cData);
console.log("rootNode ", rootNode)