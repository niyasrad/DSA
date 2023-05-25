const PriorityQueue = require('./PriorityQueue')

describe('Priority Queue', () => {

    describe('Follows Guidelines, Definition', () => {

        const samplePQueue = new PriorityQueue()

        test('PQueue has an enqueue method', () => {
            expect(samplePQueue.enqueue).toBeInstanceOf(Function)
        })

        test('PQueue has a dequeue method', () => {
            expect(samplePQueue.dequeue).toBeInstanceOf(Function)
        })

        test('PQueue has a size method', () => {
            expect(samplePQueue.size).toBeInstanceOf(Function)
        })

        test('PQueue has a front method', () => {
            expect(samplePQueue.front).toBeInstanceOf(Function)
        })

        test('PQueue has an isEmpty method', () => {
            expect(samplePQueue.isEmpty).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const samplePQueue = new PriorityQueue()

        test('The PQueue must track the size correctly when elements are queued and dequeued', () => {
            samplePQueue.enqueue([2,3])
            samplePQueue.enqueue([2,4])
            samplePQueue.dequeue()
            expect(samplePQueue.size()).toBe(1)
        })

        test('The front method should return the item in the front of the queue as items are enqueued and dequeued', () => {
            samplePQueue.enqueue([2,2])
            samplePQueue.dequeue()
            expect(samplePQueue.front()).toBe(2)
        })

        test('The isEmpty method returns true when queue is empty', () => {
            samplePQueue.dequeue()
            expect(samplePQueue.isEmpty()).toBe(true)
        })

        test('The PQueue returns items with higher priority before items with a low priority and returns items in first-in-first-out order otherwise', () => {
            samplePQueue.enqueue([1,2])
            samplePQueue.enqueue([2,2])
            samplePQueue.enqueue([1,1])
            samplePQueue.dequeue()
            samplePQueue.dequeue()
            expect(samplePQueue.front()).toBe(2)
        })

    })

})