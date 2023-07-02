/*

NODE

Constructor
-- has a value and a next pointer --

------------

LINKEDLIST

Constructor
-- has a root node --

Methods
-- add, remove, reverse --

*/

class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.root = null;
        this.length = 0;
    }

    insert = (value, index = this.length) => {
        let addedNode = new Node(value)
        if (index > this.length) return null
        if (index === 0) {
            addedNode.next = this.root
            this.root = addedNode
            this.length ++
            return
        }

        let attacherNode = null
        let iterator = this.root
        let iterationIndex = 0
        while (iterationIndex !== index) {
            attacherNode = iterator
            iterator = iterator.next
            iterationIndex ++
        }
        attacherNode.next = addedNode
        addedNode.next = iterator
        this.length ++
    }

    remove = (index) => {
        if (this.root === null) return null
        if (index >= this.length) return null
        if (index === 0) {
            this.root = this.root.next
            this.length --
            return
        }
        let attacherNode = null
        let iterator = this.root
        let iterationIndex = 0
        while (iterationIndex !== index) {
            attacherNode = iterator
            iterator = iterator.next
            iterationIndex ++
        }
        attacherNode.next = iterator.next
        iterator.next = null
        this.length --
    }

    reverse = () => {
        let before = null
        let iterator = this.root

        while (iterator !== null) {
            let after = iterator.next
            iterator.next = before
            before = iterator
            iterator = after
        }
        
        this.root = before
    }

    print = () => {
        let iterator = this.root
        while (iterator !== null) {
            console.log("NODE", iterator.value)
            iterator = iterator.next
        }
    }

}
