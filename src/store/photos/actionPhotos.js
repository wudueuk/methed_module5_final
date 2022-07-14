import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL, CLIENT_ID} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
  'photos/fetch',
  (newPage, {getState}) => {
    let countPages = getState().photos.countPages;
    let prevPhotos = [];
    if (newPage) {
      countPages = newPage;
      prevPhotos = getState().photos.photos;
    }

    return axios(
      `${API_URL}/photos?per_page=15${newPage ? `&page=${newPage}` : ``}`,
      {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      })
      .then(({data: newPhotos}) => {
        const photos = [...prevPhotos, ...newPhotos];
        return {photos, countPages};
      })
      .catch((err) => ({error: err.toString()}));
  }
);
