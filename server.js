//Libraries import
import express from "express"
import dotenv from "dotenv"

//Adds dotenv support
dotenv.config()

//Init server at "server" namespace
const server = express()

//Brings data from .env

const port = process.env.PORT
const host = process.env.HOST

server.get('/', (req, res) => {
    res.send("Server is running")
})

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})

