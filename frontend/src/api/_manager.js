import axios from 'axios';
import store from '../store';
import DEFINES from '@/defines';

const BASE_API_URL = DEFINES.BASE_API_URL;

async function callApi (url, payload) {
  store.dispatch ('app/showLoader');
  return axios
    .post (BASE_API_URL + url, payload)
    .then (response => {
      return parseResponse (response);
    })
    .catch (error => {
      //catch axios errors
      console.error(error);
      throw error;
    })
    .finally (function () {
      store.dispatch ('app/hideLoader');
    });
}


async function handleError (error) {
  throw error;
}

const parseResponse = response => {
  if (response.data.error) {
    return handleError (response.data.error);
  }

  if (response.status == 200) {
    return response.data.data;
  }

  // Unknown Stage
  throw {
    title: 'Unknown API response',
  };
};

export {
  callApi
};
