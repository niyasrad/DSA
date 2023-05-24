const Queue = require('./Queue')

describe('Queue', () => {

    describe('Follows Guidelines, Definition', () => {
        
        const sampleQueue = new Queue()

        test('Queue has an enqueue method', () => {
            expect(sampleQueue.enqueue).toBeInstanceOf(Function)
        })

        test('Queue has a dequeue method', () => {
            expect(sampleQueue.dequeue).toBeInstanceOf(Function)
        })

        test('Queue has a front method', () => {
            expect(sampleQueue.front).toBeInstanceOf(Function)
        })
        
        test('Queue has an isEmpty method', () => {
            expect(sampleQueue.isEmpty).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const sampleQueue = new Queue()

        test('The dequeue method should remove and return the front element of the queue', () => {
            sampleQueue.enqueue(1)
            sampleQueue.enqueue(2)
            expect(sampleQueue.dequeue()).toBe(1)
        })

        test('The front method returns the value of the front element of the queue', () => {
            expect(sampleQueue.front()).toBe(2)    
        })

        test('The size method should return the length of the queue', () => {
            expect(sampleQueue.size()).toBe(1)
        })

        test('The isEmpty method returns false if there are elements in the queue', () => {
            expect(sampleQueue.isEmpty()).toBe(false)
        })

    })

})