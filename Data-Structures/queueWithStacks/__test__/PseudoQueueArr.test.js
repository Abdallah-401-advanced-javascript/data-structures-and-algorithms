'use strict';

let Queue = require('../PseudoQueueArr');

describe('Queue', ()=> {
  it('implements FIFO functionality', ()=> {
        
    let q = new Queue();
    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);
    q.enQueue(4);

    expect(q.deQueue()).toEqual(1);
    expect(q.deQueue()).toEqual(2);
    expect(q.deQueue()).toEqual(3);
    expect(q.deQueue()).toEqual(4);
  });
});