import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, InputLabel, MenuItem, Select, Chip, Button } from '@mui/material'
import { v4 as uuidv4 } from "uuid";
import { createBlogPost } from '../../actions/blogPosts';

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
        <div>
            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit}>
                <TextField name="title" label="Title" onChange={handleChange}/>
                <FormControl fullWidth>
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
                <TextField label="Tags" onChange={handleTagChange}/>
                <Button onClick={handleAddChip}>Add tags</Button>
                <ul>
                    {chipData.map((tag) => {
                        return(
                        <li key={uuidv4()}><Chip label={tag}/></li>
                        );
                    })}
                </ul>
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
                <TextField label="Message" rows="10" name="message" onChange={handleChange}/>
                <Button type="submit">POST</Button>
            </form>
        </div>
    )
}

export default CreatePost
