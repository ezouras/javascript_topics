/*
arr.sort([compareFunction])
compareFunction(a, b)
you either want "a" or "b" to go first in order
if less than 0, return a (ie' -1)
if 0 = leave as is
if > 0 (ie' 1) return b
returning number goes to a lower index

*/

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
//4-2 > 1 return b , the lower number
console.log(numbers)

var items = [
  {
    name: 'Zeros',
    value: 37
  },
  {
    name: 'Edward',
    value: 21
  },
  {
    name: 'Sharpe',
    value: 37
  },
  {
    name: 'Allison',
    value: 45
  },
  {
    name: 'The',
    value: -12
  },
  {
    name: 'Magnetic',
    value: 13
  },
  {
    name: 'Anne',
    value: 37
  },
];

/*
//sort asecnding by value
items.sort((a, b) => {
   return a.value - b.value
   //  4 2 = 2 will return 2 this is ascending
})
*/


//ascending but if the same then alphabetical by name
/*items.sort((a,b)=>{
  if(a.value < b.value)
    return -1;
  else if(a.value > b.value)
    return 1;
  else{
    if(a.name < b.name )
      return -1
    else return 1;
  }
})
*/

//same as above but allwas put allison first and 

console.log(items)
