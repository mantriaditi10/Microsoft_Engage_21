import React, { useState } from 'react'
import { Grid, Box, Typography, Paper, Button, IconButton, OutlinedInput, InputAdornment } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const sidebar = {
  title: 'FILTER THE CONTENT',
  description:
    'Discover more of what matters to you!',
  tags: [
    { title: 'Assignment', },
    { title: 'Machine Learning', },
    { title: 'Cryptography', },
    { title: 'Artificial Intelligence', },
    { title: 'Web Development', },
    { title: 'College Events', },
    { title: 'Blockchain', },
    { title: 'Mental Health', },
    { title: 'Android Development', },
    { title: 'Books', },
    { title: 'Philosophy', },
    { title: 'Data Sceince', },
    { title: 'Show All', },
  ],
};

const FilterSideBar = (props) => {
  const setFilters = props.setFilters;
  const filters = props.filters;
  const setHashtag = props.setHashtag;
  const [searchTag, setSearchTag] = useState('');

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 4,
          borderRadius: 1,
          m: 2,
          mt: 3,
          pt: 2,
          pb: 2,
        }}
      >
        <Paper elevation={0}>
          <Typography fontFamily="cursive" align="center" variant="h5" gutterBottom sx={{ p: 2, bgcolor: "ActiveCaption" }}>
            SEARCH BY HASHTAG
          </Typography>
        </Paper>
        <Paper elevation={0} sx={{ display:'flex', p: 1 }}>
          <OutlinedInput
            sx={{ ml: 2 }}
            fullWidth
            size='small'
            startAdornment={<InputAdornment position="start">#</InputAdornment>}
            onChange={(e) => setSearchTag(e.target.value)}
          />
          <IconButton color="primary" onClick={() => setHashtag(searchTag)}><SearchIcon /></IconButton>
          <IconButton color="primary" onClick={() => setHashtag('')}><ClearIcon /></IconButton>
        </Paper>
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 4,
          borderRadius: 1,
          m: 2,
          mt: 0,
          pt: 2,
          pb: 2,
        }}
      >
        <Paper elevation={0}>
          <Typography fontFamily="cursive" align="center" variant="h5" gutterBottom sx={{ p: 2, bgcolor: "ActiveCaption" }}>
            {sidebar.title}
          </Typography>
          <Typography fontStyle="oblique" align="center">{sidebar.description}</Typography>
        </Paper>
        <Typography align="center" variant="h6" gutterBottom sx={{ mt: 1 }}>
          CATEGORIES
        </Typography>
        <Typography align="center" sx={{ m: 1 }}>
          {sidebar.tags.map((category) => (
            <Button
              key={uuidv4()}
              size="small"
              onClick={() => setFilters({...filters, category: category.title})}
              color="primary"
              variant={filters.category === category.title ? 'contained' : 'outlined'}
            >
              {category.title}
            </Button>
          ))}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom sx={{ mt: 1 }}>
          OTHER FILTERS
        </Typography>
        <Typography align="center" sx={{ m: 1 }}>
          <Button
            size="small"
            color="primary"
            variant={filters.other === 'Most Liked' ? 'contained' : 'outlined'}
            onClick={() => setFilters({...filters, other: 'Most Liked'})}
          >
            MOST LIKED
          </Button>
          <Button
            size="small"
            color="primary"
            variant={filters.other === 'Most Bookmarked' ? 'contained' : 'outlined'}
            onClick={() => setFilters({...filters, other: 'Most Bookmarked'})}
          >
            MOST BOOKMARKED
          </Button>
          <Typography align="center" sx={{ m: 1 }}>
            <Button
              size="small"
              color="primary"
              variant={filters.other === 'Newest First' ? 'contained' : 'outlined'}
              onClick={() => setFilters({...filters, other: 'Newest First'})}
            >
              NEWEST FIRST
            </Button>
            <Button
              size="small"
              color="primary"
              variant={filters.other === 'Oldest First' ? 'contained' : 'outlined'}
              onClick={() => setFilters({...filters, other: 'Oldest First'})}
            >
              OLDEST FIRST
            </Button>
          </Typography>
        </Typography>
      </Box>
    </Grid>
  )
}

export default FilterSideBar
