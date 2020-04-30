import { GET_STATS } from '../actions/types';

const initialState = {
  stats: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
