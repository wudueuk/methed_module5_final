import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL, CLIENT_ID} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
  'photos/fetch',
  (newPage, {getState}) => {
    /* const token = getState().token.token; */
    let countPages = getState().photos.countPages;
    if (newPage && newPage !== '*') {
      countPages = newPage;
    }

    /* const after = getState().photos.after; */
    /* const status = getState().photos.status; */
    /* const isLast = getState().photos.isLast; */

    /* if (!token || status === '' || isLast || page === '*') return; */

    return axios.get(`${API_URL}/photos`,
      {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      })
      .then(({data: photos}) => ({photos, countPages}))
      .catch((err) => ({error: err.toString()}));
  }
);
