'use strict';

function QuickSort(arr, left, right){
  // 1=> arr = (6) [8, 4, 23, 42, 16, 23], left = 0, right = 5
  // 2=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0, right = 1
  // 3=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0, right = -1
  // 4=> arr = (6) [8, 8, 23, 42, 16, 23], left = 1, right = 1
  // 5=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0, right = 1

  if (left < right){
    // Partition the array by setting the position of the pivot value 
    let position = Partition(arr, left, right);
    // 1=> arr = (6) [8, 4, 23, 42, 16, 23], left = 0, right = 5
    // 2=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0, right = 1
    // 3=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0, right = -1
    // 4=> arr = (6) [8, 8, 23, 42, 16, 23], left = 1, right = 1
    // 5=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0, right = 1

    // Sort the left
    QuickSort(arr, left, position - 1);
    // 3=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0
    // 4=> arr = (6) [8, 8, 23, 42, 16, 23], left = 1
    // 5=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0
    // Sort the right
    QuickSort(arr, position + 1, right);
    // 3=> arr = (6) [8, 8, 23, 42, 16, 23], left = 0
    // 4=> arr = (6) [8, 8, 23, 42, 16, 23], left = 1
    // 5=> arr = (6) [8, 8, 23, 42, 16, 23], right = 1


  }
  return arr;
}
function Partition(arr, left, right){
  // set a pivot value as a point of reference
  let pivot = arr[right];
  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1;
  for (let i = left ; i < right ; i++){
    if (arr[i] <= pivot){
      low++;
      Swap(arr, i, low);
    }
  }

  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right. 
  Swap(arr, right, low + 1);
  // return the pivot index point
  return low + 1;
}
function Swap(arr, i, low){
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  }

//test
console.log(QuickSort([8,4,23,42,16,15],0,5));