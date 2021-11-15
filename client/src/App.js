import React from 'react'
import Auth from './components/Auth/Auth'
import TestHome from './components/TestHome'
//import { Container } from '@mui/material'
import { BrowserRouter , Routes, Route } from 'react-router-dom';


const App = () => {
    return(    
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<Auth/>} />
                <Route path='/home' element={<TestHome/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App