import cardFormatting from "../utils/cardFormatting.js"
import projectDelivered from "../emails/projectDelivered.js"



const htmlBuilder = (targetListID, cardDetails) => {
    switch (targetListID) {
        case "6909e6f71149d366a187c457":
            const emailHTML = projectDelivered(cardFormatting(cardDetails))
            return emailHTML
            break
        default:
            return "<h1>Default</h1>"
    }
}

export default htmlBuilder