function Queue() {

    var collection = []

    this.enqueue = (item) => {  
        collection = [...collection, item]
    }
    this.dequeue = () => {
        if (this.isEmpty()) return "Queue Empty"
        const firstElement = collection[0]
        collection = collection.slice(1)
        return firstElement
    }
    this.front = () => {
        if (this.isEmpty()) return "Queue Empty"
        return collection[0]
    }
    this.size = () => collection.length
    this.isEmpty = () => collection.length === 0
    
}

module.exports = Queue