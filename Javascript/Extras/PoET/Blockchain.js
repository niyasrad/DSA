const Block = require('./Block')

class BlockChain {

    constructor () {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock () {
        return new Block(Date.parse("2021-01-01"), {}, "0");
    }

    getChainLength () {
        return this.chain.length;
    }

    getLatestBlock () {
        return this.chain[this.chain.length - 1];
    }

    getPreviousBlockHash () {
        return this.chain[this.chain.length - 1].hash;
    }

    addBlock (timestamp, data) {  
        
        let newBlock = new Block(timestamp, data, this.getPreviousBlockHash());
        console.log("Mining Block: " + newBlock.data.message + " " + newBlock.hash);

        const waitTime = 5000 + Math.floor(Math.random() * 20000);
        console.log(newBlock.data.message + " waiting for " + waitTime + "ms (PoET)");
        
        setTimeout(() => {

            newBlock.mineBlock();
            console.log("Validation!")
            if (this.validateBlock(newBlock)) {
                console.log(newBlock.data.message + " Mined Successfully: " + newBlock.hash);
                this.chain.push(newBlock);
            } else {
                console.log(newBlock.data.message + " Validation Failed: " + newBlock.hash);
            }
            

        }, waitTime)

    }

    validateChain () {

        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.prevHash !== prevBlock.hash) {
                return false;
            }

            return true;
        }

    }

    validateBlock (block) {

        if (block.prevHash !== this.getPreviousBlockHash()) {
            return false;
        }
        return true

    }

}

module.exports = BlockChain;