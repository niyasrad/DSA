const BinarySearchTree = require('./BinarySearchTree')

describe("Binary Search Tree", () => {

    describe("Follows Definition, guidelines", () => {

        let sampleBST = new BinarySearchTree()

        test('BST must have an add method', () => {
            expect(sampleBST.add).toBeInstanceOf(Function)
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
    
})