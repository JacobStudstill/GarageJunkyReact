// import
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mysql = require("mysql2")
const dotenvenv = require("dotenv")
require("dotenv").config()
const PORT = process.env.PORT || 8080


// app
const app = express()


// db
const connection = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    port:process.env.DB_PORT,
    database:process.env.DATABASE,
})

connection.connect(console.log("The databaase is working"))

// middleware
app.use(morgan("dev"))
app.use(cors({ origin: true, credentials: true }))

// routes

// port


// listener
const server = app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`))

app.get('/',(req,res)=>{
res.status(200);
res.send("Welcome to the root URL of the server")
})