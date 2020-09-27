import uuid from 'uuid/v4';
import API from '../../API';

import {
  REQ_ITEMS_PENDING,
  REQ_ITEMS_SUCCESS,
  REQ_ITEMS_ERROR,
  REQ_ITEM_PENDING,
  REQ_ITEM_SUCCESS,
  REQ_ITEM_ERROR,
  ADD_ITEM_PENDING,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  UPDATE_ITEM_PENDING,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from '../actionTypes';

// cache data for 5 minutes
const CACHE_TIME = 1000 * 60 * 5;

export const fetchItems = () => ({
  // types for this action - "request, success, error"
  types: [REQ_ITEMS_PENDING, REQ_ITEMS_SUCCESS, REQ_ITEMS_ERROR],
  //  a function used to call the api
  callAPI: () => API.get('/items'),
  // receives the current app state and returns true if we should call the api
  shouldCallAPI: (state) => {
    const { loadedAt, isLoading } = state.items;
    // if item items are currently loading don't call again
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item item or it's beyond the cache timeout make the api call
    return !loadedAt || !isCached;
  },
});

export const createItem = (item) => {
  // create a uuid for this item so that we can use it in the reducer for pending and loading
  const id = uuid();
  return {
    types: [ADD_ITEM_PENDING, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR],
    callAPI: () => API.post('/items', { ...item, id }),
    payload: { id },
  };
};

export const fetchItem = (id) => ({
  //
  types: [REQ_ITEM_PENDING, REQ_ITEM_SUCCESS, REQ_ITEM_ERROR],
  //
  callAPI: () => API.get(`/items/${id}`),
  //
  shouldCallAPI: (state) => {
    const item = state.items.byId[id] || {};
    const { loadedAt, isLoading } = item;
    if (!item || isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
  payload: { id },
});

export const updateItem = (item) => ({
  types: [UPDATE_ITEM_PENDING, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_ERROR],
  callAPI: () => API.put(`/items/${item.id}`, item),
  payload: { id: item.id },
});

// Commented out to bypass errors
// export const deleteItem = (id) => ({
//   types: [DELETE_ITEM_PENDING, DELETE_ITEM_SUCCESS, DELETE_ITEM_ERROR],
//   callAPI: () => API.delete(`/items/${id}`),
//   payload: { id },
// });
