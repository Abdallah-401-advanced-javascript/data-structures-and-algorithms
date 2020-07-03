'use strict';

let testo = require('../multi-bracket-validation');

describe('test all cases', ()=> {
  it('Case 1', ()=> {
    expect(testo.strCheck('{}')).toEqual(true);
  });
  it('Case 2', ()=> {
    expect(testo.strCheck('{}(){}')).toEqual(true);
  });
  it('Case 3', ()=> {
    expect(testo.strCheck('()[[Extra Characters]]')).toEqual(true);
  });
  it('Case 4', ()=> {
    expect(testo.strCheck('{}{Code}[Fellows](())')).toEqual(true);
  });
  it('Case 5', ()=> {
    expect(testo.strCheck('[({}]')).toEqual(false);
  });
  it('Case 6', ()=> {
    expect(testo.strCheck('(](')).toEqual(false);
  });
  it('Case 7', ()=> {
    expect(testo.strCheck('{(})')).toEqual(false);
  });
  it('Case 8', ()=> {
    expect(testo.strCheck('(){}[[]]')).toEqual(true);
  });
  it('Case 9', ()=> {
    expect(testo.strCheck('{')).toEqual(false);
  });
  it('Case 10', ()=> {
    expect(testo.strCheck(')')).toEqual(false);
  });
  it('Case 11', ()=> {
    expect(testo.strCheck('[}')).toEqual(false);
  });
});