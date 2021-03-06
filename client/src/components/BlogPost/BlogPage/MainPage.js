import React, { useState, useEffect } from 'react';
import Navbar from '../../NavBar/Navbar';
import Posts from './Posts';
import FilterSideBar from './FilterSideBar';
import { Button, Typography, Box, Container, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBlogPosts } from '../../../actions/blogPosts'

// Component Nesting: MainPage -> (Posts -> Post , FilterSideBar)

const initialFilters = {
  category: 'Show All',
  other: 'Newest First'
}

const MainPage = (props) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(initialFilters);
  const [hashtag, setHashtag] = useState('');
  const page = props.page;

  useEffect(() => {
    console.log('Fetching Posts');
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  useEffect(() => {
    console.log(`Filters selected: ${filters}`);
  }, [filters])

  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url(https://res.cloudinary.com/ms-engage-21/image/upload/v1638004606/WhatsApp_Image_2021-11-27_at_2.45.57_PM_yyvsdw.jpg)',
          backgroundSize: 'cover',
          boxShadow: 1,
          borderRadius: 2,
          m: 1,
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            fontFamily="cursive"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {page === 'blogs' ? 'BLOGSPOT' : ' BOOKMARKS'}
          </Typography>
          <Typography fontFamily="monospace" variant="h5" align="center" color="text.secondary" paragraph>
            {page === 'blogs' ? 'A place to explore ideas, speak your mind and network with your peers.' 
              : 'Find your bookmarked posts here.'}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button component={Link} to="/blogs/createPost" variant="contained">Create your own Post</Button>
            {page === 'blogs' ? 
                <Button component={Link} to="/blogs/bookmarks" variant="contained">Bookmarked Posts</Button>
              : <Button component={Link} to="/blogs" variant="contained">All Posts</Button>
            }
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ mt: 1 }}>
          <FilterSideBar setHashtag={setHashtag} filters={filters} setFilters={setFilters} />
          <Posts hashtag={hashtag} page={page} filters={filters} />
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default MainPage
