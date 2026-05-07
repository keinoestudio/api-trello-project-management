import dotenv from "dotenv"
import axios from "axios"

dotenv.config()

async function deleteWebhook() {
    const webhookId = '69fccd3dad6372d06a01ebd4' // Tu ID del webhook
    
    try {
        await axios.delete(`https://api.trello.com/1/webhooks/${webhookId}`, {
            params: {
                key: process.env.TRELLO_KEY,
                token: process.env.TRELLO_TOKEN
            }
        })
        console.log("✅ Webhook eliminado correctamente")
    } catch (error) {
        console.error("❌ Error:", error.message)
    }
}

deleteWebhook()