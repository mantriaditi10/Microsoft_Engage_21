import { CREATE_BLOG, FETCH_ALL_BLOGS, BOOKMARK, LIKE } from "../constants/actionTypes";

const blogReducer = (posts = [], action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return [...posts, action.payload];
    case FETCH_ALL_BLOGS:
      return [...posts, action.payload];
    case BOOKMARK:
      return [posts[0].map((post) => (post._id === action.payload._id ? action.payload : post))];
    case LIKE:
      return [posts[0].map((post) => (post._id === action.payload._id ? action.payload : post))];
    default:
      return posts;
  }
}

export default blogReducer;