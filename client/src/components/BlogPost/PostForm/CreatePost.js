import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, InputLabel, MenuItem, Select, Chip, Button, Box, Container, Typography, Paper, Grid, ListItem } from '@mui/material'
import { v4 as uuidv4 } from "uuid";
import { createBlogPost } from '../../../actions/blogPosts';
import Navbar from '../../NavBar/Navbar';

const initialState = { title: '', category: '', message: '', tags: [], selectedFile: '' }

const CreatePost = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postData, setPostData] = useState(initialState);
    const [chipData, setChipData] = useState([]);
    const [tag, setTag] = useState([]);
    const [image, setImage] = useState("");
    const [imageName ,setImageName] = useState("");

    useEffect(() => {
        console.log(imageName);
      },[imageName]);

    const handleAddChip = () => {
        setChipData([...chipData, ...tag]);
        setPostData({ ...postData, tags: postData.tags.concat(tag) });
    };
    
    const handleTagChange = (e) => {
        setTag(e.target.value.split(','));
    }

    const handleChange = (e) => {
        setPostData({...postData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","engage-app")
        data.append("cloud_name","ms-engage-21")
        fetch("https://api.cloudinary.com/v1_1/ms-engage-21/image/upload",{
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.url);
            const finalPost = {
                ...postData, selectedFile: data.url
            }
            console.log(finalPost);
            dispatch(createBlogPost(finalPost, navigate));
        })
        .catch(error => console.log(error));
    }

    return (
        <React.Fragment>
            <Navbar />
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    m: 1,
                    pt: 2,
                    pb: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        component="h1"
                        fontFamily="cursive"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        WRITE A POST
                    </Typography>
                    <Typography fontFamily="fantasy" variant="h5" align="center" color="text.secondary" paragraph>
                        Tell your story to the world..!
                    </Typography>
                </Container>
            </Box>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <form onSubmit={handleSubmit}>
                    <Paper 
                        variant="outlined"
                        sx={{
                            my: { xs: 3, md: 6 },
                            p: { xs: 2, md: 3 }
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    name="title" 
                                    label="Title" 
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel>Category</InputLabel>
                                    <Select label="Category" name="category" onChange={handleChange} value={postData.category}>
                                        <MenuItem value="Machine Learning">Machine Learning</MenuItem>
                                        <MenuItem value="Cryptography">Cryptography</MenuItem>
                                        <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
                                        <MenuItem value="Web Development">Web Development</MenuItem>
                                        <MenuItem value="College Events">College Events</MenuItem>
                                        <MenuItem value="Blockchain">Blockchain</MenuItem>
                                        <MenuItem value="Mental Health">Mental Health</MenuItem>
                                        <MenuItem value="Android Developement">Android Developement</MenuItem>
                                        <MenuItem value="Books">Books</MenuItem>
                                        <MenuItem value="Philosophy">Philosophy</MenuItem>
                                        <MenuItem value="Data Science">Data Science</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Tags" 
                                    onChange={handleTagChange}
                                    required
                                    fullWidth
                                    autoFocus
                                />
                                <Button sx={{ m:0 }} onClick={handleAddChip}>Add tags</Button>
                            </Grid>
                            <Grid item sx={{ m:0 }}>
                                <Paper
                                    sx={{
                                        display: 'flex',
                                        listStyle: 'none',
                                        m:0,
                                        p:0
                                    }}
                                    component="ul"
                                    elevation="0"
                                >
                                    {chipData.map((tag) => {
                                        return(
                                        <ListItem key={uuidv4()}>
                                            <Chip label={tag}/>
                                        </ListItem>
                                        );
                                    })}   
                                </Paper>
                            </Grid>
                            <Grid item md={12}>
                                <div>
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                        onChange={(e)=>{
                                            setImageName(e.target.files[0].name);
                                            setImage(e.target.files[0]);
                                        }}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        {imageName}
                                    </label>
                                </div>
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    required
                                    fullWidth
                                    autoFocus 
                                    multiline
                                    rows={15}
                                    label="Message"
                                    name="message" 
                                    onChange={handleChange}     
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Button variant="contained" fullWidth type="submit">POST</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default CreatePost
