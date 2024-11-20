require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dbConnect = require('./src/db/database.js')


dbConnect().catch((err) => {
    console.log(err)
})

app.use(bodyParser.json())
app.get('/',(req, res) =>{
    return res.status(200).json("this web server for Chong Portfolio")
})

app.listen(process.env.PORT, function(){
    console.log("it's running on port " + `${process.env.PORT}`)
})