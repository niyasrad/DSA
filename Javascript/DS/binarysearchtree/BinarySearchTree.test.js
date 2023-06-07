const { BinarySearchTree, Node, isBinarySearchTree } = require('./BinarySearchTree')

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

        test('BST must have a isPresent method', () => {
            expect(sampleBST.isPresent).toBeInstanceOf(Function)
        })

        test('BST must have a findMinHeight method', () => {
            expect(sampleBST.findMinHeight).toBeInstanceOf(Function)
        })

        test('BST must have a findMaxHeight method', () => {
            expect(sampleBST.findMaxHeight).toBeInstanceOf(Function)
        })

        test('BST must have a isBalanced method', () => {
            expect(sampleBST.isBalanced).toBeInstanceOf(Function)
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

    describe('Functionality - isPresent method', () => {

        const sampleBST = new BinarySearchTree()
        sampleBST.add(5)
        sampleBST.add(1)
        sampleBST.add(2)
        sampleBST.add(3)
        sampleBST.add(4)

        test('The isPresent method should correctly check for the presence or absence of elements added to the tree #1', () => {
            expect(sampleBST.isPresent(4)).toBe(true)
        })

        test('The isPresent method should correctly check for the presence or absence of elements added to the tree #2', () => {
            expect(sampleBST.isPresent(9)).toBe(false)
        })

        test('isPresent should handle cases where the tree is empty', () => {
            expect(new BinarySearchTree().isPresent(9)).toBe(false)
        })

    })
    
    describe('Functionality - isBinarySearchTree method', () => {

        test('Your BST should return true when checked with isBinarySearchTree()', () => {
            const sampleBST = new BinarySearchTree()
            sampleBST.add(5)
            sampleBST.add(3)
            sampleBST.add(7)
            sampleBST.add(4)
            expect(isBinarySearchTree(sampleBST)).toBe(true)
        })

        test('Your BST should return false when checked with a tree that is not a binary search tree', () => {
            const wrongBST = new BinarySearchTree()
            wrongBST.add(5)
            wrongBST.root.left = new Node(6)
            wrongBST.root.right = new Node(1)
            expect(isBinarySearchTree(wrongBST)).toBe(false)
        })

    })

    describe('Functionality - findHeight method', () => {

        test('The findMinHeight method should return the minimum height of the tree', () => {
            const sampleBST = new BinarySearchTree()
            sampleBST.add(1)
            sampleBST.add(2)
            sampleBST.add(0)
            expect(sampleBST.findMinHeight()).toBe(1)
        })

        test('The findMaxHeight method should return the maximum height of the tree', () => {
            const sampleBST = new BinarySearchTree()
            sampleBST.add(1)
            sampleBST.add(2)
            sampleBST.add(3)
            sampleBST.add(4)
            expect(sampleBST.findMaxHeight()).toBe(3)
        })

        test('The isBalanced method should return false if the tree is an unbalanced binary search tree', () => {
            const sampleBST = new BinarySearchTree()
            sampleBST.add(1)
            sampleBST.add(2)
            sampleBST.add(0)
            sampleBST.add(3)
            sampleBST.add(4)
            expect(sampleBST.isBalanced()).toBe(false)
        })

        test('The isBalanced method should return true if the tree is a balanced binary search tree', () => {
            const sampleBST = new BinarySearchTree()
            sampleBST.add(1)
            sampleBST.add(2)
            sampleBST.add(0)
            expect(sampleBST.isBalanced()).toBe(true)
        })

    })
    
})