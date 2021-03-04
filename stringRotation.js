"use strict";
/*
string - abcd
is it a string rotatoin?
bcda but not out of rotation ACBD
*/
const origString="abcd";
const strOne = "bcda";//should be true
const strTwo = "acbd";//should be false
//assign number to string
const origStringArr = origString.split("");
const stringOneArr = strOne.split("");
console.log(stringOneArr);
const isRotation = stringOneArr.some((elem,idx,arr)=>{
    let maxLength = arr.length -1;
    let indexOfCompareArray = origStringArr.indexOf(elem);
    if
    return false;
})

console.log(isRotation)
