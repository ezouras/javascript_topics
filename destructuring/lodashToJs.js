/********** REPLACES PICK **********/

let object = {
  car: 'Honda',
  colour: 'Red',
  kilometres: 40000
}
let {
  car,
  colour
} = object;
let result = {
  car,
  colour
};

let obj3 = {
  name: "0",
  children: [{
    name: "1"
  }, {
    name: "2"
  }, {
    name: "3",
    children: [{
      name: "4"
    }, {
      name: "5",
      children: [{
        name: "6"
      }]
    }]
  }]
}


console.log(result);
// Output: { car: 'Honda', colour: 'Red' };

let objectTwo = {
  a: [{
    b: {
      c: 3
    }
  }]
};

let {
  a: [{
    b: {
      c: resultTwo
    }
  }]
} = objectTwo;

let {
  a: [{
    b: resultThree
  }]
} = objectTwo;
console.log(`value of C in the object is ${resultTwo}`);
console.log(`value of B in the object is`)
console.dir(resultThree)