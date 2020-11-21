// import createReducer from '../helpers/createReducer';
// You have the wrong path here
import createReducer from '../utils/createReducer';

import {
  REQ_NOTIFICATIONSTEXT_PENDING,
  REQ_NOTIFICATIONSTEXT_SUCCESS,
  REQ_NOTIFICATIONSTEXT_ERROR,
} from '../actionTypes';

const initialState = {
  // will hold each notification with ids as keys
  byId: {},
  // an array of all the ids
  // ! was four element array in "REQ_NOTIFICATIONS_SUCCESS" action
  // allIds: [],
  allIds: '',
  // needed for cache state
  loadedAt: 0,
  // tracking if the state is loading
  isLoading: false,
  // any errors loading all the data
  error: null,
  // Demo State for Reducer Connection
  // demoString: 'Demo String Display',
};

function notificationsPending(state, action) {
  // set loading state and clear error
  return {
    ...state,
    isLoading: true,
    error: null,
  };
}

function notificationsSuccess(state, action) {
  // clear loading and error, update cache time, add notifications
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce(
        (notifications, notification) => ({
          // keep the current object
          ...notifications, // add the notification id as the key and an notification object for loading
          [notification.id]: {
            data: notification,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        }),
        {}
      ),
    },
    allIds: [
      ...new Set([
        state.allIds,
        ...action.data.map((notification) => notification.id),
      ]),
    ],
  };
}
function notificationsError(state, action) {
  // clear loading and set error
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
}
export default createReducer(initialState, {
  [REQ_NOTIFICATIONSTEXT_ERROR]: notificationsPending,
  [REQ_NOTIFICATIONSTEXT_PENDING]: notificationsSuccess,
  [REQ_NOTIFICATIONSTEXT_SUCCESS]: notificationsError,
});
