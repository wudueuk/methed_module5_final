import style from './Photo.module.css';
import PropTypes from 'prop-types';
import Likes from './Likes';

export const Photo = ({photoData}) => {
  const {
    id,
    urls,
    likes,
  } = photoData;
  /* const userLiked = photoData['liked_by_user']; */

  return (
    <li className={style.photo} id={id}>
      <img className={style.image} src={urls.small} alt='' />
      <Likes likes={likes} />
    </li>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
