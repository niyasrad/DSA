const quickSort = require('./QuickSort')

const arrayToSort = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
const sortedArray = [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]

describe('Quick Sort', () => {

    describe('Follows Guidelines and Definition', () => {

        test('Function Defined', () => {
            expect(quickSort).toBeInstanceOf(Function)
        })

        test('Does not use .sort()', () => {
            const sortSpy = jest.spyOn(Array.prototype, 'sort')
            quickSort([])
            expect(sortSpy).not.toHaveBeenCalled()
        })

    })

    describe('Functionality', () => {

        test('Sorts a given array', () => {
            expect(quickSort(arrayToSort)).toEqual(sortedArray)
        })
    })
})