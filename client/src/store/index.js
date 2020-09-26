import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'; //added this dependency
import { createLogger } from 'redux-logger'; //added this dependency

// Import your reducers
import notifications from './notifications/reducer';

import callAPI from './utils/callAPIMiddleware';

const rootReducer = combineReducers({
  notifications,
});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());
export default createStore(rootReducer, middleware);
