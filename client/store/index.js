import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import callAPI from './utils/callAPIMiddleware';

const rootReducer = combineReducers({});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());
export default createStore(rootReducer, middleware);
