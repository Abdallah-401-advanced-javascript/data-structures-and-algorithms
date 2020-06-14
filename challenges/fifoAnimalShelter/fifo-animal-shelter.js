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

  enqueue(animal) {
    let node = new Node(animal);
    if (this.isEmpty()){
      this.front=this.back=node;
    }else{
      this.back.next=node;
      this.back=node;
    }
    return this.back.value;
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
    return node.value;
  }

  dequeueAnimal(pref) {
    if (pref=='dog'||pref=='cat') {  
      if(pref==='cat'){
        if(!this.isEmpty()){
          if(this.front.value=='cat'){
            this.front=this.front.next;
            return 'Delete a cat'; 
          }if(!this.front){
            this.back=null;
          }
          else{
            let front = this.front;
            while(front.value!=='cat'){
              front=front.next;
              if(front== undefined){
                return;
              }
            }
            this.front.next=front.next;
            if(!this.front){
              this.back=null;
            }}
        }
        return 'Delete a cat';
      }
      if(pref==='dog'){
        if(!this.isEmpty()){
          if(this.front.value=='dog'){
            this.front=this.front.next;
            return 'Delete a dog'; 
          }if(!this.front){
            this.back=null;
          }
          else{
            let front = this.front;
            while(front.value!=='dog'){
              front=front.next;
              if(front== undefined){
                return;
              }
            }
            this.front.next=front.next;
            if(!this.front){
              this.back=null;
            }}
        }
        return 'Delete a dog';
      }
    }else{
      return 'Null';
    }
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
queue.enqueue('dog');
console.log(queue.peekAll());
console.log(queue.peek());
queue.enqueue('cat');
console.log(queue.peekAll());
console.log(queue.peek());
queue.enqueue('dog');
console.log(queue.peekAll());
console.log(queue.peek());
console.log('isEmpty:',queue.isEmpty());

// dequeue() test:
console.log(queue.dequeueAnimal('sss'));
console.log(queue.peekAll());
console.log(queue.peek());
module.exports = Queue;