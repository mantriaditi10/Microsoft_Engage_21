import React from 'react'
import { Grid, Box, Typography } from '@mui/material'


const posts = [
    {
        title: '',
        message: '',
        category: '',
        name: '',
        tags: [''],
        selectedFile: '',
        likes: [1,1,1],
        createdAt: ''
    },
]

const Posts = () => {
    
    return (
        <Grid item xs={12} md={8}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    m:2,
                    mt: 0,
                    pt: 2,
                    pb: 2,
                }}
            >
                <Typography>List of Posts</Typography>
            </Box>
        </Grid>
    )
}

export default Posts
