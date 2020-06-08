import * as queryString from 'query-string';

function getFetchUrl(args) {
  const apiSuffix = '/api/test/v1';
  return apiSuffix + args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : '');
}

function getFetchArgs(args) {
  const headers = {};
  headers['Content-Type'] = 'application/json';
  headers.Accept = 'application/json';
  headers['Accept-Language'] = 'ua';

  let body;
  if (args.request) {
    if (args.type === 'GET') {
      throw new Error('GET request does not support request body.');
    }
    body = JSON.stringify(args.request);
  }
  return {
    method: args.type,
    headers,
    ...(args.request === 'GET' ? {} : { body })
  };
}

export async function throwIfResponseFailed(res) {
  if (!res.ok) {
    let parsedException = 'Something went wrong with request!';
    try {
      parsedException = await res.json();
    } catch (err) {
      //
    }
    throw parsedException;
  }
}

export default async function apiRequest(args) {
  const res = await fetch(
    getFetchUrl(args),
    getFetchArgs(args)
  );
  await throwIfResponseFailed(res);
  return res;
}
