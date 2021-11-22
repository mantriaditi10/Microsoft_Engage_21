import { CREATE_BLOG, FETCH_ALL_BLOGS, BOOKMARK, LIKE, FETCH_BLOG, COMMENT } from "../constants/actionTypes";

const blogReducer = (state = { blogPosts: [] }, action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return { ...state ,blogPosts: [...state.blogPosts, action.payload] };
    case FETCH_ALL_BLOGS:
      return { ...state ,blogPosts: [...state.blogPosts, action.payload] };
    case FETCH_BLOG:
      return { ...state, post: action.payload };
    case BOOKMARK:
      return { ...state ,blogPosts: state.blogPosts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case LIKE:
      return { ...state ,blogPosts: state.blogPosts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case COMMENT:
      return { ...state ,blogPosts: state.blogPosts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    default:
      return state;
  }
}

export default blogReducer;