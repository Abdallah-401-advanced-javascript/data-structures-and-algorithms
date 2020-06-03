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

  it('insertAfter()', ()=> {
    let list = new LinkedList();
    let initialValue = 2;
    let secValue = 4;

    list.insertAfter(initialValue,secValue);
    expect(list.head.value).toEqual(secValue);
    console.log(list);

  });

  it('insertBefore()', ()=> {
    let list = new LinkedList();
    let initialValue = 1;
    let secValue = 4;
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertBefore(initialValue,secValue);
    expect(list.head.value).toEqual(secValue);
    console.log(list);
  });

  it('checkFromEnd()', ()=> {
    let list = new LinkedList();
    expect(list.checkFromEnd()).toEqual('Exception');

    list.append(1);
    list.append(2);
    list.append(3);
    let testValue1 = 0;
    let testValue2 = -1;
    let testValue3 = 10;
    expect(list.checkFromEnd(testValue3)).toEqual('Exception');
    expect(list.checkFromEnd(testValue2)).toEqual('Exception');
    expect(list.checkFromEnd(testValue1)).toEqual(3);
  }); 
  
  it('mergeLists() case 1', ()=> {
    let first = new LinkedList();
    let second = new LinkedList();
    first.append(1);
    first.append(2);
    first.append(3);
    first.append(4);

    second.append(5);
    second.append(6);
    second.append(7);
    second.append(8);
    expect(first.mergeLists(first,second)).toEqual('head -> 1 -> 5 -> 2 -> 6 -> 3 -> 7 -> 4 -> 8 -> X');
  });

  it('mergeLists() case 2', ()=> {
    let first = new LinkedList();
    let second = new LinkedList();
    first.append(1);
    first.append(2);
    first.append(3);

    second.append(5);
    second.append(6);
    second.append(7);
    second.append(8);
    expect(first.mergeLists(first,second)).toEqual('head -> 1 -> 5 -> 2 -> 6 -> 3 -> 7 -> X');
  });

  it('mergeLists() case 3', ()=> {
    let first = new LinkedList();
    let second = new LinkedList();
    first.append(1);
    first.append(2);
    first.append(3);
    first.append(4);
    first.append(9); 

    second.append(5);
    second.append(6);
    second.append(7);
    second.append(8);
    expect(first.mergeLists(first,second)).toEqual('head -> 1 -> 5 -> 2 -> 6 -> 3 -> 7 -> 4 -> 8 -> 9 -> X');
  });
});