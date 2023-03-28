export const DictionaryAPI = async () => {
    try{
        const response = await fetch (
            ''
        )
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error);
    }
    
}

export default DictionaryAPI