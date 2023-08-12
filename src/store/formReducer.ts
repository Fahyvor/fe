// src/store/formReducer.js
import { ActionTypes } from './actionTypes';

const initialState = {
  name: '',
  phoneNumber: '',
  email: '',
  addresses: [''],
  remove: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_NAME:
      return { ...state, name: action.payload };
    // ... add cases for other form fields ...
    default:
      return state;
  }
};
    