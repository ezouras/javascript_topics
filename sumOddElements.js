numbers = [1,2,3,4,5,6,7]

function oddball_sum(numbers){
  let oddElements=[];
  numbers.filter(nextNum=>{
    if(nextNum%2){
      oddElements.push(nextNum)
    }
  })
  return oddElements;
}

function oddball_sum_reduce(numbArr){
  return numbArr.reduce((acc,nV)=>{
    if(nV%2){
      acc.push(nV);
    }

    /*THIS DOESNT WORK! why?
    "push" adds an element to the existing
    array BUT, returns the length of the array
    so on the first iteration, 1, which is odd
    so the statement is true and "push" returns
    a "1" so your settin gacc to "1"
    acc = nV%2? acc.push(nV):acc;
    */
    //acc = nV%2? acc.push(nV):acc;
    return acc;
  },[])
}
console.log(oddball_sum(numbers))
console.log(oddball_sum_reduce(numbers))
