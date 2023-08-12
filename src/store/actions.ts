// src/store/actions.js
import { ActionTypes } from './actionTypes';

export const setName = (name) => ({
  type: ActionTypes.SET_NAME,
  payload: name,
});

// ... create other action creators ...
