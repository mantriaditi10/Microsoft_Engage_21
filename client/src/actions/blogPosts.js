import { CREATE_BLOG, FETCH_ALL_BLOGS, BOOKMARK, LIKE } from "../constants/actionTypes";
import * as api from '../api/index';

export const createBlogPost = (post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createBlogPost(post);
    dispatch({ type: CREATE_BLOG, payload: data });
    navigate(`/blogs/${data._id}`);
  } catch (error) {
    console.log("Getting error here");
    console.log(error);
  }
};

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts();
    dispatch({ type: FETCH_ALL_BLOGS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const bookmarkBlogPost = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.bookmarkPost(id, user);
    dispatch({ type: BOOKMARK, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id, user);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
}