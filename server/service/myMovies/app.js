require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const router = require('./routes/routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(port, () => {
    console.log(`App run in http://localhost:${port}`)
})