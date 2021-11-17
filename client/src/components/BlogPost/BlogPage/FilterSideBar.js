import React from 'react'
import { Grid, Box, Typography, Paper, Button } from '@mui/material'
import { v4 as uuidv4 } from "uuid";

const sidebar = {
    title: 'FILTER THE CONTENT',
    description:
      'Discover more of what matters to you!',
    tags: [
      { title: 'Machine Learning',  },
      { title: 'Crytography',  },
      { title: 'Artificial Intelligence',  },
      { title: 'Web Development', },
      { title: 'College Events',  },
      { title: 'Blockchain',  },
      { title: 'Mental Health',  },
      { title: 'Android Development',  },
      { title: 'Books',  },
      { title: 'Philosophy',  },
      { title: 'Data Sceincemagicmaker@gmail.com',  },
      { title: 'Show All',  },
    ],
};

const FilterSideBar = () => {
    
    return (
        <Grid item xs={12} md={4}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    m: 2,
                    mt: 0,
                    pt: 2,
                    pb: 2,
                }}
            >
            <Paper elevation={0}>
                <Typography fontFamily="cursive" align="center" variant="h5" gutterBottom sx={{ p:2, bgcolor: "ActiveCaption" }}>
                    {sidebar.title} 
                </Typography>
                <Typography fontStyle="oblique" align="center">{sidebar.description}</Typography>
            </Paper>
            <Typography align="center" variant="h6" gutterBottom sx={{ mt: 1 }}>
                CATEGORIES
            </Typography>
            <Typography align="center" sx={{ m: 1 }}>
                {sidebar.tags.map((category) => (
                    <Button key={uuidv4()} size="small" variant="outlined" color="primary" >
                        {category.title}
                    </Button>
                ))}
            </Typography>
            </Box>
        </Grid>
    )
}

export default FilterSideBar
