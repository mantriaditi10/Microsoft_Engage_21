import React, { useState, useEffect } from 'react';
import Navbar from '../../NavBar/Navbar';
import Posts from './Posts';
import FilterSideBar from './FilterSideBar';
import { Button, Typography, Box, Container, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBlogPosts } from '../../../actions/blogPosts'

const MainPage = (props) => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('Show All');
    const page = props.page;
    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch, category]);

    return (
        <React.Fragment>
            <Navbar />
            <Box
                sx={{
                    bgcolor: 'background.paper',
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
                        { page === 'blogs'? 'BLOGSPOT' : ' BOOKMARKS' }
                    </Typography>
                    <Typography fontFamily="fantasy" variant="h5" align="center" color="text.secondary" paragraph>
                        {page === 'blogs' ? 'A place to explore ideas, speak your mind and network with your peers.': 'Find your bookmarked posts here.'}
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button component={Link} to="/blogs/createPost" variant="contained">Create your own Post</Button>
                        {page === 'blogs'? <Button component={Link} to="/blogs/bookmarks" variant="outlined">Bookmarked Posts</Button> 
                        : <Button component={Link} to="/blogs" variant="outlined">All Posts</Button>}

                    </Stack>
                </Container>
            </Box>
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{mt: 3}}>
                    <Posts page={page} category={category}/>
                    <FilterSideBar category={category} setCategory={setCategory}/>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default MainPage
