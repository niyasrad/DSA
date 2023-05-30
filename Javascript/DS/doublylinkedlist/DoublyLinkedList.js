class Node {
    
    constructor (data) {
        this.data = data
        this.prev = null
        this.next = null
    }

}

class DoublyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    print() {
        let iterator = this.head
        console.log("---DLL---")
        while (iterator !== null) {
            console.log(iterator.data)
            iterator = iterator.next
        }
        console.log("---END---")
    }

    add(data) {
        let elementNode = new Node(data)
        if (this.length === 0) {
            this.head = elementNode
            this.tail = elementNode
            this.length ++
            return
        }
        elementNode.prev = this.tail
        this.tail.next = elementNode
        this.tail = elementNode
        this.length ++
    }

    remove(data) {
        if (this.length === 0) return null
        let iterator = this.head
        while (iterator && this.length !== 0) {
            if (iterator.data === data) {
                if (this.length === 1) {
                    this.head = null
                    this.tail = null
                    this.length = 0
                    return
                }
                if (iterator === this.head) {
                    this.head = this.head.next
                    this.head.prev = null
                    this.length --
                } else if (iterator === this.tail) {
                    this.tail = this.tail.prev
                    this.tail.next = null
                    this.length --
                } else {
                    const tempNext = iterator.next
                    iterator.prev.next = iterator.next
                    tempNext.prev = iterator.prev
                    this.length --
                }
                
            }
            iterator = iterator.next
        }
        
    }

    reverse() {
        if (this.length === 0) return null
        var before = null
        var after = this.head
        var current = this.head
        this.tail = current
        while (current) {
            after = after.next
            current.next = before
            current.prev = after
            before = current
            current = after
        }
        this.head = before
    }

}

module.exports = DoublyLinkedList