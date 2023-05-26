const CircularQueue = require('./CircularQueue')

describe('Circular Queue', () => {

    describe('Follows Definition, Guidelines', () => {

        const sampleCQueue = new CircularQueue()

        test('CQueue has an enqueue method', () => {
            expect(sampleCQueue.enqueue).toBeInstanceOf(Function)
        })

        test('CQueue has a dequeue method', () => {
            expect(sampleCQueue.dequeue).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const sampleCQueue = new CircularQueue(2)

        test('You should not enqueue items past the read pointer', () => {
            sampleCQueue.enqueue(1)
            sampleCQueue.enqueue(2)
            expect(sampleCQueue.enqueue(3)).toBe(null)
        })

        test('After an item is dequeue, position in the queue should be null', () => {
            sampleCQueue.dequeue()
            expect(sampleCQueue.print()).toEqual([null, 2])
        })

        test('Trying to dequeue past the write pointer should return null and does not advance the write pointer', () => {
            sampleCQueue.dequeue()
            expect(sampleCQueue.dequeue()).toBe(null)
        })

    })

})