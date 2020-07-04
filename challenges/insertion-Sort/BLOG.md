 'use strict'
 
 function insertionSort(arr){
  
     for (let i = 1 ; i <= arr.length ; i++){
      var j = i - 1
       //  1=>  j = 0
       //  2=>  j = 1
       //  3=>  j = 2  
       //  4=>  j = 3        

      var temp = arr[i]
       //  1=> temp 4
       //  2=> temp 23
       //  3=> temp 42 
       //  4=> temp 16             
      while (j >= 0 && temp < arr[j]){
        arr[j + 1] = arr[j]
       //  1=>   [8,8,23,42,16,15]
       //  2=>   [4,8,23,42,16,15]
       //  3=>   [4,8,23,42,16,15]      
       //  4=>   [4,8,23,42,42,15] 
       //  5=>   [4,8,23,23,42,15]   
        arr[j]= temp
       //  1=>   [4,8,23,42,16,15]
       //  2=>   [4,8,23,42,16,15]
       //  3=>   [4,8,23,42,16,15]       
       //  4=>   [4,8,23,16,42,15]       
       //  5=>   [4,8,16,23,42,15]      
        j = j - 1
       //  1=> j=-1
       //  2=> j=-1
       //  3=> j=-1
       //  4=> j= 2
       //  5=> j= 1       
 }}
      return arr ;
      }
      console.log(insertionSort([8,4,23,42,16,15]))
      console.log(insertionSort([20,18,12,8,5,-2]))   
      console.log(insertionSort([5,12,7,5,5,7]))
      console.log(insertionSort([2,3,5,7,13,11]))    