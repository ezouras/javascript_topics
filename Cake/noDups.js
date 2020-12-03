let dupArr = [1, 1, 2, 3, 3, 6, 7, 8];
let noDups1 = Array.from(new Set(dupArr));
console.log(noDups1);
let noDups2 = [...new Set(dupArr)];
console.log(noDups2)

let getUniqueArray = (dupsArray) => {
  return dupsArray.reduce((acc, nV) => {
    return acc.includes(nV) ? acc : [...acc, nV];
  }, [])
}

let noDups3 = getUniqueArray(dupArr);

//how many times does each number appar in the dup array