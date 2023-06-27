const TrieSearchTree = require("./TrieSearchTree")


describe("Trie Search Tree", () => {

    describe("Follows Definition, Guidelines", () => {

        const sampleTST = new TrieSearchTree()

        test("The Trie should have an add method", () => {
            expect(sampleTST.add).toBeInstanceOf(Function)
        })

        test("The Trie should have a print method", () => {
            expect(sampleTST.print).toBeInstanceOf(Function)
        })
        
        test("The Trie should have an isWord method", () => {
            expect(sampleTST.isWord).toBeInstanceOf(Function)
        })

    })

    describe("Functionality", () => {

        const sampleTST = new TrieSearchTree()
        sampleTST.add("m'lady")
        sampleTST.add("i")
        sampleTST.add("just")
        sampleTST.add("love")
        sampleTST.add("you")

        test("The print method should return all items added to the trie as strings in an array", () => {
            expect(sampleTST.print()).toEqual(["m'lady", "i", "just", "love", "you"])
        })

        test("The isWord method should return true only for words added to the trie", () => {
            expect(sampleTST.isWord("love")).toBe(true)
        })

        test("The isWord method should return false for all other words", () => {
            expect(sampleTST.isWord("sweet")).toBe(false)
        })

    })

})