import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Input from './Input';
import { Avatar, TextField, Button, CssBaseline, Paper, Grid, Typography, Box } from '@mui/material';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const theme = createTheme();

const Auth = () => {

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode = () => {
    setError("");
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, navigate, setError));
    } else {
      dispatch(signin(form, navigate, setError));
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'confirmPassword') {

    }
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ mb:2, mt:4, height: '90vh' }}>
        <CssBaseline />
        <Grid item md={1} />
        <Grid
          item
          component={Paper}
          elevation={6}
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: 'url(https://res.cloudinary.com/ms-engage-21/image/upload/v1637847297/login_vlfvmb.jpg)',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ mb: 2 }} fontFamily="fantasy" component="h1" variant="h5">
              {isSignup ? 'Sign up' : 'Sign in'}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {
                  isSignup && 
                  (<Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />)
                }
                {
                  isSignup && 
                  (<Input name="lastName" label="Last Name" handleChange={handleChange} half />)
                }
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Grid item xs={12}>
                  <TextField
                    sx={{ m: 1 }}
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    fullWidth
                    required
                    autoFocus
                    variant="outlined"
                    type='password'
                  />
                </Grid>
              </Grid>
              <Typography sx={{ ml: 1, color: 'error.main', fontStyle: 'italic' }}>
                {error}
              </Typography>
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ ml: 1, mt: 2, mb: 2 }}>
                {isSignup ? 'Sign Up' : 'Sign In'}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button onClick={switchMode}>
                    {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Auth;