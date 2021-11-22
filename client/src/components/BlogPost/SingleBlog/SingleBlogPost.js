import React, { useState, useEffect } from 'react'
import Navbar from '../../NavBar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchBlog } from "../../../actions/blogPosts";
import { Paper, CircularProgress, Container, Grid, Typography } from '@mui/material';
import moment from 'moment';
import CommentSection from './CommentSection';

const SingleBlogPost = () => {
  const post = useSelector(state => state.blogPosts.post);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [commentAdded, setCommentAdded] = useState(false);

  useEffect(() => {
    console.log('Fetching Again');
    dispatch(fetchBlog(id));
  }, [id, dispatch, commentAdded]);
  
  return (
    <React.Fragment>
      <Navbar />
      {
        !post? <CircularProgress /> : (
        <Container maxWidth="md">
          <Paper elevation={6} sx={{ p: 10, pt:8 , borderRadius: 10, mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item md={12} xs={12}>
                <Typography variant="h3" align="center" component="h2" fontFamily="cursive">{post.title}</Typography>
                <Typography gutterBottom align="center" variant="h6" fontStyle="oblique" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
              </Grid>
              <Grid item md={2}></Grid>
              <Grid item md={8} xs={12}>
                <img width="100%" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
              </Grid>
              <br/>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom variant="body1" align="justify" component="p">{post.message}</Typography>
                <Typography variant="h6">Created by: {post.name} </Typography>
                <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <CommentSection commentAdded={commentAdded} setCommentAdded={setCommentAdded} post={post}/>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        )
      }
    </React.Fragment>
  )
}

export default SingleBlogPost
