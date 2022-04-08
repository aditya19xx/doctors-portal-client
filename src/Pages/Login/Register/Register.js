import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginimg from '../../../images/login.png';
import { Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Register = () => {
    const [loginData,setLoginData] = useState({})
    const handleOnChange = e => {
       const  field = e.target.name;
       const  value = e.target.value;
       const newLoginData = {...loginData}
       newLoginData[field] = value;
       setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
       alert('Registering')
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{mt:10}} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom> Register </Typography>
         <form onSubmit={handleOnSubmit}>
         <TextField
          sx={{width:'75%', m:1}} 
          id="standard-basic" 
          label="Your Email" 
          name="email"
          onChange={handleOnChange}
          variant="standard" 
          />
          <TextField 
          sx={{width:'75%', m:1}}
          id="standard-basic" 
          label="Your Password" 
          name="password"
          onChange={handleOnChange}
          type="password"
          variant="standard" 
          />
          <TextField 
          sx={{width:'75%', m:1}}
          id="standard-basic" 
          label="Re-Enter Your Password" 
          name="password2"
          onChange={handleOnChange}
          type="password"
          variant="standard" 
          />
          <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Register</Button>
          <NavLink style={{textDecoration: 'none' }} to="/login">
          <Button  variant="text">Already Registered? Click here to Login</Button>
          </NavLink>
         </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src={loginimg} alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Register;