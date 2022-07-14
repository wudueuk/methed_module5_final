import {createSlice} from '@reduxjs/toolkit';
import {photosRequestAsync} from './actionPhotos';

const initialState = {
  photos: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  countPages: 1,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [photosRequestAsync.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [photosRequestAsync.fulfilled]: (state, action) => {
      state.photos = action.payload.photos;
      state.countPages = action.payload.countPages;
      state.error = '';
      state.status = 'loaded';
      state.isLast = !action.payload.after;
    },
    [photosRequestAsync.rejected]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
  },
});

export default photosSlice.reducer;

