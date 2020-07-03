'use strict';

const Node=require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(value) {
    let node = new Node(value);
    console.log('enqueue',node.value);
    if (this.isEmpty()){
      this.front=this.back=node;
    }else{
      this.back.next=node;
      this.back=node;
    }
  }

  dequeue() {
    let node = this.front;
    console.log('dequeue',node.value);
    if(!this.isEmpty()){
      this.front=this.front.next;
    }
    if(!this.front){
      this.back=null;
    }
    // this.peekAll();
    return node.value;
  }

  peek() {
    if(this.isEmpty()){
      return 'exception';
    }
    return this.back.value;
  }

  peekAll() {
    if(this.isEmpty()){
      return 'exception';
    }else{     
      var arr = [];
      let front = this.front; 
      while(front){
        arr.push(front.value);
        front=front.next;
      }
      return arr.join(',');
    }

  }
}

let queue = new Queue();
// enqueue test:
console.log(queue.peekAll());
console.log(queue.peek());
console.log('isEmpty:',queue.isEmpty());
queue.enqueue(1);
console.log(queue.peekAll());
console.log(queue.peek());
queue.enqueue(2);
console.log(queue.peekAll());
console.log(queue.peek());
queue.enqueue(3);
console.log(queue.peekAll());
console.log(queue.peek());
console.log('isEmpty:',queue.isEmpty());

// dequeue() test:
queue.dequeue();
console.log(queue.peekAll());
console.log(queue.peek());
queue.dequeue();
console.log(queue.peekAll());
console.log(queue.peek());
queue.dequeue();
console.log(queue.peekAll());
console.log(queue.peek());
console.log('isEmpty:',queue.isEmpty());
module.exports = Queue;