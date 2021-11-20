import React, { useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import Post from './Post';
import { useSelector } from 'react-redux';

const Posts = (props) => {
  const category = props.category;
  const t = useSelector((state) => state.blogPosts);
  const user = JSON.parse(localStorage.getItem('profile'));
  const posts = t[0];
  if (posts) {
    var filteredPosts = posts.filter((post) => post.category === category || category === "Show All");
  }
  if (filteredPosts) var finalPosts = filteredPosts.reverse();
  if (props.page === 'bookmarks') {
    finalPosts = filteredPosts.filter((post) => post.bookmarks.includes(user.result._id));
  }

  return (
    !posts ? (<Grid item xs={12} md={8}><CircularProgress />LOADING POSTS.. </Grid>) :
      (<Grid item xs={12} md={8}>
        {finalPosts.map(post => <Post key={post._id} post={post} user={user} page={props.page} />)}
      </Grid>)
  );
}

export default Posts
