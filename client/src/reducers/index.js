import { combineReducers } from 'redux';

import auth from './auth';
import blogPosts from './blogPosts';

export const reducers = combineReducers({ auth, blogPosts });