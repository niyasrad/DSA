/*

NODE

Constructor
-- has a value and a left, right pointer --

------------

BINARY SEARCH TREE

Constructor
-- has a root node --

Methods
-- add, search, invert --

*/


class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    add = (value) => {
        const addedNode = new Node(value);
        if (this.root === null) {
            this.root = addedNode
            return
        }
        let iterator = this.root

        while (iterator !== null) {
            if (value === iterator.value) return
            if (value > iterator.value) {
                if (iterator.right === null) {
                    iterator.right = addedNode
                    return
                }
                iterator = iterator.right
            } else {
                if (iterator.left === null) {
                    iterator.left = addedNode
                    return
                }
                iterator = iterator.left
            }
        }
    }

    search = (value) => {
        let iterator = this.root
        while (iterator !== null) {
            if (value === iterator.value) return true
            if (value < iterator.value) {
                iterator = iterator.left
            } else {
                iterator = iterator.right
            }
        }
        return false
    }

    invert = (head = this.root) => {
        if (head === null) return
        let inverterNode = head.left
        head.left = head.right
        head.right = inverterNode
        this.invert(head.left)
        this.invert(head.right)

        return head
    }

}