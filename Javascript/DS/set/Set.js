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

    union = (set) => {
        const newSet = new Set()
        for (let entry of this.values()) {
            newSet.add(entry)
        }
        for (let entry of set.values()) {
            newSet.add(entry)
        }
        return newSet
    }

    intersection = (set) => {
        const newSet = new Set()
        for (let entry of this.values()) {
            if (set.has(entry)) newSet.add(entry)
        }
        return newSet
    }

    difference = (set) => {
        const newSet = new Set()
        for (let entry of this.values()) {
            if (set.has(entry)) continue
            newSet.add(entry)
        }
        return newSet
    }

    isSubsetOf = (set) => {
        for (let entry of this.values()) {
            if (!set.has(entry)) return false
        }
        return true
    }

}

module.exports = Set