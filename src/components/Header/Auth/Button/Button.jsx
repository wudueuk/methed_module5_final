import style from './Button.module.css';
import notLogin from './img/notlogin.svg';
import {urlAuth} from '../../../../api/auth';
import {useSelector, useDispatch} from 'react-redux';
import {deleteToken} from '../../../../store/tokenReducer';
import {useAuth} from '../../../../hooks/useAuth';

export const Button = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const [clearAuth] = useAuth();

  return (
    <button className={style.button}>
      {token ? (
        <>
          <b>You logined</b>
          <br />
          <span onClick={() => {
            clearAuth();
            dispatch(deleteToken());
          }}>Выйти</span>
        </>
      ) : (
        <a href={urlAuth}>
          <img src={notLogin} className={style.image} alt='Войти'
            title='Войти или зарегистироваться' />
        </a>
      )}
    </button>
  );
};
