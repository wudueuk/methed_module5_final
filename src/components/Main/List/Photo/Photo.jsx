import style from './Photo.module.css';
import {Link} from 'react-router-dom';
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
    <div className={style.photo} id={id}>
      <Link to={`photos/${id}`}>
        <img className={style.image} src={urls.small} alt='' />
      </Link>
      <Likes likes={likes} />
    </div >
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
