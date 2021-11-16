import { CREATE_BLOG } from "../constants/actionTypes";

const blogReducer =  (state = { isLoading: true, posts: [] }, action) => {
    switch(action.type) {
        case CREATE_BLOG:
            return {...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
}

export default blogReducer;