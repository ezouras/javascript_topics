function getProperty(obj, key) {
  return obj[key]; //inferred type is T[K]
}
var x = {
  foo: 10,
  bar: "hi"
};
var foo = getProperty(x, "foo"); //10
var bar = getProperty(x, "bar"); //"hi"
console.log("foo property is ", foo);
console.log("bar property is ", bar);