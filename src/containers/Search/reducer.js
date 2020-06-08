import { SET_TERMS, SET_BRANDS, SET_STYLES } from './actionTypes';

const initialState = {
  terms: [],
  brands: [],
  styles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TERMS:
      return {
        ...state,
        terms: action.payload
      };
    case SET_BRANDS:
      return {
        ...state,
        brands: action.payload
      };
    case SET_STYLES:
      return {
        ...state,
        styles: action.payload
      };
    default:
      return state;
  }
};
