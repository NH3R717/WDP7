import uuid from 'uuid/v4';
import API from '../../../../API';

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
} from '../../actionTypes';

// cache data for 5 minutes
const CACHE_TIME = 1000 * 60 * 5;

export const fetchItems = () => ({
  // types for this action - "request, success, error"
  types: [
    REQ_NOTIFICATIONS_PENDING,
    REQ_NOTIFICATIONS_SUCCESS,
    REQ_NOTIFICATIONS_ERROR,
  ],
  //  a function used to call the api
  callAPI: () => API.get('/notifications'),
  // receives the current app state and returns true if we should call the api
  shouldCallAPI: (state) => {
    const { loadedAt, isLoading } = state.notifications;
    // if notification notifications are currently loading don't call again
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the notification notification or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached;
  },
});

export const createItem = (notification) => {
  // create a uuid for this notification so that we can use it in the reducer for pending and loading
  const id = uuid();
  return {
    types: [
      ADD_NOTIFICATION_PENDING,
      ADD_NOTIFICATION_SUCCESS,
      ADD_NOTIFICATION_ERROR,
    ],
    callAPI: () => API.post('/notifications', { ...notification, id }),
    payload: { id },
  };
};

export const fetchItem = (id) => ({
  //
  types: [
    REQ_NOTIFICATION_PENDING,
    REQ_NOTIFICATION_SUCCESS,
    REQ_NOTIFICATION_ERROR,
  ],
  //
  callAPI: () => API.get(`/notifications/${id}`),
  //
  shouldCallAPI: (state) => {
    const notification = state.notifications.byId[id] || {};
    const { loadedAt, isLoading } = notification;
    if (!notification || isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
  payload: { id },
});

export const updateItem = (notification) => ({
  types: [
    UPDATE_NOTIFICATION_PENDING,
    UPDATE_NOTIFICATION_SUCCESS,
    UPDATE_NOTIFICATION_ERROR,
  ],
  callAPI: () => API.put(`/notifications/${notification.id}`, notification),
  payload: { id: notification.id },
});

export const deleteItem = (id) => ({
  types: [
    DELETE_NOTIFICATION_PENDING,
    DELETE_NOTIFICATION_SUCCESS,
    DELETE_NOTIFICATION_ERROR,
  ],
  callAPI: () => API.delete(`/notifications/${id}`),
  payload: { id },
});
