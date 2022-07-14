import style from './Photo.module.css';
import PropTypes from 'prop-types';

export const Photo = ({photoData}) => {
  const {
    id,
    urls,
  } = photoData;

  return (
    <li className={style.photo} id={id}>
      <img src={urls.small} alt='' />
    </li>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
