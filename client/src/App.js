import React from 'react'
import Auth from './components/Auth/Auth'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import CreatePost from './components/BlogPost/PostForm/CreatePost';
import SingleBlogPost from "./components/BlogPost/SingleBlog/SingleBlogPost";
import MainPage from './components/BlogPost/BlogPage/MainPage';

const App = () => {
    return(    
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/blogs' element={<MainPage />} />
                <Route path='/blogs/createPost' element={<CreatePost />} />
                <Route path='/blogs/:id' element={<SingleBlogPost />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App