"use strict";
const origString="abcd";
const strOne = "bcda";//should be true
const strTwo = "acbd";//should be false
const strThree = "dabc";//should be true


function getIsRotation(strToCmpr,origStr){
  let isRotation = true;
  let maxIndex =strToCmpr.length-1;
  let cmprStrArr = strToCmpr.split("");
  let origStrArr = origStr.split("");
  let origStrLoc = origStr.indexOf(cmprStrArr[0]);
  console.log("starting locatnoi is ",origStrLoc)
  for(let i=1;i<strToCmpr.length-1;i++){
    //get string character to compare
    let cmprChar = cmprStrArr[i];
    console.log("char to compare ",cmprChar)
    origStrLoc = origStrLoc===maxIndex? 0:++origStrLoc;
    console.log("locatino of orig char",origStrLoc);
    let origChar = origStrArr[origStrLoc];
    console.log("orig char is ",origChar)
    if(origChar !== cmprChar){
      console.log("characers don't match! ");
      isRotation = false;
    }
  }
  return isRotation;
}


console.log(getIsRotation(strOne,origString));
console.log(getIsRotation(strTwo,origString));
console.log(getIsRotation(strThree,origString));
