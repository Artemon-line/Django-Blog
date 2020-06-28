import axios from 'axios';
import { GET_POSTS, ADD_POST } from './types';

export const getPosts = () => async (dispatch) => {
  const res = await axios.get('/posts/');
  dispatch({
    type: GET_POSTS,
    payload: res.data,
  });
};

export const addPost = formValues => async (dispatch) => {
  const res = await axios.post('/api/posts/', { ...formValues });
  dispatch({
    type: ADD_POST,
    payload: res.data
  });
}
