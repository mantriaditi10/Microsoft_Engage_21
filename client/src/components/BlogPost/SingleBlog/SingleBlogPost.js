import React, { useState, useEffect } from 'react'
import Navbar from '../../NavBar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchBlog } from "../../../actions/blogPosts";
import { Paper, CircularProgress, Container, Grid, Typography, Switch, FormGroup, FormControlLabel, Divider } from '@mui/material';
import moment from 'moment';
import CommentSection from './CommentSection';

const SingleBlogPost = () => {
  const post = useSelector(state => state.blogPosts.post);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [commentAdded, setCommentAdded] = useState(false);

  var myTimeout;
  function myTimer() {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
      myTimeout = setTimeout(myTimer, 10000);
  }
  const handleSwitchChange = (e) => {
    if(e.target.checked) {
      window.speechSynthesis.cancel();
        myTimeout = setTimeout(myTimer, 10000);
        var toSpeak = post.message;
        var utt = new SpeechSynthesisUtterance(toSpeak);
        utt.onend =  function() { clearTimeout(myTimeout); }
        window.speechSynthesis.speak(utt);
    }
    else {
      const synth = window.speechSynthesis;
      synth.cancel();
    }
  }

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
                <Typography variant="h3" align="center" component="h2" fontFamily="cursive">
                  {post.title}
                </Typography>
                <Typography 
                  gutterBottom 
                  align="center" 
                  variant="h6" 
                  fontStyle="oblique" 
                  color="textSecondary" 
                  component="h2"
                >
                  In {post.category} - {post.tags.map((tag) => `#${tag} `)}
                </Typography>
              </Grid>
              <Grid item md={2}></Grid>
              <Grid item md={8} xs={12}>
                <img width="100%" 
                  src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                  alt={post.title} 
                />
              </Grid>
              <br/>
              <Grid item md={12} xs={12}>
                <Divider />
                <FormGroup>
                  <FormControlLabel control={
                    <Switch
                      onChange={handleSwitchChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                      color="primary"
                    />}
                    label={<Typography color="Background" variant="button">Read Aloud</Typography>}
                  />
                </FormGroup>
                <Divider />
                {post.category === 'Assignment' ? 
                  <pre>
                    <Typography align="justify" sx={{ mt: 1 }} gutterBottom variant="body1" component="p">
                      {post.message}
                    </Typography>
                  </pre> 
                  :
                  <Typography sx={{ mt: 1 }} gutterBottom variant="body1" component="p">
                    {post.message}
                  </Typography>
                }
                
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
