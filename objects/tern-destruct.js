let state = {
  count: 5
};

console.log("stat is ", formatCountBetter())

function formatCount() {
  return state.count === 0 ? 'Zero' : state.count;
}

function formatCountBetter() {
  //pick the count property of the Object
  const {
    count
  } = state;
  return count === 0 ? "Zero" : count;
}