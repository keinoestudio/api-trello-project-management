const setDefault = (value, defaultValue ) => {

    try{
        return value && value.trim() !== "" ? value : defaultValue
    }catch(err){
        console.log("Error processing data", err)
    }
}

export default setDefault