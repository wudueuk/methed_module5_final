import {useDispatch} from 'react-redux';
import {updateCode} from '../store/codeReducer';
import {useToken} from '../hooks/useToken';
import {updateToken} from '../store/token/tokenReducer';

export const setToken = token => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
    token = localStorage.getItem('bearer');
  }

  if (location.search.includes('code')) {
    const dispatch = useDispatch();
    const code = new URLSearchParams(location.search).get('code');
    dispatch(updateCode(code));
    const token = useToken();
    dispatch(updateToken(token));
  }

  return token;
};
