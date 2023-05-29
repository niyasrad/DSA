class Node {

    constructor(element) {
        this.element = element
        this.next = null
    }

}


class LinkedList {

    constructor() {
        this.head = null
        this.length = 0
    }

    add = (element) => {
        const elementNode = new Node(element)
        if (this.head === null) this.head = elementNode
        else {
            let iterator = this.head
            while (iterator.next !== null) {
                iterator = iterator.next
            }
            iterator.next = elementNode
        }
        this.length ++
    }

    addAt = (index, element) => {
        if (index < 0 || index > this.length) return false
        const elementNode = new Node(element)
        if (index === 0) {
            elementNode.next = this.head
            this.head = elementNode
            this.length ++
            return
        }
        let iterations = 0
        let iterator = this.head
        while (iterations !== index - 1) {
            iterations ++
            iterator = iterator.next
        }
        elementNode.next = iterator.next
        iterator.next = elementNode
        this.length ++
    }

    remove = (element) => {
        let iterator = this.head
        let prev = null
        if (iterator.element === element) {
            this.head = iterator.next
            this.length --
            return
        }
        while (iterator.next != null) {
            if (iterator.element === element) {
                prev.next = iterator.next
                this.length --
                return
            } 
            prev = iterator
            iterator = iterator.next
        }
    }

    removeAt = (index) => {
        if (index < 0 || index >= this.length) return null
        const elementToRemove = this.elementAt(index)
        this.remove(elementToRemove)
        return elementToRemove
    }

    indexOf = (element) => {
        let iterator = this.head
        let index = 0
        while (iterator != null) {
            if (iterator.element === element) return index
            index ++
            iterator = iterator.next
        }
        return -1
    }

    elementAt = (index) => {
        if (this.length - 1 < index || index < 0) return undefined
        let iterator = this.head
        let iteration = 0
        while (iteration !== index) {
            iterator = iterator.next
            iteration ++
        }
        return iterator.element
    }

    isEmpty = () => this.length === 0

    size = () => this.length
    
}

module.exports = { LinkedList, Node }