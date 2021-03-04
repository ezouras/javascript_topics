let state = {
  count: 0
}

function addToStringClassForReact() {
  let classes = "classKindOne classKindTwo";
  classes += state.count === 0 ? "warningClass" : "justFineClass";
  return classes;
}

function addToStringClassForNG() {
  let classes = {
    backgroundClass: true,
    fontSizeClass: true
  };
  return state.count === 0 ? {
    ...classes,
    fontWarningColor: true
  } : {
    ...classes,
    fontRegColor: true
  }
  return classes

}

console.log("string classes for react: ", addToStringClassForReact());
console.log("object for NG:", addToStringClassForNG());