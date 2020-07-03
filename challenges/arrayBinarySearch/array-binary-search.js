'use strict';

const opj={};
module.exports = opj;

// eslint-disable-next-line no-unused-vars
let arrr=[1,2,3,4,5,6,7,8,9,10,11,12];
// eslint-disable-next-line no-unused-vars
let target=12;
opj.binary_search = function (sortedArray,searchKey){
  if(searchKey<sortedArray[0] || searchKey>sortedArray[sortedArray.length-1]) { return -1;}
  let start = 0;
  let arrayLength = sortedArray.length-1;
  while (start < arrayLength || start==arrayLength){
    let mid = Math.floor((start + arrayLength) / 2);
    if (sortedArray[mid] < searchKey){ 
      start = mid + 1;
    }else if (sortedArray[mid] > searchKey){
      arrayLength = mid - 1;
    } else{
      return mid;}
  }};
// opj.binary_search(arrr,target);
module.exports = opj;