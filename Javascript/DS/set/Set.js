class Set {

    constructor() {
        this.dictionary = {}
        this.length = 0
    }

    has = (element) => {
        if (this.dictionary[element] === undefined) return false
        return true
    }

    values = () => {
        return Object.values(this.dictionary)
    }

    add = (element) => {
        if (this.has(element)) return false
        this.dictionary[element] = element
        this.length = this.length + 1
        return true
    }
    
    remove = (element) => {
        if (!this.has(element)) return false
        delete this.dictionary[element]
        this.length = this.length - 1
        return true
    }

    size = () => this.length

}

module.exports = Set