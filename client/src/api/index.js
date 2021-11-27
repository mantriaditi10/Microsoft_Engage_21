import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

//Auth API calls
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

//Blog Posts API calls

// GET 
export const fetchBlogPosts = () => API.get('/blogs');
export const fetchBlog = (id) => API.get(`/blogs/${id}`);

// PATCH
export const bookmarkPost = (id, user) => API.patch(`/blogs/${id}/bookmark`, user);
export const likePost = (id, user) => API.patch(`/blogs/${id}/like`, user);

// POST
export const createBlogPost = (newBlogPost) => API.post('/blogs', newBlogPost);
export const commentPost = (id, comment) => API.post(`/blogs/${id}/comment`, { comment });