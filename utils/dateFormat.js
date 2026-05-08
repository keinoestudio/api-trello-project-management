const dateFormat = (date) => {
    const createDate = new Date(date);
    const formattedDate = createDate.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long', 
        year: 'numeric'
    });

    return formattedDate
}

export default dateFormat