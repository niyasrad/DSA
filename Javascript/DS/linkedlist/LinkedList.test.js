const { LinkedList, Node } = require('./LinkedList')

describe('Linked List', () => {

    describe('Follows Guidelines, Definition', () => {

        const sampleLL = new LinkedList()

        test('LinkedList must have a add method', () => {
            expect(sampleLL.add).toBeInstanceOf(Function)
        })

        test('LinkedList must have a remove method', () => {
            expect(sampleLL.remove).toBeInstanceOf(Function)
        })

        test('LinkedList must have an isEmpty method', () => {
            expect(sampleLL.isEmpty).toBeInstanceOf(Function)
        })

        test('LinkedList must have an indexOf method', () => {
            expect(sampleLL.indexOf).toBeInstanceOf(Function)
        })

        test('LinkedList must have an elementAt method', () => {
            expect(sampleLL.elementAt).toBeInstanceOf(Function)
        })

        test('LinkedList must have a removeAt method', () => {
            expect(sampleLL.removeAt).toBeInstanceOf(Function)
        })

        test('LinkedList must have a addAt method', () => {
            expect(sampleLL.addAt).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const sampleLL = new LinkedList()
        const sampleLLOne = new LinkedList()

        test('LinkedList should assign head to the first Node', () => {
            sampleLL.add('1')
            expect(sampleLL.head.element).toBe('1')
        })

        test('The previous Node in LL should have reference to the newest Node', () => {
            sampleLL.add('2')
            expect(sampleLL.head.next.element).toBe('2')
        })

        test('LinkedList size must return the length of the LinkedList', () => {
            expect(sampleLL.size()).toBe(2)
        })

        test('LinkedList remove should reassign the head to second when first is removed', () => {
            sampleLL.remove('1')
            expect(sampleLL.head.element).toBe('2')
        })

        test('LinkedList remove should decrease the length by one', () => {
            expect(sampleLL.size()).toBe(1)
        })

        test('LinkedList should reassign the reference of previous next to removed next', () => {
            sampleLL.add('3')
            sampleLL.add('4')
            sampleLL.remove('3')
            expect(sampleLL.head.next.element).toBe('4')
        })

        test('Remove must not change the LL if the element does not exist', () => {
            sampleLL.remove('5')
            expect(sampleLL.size()).toBe(2)
        })

        test('isEmpty method should return false when elements are there', () => {
            expect(sampleLL.isEmpty()).toBe(false)
        })

        test('isEmpty method should return true when elements are not there', () => {
            expect(sampleLLOne.isEmpty()).toBe(true)
        })

        test('indexOf method must return the index if found', () => {
            expect(sampleLL.indexOf('2')).toBe(0)
        })

        test('indexOf method must return -1 if not found', () => {
            expect(sampleLL.indexOf('10')).toBe(-1)
        })

        test('elementAt method must take an index and return the element', () => {
            expect(sampleLL.elementAt(1)).toBe('4')
        })

        test('elementAt method must return undefined if not found', () => {
            expect(sampleLL.elementAt(5)).toBe(undefined)
        })

        test('removeAt method should reduce the length by one', () => {
            sampleLL.removeAt(0)
            expect(sampleLL.size()).toBe(1)
        })

        test('removeAt method must return null if the index is impossible', () => {
            expect(sampleLL.removeAt(-1)).toBe(null)
        })

        test('removeAt method must return the element which it removes', () => {
            expect(sampleLL.removeAt(0)).toBe('4')
        })

        test('addAt method should return false if a node was unable to be added', () => {
            expect(sampleLL.addAt(-4)).toBe(false)
        })

        test('addAt method should reassign head when the index is 0', () => {
            sampleLL.addAt(0, '1')
            expect(sampleLL.head.element).toBe('1')
        })

        test('addAt method should increase the length of the LL by one', () => {
            sampleLL.addAt(1, '6')
            expect(sampleLL.size()).toBe(2)
        })

    })

})