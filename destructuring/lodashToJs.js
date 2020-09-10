/********** REPLACES PICK **********/

let object = {
  car: 'Honda',
  colour: 'Red',
  kilometres: 40000
}
let {
  car,
  colour
} = object; //create variable 'car' equal to "Honda" and variable "colour" equal to "red"
console.log("car is ", car);
console.log("colour is ", colour)
let result = {
  car,
  colour
};
//create an object with car and colour propoperties that are equal to those variables

console.log(result);
// Output: { car: 'Honda', colour: 'Red' };

let obj3 = {
  name: "0",
  children: [{
      name: "1"
    },
    {
      name: "2"
    },
    {
      name: "3",
      children: [{
          name: "4"
        },
        {
          name: "5",
          children: [{
            name: "6"
          }]
        }
      ]
    }
  ]
}



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

//sets resultTwo equal to what "c" property is equal to; which is 3

let {
  a: [{
    b: resultThree
  }]
} = objectTwo;
console.log(`value of C in the object is ${resultTwo}`);
console.log(`value of B in the object is`)
console.dir(resultThree)