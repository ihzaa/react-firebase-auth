import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import { auth } from '../configs/firebase';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{ mr: 'auto' }}>
                        APP AWE
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout}></Logout>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
