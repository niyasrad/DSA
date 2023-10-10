const Blockchain = require('./Blockchain');

let PoET = new Blockchain();

PoET.addBlock(Date.parse("2023-01-01"), { amount: 40, message: "First Miner's Block" });
PoET.addBlock(Date.parse("2023-02-01"), { amount: 10, message: "Second Mine's Block" });
PoET.addBlock(Date.parse("2023-03-01"), { amount: 20, message: "Third Miner's Block" });

