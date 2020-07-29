"use strict";
//good website for the map object
//https://www.javascripttutorial.net/es6/javascript-map/#:~:text=To%20get%20the%20keys%20of,of%20elements%20in%20the%20map.
exports.__esModule = true;
var exports_module = require("./exports");
//mapObject is  a variable you defined in "exports"
//it is a "map"
let mapIt = exports_module.mapObject.keys();
//you are asking for the keys to iterate over in the map object you created
let firstValue = mapIt.next();
//nextg returns an object
//{value: returns first value in the array//
let secondValue = mapIt.next();
console.log("2nd value is ", secondValue)
console.log("first value is : ", firstValue)
//value is a MAP thing. it is a property of an object that is
//returned when you use the "next" method
//"conceptName" is a name YOU chose in the value of map 
console.log("first concept name is ", firstValue.value["conceptName"])