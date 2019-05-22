import { RECEIVE_ALL_POKEMON } from '../../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_POKEMON: 
            const { pokemon } = action;
            return merge({}, oldState, pokemon);

        default: 
            return state;
    }
}

export default pokemonReducer;