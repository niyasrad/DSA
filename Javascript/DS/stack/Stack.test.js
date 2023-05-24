const Stack = require('./Stack')

describe('Stack', () => {

    describe('Follows Guidelines, Definition', () => {

        const sampleStack = new Stack()

        test('Stack has a push method', () => {
            expect(sampleStack.push).toBeInstanceOf(Function)
        })

        test('Stack has a pop method', () => {
            expect(sampleStack.pop).toBeInstanceOf(Function)
        })

        test('Stack has a peek method', () => {
            expect(sampleStack.peek).toBeInstanceOf(Function)
        })

        test('Stack has an isEmpty method', () => {
            expect(sampleStack.isEmpty).toBeInstanceOf(Function)
        })
        
        test('Stack has a clear method', () => {
            expect(sampleStack.clear).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const sampleStack = new Stack()

        test('The peek method should return the top element of the stack', () => {
            sampleStack.push(1)
            expect(sampleStack.peek()).toBe(1)
        })  

        test('The pop method should remove and return the top of the stack', () => {
            expect(sampleStack.pop()).toBe(1)
        })

        test('The isEmpty method should return true if a stack does not contain any elements', () => {
            expect(sampleStack.isEmpty()).toBe(true)
        })

        test('The clear method should remove all elements from the stack', () => {
            sampleStack.push(1)
            sampleStack.push(2)
            sampleStack.push(3)
            sampleStack.clear()
            expect(sampleStack.isEmpty()).toBe(true)
        })

    })
})