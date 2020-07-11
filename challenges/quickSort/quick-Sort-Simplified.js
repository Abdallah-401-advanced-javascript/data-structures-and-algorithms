'use strict';
function qsort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  const left = [], right = [];
  rest.forEach( el => el < pivot ? left.push(el) : right.push(el) );
  return qsort(left).concat(pivot).concat(qsort(right));
}



console.log(qsort([8,4,23,42,16,15]));
console.log(qsort([20,18,12,8,5,-2]));
console.log(qsort([5,12,7,5,5,7]));
console.log(qsort([2,3,5,7,13,11]));

