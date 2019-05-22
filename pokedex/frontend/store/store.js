import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
// import logger from 'redux-logger';

const middlewares = [thunk];


if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}


const configureStore = () => createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
);


export default configureStore;
