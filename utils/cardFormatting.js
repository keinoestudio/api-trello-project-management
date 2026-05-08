
import dateFormat from "./dateFormat.js"
import setDefault from "./setDefault.js"
const cardFormatting = ( cardDetails ) => {

    const formattedData = {
        "name" : setDefault(cardDetails.name, "[Card Name]"),
        "mainEmail": setDefault(cardDetails.customFields["69fa1b9a740027c4aeb7502e"]?.value, "drubio@keinoestudio.com"),
        "secondaryEmail_1": setDefault(cardDetails.customFields["69fa1cd1e3b2a5d7c9e9ec52"]?.value, ""),
        "secondaryEmail_2": setDefault(cardDetails.customFields["69fa1d351e639dfc8de83844"]?.value, ""),
        "adminEmail": setDefault(cardDetails.customFields["69fa1cf433183db9a7da2fdb"]?.value, ""),
        "ceoEmail": setDefault(cardDetails.customFields["69fa1d06804d28a65217efde"]?.value, ""),
        "deliveryTime": setDefault(cardDetails.customFields["69fa717ebd5260ab1df08d15"]?.value, null),
        "deliveryDate": setDefault(dateFormat(cardDetails.customFields["69fa1bcf7bf48ce9d3058261"]?.value), null),
        "invoiceTime": setDefault(cardDetails.customFields["69fa7192e53d2ffe49eb7a1e"]?.value, null),
        "invoiceDate": setDefault(dateFormat(cardDetails.customFields["69fa28027c1573f73e45d03b"]?.value), null),
        "warrantyTime": setDefault(cardDetails.customFields["69fa71a34632f70910e08cbe"]?.value, null),
        "warrantyDate": setDefault(dateFormat(cardDetails.customFields["69fa1d655377690bc6a6191a"]?.value), null),
        "maintenancePromo": setDefault(cardDetails.customFields["69fa813fa1ce52cca8d2b167"]?.value, false),
        "securityPromo": setDefault(cardDetails.customFields["69fa817dad4a2eacd1a3d48f"]?.value, false),
        "financingPromo": setDefault(cardDetails.customFields["69fb22771a146037f60613d3"]?.value, false),
        "invoice": setDefault(cardDetails.customFields["69fa71538bd043c8297952a5"]?.value, "[Invoice number]"),
    }
    return formattedData
}

export default cardFormatting