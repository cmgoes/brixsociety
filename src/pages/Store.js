import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Link
} from '@mui/material';
import Header from '../components/Header';
import BackgroundImage from '../assets/images/background.png';

const useStyles = makeStyles(theme => ({
    
}));

const Store = () => {
  const classes = useStyles();
  return (
    <Box sx={{
      background: 'rgba(0,0,0,0.95)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header />
      <Box
        component={Container}
        sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1',
        py: '20px'
      }}>
          
      </Box>
    </Box>
  )
}

export default Store;