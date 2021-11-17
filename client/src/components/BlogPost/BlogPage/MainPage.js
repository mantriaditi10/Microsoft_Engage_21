import React from 'react';
import Navbar from '../../NavBar/Navbar';
import Posts from './Posts';
import FilterSideBar from './FilterSideBar';
import { Button, Typography, Box, Container, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const MainPage = () => {
    console.log(JSON.parse(localStorage.getItem('profile')));
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
                        BLOGSPOT
                    </Typography>
                    <Typography fontFamily="fantasy" variant="h5" align="center" color="text.secondary" paragraph>
                        A place to explore ideas, speak your mind and network with your peers.
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button component={Link} to="/blogs/createPost" variant="contained">Create your own Post</Button>
                        <Button variant="outlined">Bookmarked Posts</Button>
                    </Stack>
                </Container>
            </Box>
            <Grid container spacing={2} sx={{mt: 3}}>
                <Posts />
                <FilterSideBar />
            </Grid>
        </React.Fragment>
    )
}

export default MainPage
