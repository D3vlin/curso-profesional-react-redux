// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";
// import { pokemonsReducer } from "./pokemons";
// import { uiReducer } from "./ui";
import dataReducer from '../slices/dataSlice'

export const rootReducer = combineReducers({
    data: dataReducer,
    // ui: uiReducer
})