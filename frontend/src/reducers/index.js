import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';
import stats from './stats';

export default combineReducers({ posts, stats, form: formReducer });
