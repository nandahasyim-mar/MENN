const { MongoClient } = require('mongodb');
const url = process.env.DB_URL;
const name = process.env.DB_NAME;

const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect();

const db = client.db(name);

module.exports = db