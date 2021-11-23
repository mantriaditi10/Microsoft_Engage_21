import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import Post from './Post';
import { useSelector } from 'react-redux';

const Posts = (props) => {
  const filters = props.filters;
  const posts = useSelector((state) => state.blogPosts.blogPosts);
  const user = JSON.parse(localStorage.getItem('profile'));
  const hashtag = props.hashtag;
  
  var filteredPosts;
  if (posts && hashtag !== '') {
    filteredPosts = posts.filter((post) => post.tags.includes(hashtag));
    filteredPosts = filteredPosts.filter((post) => post.category === filters.category || filters.category === "Show All");
  }
  else if (posts) {
    filteredPosts = posts.filter((post) => post.category === filters.category || filters.category === "Show All");
  }

  if (filteredPosts && filters.other === 'Most Liked') {
    filteredPosts = filteredPosts.sort((a, b) => b.likes.length - a.likes.length);
  }
  else if (filteredPosts && filters.other === 'Most Bookmarked') {
    filteredPosts = filteredPosts.sort((a, b) => b.bookmarks.length - a.bookmarks.length);
  }
  else if (filteredPosts && filters.other === 'Newest First') filteredPosts = filteredPosts.reverse();

  if (filteredPosts && props.page === 'bookmarks') {
    filteredPosts = filteredPosts.filter((post) => post.bookmarks.includes(user.result._id));
  }

  return (
    !posts ? (<Grid item xs={12} md={8}><CircularProgress />LOADING POSTS.. </Grid>) :
      (<Grid item xs={12} md={8}>
        {filteredPosts.map(post => <Post key={post._id} post={post} user={user} page={props.page} />)}
      </Grid>)
  );
}

export default Posts
