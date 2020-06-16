'use strict';

const BFT = require('../breadth-first');
const Node = require('../node');
describe('breadth-first-Tree', ()=> {
    it('test', ()=> {
        let arr;
        let expected = [1, 2, 3, 4];
        let instant = new BFT();
        let test = new Node(1,new Node(2, null, null), new Node(3, new Node(4, null, null), null));
        arr = instant.bft(test)
        expect(arr).toEqual(expected);
    });

});