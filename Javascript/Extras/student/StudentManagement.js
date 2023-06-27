class Student {

    constructor(name, roll, age) {
        this.name = name
        this.roll = roll
        this.age = age
    }

}

class StudentRepository {

    constructor() {
        this.studentStorage = []
    }

    // CRUD OPs - Create, Read, Update, Delete

    add = (name, roll, age) => {
        let studentEntry = new Student(name, roll, age)
        this.studentStorage.push(studentEntry)
    }

    read = (roll) => {
        for (let studentEntry of this.studentStorage) {
            if (studentEntry.roll === roll) {
                return studentEntry
            }
        }
        return "Not Found"
    }

    update = (roll, entry, updatedValue) => {
        if (!["name", "roll", "age"].includes(entry)) return
        this.studentStorage.forEach((studentEntry, index) => {
            if (studentEntry.roll === roll) {
                this.studentStorage[index][entry] = updatedValue
            }
        })
    }

    delete = (roll) => {
        this.studentStorage = this.studentStorage.filter((studentEntry) => studentEntry.roll !== roll)
    }

}

module.exports = StudentRepository