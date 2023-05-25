function PriorityQueue() {
    
    var collection = []

    this.printCollection = () => console.log(collection)

    this.enqueue = ([value, priority]) => {

        let foundPriority = false

        for (let i = 0; i < collection.length; i++) {
            if (collection[i][1] > priority) {
                foundPriority = true
                collection = [...collection.slice(0, i), [value, priority], ...collection.slice(i)]
                break
            }
        }

        if (!foundPriority) collection = [...collection, [value, priority]]

    }

    this.dequeue = () => {

        if (this.isEmpty()) return "Queue Empty"
        const firstElement = collection[0]
        collection = collection.slice(1)
        return firstElement[0]

    }

    this.size = () => collection.length

    this.front = () => {
        
        if (this.isEmpty()) return "Queue Empty"
        return collection[0][0]

    }

    this.isEmpty = () => {

        return collection.length === 0

    }
}

module.exports = PriorityQueue