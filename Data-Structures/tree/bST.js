'use strict';

// Time O(n) n is the number of nodes
// Space O(h) h is the height of the tree

// Binary Search Tree 
// O(log(n))
// O(h)
let Node = require('./node');
// BinarySearchTree add, contains, findMaximumValue
class BinarySearchTree {
  constructor (){
    this.root = null;
  }
  
  // add
  add(value){
    let node = new Node(value);
    if (!this.root)
    {
      this.root = node;
    }
    else{
      let insertNode = this.root;
      while(insertNode){
        if (insertNode.value > value){
          if (!insertNode.left){
            insertNode.left = node;
            return;
          }
          else{
            insertNode = insertNode.left;
          }
        }
        else{
          if (!insertNode.right){
            insertNode.right = node;
            return;
          }
          else{
            insertNode = insertNode.right;
          }
        }
      }
    }
  }
  
  // contains
  contains (value){
    let searchNode = this.root;
    while(searchNode){
      if (searchNode.value === value){
        return true;
      }
      else if(searchNode.value < value){
        searchNode = searchNode.right;
      }else{
        searchNode = searchNode.left;
      }
    }
    return false;
  }
  
  // findMaximumValue
  findMaximumValue(){
    if (!this.root)return;
    let searchNode = this.root;
    while(searchNode.right){
      searchNode = searchNode.right;
    }
    return searchNode.value;
  }
}
let BinarysearchTree= new BinarySearchTree();
console.log(BinarysearchTree.add(2));
console.log(BinarysearchTree.add(1));
console.log(BinarysearchTree.add(3));
console.log(BinarysearchTree.add(4));
console.log(BinarysearchTree.root);
console.log(BinarysearchTree.contains(3));
console.log(BinarysearchTree.findMaximumValue());

module.exports = BinarySearchTree;