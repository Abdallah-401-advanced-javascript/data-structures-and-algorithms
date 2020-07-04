 Mergesort([100, 20, 3]);

 function Mergesort(arr){
  let n =arr.length;
  // 1=> n=3 
  // 2=> n=1
  // 3=> n=2 
  // 4=> n=1       
  // 5=> n=1
`
  if(n > 1){
    let mid =  Math.floor(n / 2);
  // 1=> mid=1  
  // 2=> mid=1
  // 3=> mid=1   
  // 4=> mid=1    
  // 5=> mid=1      
    let left = arr.slice(0 , mid);
  // 1=> left= [100] 
  // 2=> left= [100]
  // 3=> left= [20]    
  // 4=> left= [20]  
  // 5=> left= [20]      
    let right = arr.slice(mid);
  // 1=> right= [20, 3] 
  // 2=> right= [20, 3]
  // 3=> right= [3]
  // 4=> right= [3]   
  // 5=> right= [3]   

    Mergesort(left);
    // sort the right side
    Mergesort(right);
    // merge the sorted left and right sides together
    Merge(left, right, arr);
  }
  return arr;
}
//////////////start from phase 5 /////////////
function Merge(left, right, arr){
  // 5=> right= [3] // 5=> left= [20]   // 5=> arr= [20, 3]
  let i = 0;
  let j = 0;
  let k = 0;
  // 5=> i= 0 // 5=> j= 0   // 5=> k= 0

  while( i < left.length && j < right.length){
    // 5=> i= 0 // 5=> j= 0   // 5=> k= 0
    if(left[i] <= right[j]){         
      arr[k] = left[i];
       i = i + 1;
     }
    else{
      arr[k] = right[j];
    // 5=> arr[0]= 3    
      j = j + 1;
    // 5=> j= 1          
    }      
    k = k + 1;
    // 5=> k= 1   
  }
  if(i == left.length){
    for(let l = j ; l < right.length ; l++){
      arr[k] =  right[l];
      k++;
    }
  }
  else
  {
    for(let l = i ; l < left.length ; l++){
      arr[k] =  left[l];
      k++;
    }
  }
}
