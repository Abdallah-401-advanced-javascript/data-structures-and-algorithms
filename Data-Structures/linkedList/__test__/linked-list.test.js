'use strict';

const LinkedList = require('../linked-list');

describe('Linked List', ()=> {
  it('constructor()', ()=> {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });
    
  it('append()', ()=> {
    let list = new LinkedList();
    let initialValue = 'test First';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);
    console.log(list);

    let secondValue = 'test second'; 
    list.append(secondValue);
    expect(list.head.value).toEqual(initialValue);
    console.log(list);

    let next = list.head.next;
    console.log('next: ',next , ' secondValue: ',secondValue);
    expect(next.value).toEqual(secondValue);
  });
  it('insert()', ()=> {
    let list = new LinkedList();
    let insertedFirstValue = 3;        
    list.insert(insertedFirstValue);
    let insertedSecValue = 3;        
    list.insert(insertedSecValue);
    expect(list.head.next.value).toEqual(insertedFirstValue);

    expect(list.head.value).toEqual(insertedSecValue);

  });
  it('includes()', ()=> {
    let list = new LinkedList();
    expect(list.includes(5)).toEqual(false);

    let initialValue = 1;
    list.append(initialValue);
    expect(list.includes(initialValue)).toEqual(true);
  });
  it('toString()', ()=> {
    let list = new LinkedList();
    expect(list.toString()).toEqual(' NULL');

    let initialValue = 1;
    list.append(initialValue);
    expect(list.toString()).toEqual(`{${initialValue}} -> NULL`);

  });
    
});