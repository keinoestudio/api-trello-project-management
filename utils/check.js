import dotenv from "dotenv"
import axios from "axios"

dotenv.config()

async function checkWebhook() {
    try {
        const url = `https://api.trello.com/1/tokens/${process.env.TRELLO_TOKEN}/webhooks`
        
        const response = await axios.get(url, {
            params: {
                key: process.env.TRELLO_KEY
            }
        })
        
        console.log("Webhooks activos:", response.data)
        
        if (response.data.length === 0) {
            console.log("❌ No hay webhooks registrados. Debes registrar uno.")
        }
    } catch (error) {
        console.error("Error:", error.message)
    }
}

checkWebhook()