import { GET_STATS } from '../actions/types';

const initialState = {
  stats: { posts: 0, users: 0, comments: 0, likes: 0 },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
