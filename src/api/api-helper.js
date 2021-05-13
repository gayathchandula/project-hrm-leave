import axios from 'axios';

const baseURL = `http://localhost:5000/api/v1/`;

export async function put(url, data, authenticationRequired) {
  let options = {
    data,
    baseURL,
    url,
    method: 'put',
    responseType: 'json'
  };

  const token = getToken();
  options = await addRequestHeaders(options, authenticationRequired, token);
  return axios(options);
}

export async function post(url, data, authenticationRequired) {
  let options = {
    data,
    baseURL,
    url,
    method: 'post',
    responseType: 'json'
  };

  const token = getToken();
  options = await addRequestHeaders(options, authenticationRequired, token);
  return axios(options);
}

export async function get(url, authenticationRequired) {
  let options = {
    baseURL,
    url,
    method: 'get',
    responseType: 'json'
  };

  const token = getToken();
  options = await addRequestHeaders(options, authenticationRequired, token);
  return axios(options);
}

export async function remove(url, authenticationRequired) {
  let options = {
    baseURL,
    url,
    method: 'delete',
    responseType: 'json'
  };

  const token = getToken();
  options = await addRequestHeaders(options, authenticationRequired, token);
  return axios(options);
}

async function addRequestHeaders(options, authenticationRequired, token) {
  options.headers = {};
  if (authenticationRequired) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  return options;
}

export function getToken() {
  return localStorage.getItem('Token');
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      // Set the variable for keeping track of the retry count
      originalRequest.__retryCount = originalRequest.__retryCount || 0;
      // Check if we've maxed out the total number of retries
      if (originalRequest.__retryCount > 3) {
        // Reject with the error
        throw error.response ? error.response.data : error;
      } else {
        if (error.response.data.message === 'Unauthorized') {
          try {
            // await cognitoUtils.refreshSession();
            originalRequest._retry = true;
            originalRequest.__retryCount += 1;

            if (originalRequest.headers.Authorization) {
              const token = getToken();
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axios(originalRequest);
          } catch (e) {
            console.log(e);
            // window.location.href = cognitoUtils.getCognitoSignInUri();
            throw e;
          }
        } else {
          window.location.href = '/access-denied';
          throw error;
        }
      }
    } else {
      throw error.response ? error.response.data : error;
    }
  }
);
