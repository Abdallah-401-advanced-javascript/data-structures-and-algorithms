'use strict';
let obj ={};
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    // return values of nodes in linkedlist : values in array []
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) { 
    // I will has my key to get the index of where to store my data.
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {
    // add to our hashmap
    // 1st get me the hashed of my key
    // if the key does not exist in my map(new Array) then create it and add the new linkedlist to it, and add to the linkedlist
    // if this resulting key existed in the map then add to it.
        
    // {'stuff': 'laptop'}
    // hash stuff
    // 1456 : LinkedList has previosly added values so just add Headers
    // 1456 : create LinkedList and then add {'stuff': 'laptop'} to it

    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    // pass entry to the map 
    // using object, you can use anything
    let entry = {[key]: value};
    // add to our linkedlist
    this.map[hash].add(entry);
  }

  // To find one key values
  get(key) {
    // find a key in the hashmap and return its value
    let hash = this.hash(key); 
    return this.map[hash]?this.map[hash].values():'Kill your self the key not found';
  }
  
  // To check if the key exist in the hash map array
  contains(key) {
    let hash = this.hash(key); 
    return  this.map[hash]?true:false;
    // find a key in the hashmap and return its value
  }

  
}

// function repeatedWord (str){
//   let arrStr = str.split(',').join('').toLowerCase().split(' ');
//   let map = new Hashmap(1024);
//   // console.log(arrStr);
//   for(let i=0 ; i< arrStr.length;i++){
//     if (map.get(arrStr[i])=='Kill your self the key not found'){
//       map.set(arrStr[i], 'any value');
//     }else{
//       return  arrStr[i];
//     }
//   }
//   return 'All unique';
// }

function combine(myHash1,myHash2){
  let arr=[];
  myHash1.map.forEach( (data, i )=> {
    let key = Object.keys(data.values()[0])[0];
    data && arr.push([key]);
    data && data.values().forEach( (ele,i)=>{
      arr[arr.length - 1].push(ele[key]);
    });
  });
  arr.forEach((data, i )=> {
    if (myHash2 && myHash2.get(data[0]) != 'Kill your self the key not found'){
      myHash2.get(data[0]).forEach( (ele,i)=>{
        data.push(ele[data[0]]);
      });
    }else{
      data.push(null);
    }
  });
  return arr;
}

// Tests
let myHash = new Hashmap(1024);
myHash.set('Cat', 'Paghera');
myHash.set('Owner' ,'Israa');
// To view all stored data
myHash.map.forEach( (data, i )=> {
  console.log(i, data && data.values());
});
  
console.log(myHash.get('Owner'));
console.log(myHash.get('not in the map'));
console.log(myHash.contains('Owner'));
console.log(myHash.contains('not in the map'));

// Tests:
// let str1 = 'Once upon a time, there was a brave princess who...';
// let str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
// let str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..';
// let str4 = 'Donald the duck';
// console.log(repeatedWord(str1));
// console.log(repeatedWord(str2),'str2');
// console.log(repeatedWord(str3));
// console.log(repeatedWord(str4));

let myHash1 = new Hashmap(1024);
myHash1.set('Cat', 'Paghera');
myHash1.set('C', 'Paghera');
myHash1.set('Owner' ,'Israa');
let myHash2 = new Hashmap(1024);
myHash2.set('Cat', 'Hello');
myHash2.set('Owner' ,'hi');
myHash2.set('Owner' ,'hi');
console.log('myHash1',myHash1);
console.log('myHash2',myHash2);
console.log('wqew',myHash2.map[957]);
console.log('hello',combine(myHash1,myHash2));

// obj.repeatedWord=repeatedWord;
obj.combine=combine;
obj.Hashmap=Hashmap;
console.log(obj);
module.exports=obj;