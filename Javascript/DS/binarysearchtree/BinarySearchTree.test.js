const { BinarySearchTree, Node, isBinarySearchTree } = require('./BinarySearchTree')

describe("Binary Search Tree", () => {

    describe("Follows Definition, guidelines", () => {

        let sampleBST = new BinarySearchTree()

        test('BST must have an add method', () => {
            expect(sampleBST.add).toBeInstanceOf(Function)
        })

        test('BST must have an inorder method', () => {
            expect(sampleBST.inorder).toBeInstanceOf(Function)
        })

        test('BST must have a preorder method', () => {
            expect(sampleBST.preorder).toBeInstanceOf(Function)
        })

        test('BST must have a postorder method', () => {
            expect(sampleBST.postorder).toBeInstanceOf(Function)
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

        test('BST must have a levelOrder method', () => {
            expect(sampleBST.levelOrder).toBeInstanceOf(Function)
        })

        test('BST must have a reverseLevelOrder method', () => {
            expect(sampleBST.reverseLevelOrder).toBeInstanceOf(Function)
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

    describe('Functionality - Depth First Search Traversals', () => {

        const sampleBST = new BinarySearchTree()
        const emptyBST = new BinarySearchTree()
        sampleBST.add(40)
        sampleBST.add(30)
        sampleBST.add(50)
        sampleBST.add(25)
        sampleBST.add(35)
        sampleBST.add(45)
        sampleBST.add(60)

        test('The inorder method should return an array of the node values that result from an inorder traversal', () => {
            expect(sampleBST.inorder()).toEqual([25, 30, 35, 40, 45, 50, 60])
        })

        test('The preorder method should return an array of the node values that result from a preorder traversal', () => {
            expect(sampleBST.preorder()).toEqual([40, 30, 25, 35, 50, 45, 60])
        })

        test('The postorder method should return an array of the node values that result from a postorder traversal', () => {
            expect(sampleBST.postorder()).toEqual([25, 35, 30, 45, 60, 50, 40])
        })

        test('The inorder method should return null for an empty tree', () => {
            expect(emptyBST.inorder()).toBe(null)
        })

        test('The preorder method should return null for an empty tree', () => {
            expect(emptyBST.preorder()).toBe(null)
        })

        test('The postorder method should return null for an empty tree', () => {
            expect(emptyBST.postorder()).toBe(null)
        })

    })

    describe('Functionality - Breadth First Seach Traversals', () => {

        const sampleBST = new BinarySearchTree()
        const emptyBST = new BinarySearchTree()
        sampleBST.add(8)
        sampleBST.add(3)
        sampleBST.add(10)
        sampleBST.add(1)
        sampleBST.add(6)
        sampleBST.add(14)
        sampleBST.add(4)
        sampleBST.add(7)
        sampleBST.add(13)

        test('The levelOrder method should return an array of the tree node values explored in level order', () => {
            expect(sampleBST.levelOrder()).toEqual([8, 3, 10, 1, 6, 14, 4, 7, 13])
        })

        test('The reverseLevelOrder method should return an array of the tree node values explored in reverse level order', () => {
            expect(sampleBST.reverseLevelOrder()).toEqual([8, 10, 3, 14, 6, 1, 13, 7, 4])
        })

        test('The levelOrder method should return null for an empty tree', () => {
            expect(emptyBST.levelOrder()).toBe(null)
        })

        test('The reverseLevelOrder method should return null for an empty tree', () => {
            expect(emptyBST.reverseLevelOrder()).toBe(null)
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