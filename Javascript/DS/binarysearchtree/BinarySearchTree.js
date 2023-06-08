class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const validateBinarySearchTree = (head, currentMin, currentMax) => {

    if (head === null) return true
    if (head.left !== null && (head.left.value >= head.value || head.left.value >= currentMin)) return false
    if (head.right !== null && (head.right.value <= head.value || head.right.value <= currentMax)) return false

    return validateBinarySearchTree(head.left, head.value, currentMax) && validateBinarySearchTree(head.right, currentMin, head.value)

}

const isBinarySearchTree = (tree) => {

    if (tree.root === null) return true
    return validateBinarySearchTree(tree.root, Math.MIN_VALUE, Math.MAX_VALUE) 

}

const findHeight = (head, way) => {

    if (head === null) return 0
    let leftHeight = findHeight(head.left, way)
    let rightHeight = findHeight(head.right, way)
    
    if (way === 'min') return 1 + Math.min(leftHeight, rightHeight)
    else return 1 + Math.max(leftHeight, rightHeight)

}

const treeTraversal = (array, head, order) => {

    if (head === null) return

    switch(order){

        case "preorder":
            array.push(head.value)
            treeTraversal(array, head.left, order)
            treeTraversal(array, head.right, order)
            break

        case "inorder":
            treeTraversal(array, head.left, order)
            array.push(head.value)
            treeTraversal(array, head.right, order)
            break

        case "postorder":
            treeTraversal(array, head.left, order)
            treeTraversal(array, head.right, order)
            array.push(head.value)
            break

        default:
            break
        
    }

}

class BinarySearchTree {
    
    constructor() {
        this.root = null
    }

    add = (element) => {
        let elementNode = new Node(element)
        if (this.root === null) {
            this.root = elementNode
            return
        }        
        let iterator = this.root
        while (true) {
            if (iterator.value > element) {
                if (iterator.left === null) {
                    iterator.left = elementNode
                    return
                }
                else iterator = iterator.left
            } else if (iterator.value < element) {
                if (iterator.right === null) {
                    iterator.right = elementNode
                    return
                }
                else iterator = iterator.right
            } else {
                return null
            }
        }
    }

    inorder = () => {
        if (this.root === null) return null
        const traversalArray = []
        treeTraversal(traversalArray, this.root, "inorder")
        return traversalArray
    }

    preorder = () => {
        if (this.root === null) return null
        const traversalArray = []
        treeTraversal(traversalArray, this.root, "preorder")
        return traversalArray
    }

    postorder = () => { 
        if (this.root === null) return null
        const traversalArray = []
        treeTraversal(traversalArray, this.root, "postorder")
        return traversalArray
    }

    findMin = () => {
        if (this.root === null) return null
        let iterator = this.root
        while (iterator.left !== null) {
            iterator = iterator.left
        }
        return iterator.value
    }

    findMax = () => {
        if (this.root === null) return null
        let iterator = this.root
        while(iterator.right !== null) {
            iterator = iterator.right
        }
        return iterator.value
    }

    isPresent = (element) => {
        if (this.root === null) return false
        var mostMin = Number.MAX_VALUE
        var minMax = Number.MIN_VALUE
        let iterator = this.root
        while (iterator != null) {
            if (iterator.value === element) return true
            if (iterator.value < element) {
                if (minMax > iterator.value) return false
                iterator = iterator.right
            }
            else {
                if (mostMin < iterator.value) return false
                iterator = iterator.left
            }
        }
        return false
    }

    findMinHeight = () => {
        if (this.root === null) return -1
        return findHeight(this.root, "min") - 1 
    }

    findMaxHeight = () => {
        if (this.root === null) return -1
        return findHeight(this.root, "max") - 1
    }

    isBalanced = () => this.findMaxHeight() - this.findMinHeight() <= 1
    
}

module.exports = { BinarySearchTree, Node, isBinarySearchTree }