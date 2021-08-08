require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const router = require('./routers')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(port, () => {
    console.log(`app berada di http://localhost:${port}`)
})