 
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://sougataghar47:sitonmeloba69@cluster0.fllgfxo.mongodb.net/test?retryWrites=true&w=majority');
client.connect();
let db = client.db("test");
module.exports = db;