'use strict';

const obj = require('../repeatedWord');
// import {Hashmap} from '../repeatedWord';
// import {repeatedWord} from '../repeatedWord';
let myHash = new obj.Hashmap(1024);
myHash.set('Cat', 'Paghera');
myHash.set('Owner' ,'Israa');

let str1 = 'Once upon a time, there was a brave princess who...';
let str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
let str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..';
let str4 = 'Donald the duck';
// console.log(obj.repeatedWord(str1));
// console.log(obj.repeatedWord(str2),'str2');
// console.log(obj.repeatedWord(str3));
// console.log(obj.repeatedWord(str4));

// console.log(typeof('quick-Sort',QuickSort([8,4,23,42,16,15])));
describe('hashtable get()/contain()', ()=> {

  it('get(key) in the hash map', ()=> {
    expect(obj.repeatedWord(str1)).toEqual('a');
  });

  it('get(key) not in the hash map', ()=> {
    expect(obj.repeatedWord(str2)).toEqual('it');
  });
    
  it('contains(key) in the hash map', ()=> {
    expect(obj.repeatedWord(str3)).toEqual('summer');
  });
  it('contains(key) not in the hash map', ()=> {
    expect(obj.repeatedWord(str4)).toEqual('All unique');
  });
  

});

