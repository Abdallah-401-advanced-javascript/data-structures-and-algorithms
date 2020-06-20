'use strict';

// Time O(n) n is the number of nodes
// Space O(h) h is the height of the tree

// Binary Search Tree 
// O(log(n))
// O(h)

class BinaryTree {

  constructor(root) {
    this.root = root;
  }

  // Root - Left - Right
  preOrder() {
    let results = [];

    let _walk = (node)=> {
      // 1. read TreeNode
      results.push(node.value);
      // 2. go Left
      if(node.left) _walk(node.left);
      // 3. go Right
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  // Left - Root - Right
  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };

    _walk(this.root);

    return results;
  }

  // Left - Right - Root
  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }
}
   
const Node = require('./node');
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;
let tree= new BinaryTree(one);
// tree.inOrder(1);
// tree.preOrder(2);
// tree.preOrder(3);
// tree.preOrder(4);
// tree.preOrder(5);
// tree.preOrder(6);
console.log(tree);


module.exports = BinaryTree;