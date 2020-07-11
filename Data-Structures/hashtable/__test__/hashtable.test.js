'use strict';

const Hashmap = require('../hashtable');
let myHash = new Hashmap(1024);
myHash.set('Cat', 'Paghera');
myHash.set('Owner' ,'Israa');

// console.log(typeof('quick-Sort',QuickSort([8,4,23,42,16,15])));
describe('hashtable get()/contain()', ()=> {

  it('get(key) in the hash map', ()=> {
    expect(myHash.get('Owner')).toEqual([ { Owner: 'Israa' } ]);
  });

  it('get(key) not in the hash map', ()=> {
    expect(myHash.get('not in the map')).toEqual('Kill your self the key not found');
  });
    
  it('contains(key) in the hash map', ()=> {
    expect(myHash.contains('Owner')).toEqual(true);
  });
  it('contains(key) not in the hash map', ()=> {
    expect(myHash.contains('not in the map')).toEqual(false);
  });
  

});

