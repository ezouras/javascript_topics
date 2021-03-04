/* add one to the num then add to the total */
arr = [1,2,3,4,5]
//2 3 4 5 6 =20


/* this does not work.. why?
BECAUSE if you don't add a starting value ot reduce,
it assumes the SECOND value.  so
in below, acc is first value of the array: 1
and the "nV" is '2'
*/
reduceWrongWay = arr.reduce((acc,nV)=>{
  console.log('nv is ',nV)
   newValue = nV+1;
   console.log('new value is ',newValue);
   acc = acc + newValue;
   console.log('acc is ',acc);
   return acc;
})

reduceRightWay = arr.reduce((acc,nV)=>{
  return acc + (nV +1);
},0)
console.log(reduceWrongWay);
console.log("reduce right way",reduceRightWay)

//without reduce
let total = 0;
for(let i=0;i<arr.length;i++){
  total = total + (arr[i] +1);
}
console.log(total);
