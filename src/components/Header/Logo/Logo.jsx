import style from './Logo.module.css';
import logoImage from './img/logo.svg';

export const Logo = () => (
  <div className={style.logo}>
    <a href="/" className={style.link}>
      <img className={style.image} src={logoImage} alt='Логотип' />
    </a>
  </div>
);
