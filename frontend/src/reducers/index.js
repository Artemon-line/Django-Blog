import { combineReducers } from 'redux';
import posts from './posts';
import stats from './stats';

export default combineReducers({ posts, stats });
