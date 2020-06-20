'use strict';

const BinarySearchTree = require('../bST');
let BinarysearchTree= new BinarySearchTree();
describe('Add to BinarySearchTree', ()=> {
    it('add()', ()=> {
        expect(BinarysearchTree.root).toBeNull()
        BinarysearchTree.add(2);
        expect(BinarysearchTree.root.value).toBe(2)
        BinarysearchTree.add(1);
        expect(BinarysearchTree.root.value).toBe(2)
        BinarysearchTree.add(3);
        expect(BinarysearchTree.root.value).toBe(2)
        BinarysearchTree.add(4);
        expect(BinarysearchTree.root.value).toBe(2)
    });
});

describe('BinarySearchTree contain', ()=> {
    it('contains()', ()=> {
        expect(BinarysearchTree.contains(3)).toBeTruthy();
        expect(BinarysearchTree.contains(5)).not.toBeTruthy();
    });
});

describe('Max value in BinarySearchTree', ()=> {
    it('findMaximumValue()', ()=> {
        expect(BinarysearchTree.findMaximumValue()).toBe(4);
    });
});