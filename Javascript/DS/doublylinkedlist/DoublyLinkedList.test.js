const DoublyLinkedList = require('./DoublyLinkedList')

describe('Doubly Linked List', () => {

    describe('Follows Definition, Guidelines', () => {
        
        const sampleDLL = new DoublyLinkedList()

        test('DLL must have an add method', () => {
            expect(sampleDLL.add).toBeInstanceOf(Function)
        })

        test('DLL must have a remove method', () => {
            expect(sampleDLL.remove).toBeInstanceOf(Function)
        })
        
        test('DLL must have a reverse method', () => {
            expect(sampleDLL.reverse).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const sampleDLL = new DoublyLinkedList()

        test('Removing from an empty list must return a null', () => {
            expect(sampleDLL.remove(2)).toBe(null)
        })

        test('The add method should add items to the list', () => {
            sampleDLL.add(1)
            expect(sampleDLL.head.data).toBe(1)
        })

        test('Each node should keep track of the previous node', () => {
            sampleDLL.add(2)
            expect(sampleDLL.tail.prev.data).toBe(1)
        })

        test('The first item should be removable', () => {
            sampleDLL.remove(1)
            expect(sampleDLL.head.data).toBe(2)
        })

        test('The last item should be removable', () => {
            sampleDLL.remove(2)
            expect(sampleDLL.head).toBe(null)
        })
    
    })

    describe('Extras - Reversing', () => {

        test('Reversing an empty list must return null', () => {
            const sampleDLL = new DoublyLinkedList()
            expect(sampleDLL.reverse()).toBe(null)
        })

        describe('Reverse manual testing', () => {
            const sampleDLL = new DoublyLinkedList()

            sampleDLL.add(1)
            sampleDLL.add(2)
            sampleDLL.add(3)
            sampleDLL.reverse()

            test('The reverse method should reverse the list #1', () => {
                expect(sampleDLL.head.data).toBe(3)
            })

            test('The reverse method should reverse the list #2', () => {
                expect(sampleDLL.tail.data).toBe(1)
            })

            test('The reverse method should reverse the list #3', () => {
                expect(sampleDLL.length).toBe(3)
            })

        })
        
    })

})