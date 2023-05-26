const Set = require('./Set')

describe('Set', () => {

    describe('Follows Definition, Guidelines', () => {

        const sampleSet = new Set()

        test('Set must have an add method', () => {
            expect(sampleSet.add).toBeInstanceOf(Function)
        })

        test('Set must have a remove method', () => {
            expect(sampleSet.remove).toBeInstanceOf(Function)
        })

        test('Set must have a size method', () => {
            expect(sampleSet.size).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const sampleSet = new Set()

        test('Set add must not add duplicate values', () => {
            sampleSet.add(1)
            sampleSet.add(1)
            expect(sampleSet.size()).toBe(1)
        })

        test('Set must return true when a value has been added', () => {
            expect(sampleSet.add(2)).toBe(true)
        })

        test('Set must return false when a duplicate value has been added', () => {
            expect(sampleSet.add(2)).toBe(false)
        })

        test('Set must remove values that are present in the list', () => {
            expect(sampleSet.remove(3)).toBe(false)
        })

        test('Set must remove the given item from the list', () => {
            sampleSet.remove(2)
            expect(sampleSet.has(2)).toBe(false)
        })

        test('Set must return the size of the collection', () => {
            expect(sampleSet.size()).toBe(1)
        })

    })

})