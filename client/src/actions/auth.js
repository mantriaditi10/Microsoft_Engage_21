import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Every API call for authentication related activities and dispatching respective actions

// Hitting signin API in server and dispatching Auth action 
export const signin = (formData, router, setError) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    router('/blogs');
  } catch (error) {
    console.log('Invalid Username or password');
    setError('Invalid Username or password');
    console.log(error);
  }
};

// Hitting signup API in server and dispatching Auth action
export const signup = (formData, router, setError) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    router('/blogs');
  } catch (error) {
    console.log('User Already Exists');
    setError('User Already Exists');
    console.log(error);
  }
};
