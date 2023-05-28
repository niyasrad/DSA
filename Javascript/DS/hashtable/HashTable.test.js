const HashTable = require('./HashTable')

describe('Hash Table', () => {

    describe('Follows Guidelines, Definition', () => {

        const sampleHTable = new HashTable()

        test('HTable must have an add method', () => {
            expect(sampleHTable.add).toBeInstanceOf(Function)
        })

        test('HTable must have a lookup method', () => {
            expect(sampleHTable.lookup).toBeInstanceOf(Function)
        })

        test('HTable must have a remove method', () => {
            expect(sampleHTable.remove).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {
        
        const sampleHTable = new HashTable()

        test('HTable add method adds key value pairs, and lookup returns the correct value', () => {
            sampleHTable.add('a', 1)
            expect(sampleHTable.lookup('a')).toBe(1)
        })
        
        test('HTable remove method should take key as input, and remove the associated key-value pair', () => {
            sampleHTable.remove('a')
            expect(sampleHTable.lookup('a')).toBe(null)
        })

    })

})