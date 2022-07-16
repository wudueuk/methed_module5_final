import style from './SinglePhoto.module.css';
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import {API_URL, CLIENT_ID} from '../../../api/const';
import {ReactComponent as HeartIcon} from './img/heart.svg';
import {useSelector} from 'react-redux';

export const SinglePhoto = () => {
  const [photo, setPhoto] = useState(null);
  const token = useSelector(state => state.token.token);

  const {id} = useParams();

  const setLike = () => {
    axios({
      method: 'post',
      url: `${API_URL}/photos/${photo.id}/like`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        client_id: CLIENT_ID,
      },
    })
      .then(({data}) => {
        setPhoto(data.photo);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const deleteLike = () => {
    axios({
      method: 'delete',
      url: `${API_URL}/photos/${photo.id}/like`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        client_id: CLIENT_ID,
      },
    })
      .then(({data}) => {
        setPhoto(data.photo);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios.get(`${API_URL}/photos/${id}`, {
      params: {
        client_id: CLIENT_ID,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({data}) => {
        setPhoto(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className={style.body}>
      {photo && (
        <>
          <img src={photo.urls.regular} className={style.image} />
          <buttom className={style.likesBody}
            onClick={photo['liked_by_user'] ? deleteLike : setLike}>
            <HeartIcon className={photo['liked_by_user'] ?
              style.redHeart : style.heart} />
            <span className={style.likes}>{photo.likes}</span>
          </buttom>
          <Link to='/'>На главную</Link>
        </>
      )}
    </div>
  );
};
