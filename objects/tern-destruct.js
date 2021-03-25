let state = {
  count: 0
};

console.log("stat is ", formatCountBetter())

function formatCount() {
  return state.count === 0 ? 'Zero' : state.count;
}

function formatCountBetter() {
  //pick the count property of the Object
  let {
    count
  } = state;
  count = "Zero";
  //count =count === 0? "Zero" : count;
}

formatCountBetter();
console.log(state)
