const insertionSort = require('./InsertionSort')

const arrayToSort = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
const sortedArray = [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]

describe('Insertion Sort', () => {

    describe('Follows Guidelines, Definition', () => {
        
        test('Function Defined', () => {
            expect(insertionSort).toBeInstanceOf(Function)
        })

        test('Does not use .sort()', () => {
            const sortSpy = jest.spyOn(Array.prototype, 'sort')
            insertionSort([])
            expect(sortSpy).not.toHaveBeenCalled()
        })

    })

    describe('Functionality', () => {

        test('Sorts the array', () => {
            expect(insertionSort(arrayToSort)).toEqual(sortedArray)
        })
        
    })

})