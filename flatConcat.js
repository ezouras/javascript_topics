arr1 = [[1,5],[4,7,2],[7,2,1]];
total = 0;
let flat = arr1.flat();
let forEach = flat.forEach(numb=>total+=numb)
console.log("total is ",total)
let reducedFlat = flat.reduce((acc,nV)=>{
    return acc + nV;
});
let concat = [];
arr1.forEach(arrV=>{
  concat=concat.concat(arrV)
})

console.log("concat is ",concat)

let newConcatArr = concat.reduce((acc,nV)=>{
    return acc + nV;
});
console.log(newConcatArr)
console.log(flat)
console.log(reducedFlat)
console.log(arr1)
