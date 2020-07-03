'use strict';
// const Stack = require('./stackArr');
// const stack = new Stack();
// console.log(stack);

class Stack {

  constructor() {
    this.storage = new Array(); //[];
    this.top = null;
  }

  push(item) {
    // update the top, add to the storage
    this.storage.unshift(item);
    this.top = item;
  }

  pop() {
    let item = this.storage.shift();
    this.top = this.storage[0];
    return item;
  }

  peek() {
    return this.top;
  }
}


class Queue {
  constructor() {
    this.stack = new Stack();
    this.storage1 = new Array();
    this.storage2 = new Array();
  }

  enQueue(x) {
    while(this.storage1.length!=0){
      this.storage2.push(this.storage1[this.storage1.length-1]);
      this.storage1.pop();}
    this.storage1.push(x);
    while (this.storage2.length!=0) {
      this.storage1.push(this.storage2[this.storage2.length-1]);
      this.storage2.pop();
    }
     
  }

  deQueue() {
    if(this.storage1.length==0){
      console.log('Q is Empty');}
    let x =this.storage1[this.storage1.length-1];
    this.storage1.pop();
    return x;
  }

  peek() {
    return this.storage[0];
  }
}
let queue = new Queue();

queue.enQueue(1);  
queue.enQueue(2);  
queue.enQueue(3);  

console.log(queue.deQueue()); 
console.log(queue.deQueue()); 
console.log(queue.deQueue()); 

module.exports = Queue;