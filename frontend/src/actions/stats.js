import axios from 'axios';
import { GET_STATS } from './types';

export const getStats = () => async (dispatch) => {
  const res = await axios.get('/api/stats/');
  dispatch({
    type: GET_STATS,
    payload: res.data,
  });
};
