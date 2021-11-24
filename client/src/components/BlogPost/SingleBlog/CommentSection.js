import React, { useState } from 'react'
import { Divider, Typography, TextField, Button, ListItem, ListItemAvatar, Avatar, ListItemText, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { commentPost } from "../../../actions/blogPosts";

const CommentSection = (props) => {
  const post = props.post;
  const setCommentAdded = props.setCommentAdded;
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleComment = () => {
    const commentValue = `${user.result.name}: ${comment}`;
    dispatch(commentPost(post._id, commentValue));
    setComment('');
    setCommentAdded(true);
  }

  return (
    <React.Fragment>
      <Divider sx={{ margin: '10px 0' }} />
      <Typography fontFamily="cursive" gutterBottom variant="h6">COMMENTS / FEEDBACKS</Typography>
      <Divider sx={{ margin: '10px 0' }} />
      {!post.comments? <CircularProgress /> : (post.comments.map((c, i) => (
        <ListItem key={i} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="/broken-image.jpg"/>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography>
                {c.split(': ')[0]}
              </Typography>
            }
            secondary={
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {c.split(':')[1]}
              </Typography>
            }
          />
        </ListItem>
      )))}
      <Divider  sx={{mt: 1}}/>
      <Typography sx={{ m: 1 }} gutterBottom variant="body1">Leave a comment / feedback: </Typography>
      <TextField fullWidth rows={2} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
      <br />
      <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
        Comment
      </Button>
    </React.Fragment>
  )
}

export default CommentSection
