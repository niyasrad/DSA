function Stack() {

    var collection = []

    this.print = () => {
        console.log(collection)
    }
    this.push = (item) => {
        collection = [...collection, item]
    }
    this.pop = () => {
        if (this.isEmpty()) return "Stack Empty"
        const firstElement = collection[collection.length - 1]
        collection = collection.slice(0, collection.length - 1)
        return firstElement
    }
    this.peek = () => {
        if (this.isEmpty()) return "Stack Empty"
        return collection[collection.length - 1]
    }
    this.isEmpty = () => collection.length === 0
    this.clear = () => {
        collection = []
    }    
    
}

module.exports = Stack