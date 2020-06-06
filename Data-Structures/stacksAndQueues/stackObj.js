'use strict';
const Node=require('./node');

class Stack {

  constructor() {
    this.storage = new Array(); //[];
    this.top = null;
  }

  push(value) {
    console.log('method: PUSH');
    let node =new Node(value,this.top);
    this.top = node;
    // this.peek()
  }


  pop() {
    console.log('Method: POP');
    let value = 'exception';
    if(this.top){
      value=this.top.value;
      this.top=this.top.next;
    }
    // else{return this.top.value;}
    // this.peek()
    return value;
  }

  peekOnAll(){
    let top=this.top;
    let value;
    if (top){
      while (top) {
        console.log(top.value);
        value=top.value;
        top=top.next;
      }}else {console.log('exception');
      value='exception';}
    console.log('------');
    return value;
  }

  peek() {
    if (this.top){
      console.log(this.top.value);
      return this.top.value;
    }else {
      console.log('exception');
      return'exception';}
  }

  isEmpty() {
    if (this.top){
      console.log(false);
      return false;
    }else{
      console.log(true);
      return true;
    }
  }

}

// Testing console ===>
// let stack = new Stack();
// // PUSH:
// stack.isEmpty();
// stack.push(1);
// stack.isEmpty();
// // stack.peekOnAll()
// stack.push(2);
// stack.peek();
// stack.isEmpty();

// stack.push(3);
// // stack.peekOnAll()
// stack.peek();
// stack.isEmpty();

// // POP:
// stack.pop();
// stack.peek();
// stack.isEmpty();

// stack.pop();
// stack.peek();
// stack.isEmpty();

// stack.pop();
// stack.peek();
// stack.isEmpty();




module.exports = Stack;



