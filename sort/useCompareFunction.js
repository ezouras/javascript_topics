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

var items = [{
    name: 'Edward',
    value: 21
  },
  {
    name: 'Sharpe',
    value: 37
  },
  {
    name: 'And',
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
    name: 'Zeros',
    value: 37
  }
];

//this DOES NOT work. why? it's NOT returning a value
//so it keeps it the same
items.sort((a, b) => {
  console.log(a.value)
  a.value - b.value
})
console.log(items)

items.sort((a, b) =>
  a.value - b.value
)
console.log(items)