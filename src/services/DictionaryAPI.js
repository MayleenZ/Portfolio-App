import axios from "axios"

export const getWord = async (searchTerm) => {
    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}