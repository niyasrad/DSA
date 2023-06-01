const BinarySearchTree = require('./BinarySearchTree')

describe("Binary Search Tree", () => {

    describe("Follows Definition, guidelines", () => {

        let sampleBST = new BinarySearchTree()

        test('BST must have an add method', () => {
            expect(sampleBST.add).toBeInstanceOf(Function)
        })

        test('BST must have a findMin method', () => {
            expect(sampleBST.findMin).toBeInstanceOf(Function)
        })

        test('BST must have a findMax method', () => {
            expect(sampleBST.findMax).toBeInstanceOf(Function)
        })

    })

    describe("Functionality - Add Method", () => {

        const sampleBST = new BinarySearchTree()
        sampleBST.add(2)
        sampleBST.add(1)
        sampleBST.add(3)

        test('The add method should add according to BST rules', () => {
            expect(sampleBST.root.left.value).toBe(1)
        })

        test('Trying to add an existing element must return a null', () => {
            expect(sampleBST.add(1)).toBe(null)
        })

    })

    describe("Functionality - findMin, findMax Method", () => {

        const sampleBST = new BinarySearchTree()
        sampleBST.add(5)
        sampleBST.add(1)
        sampleBST.add(2)
        sampleBST.add(3)
        sampleBST.add(4)

        test('The findMin method should return the minimum value in the binary search tree', () => {
            expect(sampleBST.findMin()).toBe(1)
        })

        test('The findMax method should return the maximum value in the binary search tree', () => {
            expect(sampleBST.findMax()).toBe(5)
        })

    })
    
})