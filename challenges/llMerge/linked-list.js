'use strict';

const Node = require('./node');
class LinkedList {
    
  constructor() {
    this.head = null;
    this.arr=[];
  }

  append(value) {
    let node = new Node(value);
    // if there is no head .
    if (!this.head) {
      this.head = node;
      return this;
    }   
    // we have other stuff , need to add to end
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  
  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }   
    let oldNode = this.head;
    this.head=node;
    this.head.next = oldNode;
  }   


  includes(value) {
    let currentNode=this.head;
    while(currentNode) {
      if (currentNode.value===value){
        return true;
      }
      currentNode = currentNode.next;
    }return false;
  }

  
  toString() {
    let str='';
    let currentNode = this.head;
    this.arr=[];
    while(currentNode) {
      this.arr.push(currentNode.value);
      str+=`{${ currentNode.value }} ->`;
      currentNode = currentNode.next;
    }
    str+=' NULL';
    return str;
  }


  insertAfter(value, newVal){
    let node = new Node(newVal);
    // if there is no head .
    if (!this.head) {
      this.head = node;
      return this;
    }   
    let currentNode=this.head;
    while(currentNode.value!==value){
      currentNode=currentNode.next;
    }
    let oldNext = currentNode.next;
    currentNode.next=node;
    currentNode.next.next=oldNext;
  }


  insertBefore(value, newVal){
    let node = new Node(newVal);
    // if there is no head .
    if (!this.head) {
      this.head = node;
      return this;
    }   
    let currentNode=this.head;
    if (currentNode.value!==value) {
      while(currentNode.next.value!==value){
        currentNode=currentNode.next;
      }
      let oldNext = currentNode.next;
      currentNode.next=node;
      currentNode.next.next=oldNext;
    }else{this.insert(newVal);}
  }

  
  checkFromEnd(value){
    this.toString();
    return this.arr[this.arr.length-value-1] ||'Exception';
  }


  mergeLists(first,second) {
    let firstCurrentNode = first.head;
    let secondCurrentNode = second.head;
    let str = 'head';
    while(firstCurrentNode  && secondCurrentNode){
      str = str +' -> '+ firstCurrentNode.value + ' -> ' + secondCurrentNode.value ;
      let firstNext = firstCurrentNode.next;
      let SecoundNext = secondCurrentNode.next;
      secondCurrentNode.next = firstNext;
      firstCurrentNode.next = secondCurrentNode;
      firstCurrentNode = firstNext;
      secondCurrentNode = SecoundNext;
    }
    str+=(firstCurrentNode)?` -> ${firstCurrentNode.value} -> X` :' -> X';
    return str; 
  }
}


// First linked-list=========>
let first = new LinkedList();
first.append(1);
first.append(2);
first.append(3);
// first.append(4);
// first.append(5);

// first.insert(3);
console.log(first.includes(3));
console.log(first.includes(4));
console.log(first.includes(1));
first.insertAfter(2,4);
first.insertBefore(1,4);
console.log(first.toString());

// console.log(first.arr);
console.log(first.checkFromEnd(2));

// second linked-list=========>
let second = new LinkedList();
second.append(5);
second.append(6);
second.append(7);
second.append(8);
console.log(second.toString());
console.log(first.mergeLists(first,second));
module.exports = LinkedList;