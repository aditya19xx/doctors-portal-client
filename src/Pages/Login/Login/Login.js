import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import loginimg from '../../../images/login.png';

const Login = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src={loginimg} alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Login;