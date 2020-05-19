'use strict';

const test = require('../array-shift.js');


describe('Input Module', ()=> {
    
  it('Test for even length array', ()=> {
    expect(test.insertShiftArray([2,4,6,8],5)).toEqual([2,4,5,6,8]);
  });
  it('Test for odd length array', ()=> {
    expect(test.insertShiftArray([4,8,15,23,42],16)).toEqual([4,8,15,16,23,42]);
  });
  it('Test for letters array', ()=> {
    expect(test.insertShiftArray(['a','Z','Q','b','D'],17)).toEqual(['a','Z','Q',17,'b','D']);
  });

});
