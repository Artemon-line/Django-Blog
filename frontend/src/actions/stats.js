import Axios from 'axios';
import { GET_STATS } from './types';

export const getStats = () => (dispatch) => {
  Axios.get('/api/stats/').then((res) => {
    dispatch({
      type: GET_STATS,
      payload: res.data,
    }).catch((err) => console.log(err));
  });
};
