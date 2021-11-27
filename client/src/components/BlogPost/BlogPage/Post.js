import React from 'react'
import { Grid, Card, Box, CardContent, Typography, Button, CardMedia } from '@mui/material'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from 'moment';
import { bookmarkBlogPost, likePost } from '../../../actions/blogPosts'

// Individual Post Card
const Post = (props) => {
  const post = props.post;
  const dispatch = useDispatch();
  const user = props.user;
  const navigate = useNavigate();

  const handleBookmark = () => {
    dispatch(bookmarkBlogPost(post._id, { userId: user.result._id }));
  }

  const handleLike = () => {
    dispatch(likePost(post._id, { userId: user.result._id }));
  }

  const readMore = () => {
    navigate(`/blogs/${post._id}`);
  }

  return (
    <Grid item sx={{ m: 3 }}>
      <Typography fontSize="" variant="overline" color="blue" >
        {post.category === 'Assignment' ? " Assignment for Peer Review" : " Blog Post"}
      </Typography>
      <Card sx={{ display: "flex", boxShadow: 8 }}>
        <CardContent sx={{ flex: '1', ml: 2 }}>
          <Typography fontFamily="cursive" component="div" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            by {post.name} in {post.category}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Typography variant="subtitle2" fontStyle="italic" color="text.secondary" component="div">
            {post.tags.map((tag) => `#${tag}  `)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, mt: 1 }}>
            <Button startIcon={<ReadMoreIcon />} variant="outlined" onClick={readMore} color="primary">Read</Button>
            {
              post.bookmarks.includes(user.result._id) || props.page === 'bookmarks' ?
                <Button startIcon={<BookmarkAddedIcon />} variant="text" disabled color="primary">{post.bookmarks.length}</Button>
                : <Button startIcon={<BookmarkAddIcon />} onClick={handleBookmark} variant="text" color="primary">{post.bookmarks.length}</Button>
            }
            <Button 
              startIcon={<ThumbUpIcon />} 
              disabled={post.likes.includes(user.result._id)} 
              variant="text" 
              onClick={handleLike} 
              color="primary"
            >
              {post.likes.length}
            </Button>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={post.selectedFile || 'https://source.unsplash.com/random'}
          alt={post.title}
        />
      </Card>
    </Grid>
  );
}

export default Post
