const StudentRepository = require('./StudentManagement')

describe("Student Management Repository", () => {

    describe("Standard Definition and Follows Guidelines", () => {

        const sampleRepository = new StudentRepository()
    
        test("There must be an add method", () => {
            expect(sampleRepository.add).toBeInstanceOf(Function)
        })

        test("There must be a read method", () => {
            expect(sampleRepository.read).toBeInstanceOf(Function)
        })

        test("There must be an update function", () => {
            expect(sampleRepository.update).toBeInstanceOf(Function)
        })

        test("There must be a delete method", () => {
            expect(sampleRepository.delete).toBeInstanceOf(Function)
        })

    })

    describe("Functionality", () => {

        const sampleRepository = new StudentRepository()

        test("Add, Read methods add an entry and read them from the repository", () => {
            sampleRepository.add("Niyas", 27, 19)
            expect(sampleRepository.read(27)?.name).toBe("Niyas")
        })

        test("Update method must change the entry associated with the search", () => {
            sampleRepository.update(27, "name", "Niyas Hameed")
            expect(sampleRepository.read(27)?.name).toBe("Niyas Hameed")
        })

        test("Delete method must remove the entry from the repository", () => {
            sampleRepository.delete(27)
            expect(sampleRepository.read(27)).toBe("Not Found")
        })

    })

})