//Libraries import
import express from "express"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

//setup ngrok

import ngrok from "@ngrok/ngrok"


//Adds dotenv support
dotenv.config()

//services import

import getCardDetails from "./services/getCardDetails.js"
import sendEmailForCard from "./services/sendEmailForCard.js"

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


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true para el puerto 465, false para otros
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});


//default route for debugging porpouses
server.get('/trello-webhook', (req, res) => {
    res.send("Trello server is running and active")
})

//main server function - webhook listener

server.post(`/${webhook}`, async (req, res) => {

    console.log("🚨 ¡WEBHOOK RECIBIÓ UNA PETICIÓN! 🚨");
    console.log("Hora:", new Date().toISOString());

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
        console.log(`Card moved: "${cardName}" from "${oldListID}" to "${newListID}"`)

        for (const list of lists){
            if (list.id === newListID) {
            console.log(`A card movement was detected: "${newListID}". Processing...`)}
        }

        try{
            const cardDetails = await getCardDetails(cardId);
            await sendEmailForCard(cardDetails, newListID, transporter);
            // console.log(cardDetails)
        }catch(error){
            console.error(`Error at card processing ${cardName}:`, error.message);
        }
    }else {
        //no else declaration yet
    }
})

//Server online listener at localhost
server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})


//expose app with ngrok
ngrok.connect({ addr: port, authtoken_from_env: true })
	.then(listener => console.log(`Ingress established at: ${listener.url()}`));