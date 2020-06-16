'use strict';
// let Node = require('./node');
let arr=[];
class BFT {

  constructor(root) {
    this.root = root;
  }

  bft(tree) {
    if (tree == null) {
      return;
    }
  
    let queue = [tree];
  
    while (queue.length > 0) {
      let current = queue.shift();
      let value = current.value;
      arr.push(value);
         
  
      if (current.left == null && current.right == null) {
        continue;
      }
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
    } return arr;
  }

}

// let instant = new BFT();
// let test = new Node(1,new Node(2, null, null), new Node(3, new Node(4, null, null), null));

// instant.bft(test);
// console.log(instant.bft(test));

module.exports = BFT;