'use strict';

const test = require('../arrayBinarySearch/array-binary-search.js');


describe('Input Module', ()=> {
    
  it('Test for even length array', ()=> {
    expect(test.binary_search([2,4,6,8],4)).toEqual(1);
  });
  it('Test for odd length array', ()=> {
    expect(test.binary_search([4,8,15,23,42],15)).toEqual(2);
  });
  it('Number from out of the array', ()=> {
    expect(test.binary_search([4,8,15,23,42],49)).toEqual(-1);
  });
});
