import { GET_POSTS, ADD_POST } from '../actions/types';

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};
