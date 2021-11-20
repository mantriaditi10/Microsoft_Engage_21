import React, { useState } from 'react'
import { Grid, Card, Box, CardContent, Typography, Button, CardMedia } from '@mui/material'
import { useDispatch } from "react-redux";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from 'moment';
import { bookmarkBlogPost, likePost } from '../../../actions/blogPosts'

const Post = (props) => {
  const post = props.post;
  const dispatch = useDispatch();
  const user = props.user;
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const handleBookmark = () => {
    setIsBookmarked(true);
    dispatch(bookmarkBlogPost(post._id, { userId: user.result._id }));
  }

  const handleLike = () => {
    dispatch(likePost(post._id));
  }

  return (
    <Grid item sx={{ m: 3 }}>
      <Card sx={{ display: "flex", boxShadow: 3 }}>
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
            {post.tags.map((tag) => `#${tag}`)}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, mt: 1 }}>
            <Button endIcon={<ReadMoreIcon />} variant="outlined" sx={{ mr: 1 }} color="primary">Read</Button>
            {
              isBookmarked || props.page === 'bookmarks' ?
                <Button endIcon={<BookmarkAddedIcon />} variant="contained" sx={{ mr: 1 }} color="primary">Bookmarked</Button>
                : <Button endIcon={<BookmarkAddIcon />} onClick={handleBookmark} variant="outlined" sx={{ mr: 1 }} color="primary">Bookmark</Button>
            }
            <Button endIcon={<ThumbUpIcon />} variant="outlined" onClick={handleLike} sx={{ mr: 1 }} color="primary">Like</Button>
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
