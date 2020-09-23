import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import callAPI from './utils/callAPIMiddleware';

// import of reducers

const rootReducer = combineReducers({
  //list all imported reducers
});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());

// export const store = createStore(rootReducer, middleware);

export default createStore(rootReducer, middleware);
