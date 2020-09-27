import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'; //added this dependency
import { createLogger } from 'redux-logger'; //added this dependency

// Import your reducers
import notifications from './notifications/reducer';

import callAPI from './utils/callAPIMiddleware';

// import of reducers
import notifications from './notifications/reducer';
import direct_messages from './direct_messages/reducer';
import images from './images/reducer';
import audio from './audio/reducer';
import video from './video/reducer';

const rootReducer = combineReducers({
  //list all imported reducers
  notifications,
  direct_messages,
  images,
  audio,
  video,
});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());

const store = createStore(rootReducer, middleware);

export default store;
