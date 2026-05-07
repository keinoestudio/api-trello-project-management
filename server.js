//Libraries import
import express from "express"
import dotenv from "dotenv"

//Adds dotenv support
dotenv.config()

//Init server at "server" namespace
const server = express()

server.get('/', (req, res) => {
    res.send("Server is running")
})

server.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`)
})

