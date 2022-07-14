import style from './Likes.module.css';
import PropTypes from 'prop-types';

export const Likes = ({likes}) => (
  <span className={style.likes}>{likes}</span>
);

Likes.propTypes = {
  likes: PropTypes.number,
};
