const crypto = require('crypto');

class Block {

    constructor (timestamp, data, prevHash) {
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
        this.nonce = 0;
        this.difficulty = Math.floor(Math.random() * 5) + 1;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash("sha256").update(this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce).digest("hex");
    }


    mineBlock() {
        while (this.hash.substring(0).charAt(3) != this.difficulty) {
            console.log("Trying!...", this.hash,  this.hash.substring(0).charAt(0) !== this.difficulty ? "Does not match" : "Matches");
            this.nonce = this.nonce + 1;
            this.hash = this.calculateHash();
        }
        console.log("Trying!...", this.hash,  "Matches");
        return
    }

}

module.exports = Block;