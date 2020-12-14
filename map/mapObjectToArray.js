const oddStore = {
  furnature: [{
      name: 'chair',
      color: 'blue',
      shade: 'dark',
      hex: 'rgb'
    },
    {
      name: 'lamp',
      color: 'red',
      shade: 'med-dark',
      hex: 'rgb'
    }
  ],
  animals: [{
      name: 'tiger',
      color: 'orange-brown',
      shade: 'med',
      hex: 'rgb'
    },
    {
      name: 'elephant',
      color: 'blue-grey',
      shade: 'med',
      hex: 'rgb'
    }
  ],
  devices: [{
      name: 'ipad',
      color: 'graphite',
      shade: 'dark'
    },
    {
      name: 'mac book',
      color: 'white',
      shade: 'light'
    }
  ]
};

const oddStoreKeys = Object.keys(oddStore);
const oddStoreBetter = oddStoreKeys.map(storeItemType => {
  const newObj = {
    itemType: storeItemType,
    items: oddStore[storeItemType]
  };
  return newObj;
});


oddStoreBetter.forEach(itemType => console.log(`
  item type is ${itemType.itemType} and items in this type
  ${logArrayOfObjects(itemType.items, "name")}`))


function logArrayOfObjects(theArray, thePropertyToLog) {
  theArray.forEach(item => console.dir(item[thePropertyToLog]));
  return "are"
}