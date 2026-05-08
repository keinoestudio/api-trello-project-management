import projectDelivered from "../emails/projectDelivered.js"
import projectStarted from "../emails/projectStarted.js"


const htmlBuilder = (targetListID, cardDetails) => {
    switch(targetListID){
        case "6909e6f71149d366a187c457":
            return projectStarted(cardDetails)
            break
        case "6909e6fe306ad9aff91fec30":
            return projectDelivered(cardDetails)
            break
        default:
            return "<h1>Default</h1>"
    }
}

export default htmlBuilder