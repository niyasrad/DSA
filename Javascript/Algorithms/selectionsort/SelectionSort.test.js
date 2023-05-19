const selectionSort = require('./SelectionSort')

describe('Selection Sort', () => {

    const arrayToSort = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
    const sortedArray = [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]

    describe('Following Definition, Guidelines', () => {

        test('Function Defined', () => {
            expect(selectionSort).toBeInstanceOf(Function)
        })


        test('Does not use .sort()', () => {
            const sortSpy = jest.spyOn(Array.prototype, 'sort')
            selectionSort([...arrayToSort])
            expect(sortSpy).not.toHaveBeenCalled()
        })

    })

    describe('Functionality', () => {

        test('Returns a sorted array', () => {
            expect(selectionSort([...arrayToSort])).toEqual(sortedArray)
        })

    })
})