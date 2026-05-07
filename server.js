//Libraries import
import express from "express"
import dotenv from "dotenv"

//setup ngrok

import ngrok from "@ngrok/ngrok"


//Adds dotenv support
dotenv.config()

//services import

import getCardDetails from "./services/getCardDetails.js"

//Data import

import lists from "./data/lists.json" with {type: "json"}

//Init server at "server" namespace
const server = express()

//Middleware for json parsing
server.use(express.json())

//Brings data from .env

const port = process.env.PORT
const host = process.env.HOST
const webhook = process.env.WEBHOOK || "trello-webhook"

//default route for debugging porpouses
server.get('/', (req, res) => {
    res.send("Trello server is running and active")
    console.log(webhook)
})

//main server function - webhook listener

server.post(`/${webhook}`, (req, res) => {
    res.status(200).send('OK')

    // req body data
    const { action, model } = req.body;

    //‘updateCard’ event (card update) verification
    if (action && action.type === 'updateCard' && action.data && action.data.listAfter && action.data.listBefore) {

        const oldListID = action.data.listBefore.id;
        const newListID = action.data.listAfter.id;
        const cardId = action.data.card.id;
        const cardName = action.data.card.name;

        //Card movement logging
        console.log(`Card moved: "${cardName}" from "${oldListName}" to "${newListName}"`)

        for (list of lists){
            if (list.id === newListID) {
            console.log(`A card movement was detected: "${newListName}". Processing...`)}
        }

    }
})

//Server online listener at localhost
server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})


//expose app with ngrok
ngrok.connect({ addr: port, authtoken_from_env: true })
	.then(listener => console.log(`Ingress established at: ${listener.url()}`));