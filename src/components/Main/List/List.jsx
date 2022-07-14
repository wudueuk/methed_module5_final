/* import {useDispatch} from 'react-redux'; */
import style from './List.module.css';
import Photo from './Photo';
import {useEffect} from 'react';
/* import {Outlet} from 'react-router-dom'; */
import {photosRequestAsync} from '../../../store/photos/actionPhotos';
import {useSelector, useDispatch} from 'react-redux';

export const List = () => {
  const photos = useSelector(state => state.photos.photos);
  const countPages = useSelector(state => state.photos.countPages);
  /* const endList = useRef(null); */
  const dispatch = useDispatch();
  /* const {page} = useParams(); */
  /* const navigate = useNavigate(); */

  useEffect(() => {
    dispatch(photosRequestAsync());
  }, [countPages]);

  return (
    <div className={style._container}>
      <ul className={style.list}>
        {photos.map(elem => (
          <Photo key={elem.id} photoData={elem} />
        ))}
      </ul>
    </div>
  );
};
