class Node {

    constructor() {
        this.keys = new Map()
        this.end = false
    }

    setEnd = () => {
        this.end = true
    }

    isEnd = () => this.end

}

class TrieSearchTree {

    constructor () {
        this.root = new Node()
    }

    add = (word) => {

        let node = this.root
        
        for (let letter of word) {
            if (!node.keys.has(letter)) {
                node.keys.set(letter, new Node())
            }

            node = node.keys.get(letter)
        }

        node.setEnd()

    }

    isWord = (word) => {

        let node = this.root

        for (let letter of word) {
            if (!node.keys.has(letter)) {
                return false
            }

            node = node.keys.get(letter)
        }

        if (!node.isEnd()) return false
        return true

    }

    print = (resultArray = [], node = this.root, prefix = '') => {

        for (let [letter, nodeRef] of node.keys) {
            
            if (nodeRef.isEnd()) resultArray.push(prefix + letter)
            this.print(resultArray, nodeRef, prefix + letter)

        }

        return resultArray

    }

}


module.exports = TrieSearchTree