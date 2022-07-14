import style from './Button.module.css';
import notLogin from './img/notlogin.svg';
import {urlAuth} from '../../../../api/auth';
import {useSelector, useDispatch} from 'react-redux';
import {deleteToken} from '../../../../store/token/tokenReducer';
import {clearCode} from '../../../../store/codeReducer';
import {useAuth} from '../../../../hooks/useAuth';

export const Button = () => {
  const code = useSelector(state => state.code.code);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const [auth] = useAuth();

  return (
    <button className={style.button}>
      {token ? (
        <>
          <b>{auth.name}</b>
          <br />
          <span onClick={() => {
            dispatch(deleteToken());
            dispatch(clearCode());
          }}>Выйти</span>
        </>
      ) : !code ? (
        <a href={urlAuth}>
          <img src={notLogin} className={style.image} alt='Войти'
            title='Войти или зарегистироваться' />
        </a>
      ) : (<></>)}
    </button>
  );
};
