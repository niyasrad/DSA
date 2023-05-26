class CircularQueue {

    constructor(size) {
        this.queue = []
        this.read = 0
        this.write = 0
        this.max = size - 1

        for (let i = 0; i < size; i++) {
            this.queue.push(null)
        }
    }

    print = () => this.queue

    enqueue = (value) => {
        if (this.queue[this.write] !== null) return null
        this.queue[this.write] = value
        if (this.write === this.max) {
            this.write = 0
        } else {
            this.write += 1
        }
        return value
    }

    dequeue = () => {
        if (this.queue[this.read] === null) return null
        const removedElement = this.queue[this.read]
        this.queue[this.read] = null
        if (this.read === this.max) {
            this.read = 0
        } else {
            this.read += 1
        }
        return removedElement
    }

}

module.exports = CircularQueue