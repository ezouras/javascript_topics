let answer={
  total:0,
  isDivisibleByThree:false
};
//print all numbers between low and high
//print whether the number is divisibule by three
function lowHigh(lowNum,highNum){
    for(let i=lowNum;i<=highNum;i++){
      console.log("number is ",i);
      let isNotDivisible = i%3;
      if(!(i%3)){
        console.log("this number is divisible by 3")
      }
    }
}

lowHigh(1,10);

console.log(10%2); //0 , no remainder
console.log(10%3); //1 3 goes into 10 3x's (9) with one left
console.log(Math.floor(10/2));//gives you whole number 5
console.log(Math.floor(10/3));//3 whole times
