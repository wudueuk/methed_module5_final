import {useState} from 'react';
import style from './Photo.module.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Likes from './Likes';

export const Photo = ({photoData}) => {
  const {
    id,
    urls,
    likes,
    alt_description: alt,
  } = photoData;
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className={style.photo} id={id}>
        <Link to={`photos/${id}`}>
          <img src={urls.small} alt={alt} className={style.image}
            onLoad={() => {
              setLoading(false);
            }
            } />
        </Link>
        <div className={style.body}>
          {loading ? '' : <Likes likes={likes} />}
        </div>
      </div>
    </>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object,
};
