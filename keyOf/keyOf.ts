function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; //inferred type is T[K]
}

let x = {
  foo: 10,
  bar: "hi"
};

let foo = getProperty(x, "foo");//10
let bar = getProperty(x, "bar");//hi
console.log("foo property is ", foo);
console.log("bar property is ", bar);
