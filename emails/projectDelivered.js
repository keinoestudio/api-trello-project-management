import dateFormat from "../utils/dateFormat.js"

const projectDelivered = (cardDetails) => {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" lang="en">
        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
            <meta name="x-apple-disable-message-reformatting" />
        </head>
        <body>
            <!--$--><!--html--><!--head--><!--body-->
            <table
            border="0"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            align="center">
            <tbody>
                <tr>
                <td>
                    <table
                    align="center"
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="max-width:37.5em">
                    <tbody>
                        <tr style="width:100%">
                        <td><h1>${cardDetails.name}</h1></td>
                        </tr>
                    </tbody>
                    </table>
                </td>
                </tr>
            </tbody>
            </table>
            <!--/$-->
        </body>
        </html>

    `
}

export default projectDelivered