import style from './Header.module.css';
import Logo from './Logo';
import Auth from './Auth';

export const Header = () => (
  <div className={style.header}>
    <Logo />
    <Auth />
  </div>
);
