import { combineReducers } from 'redux';

import auth from './auth';
import blogPosts from './blogPosts';

// Combine the logical division made in reducer function 
// for differnt project modules under one reducer
export const reducers = combineReducers({ auth, blogPosts });