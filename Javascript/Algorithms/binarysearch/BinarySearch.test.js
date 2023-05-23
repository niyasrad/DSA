const binarySearch = require('./BinarySearch')
const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70]

describe('Binary Search', () => {

    describe('Follows Definition, Guidelines..', () => {

        test('Function Defined', () => {
            expect(binarySearch).toBeInstanceOf(Function)
        })

    })

    describe('Functionality', () => {

        test('Searches array #1', () => {
            expect(binarySearch([...testArray], 0)).toEqual([13, 5, 2, 0])
        })

        test('Searches array #2', () => {
            expect(binarySearch([...testArray], 1)).toEqual([13, 5, 2, 0, 1])
        })

        test('Searches array #3', () => {
            expect(binarySearch(testArray, 2)).toEqual([13, 5, 2])
        })

        test('Searches array #4', () => {
            expect(binarySearch(testArray, 6)).toBe("Value Not Found")
        })

        test('Searches array #5', () => {
            expect(binarySearch(testArray, 11)).toEqual([13, 5, 10, 11])
        })

        test('Searches array #6', () => {
            expect(binarySearch(testArray, 13)).toEqual([13])
        })

        test('Searches array #7', () => {
            expect(binarySearch(testArray, 70)).toEqual([13, 19, 22, 49, 70])
        })

    })
})