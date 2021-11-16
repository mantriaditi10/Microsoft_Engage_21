import React from 'react'
import Auth from './components/Auth/Auth'
//import { Container } from '@mui/material'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import CreatePost from './components/BlogPost/CreatePost';
import SingleBlogPost from "./components/BlogPost/SingleBlogPost";

const App = () => {
    return(    
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<Auth/>} />
                <Route path='/blogs' element={<CreatePost/>} />
                <Route path='/blogs/:id' element={<SingleBlogPost />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App