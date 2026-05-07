const extractEmailsFromCustomFields = (customFields) => {
    let main = null;
    let cc = [];
    
    const EMAIL_FIELD_CC_IDS = [
        "69fa1cd1e3b2a5d7c9e9ec52",
        "69fa1d351e639dfc8de83844",
        "69fa1d06804d28a65217efde",
        "69fa1cf433183db9a7da2fdb",
    ]

    const isValidEmail = (email) => {
    if (!email || typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};

    for (const [fieldId, fieldData] of Object.entries(customFields)) {
        const value = fieldData.value;
        
        if (isValidEmail(value)) {
            if (fieldId === "69fa1b9a740027c4aeb7502e") {
                main = value;
            }
            else if (EMAIL_FIELD_CC_IDS.includes(fieldId)) {
                cc.push(value);
            }
        }
    }
    
    cc = [...new Set(cc)];
    
    return { main, cc };
}

export default extractEmailsFromCustomFields