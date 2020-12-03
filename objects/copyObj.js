const eviePerson = {
  name: "Evie",
  job: "Software",
  age: 49
}

const evieCopyOne = {
  ...eviePerson
};
const evieCopyTwo = Object.assign({}, eviePerson);

console.log("Three people are :");
showPeople();

eviePerson.age = 20;
evieCopyTwo.age = 30;
console.log("after changing evie1 n 2  age:");
showPeople();

function showPeople() {
  console.dir(evieCopyOne)
  console.dir(evieCopyTwo);
  console.dir(eviePerson)
}

//replace existing object with new name
const jerryPerson = Object.assign(eviePerson, {
  name: "jerry"
}, )

console.dir(jerryPerson)