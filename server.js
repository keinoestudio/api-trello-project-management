//Libraries import
import express from "express"
import dotenv from "dotenv"

//setup ngrok

import ngrok from "@ngrok/ngrok"


//Adds dotenv support
dotenv.config()

//Init server at "server" namespace
const server = express()

//Middleware for json parsing
server.use(express.json())

//Brings data from .env

const port = process.env.PORT
const host = process.env.HOST

server.get('/', (req, res) => {
    res.send("Trello server is running and active")
})

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})


//expose app with ngrok
ngrok.connect({ addr: port, authtoken_from_env: true })
	.then(listener => console.log(`Ingress established at: ${listener.url()}`));