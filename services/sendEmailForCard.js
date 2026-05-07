import nodemailer from "nodemailer"
import axios from "axios";
import extractEmailsFromCustomFields from "../utils/extractEmailsFromCustomFields.js";
import projectStarted from "../emails/projectStarted.js";


async function sendEmailForCard(cardDetails, targetListID, transporter) {

    const emails = extractEmailsFromCustomFields(cardDetails.customFields);
    const attachments = []

    if (!emails.main) {
        console.error(`Not main email found (field 69fa1d351e639dfc8de83844) at card: ${cardDetails.name}`);
        throw new Error('Mandatory main email not found');
    }


    let subject = '';
    if (targetListID === "6909e6f71149d366a187c457") {
        subject = `Hemos comenzado las tareas de este proyecto: ${cardDetails.name}`;
    } else if (targetListID === "6909e6fe306ad9aff91fec30") {
        subject = `Hemos finalizado todas las tareas de este proyecto: ${cardDetails.name}`;
    } else if (targetListID === "69fa28a61b7cbb3833120734") {
        subject = `Recordatorio de factura pendiente: ${cardDetails.name}`;
    } else if (targetListID === "69fa287f1c7b5b266c531404") {
        subject = `Aquí tienes tu recibo. Esperamos haber estado a la altura: ${cardDetails.name}`;
    } else if (targetListID === "69fa28b468c110ab922da6c0") {
        subject = `Recordatorio de factura pendiente: ${cardDetails.name}`;
    } else if (targetListID === "69f9c3bf907995cd0b329fd1") {
        subject = `El periodo de garantía de este proyecto ha vencido: ${cardDetails.name}`;
    } else {
        return;
    }

    // const htmlContent = buildEmailHtml(cardDetails, targetListID, emails);
    const htmlContent = projectStarted(cardDetails);

    const isImageByExtension = (filename) => {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg', '.ico'];
        const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
        return imageExtensions.includes(ext);
    };

    for (const att of cardDetails.attachments) {
        if (isImageByExtension(att.name)) {
            console.log(`🖼️ Imagen omitida (por extensión): ${att.name}`);
            continue;
        }
        try {
            // Descargar el archivo desde la URL de Trello
            const response = await axios.get(att.url, {
                responseType: 'stream',
                headers: {
                    'Authorization': `OAuth oauth_consumer_key="${process.env.TRELLO_KEY}", oauth_token="${process.env.TRELLO_TOKEN}"`
                }
            });
            
            attachments.push({
                filename: att.name,
                content: response.data,
                contentType: response.headers['content-type']
            });
        } catch (error) {
            console.error(`Error descargando ${att.name}:`, error.message);
        }
    }

    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: emails.main,
        cc: emails.cc.length > 0 ? emails.cc.join(', ') : undefined,
        bcc: 'oficina@keinoestudio.com',
        subject: subject,
        // html: htmlContent,
        html: htmlContent,
        attachments: attachments
    };

    if (!mailOptions.cc) {
        delete mailOptions.cc;
    }

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log(`Email sent:`);
        console.log(`   For: ${emails.main}`);
        console.log(`   CC: ${emails.cc.join(', ') || 'ninguno'}`);
        console.log(`   ID: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error(`Error sending message:`, error);
        throw error;
    }
}


export default sendEmailForCard