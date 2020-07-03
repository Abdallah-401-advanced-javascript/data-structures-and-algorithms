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
}

let play = new LinkedList();
play.append(1);
play.append(2);
play.append(5);
play.append(5);
// play.insert(3);
console.log(play.includes(3));
console.log(play.includes(4));
console.log(play.includes(1));
play.insertAfter(2,4);
// play.insertBefore(1,4);
console.log(play.toString());
console.log(play.arr);
console.log(play.checkFromEnd(2));
// console.log(play);
module.exports = LinkedList;