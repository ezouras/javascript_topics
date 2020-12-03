const swPerson = {
  occupation: "software"
}
const a = true;
const f = false;
const b = "Magic string"
const o = {
  lastname: "Zouras"
}
const result = a && b;
const r2 = a && o //result is "magig string"
const r3 = f && o //result is false
console.log(result)
console.log(r2)
console.log(r3)

const c = {
  ...(a && {
    b: 5
  })
}

const d = {
  ...(f && {
    b: 5
  })
}

console.log("c is ")
console.dir(c)
console.log("d is ")
console.dir(d)

const evieSwPerson = Object.assign({}, swPerson, {
  firstName: "Evie"
});

const jerrySwPerson = {
  ...swPerson, //take the values of baseperson and add them here
  firstName: "Jerry"
}

const evieFullPerson = {
  ...swPerson,
  ...o,
  firstName: "Evie"
}

let numb1 = 1;
let numb2 = 2;

const ocond = Object.assign(swPerson, numb1 > numb2 && {
    b: 1
  },
  numb2 > numb1 && {
    c: 2
  },
  true && {
    d: 3
  });

console.dir(ocond);
console.dir(evieSwPerson)
console.dir(jerrySwPerson)
console.dir(evieFullPerson);