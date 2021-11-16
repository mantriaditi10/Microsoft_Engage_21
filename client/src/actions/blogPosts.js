import { CREATE_BLOG } from "../constants/actionTypes";
import * as api from '../api/index';

export const createBlogPost = (post, navigate) => async (dispatch) => {
    try {
        console.log('Reaching here');
        const { data } = await api.createBlogPost(post);
        console.log(data);
        dispatch({type: CREATE_BLOG, payload: data});
        navigate(`/blogs/${data._id}`);
    } catch (error) {
        console.log("Getting error here");
        console.log(error);
    }
};