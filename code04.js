'use strict';
//mock interview
var testArr = [[1,2,3],
               [1,6,3],
               [1,3,3]];
let newArray = [];  
function matrix(arr){  
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    newArray.push(sum);    
  }return newArray;
}
matrix(testArr);
console.log(newArray);


let n=7;
let x = Math.floor((Math.pow(1.618034,n)-Math.pow((1-1.618034),n))/(Math.sqrt(5)));
console.log(x);