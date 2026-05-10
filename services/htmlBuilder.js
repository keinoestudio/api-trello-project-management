
import cardFormatting from "../utils/cardFormatting.js"
import projectStarted from "../emails/projectStarted.js"
import projectDelivered from "../emails/projectDelivered.js";
import invoicePaid from "../emails/invoicePaid.js";
import warranty from "../emails/warranty.js";
import invoiceReminder from "../emails/invoiceReminder.js";
import invoiceWarning from "../emails/invoiceWarning.js";



const htmlBuilder = (targetListID, cardDetails) => {
    switch (targetListID) {
        case "6909e6f71149d366a187c457":
            return projectStarted(cardFormatting(cardDetails))
            break
        case "6909e6fe306ad9aff91fec30":
            return projectDelivered(cardFormatting(cardDetails))
            break
        case "69fa287f1c7b5b266c531404":
            return invoicePaid(cardFormatting(cardDetails))
            break
        case "69f9c3bf907995cd0b329fd1":
            return warranty(cardFormatting(cardDetails))
            break
        case "69fa28a61b7cbb3833120734":
            return invoiceReminder(cardFormatting(cardDetails))
            break
        case "69fa28b468c110ab922da6c0":
            return invoiceWarning(cardFormatting(cardDetails))
            break
        default:
            return "<h1>Default</h1>"
    }
}

export default htmlBuilder