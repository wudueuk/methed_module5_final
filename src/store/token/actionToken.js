import axios from 'axios';
import {
  API_TOKEN_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
} from '../../api/const';
import {updateToken, deleteToken} from './tokenReducer';

export const tokenRequestAsync = (codeApp) => (dispatch, getState) => {
  axios({
    method: 'post',
    url: API_TOKEN_URL,
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code: codeApp,
      grant_type: 'authorization_code',
    },
  })
    .then(({data}) => {
      dispatch(updateToken(data.access_token));
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteToken());
    });
};
