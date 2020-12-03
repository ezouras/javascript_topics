var numbDictOne = {
    1: 10,
    2: 45,
    3: 22
};
var numbDictOneWithName = {
    1: 98,
    2: 35,
    name: "First Dictionary"
};
console.log("2nd index in number dict is ", numbDictOne[2]);
console.log("dict with name's 2nd index is " + numbDictOneWithName[2] + " and the dict name is " + numbDictOneWithName["name"]);
function getProperties(obj) {
    var arrayOfPropertiesTypes = [];
    //Keyof only works on types, and it is
    //trying to get the keys of the object being passed
    //  let objectKeys = keyof T;
}
var p1;
p1 = {
    name: "Evie",
    age: 42,
    occupation: "Front End Developer",
    pets: ["dog", "cat"]
};
console.log("p1 is ", p1);
var jim_properties;
console.log("jim properties are  ", jim_properties);
//what is in the "<>" is NOT what is returned from the fuction
//it is the types being passed
function getProperty(obj, key) {
    return obj[key]; //inferred type is T[K]
}
var x = {
    foo: 10,
    bar: "hi"
};
var foo = getProperty(x, "foo"); //10
var bar = getProperty(x, "bar"); //hi
console.log("foo property is ", foo);
console.log("bar property is ", bar);
