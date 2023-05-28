class Map {
    
    constructor() {
        this.collection = {}
    }

    add = (key, value) => {
        this.collection[key] = value
    }

    remove = (key) => {
        delete this.collection[key]
    }

    get = (key) => this.collection[key]

    has = (key) => this.collection[key] !== undefined

    values = () => Object.values(this.collection)

    clear = () => this.collection = {}

    size = () => Object.keys(this.collection).length

}

module.exports = Map