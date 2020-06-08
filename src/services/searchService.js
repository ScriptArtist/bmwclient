import apiRequest from 'src/helpers/apiRequestHelper';

export const getTerms = async () => {
  const response = await apiRequest({
    endpoint: '/search/terms',
    type: 'GET'
  });
  return response.json();
};

export const getBrands = async () => {
  const response = await apiRequest({
    endpoint: '/search/brands_terms',
    type: 'GET'
  });
  return response.json();
};

export const getStyles = async () => {
  const response = await apiRequest({
    endpoint: '/search/styles',
    type: 'GET'
  });
  return response.json();
};

export const parseSearch = async searchParams => {
  const response = await apiRequest({
    endpoint: '/search/parse_link',
    type: 'GET',
    query: searchParams
  });
  return response.json();
};
