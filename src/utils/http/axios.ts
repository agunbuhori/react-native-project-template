import Axios from 'axios';
import {BASE_URL} from '@env';
import {store} from '@/store';

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

store.subscribe(() => {
  const authState = store.getState().auth;

  if (authState.token) {
    console.log(authState.token);
  }
});

export default axios;
