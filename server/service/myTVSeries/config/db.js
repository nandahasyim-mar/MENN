const { MongoClient } = require('mongodb'); // kenapa memakai mongoClient
const db_name = process.env.DB_NAME
const db_url = process.env.DB_URL

const client = new MongoClient(db_url, { useUnifiedTopology: true }) // cara lain meng-connect kan mongoclient
client.connect()

const db = client.db(db_name);
module.exports = db