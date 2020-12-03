interface NumberDictionary {
  //tyis type can have many indexes whose property is a number
  //and whose value is a number
  //the "index" is not really used but a convenience to give better
  //understanding to the object
  //[index: number]: number,
  [whocareswhatmynameis: number]: number
  //u could use the above. but "index" gives the user better context
}

let numbDictOne: NumberDictionary = {
  1: 10,
  2: 45,
  3: 22
}

interface NumbDictWithName extends NumberDictionary {
  name: string;
}

let numbDictOneWithName: NumbDictWithName = {
  1: 98,
  2: 35,
  name: "First Dictionary"
}



console.log("2nd index in number dict is ", numbDictOne[2])
console.log(`dict with name's 2nd index is ${numbDictOneWithName[2]} and the dict name is ${numbDictOneWithName["name"]}`)



//the "<>" means that whatever is passed to this function will be
//of a generic type "T".  it could be any type
function getProperties<T>(obj: T) {
  let arrayOfPropertiesTypes = [];
  //Keyof only works on types, and it is
  //trying to get the keys of the object being passed
  //  let objectKeys = keyof T;
}


//this type has more than one of properties
//that equal it's type
type Identity<T> = {
  [P in keyof T]: T[P]
};

interface Person {
  name: String,
  age: number,
  occupation: string
  pets: Array<string>
}

//this is just to show how it's used. It doesn't really do anything
let p1: Identity<Person>;
p1 = {
  name: "Evie",
  age: 42,
  occupation: "Front End Developer",
  pets: ["dog", "cat"]
}

console.log("p1 is ", p1)

//but lets say "pets" is optional.  lets do this again
type OptionalProps<T> = {
  [P in keyof T]?: T[P]
};

//this results in error because of missin properties
/*let p2: Identity<Person> = {
  name: "Alethea",
  age: 9
}*/
//this works!
let p2: OptionalProps<Person> = {
  name: "Alethea",
  age: 9
}


console.log("p2 is ", p2)

//or maybe readon only
type Readonly<T> = {
  //create a new readonly property for each property in "T"
  //set it equal to the "TYPE" of the value
  //*NOTE that T[P] does not give you the value
  //it gives you the TYPE of the value 
  readonly [P in keyof T]: T[P]

}

type person_properties = keyof Person
let jim_properties: person_properties;
console.log("jim properties are  ", jim_properties)


//what is in the "<>" is NOT what is returned from the fuction
//it is the types being passed
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
