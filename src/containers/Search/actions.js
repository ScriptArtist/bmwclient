import * as searchService from 'src/services/searchService';
import { SET_TERMS, SET_BRANDS, SET_STYLES } from './actionTypes';

export const loadTerms = async dispatch => {
  const terms = await searchService.getTerms();
  dispatch({ type: SET_TERMS, payload: terms.data });
};

export const loadBrands = async dispatch => {
  const terms = await searchService.getBrands();
  dispatch({ type: SET_BRANDS, payload: terms.data });
};

export const loadStyles = async dispatch => {
  const terms = await searchService.getStyles();
  dispatch({ type: SET_STYLES, payload: terms.data });
};

export const parseSearch = async (dispatch, initialSearchParams) => {
  console.log('fff', initialSearchParams);
  const search = await searchService.parseSearch(initialSearchParams);
  if (search.service.id) dispatch({ type: SET_TERMS, payload: [search.service] });
  if (search.brand.id) dispatch({ type: SET_BRANDS, payload: [search.brand] });
  if (search.style.id) dispatch({ type: SET_STYLES, payload: [search.style] });
};

export const loadDetails = initialSearchParams => async dispatch => {
  await parseSearch(dispatch, initialSearchParams);
  await loadTerms(dispatch);
  await loadBrands(dispatch);
  await loadStyles(dispatch);
};

