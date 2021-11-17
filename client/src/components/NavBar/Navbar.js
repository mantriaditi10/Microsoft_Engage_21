import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppBar, CssBaseline, Toolbar, Button, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import * as actionType from '../../constants/actionTypes'
import { Link } from "react-router-dom";

const theme = createTheme();

const Navbar = () => {
    //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        //setUser(null);
        navigate('/');
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Button sx={{ mr: 2 }} color="inherit" variant="text" size="large" component={Link} to="/blogs">BLOGSPOT</Button>
                    <Button sx={{ mr: 2 }} color="inherit" variant="text" size="large" href="#">COLLABORATIONS</Button>
                    <Typography align="right" flexGrow="1" noWrap> 
                        <Button 
                            endIcon={<LogoutIcon/>} 
                            sx={{ mr: 2 }} 
                            color="inherit" 
                            variant="outlined" 
                            size="small" 
                            href="#"
                            onClick={logout}
                        >
                            LOGOUT
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>   
    )
}

export default Navbar
