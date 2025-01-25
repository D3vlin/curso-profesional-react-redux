import axios from "axios"

const getPokemons = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return data.results;

    } catch (error) {
        console.error('There was an error: ', error);
    }
}

export { getPokemons }