import style from './List.module.css';
import Photo from './Photo';
import {useEffect, useRef} from 'react';
import {Outlet} from 'react-router-dom';
import {photosRequestAsync} from '../../../store/photos/actionPhotos';
import {useSelector, useDispatch} from 'react-redux';
import Masonry from 'react-masonry-css';

export const List = () => {
  const photos = useSelector(state => state.photos.photos);
  const countPages = useSelector(state => state.photos.countPages);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosRequestAsync());
  }, [countPages]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const nextPage = countPages + 1;
        dispatch(photosRequestAsync(nextPage));
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className={style._container}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={style.masonryGrid}
        columnClassName={style.masonryGridColumn} >
        {photos.map(elem => (
          <Photo key={elem.id} photoData={elem} />
        ))}
        <span ref={endList} />
        <Outlet />
      </Masonry>
    </div>
  );
};
