const bubbleSort = require('./BubbleSort')

describe('Bubble Sort' , () => {

    const arrayToSort = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
    const sortedArray = [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]
    
    describe('Follows Definition, GuideLines', () => {

        // Checking the instance, to be a function
        test('Function Defined' , () => {
            expect(bubbleSort).toBeInstanceOf(Function)
        })

        // Mocking the sorting function for this usecase, checking if it was called.
        test('Does not use .sort()', () => {
            const sortSpy = jest.spyOn(Array.prototype, 'sort')
            bubbleSort(arrayToSort)
            expect(sortSpy).not.toHaveBeenCalled()
        })

    })
    
    describe('Functionality', () => {
        
        // To check for equal Arrays, Objects, we'll have to use toEqual() instead of toBe()
        test('Returns Sorted Array', () => {
            expect(bubbleSort(arrayToSort)).toEqual(sortedArray)
        })

    })

})