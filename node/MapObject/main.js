"use strict";
//good website for the map object
//https://www.javascripttutorial.net/es6/javascript-map/#:~:text=To%20get%20the%20keys%20of,of%20elements%20in%20the%20map.
exports.__esModule = true;
var exports_module = require("./exports");
//console.log(exports_module.mapObject)
//console.log("the keys of the map object are ", exports_module.mapObject.keys())
let mapIt = exports_module.mapObject.keys();
let firstValue = mapIt.next();
//console.log("first key - or root key is ", firstValue);
console.log("first concept name is ", firstValue.value["conceptName"])