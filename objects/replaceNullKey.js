cardObj = {
  key1: "key1",
  key2: "key2",
  key3: "key3",
  "": "synonym"
}

let newCardObj = replaceEmptyKeyString(cardObj)
console.log(showCard(cardObj));
console.log(showCard(newCardObj));

function replaceEmptyKeyString(objToChange) {
  let newObj = {};
  Object.keys(objToChange).forEach(key => {
    if (!key) {
      console.log("found null key", key)
      newObj["Synonym"] = cardObj[key];
    } else {
      newObj[key] = cardObj[key];
    }
  })
  return newObj;

}

function showCard(cObj) {
  Object.keys(cObj).forEach(key => {
    console.log("key is ", key);
    console.log("value is ", cObj[key])
  })
}