// import
const express =require("express")
const mongoose = require("mongoose")
const morgan = require("morgna")
const cors = require("cors")
require("dovenv").config() 


// app
const app = express()


// db


// middleware
app.use(morgan("dev"))
app.use(cors({ origin: true, credentials: true}))

// routes

// port

const port = process.env.PORT || 8080

// listener
const server = app.listen(port, () => 
console.log(`Server is running on port ${port}`))