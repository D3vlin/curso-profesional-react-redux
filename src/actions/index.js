import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

export const setPokemonsActions = (payload) => ({
    type: SET_POKEMONS,
    payload
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)))
    dispatch(setPokemonsActions(pokemonDetailed))
}