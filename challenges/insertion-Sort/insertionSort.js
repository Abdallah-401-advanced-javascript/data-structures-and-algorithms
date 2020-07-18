'use strict';
let obj={};
obj.insertionSort=function(arr){
 
  for (let i = 1 ; i <= arr.length ; i++){
    var j = i - 1;
    var temp = arr[i];
     
    while (j >= 0 && temp < arr[j]){
      arr[j + 1] = arr[j];
      arr[j]= temp;
      j = j - 1;
    }}
  return arr ;
};
console.log(obj.insertionSort([8,4,23,42,16,15]));
console.log(obj.insertionSort([20,18,12,8,5,-2]));   
console.log(obj.insertionSort([5,12,7,5,5,7]));
console.log(obj.insertionSort([2,3,5,7,13,11]));          
// module.exports.insertionSort=insertionSort;
module.exports=(obj);