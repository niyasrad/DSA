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

        test('Set must have a union method', () => {
            expect(sampleSet.union).toBeInstanceOf(Function)
        })

        test('Set must have an intersection method', () => {
            expect(sampleSet.intersection).toBeInstanceOf(Function)
        })

        test('Set must have a difference method', () => {
            expect(sampleSet.difference).toBeInstanceOf(Function)
        })

        test('Set must have a isSubsetOf method', () => {
            expect(sampleSet.isSubsetOf).toBeInstanceOf(Function)
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

    describe('Extras', () => {

        const sampleSetOne = new Set()
        const sampleSetTwo = new Set()
        const sampleSetThree = new Set()

        sampleSetOne.add('a')
        sampleSetOne.add('b')
        sampleSetOne.add('c')

        sampleSetTwo.add('c')
        sampleSetTwo.add('d')

        sampleSetThree.add('c')
        sampleSetThree.add('d')
        sampleSetThree.add('e')

        test('Set union must return the containing values and new values together', () => {
            expect(sampleSetOne.union(sampleSetTwo).values()).toEqual(['a','b','c','d'])
        })

        test('Set intersection must return the common values', () => {
            expect(sampleSetOne.intersection(sampleSetTwo).values()).toEqual(['c'])
        })

        test('Set difference must return the proper collection', () => {
            expect(sampleSetOne.difference(sampleSetTwo).values()).toEqual(['a', 'b'])
        })

        test('Subset testing #1', () => {
            expect(sampleSetTwo.isSubsetOf(sampleSetThree)).toBe(true)
        })

        test('Subset testing #2', () => {
            expect(new Set().isSubsetOf(new Set())).toBe(true)
        })

        test('Subset testing #3', () => {
            expect(sampleSetOne.isSubsetOf(sampleSetTwo)).toBe(false)
        })

    })

})