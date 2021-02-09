function performOperationOld(operation) {
  if (operation === "oper1") {
    console.log("you have selected oper1 - beginning operation...")
  } else if (operation === "oper2") {
    console.log("oper2 selected - beginning oper2 operation")
  } else {
    console.log("unrecognized operation - ABORT!")
  }
}

//performOperationOld("oper1");
//performOperationOld("oper2");
//performOperationOld("whatevs");

function performOperationNew(operation) {
  let operations = {
    oper1: () => { console.log("you have selected oper1 - beginning operation...") },
    oper2: () => { console.log("oper2 selected - beginning oper2 operation") },
    noOper: () => { console.log("could not find operation - ABORT!") }
  }
  operations[operation] ? operations[operation]() : operations["noOper"]();
}

performOperationNew("oper1");
performOperationNew("oper2");
performOperationNew("whatevs");