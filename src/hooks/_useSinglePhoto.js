import {useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {API_URL, CLIENT_ID} from '../api/const';

export const useSinglePhoto = ({id}) => {
  useEffect(() => {
    axios.get(`${API_URL}/photos/${id}`, {
      params: {
        client_id: CLIENT_ID,
      }
    })
      .then(({data}) => (data))
      .catch(err => {
        console.error(err);
      });
  });
};

useSinglePhoto.propTypes = {
  photoData: PropTypes.string,
};
