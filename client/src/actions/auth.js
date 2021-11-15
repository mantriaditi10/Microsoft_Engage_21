import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router, setError) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router('/home');
  } catch (error) {
    console.log('Invalid Username or password');
    setError('Invalid Username or password');
    console.log(error);
  }
};

export const signup = (formData, router, setError) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router('/home');
  } catch (error) {
    console.log('User Already Exists');
    setError('User Already Exists');
    console.log(error);
  }
};
