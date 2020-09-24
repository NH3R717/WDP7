import createReducer from '../utils/createReducer';
import {
  REQ_NOTIFICATIONS_PENDING,
  REQ_NOTIFICATIONS_SUCCESS,
  REQ_NOTIFICATIONS_ERROR,
  REQ_NOTIFICATION_PENDING,
  REQ_NOTIFICATION_SUCCESS,
  REQ_NOTIFICATION_ERROR,
  ADD_NOTIFICATION_PENDING,
  ADD_NOTIFICATION_SUCCESS,
  ADD_NOTIFICATION_ERROR,
  UPDATE_NOTIFICATION_PENDING,
  UPDATE_NOTIFICATION_SUCCESS,
  UPDATE_NOTIFICATION_ERROR,
} from '../actionTypes';

const initialState = {
  // will hold each notification with ids as keys
  byId: {},
  // an array of all the ids
  allIds: [],
  // needed for cache state
  loadedAt: 0,
  // tracking if the state is loading
  isLoading: false,
  // any errors loading all the data
  error: null,
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
    alllds: [
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
function notificationPending(state, action) {
  // set loading state and clear error
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        ...state.byId[action.payload.id],
        isLoading: true,
        error: null,
      },
    },
  };
}
function notificationSuccess(state, action) {
  // clear loading and error, update cache time, add notifications
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        isLoading: false,
        error: null,
        loadedAt: Date.now(),
        data: action.data,
      },
    },
    alllds: [...new Set([...state.allIds, action.payload.id])],
  };
}
function notificationError(state, action) {
  // clear loading and set error
  return {
    ...state,
    byld: {
      ...state.byId,
      [action.payload.id]: {
        ...state.byId[action.payload.id],
        isLoading: false,
        error: action.err,
      },
    },
  };
}
export default createReducer(initialState, {
  [REQ_NOTIFICATIONS_PENDING]: notificationsPending,
  [REQ_NOTIFICATIONS_SUCCESS]: notificationsSuccess,
  [REQ_NOTIFICATIONS_ERROR]: notificationsError,
  [REQ_NOTIFICATION_PENDING]: notificationPending,
  [REQ_NOTIFICATION_SUCCESS]: notificationSuccess,
  [REQ_NOTIFICATION_ERROR]: notificationError,
  [ADD_NOTIFICATION_PENDING]: notificationPending,
  [ADD_NOTIFICATION_SUCCESS]: notificationSuccess,
  [ADD_NOTIFICATION_ERROR]: notificationError,
  [UPDATE_NOTIFICATION_PENDING]: notificationPending,
  [UPDATE_NOTIFICATION_SUCCESS]: notificationSuccess,
  [UPDATE_NOTIFICATION_ERROR]: notificationError,
});
