'use strict';

const Node = require('./node');

class LinkedList {
    
  constructor() {
    this.head = null;
  }
  // TARGET: 1 -> 2 -> 3-> null
  // null
  // 1 ->null
  // when the next is null (tail) add the new value .
  // 1->2 ->null
  // 1->2->3->null
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
    while(currentNode) {
      str+=`{${ currentNode.value }} ->`;
      currentNode = currentNode.next;
    }
    str+=' NULL';
    return str;
  }
}
let play = new LinkedList();
play.append(1);
play.append(2);
play.insert(3);
console.log(play.includes(3));
console.log(play.includes(4));
console.log(play.includes(1));
console.log(play.toString());
// console.log(play)
module.exports = LinkedList;