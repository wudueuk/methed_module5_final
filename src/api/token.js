/* import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from '../store/tokenReducer';
import {updateCode} from '../store/codeReducer'; */
/* import {
  API_TOKEN_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
} from './const'; */

export const setToken = token => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  /* const dispatch = useDispatch(); */

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
    token = localStorage.getItem('bearer');
    /* dispatch(updateCode(true)); */
  }

  /* if (location.search.includes('code')) {
    const storeCode = useSelector(state => state.code.code);
    const myCode = new URLSearchParams(location.search).get('code');

    if (storeCode) {
      axios({
        method: 'post',
        url: API_TOKEN_URL,
        data: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          code: myCode,
          grant_type: 'authorization_code',
        }
      })
        .then(({data}) => {
          token = data.access_token;
          setToken(token);
          dispatch(updateCode(true));
        })
        .catch((error) => console.error(error));
    }
  } */

  return token;
};
