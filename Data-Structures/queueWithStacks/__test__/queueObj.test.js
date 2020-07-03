'use strict';

let Queue = require('../queueObj');

// describe('enqueue', ()=> {
//   it('Add node to the back(end) of the queue', ()=> {
        
//     let queue = new Queue();
//     queue.enqueue(1);
//     queue.enqueue(2);
//     queue.enqueue(3);
//     queue.enqueue(4);

//     expect(queue.peek()).toEqual(4);

//   });
// });
describe('dequeue', ()=> {
  it('remove node from the front(start) of the queue', ()=> {
          
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
  
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
  });
});
describe('peekAll', ()=> {
  it('This will give print all of the queue', ()=> {
          
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
  
    expect(queue.peekAll()).toEqual('1,2,3,4');
  });
});
// describe('isEmpty', ()=> {
//   it('This will check if the queue isEmpty()', ()=> {
          
//     let queue = new Queue();
//     expect(queue.isEmpty()).toBeTruthy();
//     queue.enqueue(1);
//     expect(queue.isEmpty()).toBeFalsy();
//     queue.enqueue(2);
//     expect(queue.isEmpty()).toBeFalsy();
//     queue.enqueue(3);
//     expect(queue.isEmpty()).toBeFalsy();
//     queue.enqueue(4);
//     expect(queue.isEmpty()).toBeFalsy();
//   });
});
