import axios from 'axios';
import { GET_POSTS } from './types';

export const getPosts = () => async (dispatch) => {
  const res = await axios.get('/posts/');
  dispatch({
    type: GET_POSTS,
    payload: res.data,
  });
};
