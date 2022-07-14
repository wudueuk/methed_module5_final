import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authLogout, authRequestAsync} from '../store/auth/actionAuth';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const status = useSelector(state => state.auth.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, status, clearAuth];
};
