const Map = require('./Map')

describe('Map', () => {

    describe('Follows Definiton, Guidelines', () => {

        const sampleMap = new Map()

        test('Map must have an add method', () => {
            expect(sampleMap.add).toBeInstanceOf(Function)
        })

        test('Map must have a remove method', () => {
            expect(sampleMap.remove).toBeInstanceOf(Function)
        })

        test('Map must have a get method', () => {
            expect(sampleMap.get).toBeInstanceOf(Function)
        })

        test('Map must have a has method', () => {
            expect(sampleMap.has).toBeInstanceOf(Function)
        })

        test('Map must have a values method', () => {
            expect(sampleMap.values).toBeInstanceOf(Function)
        })

        test('Map must have a clear method', () => {
            expect(sampleMap.clear).toBeInstanceOf(Function)
        })

        test('Map must have a size method', () => {
            expect(sampleMap.size).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        const sampleMap = new Map()

        test('Map add should add items to the collection, get should return the value', () => {
            sampleMap.add('a', 1)
            expect(sampleMap.get('a')).toBe(1)
        })

        test('Map has method should return true or false based on the existance', () => {
            expect(sampleMap.has('a')).toBe(true)
        })

        test('Map values method should return all the values in a string array', () => {
            sampleMap.add('b', 2)
            expect(sampleMap.values()).toEqual([1, 2])
        })

        test('Map size method must bring out the size of the collection', () => {
            expect(sampleMap.size()).toBe(2)
        })

        test('Map clear method must clear out the entire collection', () => {
            sampleMap.clear()
            expect(sampleMap.values()).toEqual([])
        })

    })
})