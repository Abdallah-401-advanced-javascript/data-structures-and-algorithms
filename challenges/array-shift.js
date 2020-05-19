'use strict';

const opj={};
let arr = [4,8,15,23,123,321];
let val = 16;
let newArray = [];
opj.insertShiftArray = function (array ,value ) {
    for (let i = 0; i < Math.ceil(array.length/2); i++) {
        newArray[i]= array[i];
    }
    newArray[Math.ceil(array.length/2)]=value;
    for (let i = Math.ceil(array.length/2); i < array.length; i++) {
      newArray[i+1]= array[i];
  }
  return newArray;
}


module.exports = opj;


