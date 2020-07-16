function getProperty(obj, key) {
    return obj[key]; //inferred type is T[K]
}
var x = {
    foo: 10,
    bar: "hi"
};
var foo = getProperty(x, "foo"); //”number”
var bar = getProperty(x, "bar"); //string
console.log("foo property is ", foo);
console.log("bar property is ", bar);
