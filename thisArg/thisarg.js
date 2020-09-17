console.log("I work")
const evie = {
  name: "Evie",
  age: "49",
  favoriteColor: "navy",
  occupation: "sw developer"
}

button = document.getElementsByTagName("button")[0];
console.log(button);
button.addEventListener("click", function(event) {
  console.log("this in event function is: ", this);
  Object.keys(evie).forEach(function(key) {
    console.log("Evie property is ", evie[key])
    console.log("this in FOR EACH is ", this)
  }, evie)
})