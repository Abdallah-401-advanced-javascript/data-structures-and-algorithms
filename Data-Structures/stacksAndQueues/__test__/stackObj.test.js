'use strict';

const Stack = require('../stackObj');

describe('stack', ()=> {

  it('creates an instance', ()=> {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });

});

describe('peek()', ()=> {
  it('return \'exception\' on empty stack', ()=> {
    let stack = new Stack();
    expect(stack.peek()).toBe('exception');
  });

  it('returns the last item', ()=> {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('pop() points to then ew head of stack', ()=> {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.peek()).toEqual(2);
  });

});

describe('pop()', ()=> {
  it('returns and removes the top item', ()=> {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    // console.log('first',stack.pop());
    expect(stack.pop()).toEqual(2);
    // console.log('sec',stack.pop());
    expect(stack.pop()).toEqual(1);
    // console.log('thired',stack.pop());
    expect(stack.pop()).toEqual('exception');
    console.log('stack.peek() : ',stack.peek());
    expect(stack.peek()).toBe('exception');
  });
});


describe('push()', ()=> {
  it('adds a value to the top of the stack', ()=> {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });
});


describe('isEmpty()', ()=> {
  it('Return True/false whether a value exists or not', ()=> {
    let stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
    stack.push(2);
    expect(stack.isEmpty()).toBeFalsy();
    stack.pop();
    expect(stack.isEmpty()).toBeFalsy();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });  
});

describe('peekOnAll()', ()=> {
  it('Return True/false whether a value exists or not', ()=> {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peekOnAll()).toBe(1);
  });  
});
