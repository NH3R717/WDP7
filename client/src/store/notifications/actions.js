import { v4 as uuid } from 'uuid';
import API from '../../API';
import { shouldLoad } from '../utils';

import {
  REQ_NOTIFICATIONS_PENDING,
  REQ_NOTIFICATIONS_SUCCESS,
  REQ_NOTIFICATIONS_ERROR,
  // REQ_NOTIFICATION_PENDING,
  // REQ_NOTIFICATION_SUCCESS,
  // REQ_NOTIFICATION_ERROR,
  ADD_NOTIFICATION_PENDING,
  ADD_NOTIFICATION_SUCCESS,
  ADD_NOTIFICATION_ERROR,
  UPDATE_NOTIFICATION_PENDING,
  UPDATE_NOTIFICATION_SUCCESS,
  UPDATE_NOTIFICATION_ERROR,
  DELETE_NOTIFICATION_PENDING,
  DELETE_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION_ERROR,
} from '../actionTypes';

// cache data for 5 minutes
const CACHE_TIME = 1000 * 60 * 5;

export const fetchNotifications = () => ({
  // types for this action - "request, success, error"
  types: [
    REQ_NOTIFICATIONS_PENDING,
    REQ_NOTIFICATIONS_SUCCESS,
    REQ_NOTIFICATIONS_ERROR,
  ],
  //  a function used to call the api
  // callAPI: () => API.get(`/notifications/${id}`),
  callAPI: () => API.get(`/notifications`),
  // receives the current app state and returns true if we should call the api
  shouldCallAPI: (state) => {
    console.log('38 action.js fetchNotifications ', JSON.stringify(state.notifications));
    console.log('redux state >>>®', state, '39 action.js notification ', JSON.stringify(state.notifications))
    const notification = state.notifications;
    // ! why won't the console log show up?
    console.log(notification)
    const { loadedAt, isLoading } = notification;
    // if notification notifications are currently loading don't call again
    if (!notification || isLoading) return false;

    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the notification notification or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached;
  },
});

// ! alternate get all
// export const fetchNotifications = () => async (dispatch, getState) => {
//   const { notifications: { notificationsLoadedAt } } = getState();
//   if (!shouldLoad(notificationsLoadedAt)) return;
//   const userNotification = await API.get('/notifications');
//   dispatch({ type: [
//         REQ_NOTIFICATIONS_PENDING,
//         REQ_NOTIFICATIONS_SUCCESS,
//         REQ_NOTIFICATIONS_ERROR,
//       ], userNotifications });
// };

// !
// export const fetchNotifications = () => ({
//   // types for this action - "request, success, error"
//   types: [
//     REQ_NOTIFICATIONS_PENDING,
//     REQ_NOTIFICATIONS_SUCCESS,
//     REQ_NOTIFICATIONS_ERROR,
//   ],
//   //  a function used to call the api
//   // callAPI: () => API.get(`/notifications/${id}`),
//   callAPI: () => API.get(`/notifications`),
//   // receives the current app state and returns true if we should call the api
//   shouldCallAPI: (state) => {
//     console.log('redux state >>>>', state)
//     const notification = state.notifications;
//     // console.log('38 action.js notification ' + JSON.stringify(notification));
//     const { loadedAt, isLoading } = notification;
//     // if notification notifications are currently loading don't call again
//     if (!notification || isLoading) return false;

//     const isCached = Date.now() - loadedAt < CACHE_TIME;
//     // if we don't have the notification notification or it's beyond the cache timeout make the api call
//     return !loadedAt || !isCached;
//   },
// });
// action>>>   Object { id: {…}, flags: "123" }
// action>>>  123
// !
export const createNotification = ({flags}) => {
// export const createNotification = ({flags}) => {
  // create a uuid for this notification so that we can use it in the reducer for pending and loading
  console.log("action>>> ",flags)
  const id = uuid();
  
  console.log("actions.js createNotification()", {id})
  return {
    types: [
      ADD_NOTIFICATION_PENDING,
      ADD_NOTIFICATION_SUCCESS,
      ADD_NOTIFICATION_ERROR,
    ],
    // ! 
    callAPI: () => API.post('/notifications', { flags, id }),
    payload: { id },
  };
};

// !
export const updateNotification = (notification) => {
  console.log("action.js/updateNotification()", notification)
  return {
  types: [
    UPDATE_NOTIFICATION_PENDING,
    UPDATE_NOTIFICATION_SUCCESS,
    UPDATE_NOTIFICATION_ERROR,
  ],
  callAPI: () => API.put(`/notifications/${notification.id}`, notification),
  payload: { id: notification.id },
}
};

// !
// export const deleteNotification = (id) => ({
//   types: [
//     DELETE_NOTIFICATION_PENDING,
//     DELETE_NOTIFICATION_SUCCESS,
//     DELETE_NOTIFICATION_ERROR,
//   ],
//   callAPI: () => API.delete(`/notifications/${id}`),
//   payload: { id },
// });


// export const deleteNotification = (notification) => ({
  

//   types: [
//     DELETE_NOTIFICATION_PENDING,
//     DELETE_NOTIFICATION_SUCCESS,
//     DELETE_NOTIFICATION_ERROR,
//   ],
  
//   callAPI: () => API.delete(`/notifications/${notification.id}`, notification),
//   payload: { id: notification.id },
  
// });


export const deleteNotification = (notification) => {
  
  console.log("actions.js/deleteNotification()", notification)

  return {
  types: [
    DELETE_NOTIFICATION_PENDING,
    DELETE_NOTIFICATION_SUCCESS,
    DELETE_NOTIFICATION_ERROR,
  ],
  // callAPI: () => API.get(`/notifications`),
  callAPI: () => API.delete(`/notifications/${notification.id}`, notification),
  payload: { id: notification.id }
  
}
};
