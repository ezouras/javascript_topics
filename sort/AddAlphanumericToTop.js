//move aValue to the top of the array
let items = [{
    bValue: 2
  },
  {
    aValue: 1
  },
  {
    cValue: 3
  },
  {
    aValue: 9
  },
  {
    cValue: 3
  },
  {
    cValue: 3
  },
  {
    aValue: 1
  },
  {
    aValue: 9
  },
  {
    aValue: 1
  },
  {
    aValue: 9
  },
  {
    dValue: 4
  },
]
console.log("original: ", items)
items.sort((a, b) => {
  returnNumb = Object.keys(a) == "aValue" ? -1 : 1;
  return returnNumb
})
console.log("after sort: ", items)