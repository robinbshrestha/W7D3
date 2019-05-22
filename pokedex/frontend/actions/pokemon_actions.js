import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";


export const receiveAllPokemon = pokemon => {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon
    };
};


export const requestAllPokemon = () => {
    return dispatch => {
        return APIUtil.fetchAllPokemon().then(pokemon => {
            return dispatch(receiveAllPokemon(pokemon));
        });
    };
};