'use strict';

const obj = require('../leftJoin');

let myHash1 = new obj.Hashmap(1024);
myHash1.set('Cat', 'Paghera');
myHash1.set('C', 'Paghera');
myHash1.set('Owner' ,'Israa');

let myHash2 = new obj.Hashmap(1024);
myHash2.set('Cat', 'Hello');
myHash2.set('Owner' ,'hi');
myHash2.set('Owner' ,'hi');

describe('hashtable get()/contain()', ()=> {

  it('get(key) in the hash map', ()=> {
    expect(obj.combine(myHash1,myHash2)).toEqual([
      [ 'C', 'Paghera', null ],
      [ 'Cat', 'Paghera', 'Hello' ],
      [ 'Owner', 'Israa', 'hi', 'hi' ],
    ]);
  });
});

