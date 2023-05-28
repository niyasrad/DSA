var called = 0
var hash = (string) => {
    called ++
    let hashNumber = 0
    for (let i = 0; i < string.length; i++) hashNumber += string.charCodeAt(i)
    return hashNumber
}

class HashTable {

    constructor() {
        this.collection = {}
    }   

    add = (key, value) => {
        const hashedKey = hash(key)
        if (this.collection[hashedKey] === undefined) this.collection[hashedKey] = {}
        this.collection[hashedKey][key] = value
    }

    lookup = (key) => {
        const hashedKey = hash(key)
        return (this.collection[hashedKey] && this.collection[hashedKey][key]) ? this.collection[hashedKey][key] : null
    }

    remove = (key) => {
        const hashedKey = hash(key)
        delete this.collection[hashedKey][key]
        if (Object.keys(this.collection[hashedKey]).length === 0) delete this.collection[hashedKey]
    }

}

module.exports = HashTable