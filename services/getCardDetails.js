import axios from 'axios'

const getCardDetails = async (cardId) => {
    const baseUrl = `https://api.trello.com/1/cards/${cardId}`;

    const params = {
        key: process.env.TRELLO_KEY,
        token: process.env.TRELLO_TOKEN,
        fields: 'name',
        customFieldItems: true,
        attachments: true,
    };

    try{
        const response = await axios.get(baseUrl, { params })
        const cardData = response.data

        const customFields = {};
        if (cardData.customFieldItems && cardData.customFieldItems.length > 0){
            for (const fieldItem of cardData.customFieldItems) {
                const value = fieldItem.value ? Object.values(fieldItem.value)[0] : 'Not specified'
                customFields[fieldItem.idCustomField] = {
                    id: fieldItem.idCustomField,
                    value: value
                };
            }
        }

        const attachments = cardData.attachments.map(att => ({
            name: att.name,
            url: att.url
        }));

        return {
            id: cardId,
            name: cardData.name,
            customFields: customFields,
            attachments: attachments
        };

    }catch{
        console.error(`Error fetching card data ${cardId}:`, error.message);
        throw new Error(`Card detalis fetching failed ${cardId}`);
    }
}

export default getCardDetails