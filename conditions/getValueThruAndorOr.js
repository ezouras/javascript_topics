let andFalseThenTrue = false && "second"; //false
let andTrueThenFalse = "first"&&false; //false
let andFalseThenFalse = false&&false; //false
let andTrueThenTrue = "first"&&"second"; //second

let trueOrTrue = "first"||"second"; //first -doesn need to read the 2nd
let trueOrFalse = "first"|| false;//first
let falseOrTrue = false||"second";//second
let falseOrFalse = false||false;//false

console.log("AND!")
console.log("false && false",andFalseThenFalse);
console.log("false && true ", andFalseThenTrue);
console.log("true && false",andTrueThenFalse);
console.log("true && true", andTrueThenTrue);
console.log("OR!")
console.log("tru or tru",trueOrTrue);
console.log("tru or false", trueOrFalse);
console.log("false or tru", falseOrTrue);
console.log("false or false", falseOrFalse);
