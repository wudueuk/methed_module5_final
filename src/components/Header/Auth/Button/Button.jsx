import style from './Button.module.css';
import notLogin from './img/notlogin.svg';
import {urlAuth} from '../../../../api/auth';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../../store/token/tokenReducer';
import {clearCode} from '../../../../store/codeReducer';
import {useAuth} from '../../../../hooks/useAuth';
import AuthLoader from './AuthLoader';

export const Button = () => {
  const dispatch = useDispatch();
  const [auth, loading, status, clearAuth] = useAuth();

  return (
    <div className={style.button}>
      {loading ? (<AuthLoader />) : auth.name ? (
        <>
          <img className={style.avatar}
            src={auth['profile_image'].small} alt='Аватар' />
          <div className={style.user}>
            <span>{auth.name}</span>
            <button className={style.exit} onClick={() => {
              dispatch(deleteToken());
              clearAuth();
              dispatch(clearCode());
            }}>Выйти</button>
          </div>
        </>
      ) : status === 'err' ? (
        <span className={style.error}>Ошибка</span>
      ) : (
        <a href={urlAuth}>
          <img src={notLogin} className={style.image} alt='Войти'
            title='Войти или зарегистироваться' />
        </a>
      )}
    </div>
  );
};
