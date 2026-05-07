import dotenv from "dotenv"
import axios from "axios"
dotenv.config()
async function registerWebhook() {
    const trelloApiUrl = 'https://api.trello.com/1/webhooks/';
    
    const payload = {
        key: process.env.TRELLO_KEY,
        token: process.env.TRELLO_TOKEN,
        callbackURL: process.env.WEBHOOK_URL, // La URL pública donde corre tu server.js
        idModel: process.env.TRELLO_BOARD_ID,   // El ID del tablero a monitorear
        description: 'Webhook to automate email notifications when a card is moved to a different list',
        // active: true
    };

    try {
        const response = await axios.post(trelloApiUrl, null, { params: payload });
        console.log('✅ Webhook registrado exitosamente!');
        console.log('ID del Webhook:', response.data.id);
    } catch (error) {
        console.error('❌ Error al registrar el webhook:');
        if (error.response) {
            console.error('Detalle:', error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

registerWebhook();