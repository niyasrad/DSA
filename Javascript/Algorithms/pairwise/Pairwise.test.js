const pairwise = require('./Pairwise')


describe('Pairwise', () => {

    test('Pairwise - 1', () => {
        expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11)
    })
    
    test('Pairwise - 2', () => {
        expect(pairwise([1, 3, 2, 4], 4)).toBe(1)
    })
    
    test('Pairwise - 3', () => {
        expect(pairwise([1, 1, 1], 2)).toBe(1)
    })
    
    test('Pairwise - 4', () => {
        expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10)
    })
    
    test('Pairwise - 5', () => {
        expect(pairwise([], 100)).toBe(0)
    })

})

